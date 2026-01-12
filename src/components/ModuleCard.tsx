type Props = {
  title: string
  description: string
  onClick: () => void
}

export default function ModuleCard({ title, description, onClick }: Props) {
  return (
    <div className="card" onClick={onClick} role="button" aria-label={title} tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick() }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
