import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="px-margin-mobile md:px-margin-desktop py-20 md:py-28">
      <div className="asymmetric-grid items-center">
        <Reveal className="col-span-12 md:col-span-6">
          <div className="relative">
            <div className="absolute inset-0 bg-slate-surface translate-x-6 translate-y-6 -z-10"></div>
            <img
              alt="The AXON Garments workforce"
              className="w-full object-contain bg-white p-6 border border-technical-silver"
              src="/assets/img/workforce.jpg"
            />
          </div>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-6 mt-12 md:mt-0 md:pl-8">
          <span className="font-technical-data text-technical-data text-secondary uppercase tracking-widest">// Since 1998</span>
          <h2 className="font-display-lg text-[34px] md:text-[44px] font-black uppercase mt-2 mb-6 leading-none">
            One partner for<br />every uniform.
          </h2>
          <p className="text-on-surface-variant mb-6 leading-relaxed">
            AXON Garments Trading is a UAE-based apparel manufacturer established in 1998. For over two decades we have
            supplied uniforms across every major sector — designing, manufacturing and embroidering in-house to keep
            quality, consistency and delivery firmly under our control.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-l-2 border-accent pl-4">
              <p className="font-label-caps text-label-caps text-secondary mb-2">OUR VISION</p>
              <p className="text-sm text-on-surface-variant">
                To attain customer satisfaction by delivering nothing but the best — using the highest quality of
                resources and world-class systems.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-label-caps text-label-caps text-secondary mb-2">OUR MISSION</p>
              <p className="text-sm text-on-surface-variant">
                Continuous product improvement and timely delivery, achieving the highest levels of customer
                satisfaction on every order.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 font-technical-data text-[12px] tracking-widest">
            <span className="border border-technical-silver px-3 py-2">INTEGRITY &amp; TRANSPARENCY</span>
            <span className="border border-technical-silver px-3 py-2">ISO CERTIFIED</span>
            <span className="border border-technical-silver px-3 py-2">IN-HOUSE EMBROIDERY</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
