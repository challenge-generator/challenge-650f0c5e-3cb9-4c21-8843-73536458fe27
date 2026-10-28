# Atributos de Calidad y Escenarios

## Contexto
El sistema de originación digital del banco debe soportar operaciones críticas en múltiples regiones con altos estándares de rendimiento, disponibilidad y seguridad. Los siguientes ASRs (Requisitos Arquitectónicamente Significativos) son mandatorios:

| ASR | Valor Medible |
|-----|---------------|
| Disponibilidad | 99.99% en horario comercial (Lunes a Viernes, 8:00 AM - 6:00 PM)
| Rendimiento | 50.000 TPS con p99 < 100 ms |
| Resiliencia | Tolerancia a fallos de red de al menos 1 hora sin pérdida de datos |
| Seguridad | Cumplimiento PCI DSS 4.0 (todos los controles aplicables) |
| Escalabilidad | Capacidad de escalar horizontalmente para manejar picos de tráfico del 200% |

## Escenarios de Calidad
Completa la tabla con escenarios de calidad siguiendo el formato ISO 25010 (fuente, estímulo, artefacto, entorno, respuesta, medida).

### Tabla de Escenarios
| Fuente | Estímulo | Artefacto | Entorno | Respuesta | Medida |
|--------|----------|-----------|---------|-----------|--------|
| Cliente | Inicia solicitud de préstamo | API de originación | Tráfico pico (50.000 TPS) | Sistema procesa la solicitud | p99 < 100 ms |
| > Preguntas guía: ¿Qué actores externos podrían generar estímulos? ¿Qué artefactos del sistema se ven afectados? ¿Cómo responde el sistema bajo condiciones normales vs. pico?
| 
| Sistema de Pagos | Fallo en conexión | Servicio de validación de capacidad de pago | Operación normal | Servicio degrada funcionalidad sin perder datos | Tiempo de recuperación < 1 hora |
| > Preguntas guía: ¿Qué mecanismos de resiliencia se activan durante un fallo? ¿Cómo se garantiza la consistencia de los datos?
| 
| Proveedor Externo | Respuesta lenta (latencia > 500 ms) | Servicio de verificación de identidad | Tráfico moderado | Sistema usa caché local o fallback | Porcentaje de éxito > 95% |
| > Preguntas guía: ¿Qué estrategias de mitigación existen para dependencias externas? ¿Cómo se priorizan las respuestas?
| 
| Agente Bancario | Envía solicitud fraudulenta | API de originación | Horario comercial | Sistema rechaza la solicitud y alerta al equipo de seguridad | Tasa de detección > 99% |
| > Preguntas guía: ¿Qué controles de seguridad se aplican? ¿Cómo se registran y escalan los incidentes?
| 
| Base de Datos Principal | Sobrecarga (CPU > 90%) | Repositorio de solicitudes | Tráfico pico | Sistema escala horizontalmente y balancea carga | Tiempo de escalado < 2 minutos |
| > Preguntas guía: ¿Qué patrones de escalabilidad se implementan? ¿Cómo se monitorea el rendimiento?

## Drivers de Calidad
- **Disponibilidad**: El sistema debe estar disponible durante el horario comercial con redundancia multi-región.
- **Rendimiento**: Las transacciones deben completarse en menos de 100 ms incluso en picos de tráfico.
- **Resiliencia**: El sistema debe recuperarse de fallos sin pérdida de datos y con mínima degradación.
- **Seguridad**: Cumplimiento estricto de PCI DSS 4.0, incluyendo cifrado de datos en tránsito y reposo.
- **Escalabilidad**: Capacidad de escalar dinámicamente para manejar aumentos repentinos de demanda.

> Preguntas guía:
> - ¿Qué tácticas arquitectónicas usarías para garantizar cada driver?
> - ¿Cómo priorizarías estos drivers en caso de conflicto?
> - ¿Qué métricas usarías para validar el cumplimiento de cada ASR?