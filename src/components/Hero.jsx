export default function Hero() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-14 md:py-20 relative overflow-hidden">
      <div className="asymmetric-grid items-center">
        <div className="col-span-12 md:col-span-6 z-10">
          <div className="left-rail mb-8">
            <span className="font-technical-data text-technical-data text-secondary uppercase tracking-widest">
              Est. 1998 · Abu Dhabi, UAE
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg font-black uppercase mb-8">
            Precision-engineered<br />uniform infrastructure.
          </h1>
          <p className="max-w-md text-on-surface-variant mb-10 leading-relaxed">
            For more than 25 years, AXON Garments has outfitted the UAE's workforce — from hospitality floors to
            industrial sites — with durable, precisely-fitted, ISO-certified uniforms, finished in our own embroidery
            department.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps hover:bg-accent transition-all">
              REQUEST A QUOTE
            </a>
            <a href="#sectors" className="border border-technical-silver px-8 py-4 font-label-caps text-label-caps hover:border-accent hover:text-accent transition-all">
              EXPLORE SECTORS
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 mt-12 md:mt-0 relative h-[420px] md:h-[600px]">
          <div className="absolute inset-0 bg-industrial-gray -z-10 translate-x-6 translate-y-6"></div>
          <img
            alt="AXON Garments manufacturing floor"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="/assets/img/industrial.jpg"
          />
          <div className="absolute bottom-4 left-4 bg-deep-obsidian/90 text-white px-4 py-2 font-technical-data text-[12px] tracking-widest">
            IN-HOUSE PRODUCTION
          </div>
        </div>
      </div>
    </section>
  )
}
