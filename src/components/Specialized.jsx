import Reveal from './Reveal'

const features = [
  {
    img: '/assets/img/security.jpg',
    tag: 'SECTOR 05 · SECURITY',
    title: 'Security & Transit',
    desc: 'High-visibility, hard-wearing uniforms for security personnel, transit and facilities teams.',
    offset: false,
  },
  {
    img: '/assets/img/school.jpg',
    tag: 'SECTOR 06 · SCHOOL',
    title: 'School Uniforms',
    desc: 'Comfortable, durable school uniforms produced at volume with consistent sizing and finishing.',
    offset: true,
  },
]

export default function Specialized() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 md:py-24">
      <div className="asymmetric-grid">
        <div className="col-span-12 md:col-span-4">
          <Reveal className="left-rail">
            <span className="font-technical-data text-technical-data text-secondary uppercase tracking-widest">// Featured</span>
            <h2 className="font-headline-lg text-headline-lg md:text-[40px] font-bold uppercase mb-6 mt-2">Specialized Solutions</h2>
            <p className="text-on-surface-variant mb-12">
              Purpose-built uniform programmes for high-specification environments and institutions — managed end to
              end, from design through delivery.
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((f) => (
            <Reveal key={f.title} className={`group cursor-pointer ${f.offset ? 'mt-0 md:mt-24' : ''}`}>
              <div className="relative overflow-hidden mb-6 h-[360px] md:h-[480px]">
                <img alt={f.title} className="w-full h-full object-cover img-zoom" src={f.img} />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 font-technical-data text-[12px] tracking-widest">
                  {f.tag}
                </div>
              </div>
              <h3 className="font-headline-lg text-headline-lg uppercase mb-2">{f.title}</h3>
              <p className="text-on-surface-variant mb-4">{f.desc}</p>
              <a href="#contact" className="font-label-caps text-label-caps text-accent inline-flex items-center gap-1">
                REQUEST DETAILS <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
