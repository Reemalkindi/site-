// Centralised content for AXON Garments — the 11 service categories from axongarments.com

export const capabilityIndex = [
  { n: '01', icon: 'restaurant', title: 'Hospitality', desc: 'Hotel, restaurant & service uniforms.' },
  { n: '02', icon: 'engineering', title: 'Industrial', desc: 'Coveralls & heavy-duty workwear.' },
  { n: '03', icon: 'medical_services', title: 'Medical', desc: 'Scrubs, lab coats & clinical wear.' },
  { n: '04', icon: 'local_police', title: 'Security & Transit', desc: 'High-visibility security uniforms.' },
  { n: '05', icon: 'school', title: 'School', desc: 'Durable, high-volume school uniforms.' },
  { n: '06', icon: 'business_center', title: 'Corporate', desc: 'Brand-aligned business attire.' },
  { n: '07', icon: 'checkroom', title: 'T-Shirts & Polos', desc: 'Ready-made & customised t-shirts.' },
  { n: '08', icon: 'ac_unit', title: 'Fleece & Rain Jackets', desc: 'Outerwear for every climate.' },
  { n: '09', icon: 'design_services', title: 'Custom Uniforms', desc: 'Fully bespoke uniform programmes.' },
  { n: '10', icon: 'grade', title: 'Embroidery & Logos', desc: 'In-house embroidery & logo placement.' },
  { n: '11', icon: 'styler', title: 'Accessories', desc: 'Caps, aprons, ties & finishing items.' },
]

export const contact = {
  phone: '+971 2 628 2444',
  phoneHref: 'tel:+97126282444',
  email: 'info@axongarments.com',
  whatsappNumber: '971505071713',
  whatsappDisplay: '+971 50 507 1713',
  location: 'Abu Dhabi, United Arab Emirates',
}

export const whatsappLink =
  `https://api.whatsapp.com/send?phone=${contact.whatsappNumber}&text=` +
  encodeURIComponent('I visited your website and would like more info')
