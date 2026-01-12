import React from 'react'
import { useNavigate } from 'react-router-dom'
import ModuleCard from '../components/ModuleCard'
import NavButtons from '../components/NavButtons'

const modules = [
  { key: 'finanzas', title: 'Finanzas', desc: 'Optimización de costos, proyecciones y control de objetivos' },
  { key: 'produccion', title: 'Producción', desc: 'Eficiencia de procesos, inventarios y calidad' },
  { key: 'marketing', title: 'Marketing', desc: 'Campañas, segmentación y predicción de clientes' },
  { key: 'rrhh', title: 'RRHH', desc: 'Gestión del talento y clima laboral' },
  { key: 'innovacion', title: 'Innovación', desc: 'Tendencias, proyectos y desarrollo de productos' },
  { key: 'cumplimiento', title: 'Cumplimiento', desc: 'Normativas, riesgos y reportes regulatorios' },
]

export default function Home() {
  const navigate = useNavigate()
  const alerts = [
    { tipo: 'advertencia', texto: 'Métrica de ventas 15% por debajo del objetivo en Q1 — Finanzas — 12/1/2026' },
    { tipo: 'exito', texto: 'Estrategia de Marketing completada exitosamente — Marketing — 12/1/2026' },
    { tipo: 'error', texto: 'Tarea crítica sin asignar — Producción — 12/1/2026' },
    { tipo: 'info', texto: 'Nueva recomendación de IA disponible — RRHH — 12/1/2026' },
  ]
  const progresoSemanal = [120, 150, 90, 170] // escala 0–200
  const tareasPorModulo = [
    { modulo: 'Finanzas', valor: 12 },
    { modulo: 'Producción', valor: 8 },
    { modulo: 'Marketing', valor: 10 },
    { modulo: 'RRHH', valor: 6 },
  ]
  const [filter, setFilter] = React.useState<'todas'|'errores'|'advertencias'|'exitos'>('todas')

  const exportarEstrategias = async () => {
    const { listStrategies } = await import('../store/strategies')
    const data = listStrategies()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'estrategias.json'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Plataforma de Análisis Estratégico para táctica empresarial completa</h1>
        <p className="subtitle">Dashboard Ejecutivo — Usuario autenticado: demo@empresa.com</p>
        <div className="actions" style={{ justifyContent: 'center', marginTop: 12 }}>
          <button className="btn" onClick={() => navigate('/estrategias/lista')}>Ver Estrategias</button>
          <button className="btn secondary" onClick={() => navigate('/ia')}>Consultar Estrategia IA</button>
          <button className="btn secondary" onClick={() => navigate('/')}>Salir</button>
        </div>
      </div>

      <div className="grid">
        {modules.map(m => (
          <ModuleCard
            key={m.key}
            title={m.title}
            description={m.desc}
            onClick={() => navigate(`/modulo/${m.key}`)}
          />
        ))}
      </div>

      <div className="actions">
        <NavButtons
          onEstrategias={() => navigate('/estrategias')}
          onDashboard={() => navigate('/dashboard')}
        />
      </div>

      <div style={{ width: '100%', maxWidth: 980 }}>
        <div className="actions" style={{ justifyContent: 'flex-end' }}>
          <button className="btn" onClick={() => { /* placeholder actualización */ }}>Actualizar</button>
          <button className="btn secondary" onClick={exportarEstrategias}>Exportar</button>
        </div>

        <h3 style={{ marginTop: 16 }}>Panel de Métricas</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
          <div className="card">
            <h3>Progreso Semanal</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {progresoSemanal.map((v, i) => (
                <div key={i} style={{ background: '#e6f0ff', borderRadius: 10, padding: 8 }}>
                  <div style={{ fontWeight: 700 }}>S{i+1}</div>
                  <div style={{ height: 10, background: 'linear-gradient(90deg, #0a2540, #00bfff)', width: `${(v/200)*100}%`, borderRadius: 6 }} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 8, fontSize: 12 }}>Escala: 0–200</div>
          </div>

          <div className="card">
            <h3>Tareas por Módulo</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {tareasPorModulo.map((m) => (
                <div key={m.modulo} style={{ background: '#e6f0ff', borderRadius: 10, padding: 8 }}>
                  <div style={{ fontWeight: 700 }}>{m.modulo}</div>
                  <div style={{ height: 10, background: '#0d8aff', width: `${(m.valor/16)*100}%`, borderRadius: 6 }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
              <div>87% — Tasa de Completitud</div>
              <div>24 — Tareas Activas</div>
              <div>5.2 — Días Promedio</div>
            </div>
            <div style={{ marginTop: 8, fontSize: 12 }}>Escala: 0–16</div>
          </div>
        </div>

        <h3 style={{ marginTop: 16 }}>Centro de Alertas</h3>
        <div className="actions" style={{ marginBottom: 8 }}>
          <button className="btn" onClick={() => setFilter('todas')}>Todas</button>
          <button className="btn secondary" onClick={() => setFilter('errores')}>Errores</button>
          <button className="btn secondary" onClick={() => setFilter('advertencias')}>Advertencias</button>
          <button className="btn secondary" onClick={() => setFilter('exitos')}>Éxitos</button>
        </div>
        <div className="grid" style={{ gridTemplateColumns: '1fr', gridAutoRows: 'auto' }}>
          {alerts.filter(a => filter==='todas' || a.tipo===filter || (filter==='exitos' && a.tipo==='exito')).map((a, idx) => (
            <div key={idx} className="card"><p>{a.texto}</p></div>
          ))}
        </div>

        <h3 style={{ marginTop: 16 }}>Alertas recientes</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridAutoRows: 'auto' }}>
          {alerts.map((a, idx) => (
            <div key={idx} className="card"><p>{a.texto}</p></div>
          ))}
        </div>
      </div>
    </div>
  )
}
