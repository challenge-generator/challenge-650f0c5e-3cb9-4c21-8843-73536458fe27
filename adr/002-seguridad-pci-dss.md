# ADR 002: Estrategia de Seguridad PCI DSS y DevSecOps

Estado: Propuesto
Fecha: 2024-10-22

## Contexto

El sistema de originación digital maneja datos sensibles de clientes, incluyendo información de tarjetas de pago, que están sujetos a los estándares PCI DSS. Actualmente, el proceso de cumplimiento PCI DSS se realiza de manera manual y reactiva, lo que genera retrasos en los despliegues y aumenta el riesgo de incumplimiento. Los ASRs de seguridad incluyen:

- **Cumplimiento PCI DSS**: Validación anual con cero hallazgos críticos.
- **Protección de datos**: Cifrado de datos en tránsito y en reposo con algoritmos aprobados (AES-256).
- **DevSecOps**: Integración continua de prácticas de seguridad en el pipeline de CI/CD.
- **Autenticación y autorización**: Uso de OAuth 2.0 y OpenID Connect con MFA para accesos sensibles.

El sistema actual no tiene controles automatizados para validar el cumplimiento de PCI DSS durante el desarrollo y despliegue. Además, la gestión de secretos y claves criptográficas se realiza de manera manual, lo que aumenta el riesgo de exposición.

## Fuerzas

- **Cumplimiento regulatorio**: PCI DSS exige controles estrictos sobre el acceso a datos sensibles y la gestión de vulnerabilidades.
- **Velocidad de despliegue**: La validación manual de PCI DSS ralentiza los ciclos de despliegue en un 30%.
- **Riesgo de exposición**: La gestión manual de secretos aumenta el riesgo de filtraciones.
- **Integración con terceros**: Proveedores externos requieren acceso seguro a APIs del sistema.
- **Costo de auditorías**: Las auditorías anuales de PCI DSS tienen un costo elevado y requieren preparación exhaustiva.

## Opciones consideradas

> Preguntas guía:
> 1. ¿Qué estrategias de DevSecOps evaluarías para integrar el cumplimiento PCI DSS en el pipeline de CI/CD?
> 2. ¿Cómo gestionarías los secretos y claves criptográficas de manera segura y escalable?
> 3. ¿Qué herramientas usarías para validar automáticamente el cumplimiento de PCI DSS durante el desarrollo?

(En blanco: el candidato lista y analiza las opciones)

## Decisión

> Preguntas guía:
> 1. ¿Qué estrategia de seguridad elegirías para garantizar el cumplimiento PCI DSS y por qué?
> 2. ¿Cómo asegurarías que la solución no afecta negativamente la velocidad de despliegue?
> 3. ¿Qué riesgos residuales aceptas y cómo los mitigarías?

(En blanco)

## Consecuencias

> Preguntas guía:
> 1. ¿Qué impacto tendrá la decisión en la complejidad operativa y el costo de las auditorías?
> 2. ¿Cómo afectará la estrategia elegida a la colaboración con proveedores externos?
> 3. ¿Qué cambios en el pipeline de CI/CD serían necesarios para implementar la solución?

(En blanco)