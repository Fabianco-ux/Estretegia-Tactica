type Props = {
  onEstrategias: () => void
  onDashboard: () => void
}

export default function NavButtons({ onEstrategias, onDashboard }: Props) {
  return (
    <>
      <button className="btn" onClick={onEstrategias}>Ver Estrategias</button>
      <button className="btn secondary" onClick={onDashboard}>Ir al Dashboard</button>
    </>
  )
}
