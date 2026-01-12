import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function DashboardForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ periodo: '', metricas: '', notas: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Parámetros de Dashboard:\n' + JSON.stringify(form, null, 2))
    navigate('/')
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Dashboard — Configuración</h2>

        <div className="row">
          <div>
            <div className="label">Periodo</div>
            <select className="select" value={form.periodo} onChange={(e) => setForm({ ...form, periodo: e.target.value })}>
              <option value="">Selecciona</option>
              <option value="mensual">Mensual</option>
              <option value="trimestral">Trimestral</option>
              <option value="anual">Anual</option>
            </select>
          </div>
          <div>
            <div className="label">Métricas</div>
            <input className="input" value={form.metricas} onChange={(e) => setForm({ ...form, metricas: e.target.value })} placeholder="Ej: ventas, margen, churn" />
          </div>
        </div>

        <div>
          <div className="label">Notas</div>
          <textarea className="textarea" value={form.notas} onChange={(e) => setForm({ ...form, notas: e.target.value })} />
        </div>

        <div className="actions">
          <button type="button" className="btn secondary" onClick={() => navigate('/')}>Cancelar</button>
          <button type="submit" className="btn">Aplicar</button>
        </div>
      </form>
    </div>
  )
}
