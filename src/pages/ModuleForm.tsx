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

        {k === 'finanzas' && (
          <>
            <h3 style={{ marginTop: 16 }}>Estrategias Financieras</h3>
            <p>Optimización de recursos financieros, proyecciones y control de objetivos</p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="card"><h3>Costos y Presupuestos</h3><p>Optimización de Costos y Presupuestos</p></div>
              <div className="card"><h3>Análisis de Gastos</h3><p>Gastos mensuales — $245,000</p><p>Presupuesto — 85% utilización</p><p>Ahorro Potencial — $12,500 mensual</p></div>
              <div className="card"><h3>Proyecciones</h3><p>Proyecciones de Ventas y Flujo de Caja</p></div>
              <div className="card"><h3>Ventas Proyectadas Q1</h3><p>$850,000</p></div>
              <div className="card"><h3>Flujo de Caja</h3><p>Saldo proyectado — +$120,000</p></div>
              <div className="card"><h3>Tasa de Crecimiento</h3><p>+12.5% YoY</p></div>
              <div className="card"><h3>Alertas de Desviaciones</h3><p>Desviación en Gastos Operativos — +8%</p><p>Meta de Ventas Alcanzada — 103%</p><p>Reducción de Costos — 15%</p></div>
            </div>
          </>
        )}

        {k === 'produccion' && (
          <>
            <h3 style={{ marginTop: 16 }}>Estrategias de Producción</h3>
            <p>Optimización de procesos, control de inventarios y automatización</p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="card"><h3>Eficiencia</h3><p>Monitoreo de Eficiencia en Procesos</p></div>
              <div className="card"><h3>OEE General</h3><p>78%</p></div>
              <div className="card"><h3>Tiempo de Ciclo</h3><p>3.2 min</p></div>
              <div className="card"><h3>Disponibilidad</h3><p>92% uptime</p></div>
              <div className="card"><h3>Control de Inventarios</h3><p>Nivel de Stock — 1,250</p><p>Rotación — 6.5x</p><p>Lead Time — 5.2 días</p></div>
              <div className="card"><h3>Reportes de Calidad</h3><p>Meta de Calidad Alcanzada</p><p>Productividad en Aumento</p><p>Revisión de Proceso</p></div>
            </div>
          </>
        )}

        {k === 'marketing' && (
          <>
            <h3 style={{ marginTop: 16 }}>Estrategias de Marketing y Clientes</h3>
            <p>Análisis de campañas, segmentación y predicción de comportamiento</p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="card"><h3>Campañas</h3><p>Análisis de Campañas y Segmentación</p></div>
              <div className="card"><h3>ROI de Campañas</h3><p>3.8x</p></div>
              <div className="card"><h3>Tasa de Conversión</h3><p>18.5%</p></div>
              <div className="card"><h3>Alcance Total</h3><p>125,000 usuarios</p></div>
              <div className="card"><h3>Clientes</h3><p>Predicción de Comportamiento</p></div>
              <div className="card"><h3>Tasa de Retención</h3><p>89%</p></div>
              <div className="card"><h3>Riesgo de Churn</h3><p>156 clientes</p></div>
              <div className="card"><h3>CLV</h3><p>$2,450</p></div>
              <div className="card"><h3>Recomendaciones</h3><p>Segmento de Alto Valor Identificado</p><p>Campaña de Email Sugerida</p><p>Oportunidad de Cross-Selling</p></div>
            </div>
          </>
        )}

        {k === 'rrhh' && (
          <>
            <h3 style={{ marginTop: 16 }}>Estrategias de Recursos Humanos</h3>
            <p>Gestión del talento, capacitación y clima laboral</p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="card"><h3>Desempeño</h3><p>Seguimiento de Desempeño y Tareas</p></div>
              <div className="card"><h3>Cumplimiento de Objetivos</h3><p>84%</p></div>
              <div className="card"><h3>Productividad</h3><p>92%</p></div>
              <div className="card"><h3>Colaboradores Destacados</h3><p>23 empleados</p></div>
              <div className="card"><h3>Capacitación</h3><p>Detección de Necesidades</p></div>
              <div className="card"><h3>Horas de Capacitación</h3><p>24 hrs</p></div>
              <div className="card"><h3>Programas Activos</h3><p>12</p></div>
              <div className="card"><h3>Tasa de Finalización</h3><p>78%</p></div>
              <div className="card"><h3>Clima Laboral</h3><p>Satisfacción — 87%</p><p>Riesgo de Rotación — 5</p><p>Reconocimiento — 15</p></div>
            </div>
          </>
        )}

        {k === 'innovacion' && (
          <>
            <h3 style={{ marginTop: 16 }}>Estrategias de Innovación y Desarrollo</h3>
            <p>Identificación de tendencias, priorización y desarrollo de nuevos productos</p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="card"><h3>Tendencias</h3><p>Identificación de Tendencias</p></div>
              <div className="card"><h3>Tendencias Detectadas</h3><p>18</p></div>
              <div className="card"><h3>Nivel de Relevancia</h3><p>Alto — 8 críticas</p></div>
              <div className="card"><h3>Velocidad de Adopción</h3><p>24% mensual</p></div>
              <div className="card"><h3>Proyectos</h3><p>Priorización de Proyectos</p></div>
              <div className="card"><h3>Proyectos Activos</h3><p>7</p></div>
              <div className="card"><h3>Impacto Estimado</h3><p>+35% ingresos</p></div>
              <div className="card"><h3>Viabilidad</h3><p>8.2/10</p></div>
              <div className="card"><h3>AI Insights</h3><p>Oportunidad de Producto Identificada</p><p>Validación de Concepto Positiva</p><p>Competencia Emergente</p></div>
            </div>
          </>
        )}

        {k === 'cumplimiento' && (
          <>
            <h3 style={{ marginTop: 16 }}>Estrategias de Cumplimiento y Seguridad</h3>
            <p>Monitoreo normativo, gestión de riesgos y reportes regulatorios</p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div className="card"><h3>Normativas</h3><p>Monitoreo de Normativas y Auditorías</p></div>
              <div className="card"><h3>Estado de Cumplimiento</h3><p>96%</p></div>
              <div className="card"><h3>Auditorías Programadas</h3><p>4</p></div>
              <div className="card"><h3>Certificaciones Vigentes</h3><p>12</p></div>
              <div className="card"><h3>Riesgo</h3><p>Alertas de Riesgos Operativos y Legales</p></div>
              <div className="card"><h3>Nivel de Riesgo Global</h3><p>Bajo — 2.3/10</p></div>
              <div className="card"><h3>Incidentes Registrados</h3><p>2</p></div>
              <div className="card"><h3>Tiempo de Resolución</h3><p>4.5 hrs</p></div>
              <div className="card"><h3>Reportes</h3><p>Automatización de Reportes</p><p>Reporte Trimestral Generado</p><p>Actualización Normativa</p><p>Reporte Pendiente</p></div>
            </div>
          </>
        )}

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
