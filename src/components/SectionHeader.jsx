export default function SectionHeader({ title, intro, align = 'left' }) {
  return (
    <div className={`section-header align-${align}`}>
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  )
}
