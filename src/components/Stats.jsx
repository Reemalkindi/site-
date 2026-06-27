const stats = [
  { value: '1998', label: 'YEAR ESTABLISHED' },
  { value: '25', sup: '+', label: 'YEARS OF SERVICE' },
  { value: '11', label: 'UNIFORM SECTORS' },
  { value: 'ISO', label: 'CERTIFIED QUALITY' },
]

export default function Stats() {
  return (
    <section className="bg-deep-obsidian text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-y border-white/10">
        {stats.map((s) => (
          <div key={s.label} className="px-6 md:px-margin-desktop py-10">
            <div className="font-display-lg text-[40px] leading-none font-black text-accent">
              {s.value}
              {s.sup && <span className="text-2xl align-top">{s.sup}</span>}
            </div>
            <div className="font-label-caps text-label-caps mt-3 text-outline-variant">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
