# GRF — Brief Maestro / Especificación Ejecutable

**Versión:** 0.2  
**Estado:** RESEARCH / FASE 1.5  
**Última actualización:** 2026-08-17

> **Regla de oro:** primero datos reales → después modelo → después código.

## 1. Propósito

GRF (Gestor/Research de Oportunidades, nombre de trabajo) es una plataforma orientada a empresas que necesitan identificar oportunidades de contratación pública compatibles con su capacidad real, comprender sus brechas y, en etapas posteriores, aprender de sus resultados.

La semilla del proyecto es la búsqueda de oportunidades en Mercado Público. La visión futura es un ecosistema de inteligencia empresarial, pero **esa visión no forma parte del alcance inmediato**.

GRF no debe presentarse como auditoría profesional, asesoría legal ni como un sistema que garantiza adjudicaciones.

## 2. Problema

Una empresa no debería recibir un universo indiscriminado de procesos. Primero debe existir un perfil empresarial estructurado que permita distinguir:

- qué declara que puede hacer;
- qué realmente puede hacer;
- qué puede demostrar documentalmente;
- qué ha sido verificado.

La oportunidad se compara posteriormente contra ese perfil.

## 3. Diferenciador conceptual

### Declarado → Real → Demostrable → Verificado

GRF debe evitar tratar toda la información empresarial como igualmente confiable.

El sistema deberá conservar evidencia de dónde proviene cada dato relevante.

## 4. Arquitectura conceptual

```text
Empresa
   ↓
Company Capability Model
   ↓
Fuente Mercado Público
   ↓
OpportunityProfile
   ↓
Filtros determinísticos
   ↓
Matching
   ↓
Score de compatibilidad
   ↓
Explicación / brechas
   ↓
Resultado de postulación
   ↓
Learning Loop
```

La IA interpreta, resume, clasifica y ayuda a explicar. Las reglas determinísticas y las fuentes originales son la autoridad para requisitos objetivos.

## 5. Alcance actual — Fase 1.5

Antes de desarrollar `src/features/matching`, el objetivo es realizar ingeniería inversa sobre oportunidades reales.

### Pregunta de investigación

> ¿Cómo representa Mercado Público una oportunidad real?

No se está buscando clientes todavía. No se está validando el negocio todavía. Se está validando el modelo de datos.

### Muestra objetivo

15–20 oportunidades:

| Grupo | Objetivo |
|---|---:|
| Forestal / terreno | 5 |
| Construcción / servicios | 5 |
| Informática / desarrollo | 5 |
| Logística / otros servicios | 5 |

Buscar variedad dentro de cada grupo: procesos sencillos, medianos, complejos, con muchos requisitos y aparentemente incompletos.

## 6. Regla de captura

No se rellena un campo porque “debería existir”.

Si la fuente no entrega el dato, debe registrarse explícitamente como ausente. No se debe inferir sin marcar la interpretación.

En Fase 1.5 se utiliza:

```text
not_available
unstructured
document
verified
```

`verified` significa que el dato fue comprobado manualmente contra la fuente original.

## 7. Evidencia

Todo dato relevante debe poder rastrearse hasta su fuente mediante `source_evidence`.

La captura debe conservar, cuando corresponda:

- fuente;
- documento;
- página/sección;
- URL o referencia al endpoint;
- texto original relevante.

El registro crudo nunca debe ser reemplazado por una interpretación de IA.

## 8. Separación RAW / NORMALIZED

```text
RAW
 │
 │  fuente original
 ▼
NORMALIZED
 │
 ▼
OpportunityProfile
```

La capa RAW se conserva como referencia. El modelo estructurado puede evolucionar durante el research.

## 9. Artefactos de Fase 1.5

```text
research/
├── README.md
├── opportunity-capture-template.csv
├── opportunity-profile.schema.json
├── fixtures/
│   └── opportunity-profile.example.json
└── samples/
    ├── forestal/
    ├── construccion/
    ├── informatica/
    └── logistica/
```

El fixture es sintético y no representa una oportunidad real.

## 10. Flujo de investigación

