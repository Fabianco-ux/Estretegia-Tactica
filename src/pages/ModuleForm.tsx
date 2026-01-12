import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

type ModuleKey = 'finanzas' | 'produccion' | 'marketing' | 'rrhh' | 'innovacion' | 'cumplimiento'

const titles: Record<ModuleKey, string> = {
  finanzas: 'Finanzas',
  produccion: 'Producción',
  marketing: 'Marketing',
  rrhh: 'RRHH',
  innovacion: 'Innovación',
  cumplimiento: 'Cumplimiento',
}

export default function ModuleForm() {
  const { key } = useParams()
  const navigate = useNavigate()
  const k = (key ?? 'finanzas') as ModuleKey

  const [form, setForm] = useState<Record<string, string>>({})

  const fieldsByModule: Record<ModuleKey, Array<{ name: string; label: string; type?: 'text' | 'number' | 'select' }>> = {
    finanzas: [
      { name: 'costos', label: 'Optimización de costos' },
      { name: 'proyecciones', label: 'Proyecciones' },
      { name: 'objetivos', label: 'Control de objetivos' },
    ],
    produccion: [
      { name: 'procesos', label: 'Eficiencia de procesos' },
      { name: 'inventarios', label: 'Inventarios' },
      { name: 'calidad', label: 'Calidad' },
    ],
    marketing: [
      { name: 'campanas', label: 'Campañas' },
      { name: 'segmentacion', label: 'Segmentación' },
      { name: 'prediccion', label: 'Predicción de clientes' },
    ],
    rrhh: [
      { name: 'talento', label: 'Gestión del talento' },
      { name: 'clima', label: 'Clima laboral' },
    ],
    innovacion: [
      { name: 'tendencias', label: 'Tendencias' },
      { name: 'proyectos', label: 'Proyectos' },
      { name: 'productos', label: 'Desarrollo de productos' },
    ],
    cumplimiento: [
      { name: 'normativas', label: 'Normativas' },
      { name: 'riesgos', label: 'Riesgos' },
      { name: 'reportes', label: 'Reportes regulatorios' },
    ],
  }

  const fields = fieldsByModule[k] ?? []

  const handleChange = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Datos del módulo ${titles[k]} enviados:\n` + JSON.stringify(form, null, 2))
    navigate('/')
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>{titles[k]} — Formulario</h2>

        <div className="row">
          {fields.slice(0, 2).map(f => (
            <div key={f.name}>
              <div className="label">{f.label}</div>
              <input
                className="input"
                type="text"
                value={form[f.name] ?? ''}
                onChange={(e) => handleChange(f.name, e.target.value)}
                placeholder={f.label}
              />
            </div>
          ))}
        </div>

        {fields[2] && (
          <div>
            <div className="label">{fields[2].label}</div>
            <textarea
              className="textarea"
              value={form[fields[2].name] ?? ''}
              onChange={(e) => handleChange(fields[2].name, e.target.value)}
              placeholder={fields[2].label}
            />
          </div>
        )}

        <div className="actions">
          <button type="button" className="btn secondary" onClick={() => navigate('/')}>Cancelar</button>
          <button type="submit" className="btn">Enviar</button>
        </div>
      </form>
    </div>
  )
}
