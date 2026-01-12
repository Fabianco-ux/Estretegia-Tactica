import { useParams, useNavigate, useSearchParams } from 'react-router-dom'

type ModuleKey = 'finanzas' | 'produccion' | 'marketing' | 'rrhh' | 'innovacion' | 'cumplimiento'

const titles: Record<ModuleKey, string> = {
  finanzas: 'Finanzas',
  produccion: 'Producción',
  marketing: 'Marketing',
  rrhh: 'RRHH',
  innovacion: 'Innovación',
  cumplimiento: 'Cumplimiento',
}

const descriptions: Record<ModuleKey, string> = {
  finanzas: 'Costos, presupuestos, proyecciones y optimización financiera',
  produccion: 'Eficiencia de procesos, inventarios, calidad y monitoreo',
  marketing: 'Campañas, análisis de mercado, posicionamiento y gestión',
  rrhh: 'Talento, clima, capacitación y evaluación',
  innovacion: 'Tendencias, proyectos, IA e insights',
  cumplimiento: 'Normativas, riesgos, reportes y auditorías',
}

const internalCards: Record<ModuleKey, Array<{ title: string }>> = {
  finanzas: [
    { title: 'Costos y Presupuestos' },
    { title: 'Proyecciones' },
    { title: 'Alertas' },
    { title: 'Optimización' },
  ],
  produccion: [
    { title: 'Eficiencia' },
    { title: 'Inventarios' },
    { title: 'Calidad' },
    { title: 'Monitoreo de procesos' },
  ],
  marketing: [
    { title: 'Campañas' },
    { title: 'Análisis de mercado' },
    { title: 'Posicionamiento' },
    { title: 'Gestión de campañas' },
  ],
  rrhh: [
    { title: 'Talento' },
    { title: 'Clima' },
    { title: 'Capacitación' },
    { title: 'Evaluación' },
  ],
  innovacion: [
    { title: 'Tendencias' },
    { title: 'Proyectos' },
    { title: 'IA' },
    { title: 'Insights' },
  ],
  cumplimiento: [
    { title: 'Normativas' },
    { title: 'Riesgos' },
    { title: 'Reportes' },
    { title: 'Auditorías' },
  ],
}

export default function ModuleForm() {
  const { key } = useParams()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const k = (key ?? 'finanzas') as ModuleKey

  const metrics = [
    { label: 'KPIs activos', value: 12 },
    { label: 'Alertas', value: 3 },
    { label: 'Estrategias relacionadas', value: 5 },
    { label: 'Tareas abiertas', value: 9 },
  ]

  return (
    <div className="container">
      <div className="form">
        <h2>{titles[k]} — Módulo</h2>
        <p style={{ marginTop: 4 }}>{descriptions[k]}</p>

        <h3 style={{ marginTop: 16 }}>Mini-dashboard</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '100px' }}>
          {metrics.map(m => (
            <div key={m.label} className="card" role="group" aria-label={m.label}>
              <h3>{m.label}</h3>
              <p style={{ fontSize: 24, fontWeight: 700 }}>{m.value}</p>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: 16 }}>Tarjetas internas</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {internalCards[k].map(c => (
            <div key={c.title} className="card">
              <h3>{c.title}</h3>
            </div>
          ))}
        </div>

        <div className="actions" style={{ marginTop: 16, justifyContent: 'space-between' }}>
          <button className="btn" onClick={() => navigate(`/estrategias?modulo=${k}`)}>Crear estrategia desde el módulo</button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn secondary" onClick={() => navigate(`/estrategias/lista?modulo=${k}`)}>Ver estrategias relacionadas</button>
            <button className="btn secondary" onClick={() => alert('Alertas del módulo (placeholder)')}>Ver alertas del módulo</button>
          </div>
        </div>
      </div>
    </div>
  )
}