1. Localizar una oportunidad real en Mercado Público o mediante la API disponible.
2. Capturar los datos sin interpretar.
3. Registrar una fila en `opportunity-capture-template.csv`.
4. Para procesos seleccionados, crear el JSON completo en `samples/<grupo>/`.
5. Registrar documentos y evidencia.
6. Anotar contradicciones, campos inesperados, datos ausentes y necesidad de interpretación.
7. Repetir hasta completar la muestra.
8. Revisar los 15–20 casos una sola vez.
9. Ajustar `OpportunityProfile` según evidencia.
10. Recién entonces diseñar el modelo definitivo y comenzar el matching.

## 11. Lo que NO se construye todavía

- Motor de matching definitivo.
- Score de probabilidad de adjudicación.
- Predicción de ganador.
- Automatización de postulaciones.
- Learning Loop productivo.
- Sistema de niveles Bronce/Plata/Oro/Diamante.
- Ecosistema de servicios complementarios.
- Productos derivados de debilidades empresariales.
- Integraciones comerciales adicionales.

Estas ideas permanecen como visión futura, no como backlog inmediato.

## 12. Matching futuro

Una vez validado el modelo:

```text
Perfil empresarial
      ↓
Filtros duros
      ↓
Oportunidades compatibles
      ↓
Comparación empresa ↔ oportunidad
      ↓
Compatibilidad GRF
      ↓
Brechas y explicación
```

El score inicial debe representar **compatibilidad**, no “probabilidad de ganar”, hasta disponer de suficiente evidencia histórica para justificar cualquier afirmación predictiva.

## 13. Learning Loop futuro

```text
Oportunidad
    ↓
Postulación
    ↓
Ganada / Perdida
    ↓
Motivo
    ↓
Brecha
    ↓
Recomendación
    ↓
Nueva postulación
    ↓
Nuevo resultado
```

El historial propio de cada empresa constituye una fuente potencial de aprendizaje diferencial.

## 14. Company Capability Model

El perfil empresarial deberá evolucionar hacia un modelo que permita representar, entre otros:

- constitución y estado;
- actividades/giro;
- ubicación y cobertura operacional;
- experiencia;
- capacidad técnica;
- personal;
- equipamiento;
- certificaciones;
- capacidad financiera;
- capacidad operacional;
- documentación;
- antecedentes tributarios/laborales relevantes;
- evidencia disponible;
- restricciones;
- aspiraciones de crecimiento.

No se asumirá que todos estos datos son requisitos universales de Mercado Público. El research debe determinar cuáles son realmente relevantes y cómo se presentan.

## 15. Principios de seguridad epistemológica

GRF no debe convertir hipótesis en hechos.

No afirmar sin evidencia que:

- un determinado giro aumenta la probabilidad de adjudicación;
- una empresa nueva no puede ganar;
- un score predice adjudicación;
- un nivel empresarial garantiza acceso a determinado monto;
- una determinada característica es obligatoria para todos los procesos.

Toda regla deberá poder rastrearse a una fuente, una regla explícita o evidencia histórica suficiente.

## 16. Escalabilidad

El sistema debe diseñarse como multiempresa/multitenant desde el inicio, evitando lógica específica para una empresa.

Las empresas deben ser datos configurables, no código.

La infraestructura podrá comenzar con servicios gratuitos o de bajo costo durante la validación, pero deberá permitir crecimiento progresivo sin rediseño fundamental.

## 17. Criterio para pasar a desarrollo

No se inicia `src/features/matching` hasta haber completado y revisado la muestra real.

El siguiente hito es:

```text
15–20 oportunidades reales
        ↓
OpportunityProfile ajustado
        ↓
Company Capability Model ajustado
        ↓
Modelo de matching
        ↓
Implementación
```

## 18. Visión futura

La visión de largo plazo contempla:

- inteligencia de oportunidades;
- evolución de capacidad empresarial;
- aprendizaje de resultados;
- análisis de brechas;
- servicios complementarios;
- ecosistema de soluciones para empresas.

Pero ninguna de estas capacidades debe adelantar la validación de la Fase 1.5.

---

## Estado actual

**Fase:** 1.5 — Research de oportunidades reales  
**Matching:** detenido deliberadamente  
**IA:** sin autoridad para determinar hechos objetivos  
**Datos reales capturados:** 0/15–20  
**Próximo hito:** primera oportunidad real capturada y documentada
