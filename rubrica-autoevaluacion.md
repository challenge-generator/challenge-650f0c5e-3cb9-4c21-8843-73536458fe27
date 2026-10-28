# Rúbrica de Autoevaluación

## Criterios de Evaluación

### 1. Alineación con los ASRs
| Nivel          | Descripción                                                                                                                                                                                                 | Puntaje |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| **Excelente** | Los ASRs están claramente identificados y todos los componentes de la solución están alineados con ellos. Los escenarios de calidad cubren todas las dimensiones críticas (disponibilidad, rendimiento, seguridad, etc.). | 5       |
| **Aceptable** | Los ASRs están identificados pero la solución no cubre completamente uno o dos de ellos. Algunos escenarios de calidad faltan o están incompletos.                                                        | 3       |
| **Insuficiente** | Los ASRs no están claramente definidos o la solución no está alineada con la mayoría de ellos. Faltan escenarios de calidad críticos o no están medidos.                                               | 1       |

### 2. Uso de Patrones y Herramientas Arquitectónicas
| Nivel          | Descripción                                                                                                                                                                                                 | Puntaje |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| **Excelente** | Se aplican patrones arquitectónicos modernos (CQRS, Event Sourcing, Circuit Breaker, Outbox Pattern) y herramientas adecuadas (Mermaid, OpenAPI, ADR) de manera coherente y bien documentada.                | 5       |
| **Aceptable** | Se aplican algunos patrones y herramientas, pero hay inconsistencias o falta de coherencia en su uso. Algunos elementos clave no están documentados.                                                       | 3       |
| **Insuficiente** | Los patrones y herramientas aplicados son genéricos o no relevantes para el problema. No hay documentación clara de las decisiones arquitectónicas.                                                       | 1       |

### 3. Calidad de Diagramas y ADR
| Nivel          | Descripción                                                                                                                                                                                                 | Puntaje |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| **Excelente** | Los diagramas (C4) son claros, completos y siguen la notación correcta. Los ADRs están bien estructurados, con contexto, fuerzas, opciones consideradas y decisiones justificadas.                          | 5       |
| **Aceptable** | Los diagramas son comprensibles pero faltan algunos elementos o detalles. Los ADRs están completos pero algunas secciones (ej. opciones consideradas) son superficiales.                                     | 3       |
| **Insuficiente** | Los diagramas son confusos o incompletos. Los ADRs faltan o están incompletos (ej. sin contexto, fuerzas o decisiones).                                                                                  | 1       |

### 4. Viabilidad de la Solución
| Nivel          | Descripción                                                                                                                                                                                                 | Puntaje |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| **Excelente** | La solución es viable técnica y económicamente, con un plan claro de implementación y escalamiento. Los riesgos están identificados y mitigados adecuadamente.                                             | 5       |
| **Aceptable** | La solución es viable pero requiere ajustes en algunos aspectos técnicos o económicos. Algunos riesgos no están completamente mitigados.                                                                  | 3       |
| **Insuficiente** | La solución no es viable técnicamente o económicamente, o los riesgos no están identificados ni mitigados.                                                                                                | 1       |

## Instrucciones para la Autoevaluación
1. **Revisa cada criterio** y asigna un puntaje (1, 3 o 5) según el nivel que consideres alcanzado.
2. **Justifica tu puntaje** en cada criterio con ejemplos concretos de tu solución.
3. **Identifica áreas de mejora** y propone acciones específicas para elevar el puntaje en los criterios con nivel **Aceptable** o **Insuficiente**.
4. **Prioriza las acciones** en función de su impacto en los ASRs y los recursos disponibles.

## Preguntas Guía
1. ¿Cómo garantizas que tu solución cumple con los ASRs críticos (ej. 50.000 TPS, p99 < 100 ms, PCI DSS)?
2. ¿Qué patrones arquitectónicos aplicaste y cómo contribuyen a cumplir los ASRs?
3. ¿Qué herramientas utilizaste para documentar tu solución y por qué las elegiste?
4. ¿Cómo validaste que tus diagramas y ADRs son claros y completos?
5. ¿Qué riesgos identificaste en tu solución y cómo los mitigaste? ¿Qué riesgos residuales quedan?
6. ¿Qué métricas utilizarías para monitorear la viabilidad de tu solución en producción?

## Escala de Calificación
- **Excelente (20-25 puntos)**: Solución bien diseñada, alineada con los ASRs, con patrones y herramientas adecuadas, y viable.
- **Aceptable (10-19 puntos)**: Solución funcional pero con áreas de mejora en alineación, patrones o viabilidad.
- **Insuficiente (0-9 puntos)**: Solución incompleta, con graves deficiencias en alineación, patrones o viabilidad.