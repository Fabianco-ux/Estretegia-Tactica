export type ModuleKey = 'finanzas' | 'produccion' | 'marketing' | 'rrhh' | 'innovacion' | 'cumplimiento'

export type Task = {
  id: string
  titulo: string
  descripcion?: string
  responsable?: string
  rol?: string
  fecha?: string
  estado?: 'pendiente' | 'en-progreso' | 'completada'
  recursos?: string
  dependencias?: string
  impacto?: string
}

export type AnalysisEntry = { fecha: string; resumen: string; riesgos: string; oportunidades: string; recomendaciones: string; prioridad: string; indicadores: string }

export type Strategy = {
  id: string
  nombre: string
  nombreDescriptivo?: string
  descripcion?: string
  proposito?: string
  cliente?: string
  rol?: string
  area?: string
  modulo: ModuleKey
  impacto?: { ahorro?: number; crecimiento?: number; eficiencia?: number; riesgo?: number }
  indicadores?: { roi?: number; productividad?: number; satisfaccion?: number; tiempoEjecucion?: number }
  financieros?: { ingresos?: number; egresos?: number; presupuesto?: number; ahorroProyectado?: number }
  historico?: { resultadosPrevios?: string; aprendizajes?: string }
  tareas: Task[]
  conclusion?: { texto?: string; recomendaciones?: string }
  estado?: 'activa' | 'pausada' | 'cerrada'
  responsable?: string
  fechaCreacion: string
  nivelImpacto?: 'alto' | 'medio' | 'bajo'
  analisis?: AnalysisEntry[]
}

const KEY = 'estrategia_tactica_strategies'

export function listStrategies(): Strategy[] {
  const raw = localStorage.getItem(KEY)
  if (!raw) return []
  try { return JSON.parse(raw) as Strategy[] } catch { return [] }
}

export function saveStrategy(s: Strategy) {
  const list = listStrategies()
  const idx = list.findIndex(x => x.id === s.id)
  if (idx >= 0) list[idx] = s; else list.push(s)
  localStorage.setItem(KEY, JSON.stringify(list))
}

export function getStrategy(id: string): Strategy | undefined {
  return listStrategies().find(s => s.id === id)
}

export function addAnalysis(id: string, entry: AnalysisEntry) {
  const s = getStrategy(id)
  if (!s) return
  s.analisis = [...(s.analisis ?? []), entry]
  saveStrategy(s)
}
