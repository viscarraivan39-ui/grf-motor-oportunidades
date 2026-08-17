# GRF — Research / Fase 1.5

## Propósito

Antes de programar `src/features/matching`, este directorio existe para responder una sola pregunta con datos reales:

> *¿Cómo representa Mercado Público una oportunidad real?*

No estamos buscando clientes. No estamos validando negocio. Estamos haciendo ingeniería inversa del formato real de los datos, para que `OpportunityProfile` se construya sobre evidencia y no sobre suposiciones.

## Regla de oro

*No se rellena un campo porque "debería existir".*

Si la API o las bases no entregan un dato, se registra explícitamente como ausente — nunca se deja vacío sin explicar por qué, y nunca se infiere sin marcarlo como interpretación.

Cada campo ambiguo del `OpportunityProfile` usa el patrón:

```json
{
  "value": "...",
  "availability": "not_available | unstructured | document | verified"
}
```

| availability | Significado |
|---|---|
| `not_available` | El dato no existe en ninguna fuente consultada (API ni bases). |
| `unstructured` | Existe, pero como texto libre dentro de un PDF/campo descriptivo. |
| `document` | Está explícito y estructurado en las bases del proceso. |
| `verified` | Fue confirmado manualmente contra la fuente original. |

## Qué captura este directorio

1. **Registro crudo** — lo que la API/bases entregan literalmente, sin interpretar.
2. **OpportunityProfile** — la interpretación estructurada de GRF sobre ese registro, con `source_evidence` para poder rastrear cada dato hasta su origen.

## Composición de la muestra (15–20 oportunidades)

| Grupo | Cantidad |
|---|---:|
| Forestal / terreno | 5 |
| Construcción / servicios | 5 |
| Informática / desarrollo | 5 |
| Logística / otros servicios | 5 |

Dentro de cada grupo, buscar deliberadamente variedad, no uniformidad:
- una sencilla
- una mediana
- una compleja
- una con muchos requisitos
- una con información aparentemente incompleta

## Flujo de trabajo

1. Buscar el proceso en Mercado Público o vía la API disponible.
2. Llenar una fila en `opportunity-capture-template.csv` (captura rápida).
3. Para los casos que valga la pena profundizar, crear el JSON completo en `samples/<grupo>/<process_id>.json` usando `opportunity-profile.schema.json` como referencia de estructura.
4. Anotar en `research.notes` cualquier sorpresa: campo que no calzó, dato contradictorio entre el listado y las bases, formato inesperado, etc.

## Qué pasa después de las 20

Una sola revisión, no otro documento maestro:

```text
MERCADO PÚBLICO REAL
        ↓
OpportunityProfile (ajustado con lo aprendido)
        ↓
Company Capability Model
        ↓
Matching Model
        ↓
Código
```

Los datos son el próximo documento. No hay otra ronda de planificación antes de esto.

## Estado

**Schema version:** 0.1  
**Status:** RESEARCH / NOT FINAL  
**Datos reales capturados:** 0/15–20

> `fixtures/opportunity-profile.example.json` es un ejemplo sintético. No representa una licitación real y no debe utilizarse como dato de research.
