# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Diseño de la solución de originación digital**.

| | |
|---|---|
| Tema | Diseño de solucion de extremo a extremo (e2e s1 pdn) |
| Nivel | advanced-l2 |
| Chapter | Arquitectura |
| Especialidad | Soluciones |
| Stack | Markdown / C4 Model + ADR |
| Patron arquitectonico | Documentación arquitectónica con vistas C4, ADR y escenarios de calidad |
| Tiempo estimado | 180 minutos |

## Receta del stack

Esqueleto obligatorio:

- `adr/`
- `arquitectura.md`
- `diagramas/*.mmd`
- `atributos-de-calidad.md`
- `rubrica-autoevaluacion.md`
- `poc/ (opcional)`

Dependencias:

- Mermaid.js n/a
- OpenAPI 3.1 3.1.0
- PlantUML n/a
- AWS SDK for JavaScript (v3) 3.532.0
- Serverless Framework 3.38.0

## Tu tarea

Dejar este conjunto de artefactos en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `python3 -c "import glob,sys; assert glob.glob('adr/*.md') and glob.glob('diagramas/*.mmd'), 'faltan ADRs o diagramas'"` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `python3 -c "import glob,sys; assert glob.glob('adr/*.md') and glob.glob('diagramas/*.mmd'), 'faltan ADRs o diagramas'"` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Análisis de Requisitos y ASRs**: Lista de ASRs y drivers de calidad con restricciones técnicas y de negocio.
- **Fase 2 — Diseño de la Arquitectura**: Diagrama de la arquitectura con patrones y estilos aplicados, y tácticas de resiliencia.
- **Fase 3 — Evaluación de Trade-offs y ADR**: ADR formal con trade-offs explícitos y discusión de riesgos residuales.
- **Fase 4 — Validación y Entrega**: Documento final de diseño con todos los diagramas, ADR y documentación relevante.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `adr/001-estrategia-resiliencia.md` — El topic pide resiliencia: este archivo es el ejercicio.
- [ ] `poc/serverless-resilience.js` — El topic pide resiliencia: este archivo es el ejercicio.
- [ ] `adr/002-seguridad-pci-dss.md` — El topic pide decisiones de arquitectura: el ADR es el ejercicio.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (11)

- `atributos-de-calidad.md`
- `arquitectura.md`
- `riesgos-y-mitigaciones.md`
- `rubrica-autoevaluacion.md`
- `adr/001-estrategia-resiliencia.md`
- `adr/002-seguridad-pci-dss.md`
- `README.md`
- `diagramas/contexto.mmd`
- `contratos/api-originacion.yaml`
- `poc/serverless-resilience.js`
- `poc/README.md`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `adr`
- `diagramas`
- `contratos`
- `atributos-de-calidad`
- `poc`

## Verificacion

```bash
python3 -c "import glob,sys; assert glob.glob('adr/*.md') and glob.glob('diagramas/*.mmd'), 'faltan ADRs o diagramas'"
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **Documentación arquitectónica con vistas C4, ADR y escenarios de calidad**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Arquitectura, Especialidad Soluciones, Seniority Seniority Advanced
- Brecha que el reto ataca: Sostiene las decisiones de arquitectura con atributos de calidad medibles y trade-offs explicitos
- Mision: Diseñar la solucion de originacion digital

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
