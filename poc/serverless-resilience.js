/*
 * PoC: Lambda con patrón Circuit Breaker y fallback para originación digital
 *
 * Propósito:
 * - Demostrar resiliencia en un entorno serverless bajo condiciones de fallo en servicios externos.
 * - El candidato debe implementar la lógica de fallback y ajustar los umbrales del circuit breaker
 *   para cumplir con el ASR de "tolerancia a fallos de red de al menos 1 hora".
 *
 * Restricciones:
 * - Máximo 150 líneas de código.
 * - Solo dependencias declaradas en package.json local (AWS SDK v3).
 * - No invocar servicios reales (usar stubs).
 */

const { CircuitBreaker } = require('@aws-sdk/util-circuit-breaker');
const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');

// Configuración del Circuit Breaker
const circuitBreaker = new CircuitBreaker({
  failureThreshold: 5,      // Número de fallos antes de abrir el circuito
  successThreshold: 2,      // Número de éxitos para cerrar el circuito
  timeoutDuration: 30000,   // Tiempo en ms antes de intentar cerrar el circuito
  halfOpenAfter: 60000      // Tiempo en ms antes de pasar a semi-abierto
});

// Cliente DynamoDB (stub para PoC)
const ddbClient = new DynamoDBClient({ region: 'us-east-1' });
const TABLE_NAME = 'SolicitudesOriginacion';

// Servicio externo de validación de identidad (stub)
const validarIdentidad = async (documento, biométricos) => {
  // Simulación de fallo aleatorio para probar el Circuit Breaker
  if (Math.random() < 0.3) {
    throw new Error('Servicio de validación no disponible');
  }

  // Simulación de respuesta exitosa
  return {
    estado: 'VALIDADO',
    puntuacion: Math.floor(Math.random() * 100)
  };
};

// Función principal del Lambda
exports.handler = async (event) => {
  const { clienteId, documento, biométricos } = JSON.parse(event.body);

  try {
    // Validar identidad con Circuit Breaker
    const resultadoValidacion = await circuitBreaker.execute(
      async () => await validarIdentidad(documento, biométricos),
      async () => {
        // TODO: Implementar lógica de fallback cuando el circuito está abierto
        // Requerimientos:
        // 1. Registrar el intento fallido en DynamoDB con estado "FALLBACK"
        // 2. Devolver una respuesta con estado "EN_VALIDACION" y mensaje adecuado
        // 3. Cumplir con el ASR de tolerancia a fallos de 1 hora
        console.log('Circuit breaker activado: implementar fallback');
        return { estado: 'EN_VALIDACION', mensaje: 'Validación pendiente por fallo en servicio' };
      }
    );

    // Registrar solicitud en DynamoDB
    const params = {
      TableName: TABLE_NAME,
      Item: marshall({
        solicitudId: Date.now().toString(),
        clienteId,
        estado: resultadoValidacion.estado,
        fechaCreacion: new Date().toISOString(),
        datosValidacion: resultadoValidacion
      })
    };

    await ddbClient.send(new PutItemCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify({
        mensaje: 'Solicitud procesada',
        estado: resultadoValidacion.estado,
        solicitudId: params.Item.solicitudId.S
      })
    };
  } catch (error) {
    console.error('Error procesando solicitud:', error);

    // TODO: Implementar manejo de errores con retry o estrategia alternativa
    return {
      statusCode: 500,
      body: JSON.stringify({
        mensaje: 'Error procesando la solicitud',
        error: error.message
      })
    };
  }
};