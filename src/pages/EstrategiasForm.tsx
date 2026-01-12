import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function EstrategiasForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ objetivo: '', horizonte: '', prioridad: '', descripcion: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Estrategia registrada:\n' + JSON.stringify(form, null, 2))
    navigate('/')
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Ver Estrategias — Formulario</h2>

        <div className="row">
          <div>
            <div className="label">Objetivo</div>
            <input className="input" value={form.objetivo} onChange={(e) => setForm({ ...form, objetivo: e.target.value })} />
          </div>
          <div>
            <div className="label">Horizonte</div>
            <select className="select" value={form.horizonte} onChange={(e) => setForm({ ...form, horizonte: e.target.value })}>
              <option value="">Selecciona</option>
              <option value="corto">Corto plazo</option>
              <option value="medio">Mediano plazo</option>
              <option value="largo">Largo plazo</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div>
            <div className="label">Prioridad</div>
            <select className="select" value={form.prioridad} onChange={(e) => setForm({ ...form, prioridad: e.target.value })}>
              <option value="">Selecciona</option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
          </div>
          <div>
            <div className="label">Descripción</div>
            <input className="input" value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} />
          </div>
        </div>

        <div className="actions">
          <button type="button" className="btn secondary" onClick={() => navigate('/')}>Cancelar</button>
          <button type="submit" className="btn">Guardar</button>
        </div>
      </form>
    </div>
  )
}
