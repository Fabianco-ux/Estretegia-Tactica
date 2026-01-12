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

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Plataforma de Análisis Estratégico para táctica empresarial completa</h1>
        <p className="subtitle">Dashboard Ejecutivo — Usuario autenticado: demo@empresa.com</p>
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
        <h3 style={{ marginTop: 16 }}>Alertas recientes</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '100px' }}>
          <div className="card"><h3>Finanzas</h3><p>Desviación de presupuesto</p></div>
          <div className="card"><h3>Producción</h3><p>Tiempo de ciclo elevado</p></div>
          <div className="card"><h3>Marketing</h3><p>ROI campaña bajo</p></div>
        </div>

        <h3 style={{ marginTop: 16 }}>Actividad reciente</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '100px' }}>
          <div className="card"><h3>Estrategias activas</h3><p>3 actualizadas hoy</p></div>
          <div className="card"><h3>Tareas por módulo</h3><p>12 pendientes</p></div>
          <div className="card"><h3>Recomendaciones rápidas</h3><p>2 nuevas</p></div>
        </div>
      </div>
    </div>
  )
}
