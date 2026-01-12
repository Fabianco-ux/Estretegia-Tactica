import { useEffect, useMemo, useState } from 'react'
import { listStrategies, Strategy } from '../store/strategies'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function StrategyList() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [rows, setRows] = useState<Strategy[]>([])
  const moduloFilter = params.get('modulo') ?? ''

  useEffect(() => { setRows(listStrategies()) }, [])

  const filtered = useMemo(() => {
    return rows.filter(r => !moduloFilter || r.modulo === moduloFilter)
  }, [rows, moduloFilter])

  return (
    <div className="container">
      <div className="form">
        <h2>Estrategias — Lista</h2>
        <div className="actions" style={{ justifyContent: 'space-between', marginBottom: 12 }}>
          <div>
            <button className="btn secondary" onClick={() => navigate('/')}>Volver</button>
          </div>
          <div>
            <button className="btn" onClick={() => navigate('/estrategias')}>Nueva Estrategia</button>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Módulo</th>
                <th>Estado</th>
                <th>Responsable</th>
                <th>Fecha</th>
                <th>Impacto</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan={7} style={{ textAlign: 'center', padding: 16 }}>Sin estrategias</td></tr>
              )}
              {filtered.map(s => (
                <tr key={s.id} style={{ borderTop: '1px solid #e6f0ff' }}>
                  <td>{s.nombre}</td>
                  <td>{s.modulo}</td>
                  <td>{s.estado ?? 'activa'}</td>
                  <td>{s.responsable ?? '-'}</td>
                  <td>{new Date(s.fechaCreacion).toLocaleDateString()}</td>
                  <td>{s.nivelImpacto ?? '-'}</td>
                  <td>
                    <button className="btn secondary" onClick={() => navigate(`/estrategias?id=${s.id}`)}>Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
