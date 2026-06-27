import { useState, useEffect } from 'react'

const links = [
  { href: '#sectors', label: 'Sectors' },
  { href: '#custom', label: 'Custom Design' },
  { href: '#catalog', label: 'Capabilities' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-technical-silver transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="bg-deep-obsidian flex items-center px-3 py-2">
            <img src="/assets/img/logo.png" alt="AXON Garments" className="h-8 w-auto" />
          </span>
        </a>
        <div className="hidden lg:flex gap-8 items-center font-label-caps text-label-caps">
          {links.map((l) => (
            <a key={l.href} className="text-on-surface-variant hover:text-accent transition-colors" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-block bg-deep-obsidian text-white px-6 py-3 font-label-caps text-label-caps hover:bg-accent transition-colors duration-300"
          >
            REQUEST QUOTE
          </a>
          <button
            className="lg:hidden text-on-surface"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-technical-silver bg-surface px-margin-mobile py-4 font-label-caps text-label-caps">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} className="py-1" href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
