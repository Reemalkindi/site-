import Reveal from './Reveal'
import { capabilityIndex } from '../data'

export default function CapabilityIndex() {
  return (
    <section id="catalog" className="bg-slate-surface py-20 md:py-24 px-margin-mobile md:px-margin-desktop">
      <Reveal className="mb-14">
        <span className="font-technical-data text-technical-data text-secondary uppercase tracking-widest">// Full Catalogue</span>
        <h2 className="font-headline-lg text-headline-lg md:text-[40px] font-bold uppercase mt-2">Capability Index</h2>
        <div className="w-24 h-1 bg-accent mt-3"></div>
        <p className="text-on-surface-variant mt-4 max-w-xl">
          Eleven uniform and apparel categories, all designed, manufactured and finished under one roof.
        </p>
      </Reveal>

      <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-technical-silver border border-technical-silver">
        {capabilityIndex.map((c) => (
          <div key={c.n} className="bg-surface p-6 hover:bg-white transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <span className="font-technical-data text-technical-data text-accent">{c.n}</span>
              <span className="material-symbols-outlined text-outline group-hover:text-accent transition-colors">{c.icon}</span>
            </div>
            <h3 className="font-headline-lg text-xl uppercase mb-1">{c.title}</h3>
            <p className="text-sm text-on-surface-variant">{c.desc}</p>
          </div>
        ))}
        {/* CTA tile */}
        <div className="bg-deep-obsidian p-6 flex flex-col justify-between group">
          <span className="material-symbols-outlined text-accent">arrow_outward</span>
          <div>
            <h3 className="font-headline-lg text-xl uppercase mb-1 text-white">Need something else?</h3>
            <a href="#contact" className="text-sm font-label-caps text-label-caps text-accent">TALK TO OUR TEAM</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
