# Diseño de la solución de originación digital

El objetivo de este reto es diseñar la solución de originación digital para un banco multi-región, asegurando que se cumplan los ASRs con valores medibles de disponibilidad, resiliencia, rendimiento y escalabilidad. El dominio es la banca digital, con actores como Clientes, Agentes Bancarios, Sistema de Pagos y Proveedores de Servicios Externos. El sistema debe soportar un tráfico pico de 50.000 transacciones por segundo (TPS) con un tiempo de respuesta p99 menor a 100 ms y una tolerancia a fallos de red de al menos 1 hora. La solución debe incluir una estrategia de seguridad que cumpla con los estándares PCI DSS y una estrategia de DevSecOps para asegurar la integración continua de las prácticas de seguridad en el ciclo de vida del desarrollo.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Diseño de solucion de extremo a extremo (e2e s1 pdn) |
| **Nivel** | advanced-l2 |
| **Tipo** | mixed |
| **Tiempo estimado** | 180 minutos |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis de Requisitos y ASRs

**Objetivo:** Identificar y analizar los ASRs y los drivers de calidad para la solución de originación digital.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Enumera y describe los ASRs y drivers de calidad relevantes para la solución.
- Identifica las restricciones técnicas y de negocio que deben ser consideradas en el diseño.

**Entregable:** Lista de ASRs y drivers de calidad con restricciones técnicas y de negocio.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los ASRs en términos de disponibilidad, resiliencia, rendimiento y escalabilidad.
- Piensa en cómo los drivers de calidad impactan en la arquitectura.

</details>

### Fase 2: Diseño de la Arquitectura

**Objetivo:** Diseñar la arquitectura de la solución de originación digital, aplicando patrones y estilos arquitectónicos modernos.

**Tiempo estimado:** 60 minutos

**Instrucciones:**

- Propone una arquitectura que cumpla con los ASRs y drivers de calidad identificados en la fase anterior.
- Aplica al menos 8 patrones y estilos arquitectónicos modernos, justificando su elección.
- Considera tácticas de resiliencia avanzadas para soportar la caída completa de una región de la nube.

**Entregable:** Diagrama de la arquitectura con patrones y estilos aplicados, y tácticas de resiliencia.

<details>
<summary>Pistas de conocimiento</summary>

- Investiga y aplica patrones como Serverless, CQRS, Sagas y EDA.
- Considera la combinación de patrones para lograr una solución robusta y escalable.

</details>

### Fase 3: Evaluación de Trade-offs y ADR

**Objetivo:** Evaluar los trade-offs y documentar las decisiones arquitectónicas en un ADR.

**Tiempo estimado:** 60 minutos

**Instrucciones:**

- Evalúa los pros y contras de las decisiones arquitectónicas tomadas.
- Documenta las decisiones en un ADR formal, incluyendo los trade-offs explícitos.
- Identifica y discute los riesgos residuales asociados con las decisiones tomadas.

**Entregable:** ADR formal con trade-offs explícitos y discusión de riesgos residuales.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza MADR o Nygard para estructurar el ADR.
- Considera el impacto de las decisiones en la seguridad, observabilidad y operación del sistema.

</details>

### Fase 4: Validación y Entrega

**Objetivo:** Validar la solución diseñada y asegurar que cumple con los ASRs y drivers de calidad.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Revisa la solución diseñada para asegurar que cumple con todos los ASRs y drivers de calidad.
- Realiza una validación final de la arquitectura, incluyendo una revisión de la estrategia de seguridad y DevSecOps.
- Prepara la entrega final del diseño, incluyendo todos los diagramas, ADR y documentación relevante.

**Entregable:** Documento final de diseño con todos los diagramas, ADR y documentación relevante.

<details>
<summary>Pistas de conocimiento</summary>

- Realiza una revisión exhaustiva de la solución.
- Asegura que todos los entregables están completos y bien documentados.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un ASR y por qué es importante en el diseño de la arquitectura?
- **paraQueSirve**: ¿Para qué sirve un ADR y cómo se estructura?
- **comoSeUsa**: ¿Cómo se aplican los patrones y estilos arquitectónicos en la solución?
- **erroresComunes**: ¿Cuáles son los errores comunes al diseñar una arquitectura resiliente y escalable?
- **queDecisionesImplica**: ¿Qué decisiones implica el diseño de la arquitectura y cómo se documentan en un ADR?

## Criterios de Evaluacion

- Alineación de la solución con los ASRs y drivers de calidad.
- Uso justificado de patrones y estilos arquitectónicos.
- Calidad del ADR con trade-offs explícitos.
- Viabilidad y madurez de la solución en términos de seguridad, observabilidad y operación.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
python3 -c "import glob,sys; assert glob.glob('adr/*.md') and glob.glob('diagramas/*.mmd'), 'faltan ADRs o diagramas'"
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
