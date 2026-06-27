import Reveal from './Reveal'
import { contact } from '../data'

export default function CTA() {
  return (
    <section id="contact" className="bg-industrial-gray py-24 md:py-32 text-center">
      <Reveal className="max-w-4xl mx-auto px-margin-mobile">
        <span className="font-technical-data text-technical-data text-secondary uppercase tracking-[0.3em] mb-6 block">
          Let's get started
        </span>
        <h2 className="font-display-lg text-display-lg font-black uppercase mb-8">Ready to outfit your team?</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-12">
          Tell us your sector, sizes and quantities — we'll prepare a quote and sample plan. Talk to our Abu Dhabi
          team directly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={`mailto:${contact.email}`} className="bg-primary text-on-primary px-10 py-5 font-label-caps text-label-caps hover:bg-accent transition-all">
            EMAIL FOR A QUOTE
          </a>
          <a href={contact.phoneHref} className="bg-white border border-technical-silver px-10 py-5 font-label-caps text-label-caps hover:border-accent hover:text-accent transition-all">
            CALL {contact.phone}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
