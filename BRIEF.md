# GRF — Brief Maestro

## Objetivo

Construir un MVP escalable que registre empresas, comprenda sus capacidades y encuentre oportunidades compatibles en Mercado Público.

## Etapa 1 — Perfil empresarial

El perfil debe representar identidad legal, actividades, capacidades, recursos, experiencia, cobertura geográfica, capacidad económica, cumplimiento, preferencias y restricciones.

Debe diferenciar actividad declarada, capacidad real y capacidad demostrable.

### Índice de capacidad empresarial

Indicador interno de 0 a 100 basado inicialmente en capacidad técnica, experiencia, capacidad financiera, capacidad operacional, documentación, cobertura geográfica y experiencia en contratación pública. No constituye certificación ni auditoría profesional.

## Etapa 2 — Mercado Público

El sistema deberá estructurar ID, organismo comprador, tipo de proceso, estado, fechas, monto, ubicación, categoría, descripción, requisitos, experiencia, profesionales, equipos, garantías, subcontratación, visitas, criterios de evaluación, documentos y fuente.

La API deberá utilizarse respetando autenticación, límites, términos de uso y políticas de ChileCompra.

## Etapa 3 — Motor de compatibilidad

Flujo: Empresa → filtros determinísticos → oportunidades relevantes → IA → score → explicación → recomendación.

El motor deberá considerar actividad, capacidad, experiencia, recursos, geografía, finanzas, documentación, requisitos, preferencias y restricciones.

### Clasificación inicial

- 80–100: alta compatibilidad.
- 60–79: compatible.
- 40–59: requiere preparación.
- 0–39: no recomendable.

Los pesos son configurables y deberán validarse durante el piloto.

## IA

La IA se utilizará para interpretación, clasificación, extracción, análisis semántico, explicación y recomendaciones. Las reglas determinísticas deben permanecer en código.

## Infraestructura inicial

- Frontend: Next.js / React.
- Hosting: Vercel.
- Base de datos: Supabase / PostgreSQL.
- Auth: Supabase Auth.
- Automatización: Cron / Vercel Cron.
- IA: proveedor configurable.

## Seguridad

- multi-tenant;
- aislamiento por company_id;
- Row Level Security;
- secretos en variables de entorno;
- validación server-side;
- logs;
- rate limiting;
- backups.

## No construir todavía

- automatización completa de postulaciones;
- niveles definitivos;
- marketplace;
- CRM completo;
- aprendizaje automático complejo;
- entrenamiento de modelos propios;
- servicios adicionales.

## Criterio de éxito

El mismo sistema debe funcionar con la empresa forestal y Emotion Chile sin crear lógica específica por empresa.

## Roadmap

Fase 1: Perfil empresarial.  
Fase 2: Mercado Público.  
Fase 3: Matching.  
Fase 4: Postulación.  
Fase 5: Seguimiento.  
Fase 6: Aprendizaje.  
Fase 7: Madurez empresarial.  
Fase 8: Ecosistema.
