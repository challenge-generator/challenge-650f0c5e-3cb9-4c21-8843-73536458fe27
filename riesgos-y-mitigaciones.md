# Matriz de Riesgos y Mitigaciones

## Contexto
La solución de originación digital para el banco multi-región debe cumplir con los siguientes ASRs críticos:

- **Disponibilidad**: 99.99% (máximo 52.56 minutos de downtime anual).
- **Rendimiento**: 50.000 TPS con p99 < 100 ms.
- **Resiliencia**: Tolerancia a fallos de red de al menos 1 hora.
- **Seguridad**: Cumplimiento con PCI DSS para manejo de datos sensibles.
- **Escalabilidad**: Capacidad de manejar picos de tráfico 3x sin degradación.

El sistema interactúa con múltiples actores externos (Sistema de Pagos, Proveedores de KYC, Core Bancario) y debe operar en un entorno multi-región con alta latencia variable.

## Matriz de Riesgos

| Riesgo                                                                 | Probabilidad (Alta/Media/Baja) | Impacto (Alto/Medio/Bajo) | Tratamiento (Mitigar/Aceptar/Transferir/Evitar) |
|-----------------------------------------------------------------------|-------------------------------|--------------------------|-----------------------------------------------|
| Fallo en la integración con el Sistema de Pagos durante tráfico pico |                               |                          |                                               |
| Degradación del rendimiento por alta latencia en red multi-región    |                               |                          |                                               |
| Incumplimiento de PCI DSS por vulnerabilidades en el flujo de datos  |                               |                          |                                               |
| Pérdida de datos por fallos en la replicación entre regiones          |                               |                          |                                               |
| Sobrecarga del Core Bancario por requests concurrentes               |                               |                          |                                               |
| Fallo en cascada por dependencia de un único proveedor de KYC        |                               |                          |                                               |
| Inconsistencia en datos entre regiones por problemas de sincronización|                               |                          |                                               |
| Ataques DDoS que saturen la capacidad de procesamiento               |                               |                          |                                               |
| Errores en la lógica de validación de clientes durante originación   |                               |                          |                                               |
| Fallo en la estrategia de retry que genere duplicación de transacciones|                               |                          |                                               |

## Preguntas Guía
1. Para cada riesgo identificado, ¿cuál es la probabilidad (Alta/Media/Baja) y el impacto (Alto/Medio/Bajo) según el contexto del caso?
2. ¿Qué estrategia de tratamiento (Mitigar/Aceptar/Transferir/Evitar) aplicarías para cada riesgo y por qué?
3. ¿Qué controles o medidas concretas implementarías para mitigar los riesgos de alto impacto y alta probabilidad?
4. ¿Cómo priorizarías la implementación de las mitigaciones en función de los ASRs y los recursos disponibles?
5. ¿Qué riesgos residuales quedarían después de aplicar las mitigaciones y cómo los gestionarías?

## Métricas de Seguimiento
- **Tiempo medio de detección (MTTD)**: Objetivo < 5 minutos.
- **Tiempo medio de recuperación (MTTR)**: Objetivo < 30 minutos.
- **Número de incidentes críticos por trimestre**: Objetivo ≤ 2.
- **Porcentaje de disponibilidad**: Objetivo ≥ 99.99%.
- **Latencia p99 en operaciones críticas**: Objetivo < 100 ms.

> **Nota**: Los valores de probabilidad e impacto deben ser justificados con datos del caso (ej. historial de fallos, pruebas de carga, auditorías de seguridad).