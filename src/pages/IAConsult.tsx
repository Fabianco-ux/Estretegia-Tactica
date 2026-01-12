import { useEffect, useMemo, useState } from 'react'
import { listStrategies, addAnalysis } from '../store/strategies'
import { useNavigate } from 'react-router-dom'

export default function IAConsult() {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [strategies, setStrategies] = useState(listStrategies())
  useEffect(() => { setStrategies(listStrategies()) }, [])
  const selected = useMemo(() => strategies.find(s => s.id === id), [id, strategies])

  const analysis = useMemo(() => {
    if (!selected) return null
    const resumen = `Estrategia ${selected.nombre} (${selected.modulo})`
    const riesgos = selected.impacto?.riesgo ? `Riesgo: ${selected.impacto.riesgo}` : 'Riesgo moderado'
    const oportunidades = 'Mejoras en costos y eficiencia'
    const recomendaciones = 'Planificar sprints, asignar responsables y monitorear KPIs'
    const prioridad = selected.nivelImpacto ?? 'medio'
    const indicadores = 'ROI, productividad, satisfacción, tiempo de ejecución'
    return { resumen, riesgos, oportunidades, recomendaciones, prioridad, indicadores }
  }, [selected])

  const aplicar = () => {
    if (!selected || !analysis) return
    addAnalysis(selected.id, {
      fecha: new Date().toISOString(),
      ...analysis,
    })
    alert('Recomendaciones aplicadas al historial de la estrategia')
  }

  return (
    <div className="container">
      <div className="form">
        <h2>Consultar Estrategia — IA</h2>
        <div className="row">
          <div>
            <div className="label">Selecciona Estrategia</div>
            <select className="select" value={id} onChange={(e) => setId(e.target.value)}>
              <option value="">Selecciona</option>
              {strategies.map(s => (
                <option key={s.id} value={s.id}>{s.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="label">Acciones</div>
            <div className="actions">
              <button className="btn secondary" onClick={() => navigate('/estrategias/lista')}>Ver Estrategias</button>
              <button className="btn secondary" onClick={() => navigate('/')}>Salir</button>
            </div>
          </div>
        </div>

        {selected && analysis && (
          <div style={{ border: '1px solid #cde5ff', borderRadius: 12, padding: 12, marginTop: 12 }}>
            <div className="label">Generar análisis estratégico (IA)</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
              <div>Resumen: {analysis.resumen}</div>
              <div>Riesgos: {analysis.riesgos}</div>
              <div>Oportunidades: {analysis.oportunidades}</div>
              <div>Recomendaciones: {analysis.recomendaciones}</div>
              <div>Priorización: {analysis.prioridad}</div>
              <div>Indicadores sugeridos: {analysis.indicadores}</div>
            </div>
            <div className="actions" style={{ justifyContent: 'flex-end', marginTop: 8 }}>
              <button className="btn" onClick={aplicar}>Aplicar recomendaciones</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
