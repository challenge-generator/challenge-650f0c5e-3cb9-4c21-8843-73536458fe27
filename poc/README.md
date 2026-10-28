# PoC: Resiliencia en Originación Digital

## Propósito
Este PoC demuestra cómo implementar resiliencia en un entorno serverless para la originación de productos financieros.
El candidato debe completar la lógica de fallback y ajustar la configuración del circuit breaker para cumplir con los ASRs.

## Escenario
- **ASR**: Tolerancia a fallos de red de al menos 1 hora.
- **Situación**: El servicio de validación de identidad falla intermitentemente.
- **Objetivo**: Implementar un patrón de resiliencia que permita continuar procesando solicitudes incluso cuando el servicio externo no está disponible.

## Qué se espera que resuelva el candidato
1. **Implementar la lógica de fallback** en el Circuit Breaker cuando el circuito esté abierto.
   - Registrar el intento fallido en DynamoDB con estado "FALLBACK".
   - Devolver una respuesta al cliente indicando que la validación está pendiente.
   - Asegurar que el sistema pueda recuperar las validaciones pendientes cuando el servicio vuelva a estar disponible.

2. **Ajustar los umbrales del Circuit Breaker** para cumplir con el ASR de tolerancia a fallos.
   - Evaluar si los valores actuales (`failureThreshold`, `timeoutDuration`, `halfOpenAfter`) son adecuados.
   - Proponer cambios para garantizar que el sistema tolere fallos de red durante 1 hora sin degradar la experiencia del usuario.

3. **Implementar manejo de errores** con estrategia de retry o alternativa para los casos no cubiertos por el Circuit Breaker.
   - Proponer una estrategia para manejar errores que no sean fallos temporales de red (ej.: errores de validación).

## Restricciones
- No modificar la estructura básica del Lambda ni las firmas de las funciones.
- Usar únicamente las dependencias declaradas en el `package.json` local.
- Mantener el código autocontenido (no importar archivos fuera de `poc/`).

## Ejecución
Para probar el PoC:
1. Instalar dependencias:
   ```bash
   cd poc
   npm install
   ```
2. Ejecutar el Lambda localmente (requiere AWS SAM o similar):
   ```bash
   sam local invoke OriginacionLambda -e event.json
   ```
3. Simular fallos ajustando la probabilidad en `validarIdentidad()` (línea 25).

## Entregables
- Código completado en `serverless-resilience.js`.
- Justificación de los cambios en umbrales del Circuit Breaker en el ADR correspondiente.
- Propuesta de estrategia de manejo de errores en la sección de riesgos y mitigaciones.