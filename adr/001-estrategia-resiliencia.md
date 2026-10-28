# ADR 001: Estrategia de Resiliencia Multi-Región

Estado: Propuesto
Fecha: 2024-10-22

## Contexto

El sistema de originación digital del banco opera en múltiples regiones geográficas con el objetivo de garantizar alta disponibilidad y tolerancia a fallos. Actualmente, el sistema experimenta caídas regionales que afectan la disponibilidad global durante cortes de red o fallos en una zona de disponibilidad (AZ). Los ASRs requieren:

- **Disponibilidad**: 99.99% (4 nines) con recuperación automática en menos de 5 minutos.
- **Resiliencia**: Tolerancia a fallos de red de al menos 1 hora sin degradación del servicio.
- **Rendimiento**: 50.000 TPS con p99 < 100 ms en condiciones normales y durante fallos.
- **Escalabilidad**: Capacidad de manejar picos de tráfico del 200% sin intervención manual.

El sistema actual utiliza una arquitectura activa-pasiva con replicación síncrona entre regiones, lo que introduce latencia y limita la escalabilidad horizontal. Además, la replicación de datos entre regiones no está optimizada para manejar conflictos durante fallos de red.

## Fuerzas

- **Latencia inter-regional**: La replicación síncrona entre regiones aumenta el tiempo de respuesta en un 30-50%.
- **Consistencia eventual vs. fuerte**: La consistencia fuerte limita la escalabilidad y la tolerancia a fallos.
- **Costo operativo**: Mantener infraestructura activa en múltiples regiones incrementa los costos en un 40%.
- **Complejidad de la solución**: Las estrategias de resiliencia multi-región requieren coordinación entre equipos de desarrollo, operaciones y seguridad.
- **Regulaciones**: Normativas como PCI DSS exigen que los datos sensibles no crucen fronteras sin cifrado adecuado.

## Opciones consideradas

> Preguntas guía: 
> 1. ¿Qué alternativas de resiliencia multi-región evaluarías para cumplir con los ASRs de disponibilidad y rendimiento?
> 2. ¿Cómo manejarías los conflictos de datos durante fallos de red entre regiones?
> 3. ¿Qué métricas usarías para validar que la solución cumple con los umbrales de p99 y disponibilidad?

(En blanco: el candidato lista y analiza las opciones)

## Decisión

> Preguntas guía:
> 1. ¿Qué estrategia de resiliencia elegirías y por qué?
> 2. ¿Cómo garantizarías que la solución cumple con los ASRs de disponibilidad y rendimiento?
> 3. ¿Qué riesgos residuales aceptas y cómo los mitigarías?

(En blanco)

## Consecuencias

> Preguntas guía:
> 1. ¿Qué impacto tendrá la decisión en la latencia, el costo y la complejidad operativa?
> 2. ¿Cómo afectará la estrategia elegida a la escalabilidad del sistema?
> 3. ¿Qué cambios en la arquitectura actual serían necesarios para implementar la solución?

(En blanco)