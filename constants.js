/**
 * constants.js
 * Almacena variables de configuración estáticas, mapeos y plantillas 
 * para separar la "data fija" de la lógica de negocio.
 */

// Mapeo para determinar el "nivel de sufrimiento" (Bolsó-metro) según el nombre de la empresa
const SUBTYPE_MAP = {
    'Indeed': 'ghost', 'Jooble': 'ghost', 'SimplyHired': 'ghost', 'Google Jobs': 'ghost',
    'OCCMundial': 'sótano', 'Computrabajo': 'sótano', 'Talent.com': 'sótano', 'AccionTrabajo': 'sótano', 'Bumeran': 'sótano',
    'We Work Remotely': 'vibetech', 'RemoteOK': 'vibetech', 'Working Nomads': 'vibetech', 'GetOnBoard': 'vibetech', 'Remotive': 'vibetech',
    'Glassdoor': 'suerte', 'The Muse': 'suerte', 'LinkedIn': 'suerte',
    'FlexJobs': 'oro', 'Wellfound': 'oro', 'Hired': 'oro', 'AngelList': 'oro', 'Toptal': 'oro'
};

// URL objetivo para los "Pins de Ansiedad"
const TARGET_PIN_URL = "https://www.themuse.com/advice";

// Plantilla maestra para el generador de CV (VitAI)
const getPromptTemplate = (role) => `Actúa como un experto en Recursos Humanos y Reclutador Senior especializado en el rol de [${role.toUpperCase()}].

Quiero que redactes un CV de alto impacto optimizado para pasar filtros ATS (Applicant Tracking Systems).

Estructura requerida:
1. PERFIL PROFESIONAL: Un resumen de 3-4 líneas potente, usando verbos de acción y enfoque en resultados para un [${role}].
2. EXPERIENCIA: Genera 3 ejemplos de experiencias laborales ficticias pero realistas para este rol, usando el formato "Hice X, medido por Y, resultando en Z" (Google Formula). Incluye métricas cuantificables.
3. SKILLS: Lista de las 10 habilidades técnicas (Hard Skills) y 5 blandas (Soft Skills) más demandadas actualmente para [${role}].
4. PALABRAS CLAVE: Una lista de keywords que debo incluir sí o sí para que el algoritmo me detecte.

El tono debe ser profesional, persuasivo y moderno. Evita clichés como "proactivo" o "trabajo en equipo" sin contexto.`;
