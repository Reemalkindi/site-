import { contact, whatsappLink } from '../data'

export default function Footer() {
  return (
    <footer className="w-full bg-deep-obsidian text-outline-variant border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-16">
        <div className="col-span-12 md:col-span-4">
          <img src="/assets/img/logo.png" alt="AXON Garments" className="h-12 w-auto mb-6" />
          <p className="font-technical-data text-technical-data leading-relaxed opacity-80 max-w-xs">
            UAE-based uniform manufacturer since 1998. Precision-engineered, ISO-certified apparel for industry across
            the Emirates.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h4 className="font-label-caps text-label-caps mb-6 text-white font-bold">SECTORS</h4>
          <div className="flex flex-col gap-3 font-technical-data text-technical-data">
            <a className="hover:text-accent transition-colors opacity-80" href="#sectors">Hospitality</a>
            <a className="hover:text-accent transition-colors opacity-80" href="#sectors">Industrial</a>
            <a className="hover:text-accent transition-colors opacity-80" href="#sectors">Medical</a>
            <a className="hover:text-accent transition-colors opacity-80" href="#sectors">Corporate</a>
            <a className="hover:text-accent transition-colors opacity-80" href="#catalog">School &amp; Security</a>
          </div>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h4 className="font-label-caps text-label-caps mb-6 text-white font-bold">COMPANY</h4>
          <div className="flex flex-col gap-3 font-technical-data text-technical-data">
            <a className="hover:text-accent transition-colors opacity-80" href="#about">About Us</a>
            <a className="hover:text-accent transition-colors opacity-80" href="#catalog">Capabilities</a>
            <a className="hover:text-accent transition-colors opacity-80" href="#custom">Custom Design</a>
            <a className="hover:text-accent transition-colors opacity-80" href="#contact">Certifications</a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h4 className="font-label-caps text-label-caps mb-6 text-white font-bold">GET IN TOUCH</h4>
          <div className="flex flex-col gap-3 font-technical-data text-technical-data">
            <a href={contact.phoneHref} className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-accent">call</span>{contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-accent">mail</span>{contact.email}
            </a>
            <a href={whatsappLink} className="hover:text-accent transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-accent">chat</span>WhatsApp: {contact.whatsappDisplay}
            </a>
            <span className="flex items-center gap-2 opacity-80">
              <span className="material-symbols-outlined text-[18px] text-accent">location_on</span>{contact.location}
            </span>
          </div>
        </div>
        <div className="col-span-12 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-technical-data text-[12px] opacity-60">© 2026 AXON GARMENTS TRADING. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6 font-technical-data text-[12px]">
            <a className="hover:text-accent opacity-60" href="#">Privacy Policy</a>
            <a className="hover:text-accent opacity-60" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
