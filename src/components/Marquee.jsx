const items = [
  { text: 'ISO CERTIFIED', accent: false },
  { text: 'EST. 1998', accent: true },
  { text: 'IN-HOUSE EMBROIDERY', accent: false },
  { text: 'MADE IN THE UAE', accent: false },
  { text: '25+ YEARS', accent: true },
  { text: '11 SECTORS', accent: false },
]

export default function Marquee() {
  // duplicated once for a seamless loop
  const loop = [...items, ...items]
  return (
    <section className="py-10 border-b border-technical-silver overflow-hidden bg-surface">
      <div className="marquee">
        <div className="marquee-content gap-16 pr-16">
          {loop.map((it, i) => (
            <span
              key={i}
              className={`font-display-lg text-headline-lg font-black uppercase ${
                it.accent ? 'text-accent opacity-70' : 'text-outline-variant opacity-40'
              }`}
            >
              {it.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
