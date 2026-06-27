import { contact } from '../data'

export default function UtilityBar() {
  return (
    <div className="hidden md:block bg-deep-obsidian text-outline-variant border-b border-white/10">
      <div className="flex justify-between items-center px-margin-desktop py-2 font-label-caps text-label-caps tracking-widest">
        <div className="flex items-center gap-6">
          <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-accent transition-colors">
            <span className="material-symbols-outlined text-[16px] text-accent">call</span>
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <span className="material-symbols-outlined text-[16px] text-accent">mail</span>
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 opacity-80">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            {contact.location}
          </span>
          <a href="#" className="hover:text-accent transition-colors border-l border-white/15 pl-6">العربية</a>
        </div>
      </div>
    </div>
  )
}
