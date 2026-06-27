import Reveal from './Reveal'

const specs = [
  { label: 'Production', value: 'IN-HOUSE, UAE' },
  { label: 'Quality System', value: 'ISO CERTIFIED' },
  { label: 'Branding', value: 'EMBROIDERY & LOGO' },
]

const features = [
  { icon: 'straighten', title: 'PRECISE FIT', desc: 'Full size ranges and tailoring for every body and role.' },
  { icon: 'palette', title: 'YOUR COLOURS & LOGO', desc: 'Brand-matched fabrics with in-house embroidery and logo placement.' },
  { icon: 'factory', title: 'SCALE PRODUCTION', desc: 'Reliable fulfilment from small teams to large institutions.' },
]

export default function CustomDesign() {
  return (
    <section id="custom" className="relative flex items-center bg-deep-obsidian py-20 md:py-28">
      <div className="absolute inset-0 opacity-25">
        <img alt="Custom uniform production" className="w-full h-full object-cover" src="/assets/img/aviation.jpg" />
      </div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full">
        <Reveal className="max-w-4xl glass-card !bg-deep-obsidian/80 !border-white/15 text-white p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span className="font-label-caps text-label-caps tracking-[0.2em] text-outline-variant">CUSTOM UNIFORM DESIGN</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="font-display-lg text-[34px] md:text-[44px] font-black uppercase mb-6 leading-none">
                Built to your<br />specification.
              </h2>
              <p className="text-outline-variant mb-8 leading-relaxed">
                From fabric selection to fit, colour and finishing, we design uniforms around how your team actually
                works — then produce and embroider them in-house for full control over quality and timing.
              </p>
              <div className="space-y-4">
                {specs.map((s) => (
                  <div key={s.label} className="flex justify-between border-b border-white/15 pb-2">
                    <span className="font-technical-data text-technical-data uppercase text-outline-variant">{s.label}</span>
                    <span className="font-technical-data text-technical-data text-accent">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center border-l border-white/15 md:pl-8">
              <ul className="space-y-6">
                {features.map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <span className="material-symbols-outlined text-accent">{f.icon}</span>
                    <div>
                      <p className="font-label-caps text-label-caps mb-1">{f.title}</p>
                      <p className="text-sm text-outline">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-10 inline-block w-fit bg-accent text-white px-8 py-4 font-label-caps text-label-caps hover:bg-accent-bright transition-all">
                START YOUR DESIGN
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
