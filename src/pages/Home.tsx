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
        <p className="subtitle">Selecciona un módulo para comenzar</p>
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
    </div>
  )
}
