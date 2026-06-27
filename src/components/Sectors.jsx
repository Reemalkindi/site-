import Reveal from './Reveal'

export default function Sectors() {
  return (
    <section id="sectors" className="bg-slate-surface py-20 md:py-24 px-margin-mobile md:px-margin-desktop">
      <Reveal className="mb-14">
        <span className="font-technical-data text-technical-data text-secondary uppercase tracking-widest">// Core Sectors</span>
        <h2 className="font-headline-lg text-headline-lg md:text-[40px] font-bold uppercase mt-2">Sector Architecture</h2>
        <div className="w-24 h-1 bg-accent mt-3"></div>
      </Reveal>

      <div className="asymmetric-grid">
        {/* Hospitality (large) */}
        <Reveal className="col-span-12 md:col-span-7 glass-card p-6 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 aspect-square overflow-hidden">
            <img alt="Hospitality uniforms" className="w-full h-full object-cover img-zoom" src="/assets/img/hospitality.jpg" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-end">
            <span className="font-technical-data text-technical-data text-accent mb-2">01 — HOSPITALITY</span>
            <h3 className="font-headline-lg text-headline-lg mb-4 uppercase">Hospitality &amp; Aviation</h3>
            <p className="font-body-md text-on-surface-variant mb-6">
              Tailored uniforms for hotels, restaurants, cabin crew and front-of-house teams — comfortable,
              stain-resistant fabrics that keep service staff sharp through long shifts.
            </p>
            <a href="#contact" className="w-fit border-b border-primary font-label-caps text-label-caps pb-1 hover:text-accent hover:border-accent transition-all">
              REQUEST DETAILS
            </a>
          </div>
        </Reveal>

        {/* Industrial */}
        <Reveal className="col-span-12 md:col-span-5 glass-card p-6 flex flex-col">
          <div className="overflow-hidden aspect-[4/3] mb-6">
            <img alt="Industrial uniforms" className="w-full h-full object-cover img-zoom" src="/assets/img/industrial.jpg" />
          </div>
          <span className="font-technical-data text-technical-data text-accent mb-2">02 — INDUSTRIAL</span>
          <h3 className="font-headline-lg text-headline-lg mb-4 uppercase">Industrial</h3>
          <p className="font-body-md text-on-surface-variant">
            Hard-wearing coveralls and workwear with reinforced stitching and high-visibility options, built for
            heavy-duty and on-site operations.
          </p>
        </Reveal>

        {/* Medical */}
        <Reveal className="col-span-12 md:col-span-5 glass-card p-6 flex flex-col">
          <div className="overflow-hidden aspect-[4/3] mb-6">
            <img alt="Medical uniforms" className="w-full h-full object-cover img-zoom" src="/assets/img/medical.jpg" />
          </div>
          <span className="font-technical-data text-technical-data text-accent mb-2">03 — MEDICAL</span>
          <h3 className="font-headline-lg text-headline-lg mb-4 uppercase">Medical</h3>
          <p className="font-body-md text-on-surface-variant">
            Clean, comfortable scrubs and lab coats for clinics and hospitals — easy-care fabrics that hold up to
            repeated, high-temperature laundering.
          </p>
        </Reveal>

        {/* Corporate (large) */}
        <Reveal className="col-span-12 md:col-span-7 glass-card p-6 flex flex-col md:flex-row-reverse gap-6">
          <div className="w-full md:w-1/2 aspect-square overflow-hidden">
            <img alt="Corporate uniforms" className="w-full h-full object-cover img-zoom" src="/assets/img/corporate.jpg" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-end">
            <span className="font-technical-data text-technical-data text-accent mb-2">04 — CORPORATE</span>
            <h3 className="font-headline-lg text-headline-lg mb-4 uppercase">Corporate</h3>
            <p className="font-body-md text-on-surface-variant mb-6">
              Smart, brand-aligned business attire at scale — consistent tailoring and finishing so every team member
              represents your identity with confidence.
            </p>
            <a href="#contact" className="w-fit border-b border-primary font-label-caps text-label-caps pb-1 hover:text-accent hover:border-accent transition-all">
              REQUEST DETAILS
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
