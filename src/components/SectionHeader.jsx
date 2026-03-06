export default function SectionHeader({ title, intro, align = 'left' }) {
  return (
    <div className={`section-header align-${align}`}>
      <p className="eyebrow">{title}</p>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  )
}
