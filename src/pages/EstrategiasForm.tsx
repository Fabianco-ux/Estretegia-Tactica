import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Strategy, saveStrategy, getStrategy } from '../store/strategies'

function uid() { return Math.random().toString(36).slice(2) }

export default function EstrategiasForm() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const idParam = params.get('id') ?? ''

  const [model, setModel] = useState<Strategy>({
    id: uid(),
    nombre: '',
    modulo: 'finanzas',
    tareas: [],
    fechaCreacion: new Date().toISOString(),
  })

  useEffect(() => {
    if (idParam) {
      const s = getStrategy(idParam)
      if (s) setModel(s)
    }
  }, [idParam])

  const addTask = () => {
    const t = { id: uid(), titulo: '' }
    setModel({ ...model, tareas: [...model.tareas, t] })
  }
  const updateTask = (id: string, key: string, value: string) => {
    setModel({ ...model, tareas: model.tareas.map(t => t.id === id ? { ...t, [key]: value } : t) })
  }
  const removeTask = (id: string) => {
    setModel({ ...model, tareas: model.tareas.filter(t => t.id !== id) })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveStrategy(model)
    alert('Estrategia guardada')
    navigate('/estrategias/lista')
  }

  const analysis = useMemo(() => {
    const resumen = `Estrategia ${model.nombre} para ${model.modulo}`
    const riesgos = model.impacto?.riesgo ? `Riesgo: ${model.impacto.riesgo}` : 'Riesgos moderados'
    const oportunidades = 'Oportunidades en eficiencia y crecimiento'
    const recomendaciones = 'Priorizar tareas de alto impacto y baja complejidad'
    const prioridad = model.nivelImpacto ?? 'medio'
    const indicadores = 'ROI, productividad, satisfacción, tiempo de ejecución'
    return { resumen, riesgos, oportunidades, recomendaciones, prioridad, indicadores }
  }, [model])

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Estrategias — Crear/Editar</h2>

        <div className="row">
          <div>
            <div className="label">Nombre de la estrategia</div>
            <input className="input" value={model.nombre} onChange={(e) => setModel({ ...model, nombre: e.target.value })} />
          </div>
          <div>
            <div className="label">Nombre descriptivo</div>
            <input className="input" value={model.nombreDescriptivo ?? ''} onChange={(e) => setModel({ ...model, nombreDescriptivo: e.target.value })} />
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">Descripción</div>
            <input className="input" value={model.descripcion ?? ''} onChange={(e) => setModel({ ...model, descripcion: e.target.value })} />
          </div>
          <div>
            <div className="label">Propósito y alcance</div>
            <input className="input" value={model.proposito ?? ''} onChange={(e) => setModel({ ...model, proposito: e.target.value })} />
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">Cliente / Responsable</div>
            <input className="input" value={model.cliente ?? ''} onChange={(e) => setModel({ ...model, cliente: e.target.value })} />
          </div>
          <div>
            <div className="label">Rol</div>
            <input className="input" value={model.rol ?? ''} onChange={(e) => setModel({ ...model, rol: e.target.value })} />
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">Área</div>
            <input className="input" value={model.area ?? ''} onChange={(e) => setModel({ ...model, area: e.target.value })} />
          </div>
          <div>
            <div className="label">Módulo asociado</div>
            <select className="select" value={model.modulo} onChange={(e) => setModel({ ...model, modulo: e.target.value as Strategy['modulo'] })}>
              <option value="finanzas">Finanzas</option>
              <option value="produccion">Producción</option>
              <option value="marketing">Marketing</option>
              <option value="rrhh">RRHH</option>
              <option value="innovacion">Innovación</option>
              <option value="cumplimiento">Cumplimiento</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">Ahorro (%)</div>
            <input className="input" type="number" value={model.impacto?.ahorro ?? ''} onChange={(e) => setModel({ ...model, impacto: { ...(model.impacto ?? {}), ahorro: Number(e.target.value) } })} />
          </div>
          <div>
            <div className="label">Crecimiento (%)</div>
            <input className="input" type="number" value={model.impacto?.crecimiento ?? ''} onChange={(e) => setModel({ ...model, impacto: { ...(model.impacto ?? {}), crecimiento: Number(e.target.value) } })} />
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">Eficiencia (%)</div>
            <input className="input" type="number" value={model.impacto?.eficiencia ?? ''} onChange={(e) => setModel({ ...model, impacto: { ...(model.impacto ?? {}), eficiencia: Number(e.target.value) } })} />
          </div>
          <div>
            <div className="label">Riesgo (0-100)</div>
            <input className="input" type="number" value={model.impacto?.riesgo ?? ''} onChange={(e) => setModel({ ...model, impacto: { ...(model.impacto ?? {}), riesgo: Number(e.target.value) } })} />
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">ROI</div>
            <input className="input" type="number" value={model.indicadores?.roi ?? ''} onChange={(e) => setModel({ ...model, indicadores: { ...(model.indicadores ?? {}), roi: Number(e.target.value) } })} />
          </div>
          <div>
            <div className="label">Productividad</div>
            <input className="input" type="number" value={model.indicadores?.productividad ?? ''} onChange={(e) => setModel({ ...model, indicadores: { ...(model.indicadores ?? {}), productividad: Number(e.target.value) } })} />
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">Satisfacción</div>
            <input className="input" type="number" value={model.indicadores?.satisfaccion ?? ''} onChange={(e) => setModel({ ...model, indicadores: { ...(model.indicadores ?? {}), satisfaccion: Number(e.target.value) } })} />
          </div>
          <div>
            <div className="label">Tiempo de ejecución (días)</div>
            <input className="input" type="number" value={model.indicadores?.tiempoEjecucion ?? ''} onChange={(e) => setModel({ ...model, indicadores: { ...(model.indicadores ?? {}), tiempoEjecucion: Number(e.target.value) } })} />
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">Ingresos actuales</div>
            <input className="input" type="number" value={model.financieros?.ingresos ?? ''} onChange={(e) => setModel({ ...model, financieros: { ...(model.financieros ?? {}), ingresos: Number(e.target.value) } })} />
          </div>
          <div>
            <div className="label">Egresos actuales</div>
            <input className="input" type="number" value={model.financieros?.egresos ?? ''} onChange={(e) => setModel({ ...model, financieros: { ...(model.financieros ?? {}), egresos: Number(e.target.value) } })} />
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">Presupuesto asignado</div>
            <input className="input" type="number" value={model.financieros?.presupuesto ?? ''} onChange={(e) => setModel({ ...model, financieros: { ...(model.financieros ?? {}), presupuesto: Number(e.target.value) } })} />
          </div>
          <div>
            <div className="label">Ahorro proyectado</div>
            <input className="input" type="number" value={model.financieros?.ahorroProyectado ?? ''} onChange={(e) => setModel({ ...model, financieros: { ...(model.financieros ?? {}), ahorroProyectado: Number(e.target.value) } })} />
          </div>
        </div>

        <div>
          <div className="label">Histórico — Resultados previos</div>
          <textarea className="textarea" value={model.historico?.resultadosPrevios ?? ''} onChange={(e) => setModel({ ...model, historico: { ...(model.historico ?? {}), resultadosPrevios: e.target.value } })} />
        </div>
        <div>
          <div className="label">Histórico — Aprendizajes</div>
          <textarea className="textarea" value={model.historico?.aprendizajes ?? ''} onChange={(e) => setModel({ ...model, historico: { ...(model.historico ?? {}), aprendizajes: e.target.value } })} />
        </div>

        <h3 style={{ marginTop: 16 }}>Tareas</h3>
        <div className="actions" style={{ marginBottom: 12 }}>
          <button type="button" className="btn" onClick={addTask}>Agregar tarea</button>
        </div>
        {model.tareas.map(t => (
          <div key={t.id} style={{ border: '1px solid #e6f0ff', borderRadius: 12, padding: 12, marginBottom: 8 }}>
            <div className="row">
              <div>
                <div className="label">Título</div>
                <input className="input" value={t.titulo} onChange={(e) => updateTask(t.id, 'titulo', e.target.value)} />
              </div>
              <div>
                <div className="label">Responsable</div>
                <input className="input" value={t.responsable ?? ''} onChange={(e) => updateTask(t.id, 'responsable', e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div>
                <div className="label">Rol</div>
                <input className="input" value={t.rol ?? ''} onChange={(e) => updateTask(t.id, 'rol', e.target.value)} />
              </div>
              <div>
                <div className="label">Fecha</div>
                <input className="input" type="date" value={t.fecha ?? ''} onChange={(e) => updateTask(t.id, 'fecha', e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div>
                <div className="label">Estado</div>
                <select className="select" value={t.estado ?? 'pendiente'} onChange={(e) => updateTask(t.id, 'estado', e.target.value)}>
                  <option value="pendiente">Pendiente</option>
                  <option value="en-progreso">En progreso</option>
                  <option value="completada">Completada</option>
                </select>
              </div>
              <div>
                <div className="label">Impacto</div>
                <input className="input" value={t.impacto ?? ''} onChange={(e) => updateTask(t.id, 'impacto', e.target.value)} />
              </div>
            </div>
            <div>
              <div className="label">Descripción</div>
              <textarea className="textarea" value={t.descripcion ?? ''} onChange={(e) => updateTask(t.id, 'descripcion', e.target.value)} />
            </div>
            <div className="row">
              <div>
                <div className="label">Recursos</div>
                <input className="input" value={t.recursos ?? ''} onChange={(e) => updateTask(t.id, 'recursos', e.target.value)} />
              </div>
              <div>
                <div className="label">Dependencias</div>
                <input className="input" value={t.dependencias ?? ''} onChange={(e) => updateTask(t.id, 'dependencias', e.target.value)} />
              </div>
            </div>
            <div className="actions" style={{ justifyContent: 'flex-end' }}>
              <button type="button" className="btn secondary" onClick={() => removeTask(t.id)}>Eliminar</button>
            </div>
          </div>
        ))}

        <h3 style={{ marginTop: 16 }}>Conclusión estratégica</h3>
        <div className="row">
          <div>
            <div className="label">Texto final</div>
            <input className="input" value={model.conclusion?.texto ?? ''} onChange={(e) => setModel({ ...model, conclusion: { ...(model.conclusion ?? {}), texto: e.target.value } })} />
          </div>
          <div>
            <div className="label">Recomendaciones</div>
            <input className="input" value={model.conclusion?.recomendaciones ?? ''} onChange={(e) => setModel({ ...model, conclusion: { ...(model.conclusion ?? {}), recomendaciones: e.target.value } })} />
          </div>
        </div>

        <h3 style={{ marginTop: 16 }}>Análisis con IA</h3>
        <div style={{ border: '1px solid #cde5ff', borderRadius: 12, padding: 12, marginBottom: 12 }}>
          <div className="label">Pregunta automática: Generar análisis estratégico</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
            <div>Resumen: {analysis.resumen}</div>
            <div>Riesgos: {analysis.riesgos}</div>
            <div>Oportunidades: {analysis.oportunidades}</div>
            <div>Recomendaciones: {analysis.recomendaciones}</div>
            <div>Priorización: {analysis.prioridad}</div>
            <div>Indicadores sugeridos: {analysis.indicadores}</div>
          </div>
        </div>

        <div className="actions">
          <button type="button" className="btn secondary" onClick={() => navigate('/estrategias/lista')}>Cancelar</button>
          <button type="submit" className="btn">Guardar</button>
        </div>
      </form>
    </div>
  )
}
