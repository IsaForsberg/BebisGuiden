const products = [
  {
    emoji: '🛏️',
    category: 'Sömn',
    name: 'IKEA Sniglar spjälsäng',
    desc: 'Enkel, solid, CE-märkt. Konverteras till juniorsäng. Bästa pris/kvalitet.',
    price: 'ca 599 kr',
    link: 'https://www.ikea.com/se/sv/p/sniglar-spjalssang-bok-50426420/',
    tags: ['säng', 'IKEA', 'budgetvänlig'],
  },
  {
    emoji: '🛏️',
    category: 'Sömn',
    name: 'Stokke Sleepi',
    desc: 'Oval design, vajar med barnet. Konverteras i flera steg. Premium-alternativet.',
    price: 'ca 4 995 kr',
    link: 'https://www.stokke.com/se-se/baby-furniture/stokke-sleepi/',
    tags: ['säng', 'Stokke', 'premium'],
  },
  {
    emoji: '🪑',
    category: 'Amning & matning',
    name: 'Stokke Tripp Trapp',
    desc: 'Världens bästa highchair. Justeras för alla åldrar. En investering för livet.',
    price: 'ca 2 495 kr',
    link: 'https://www.stokke.com/se-se/baby-chairs/tripp-trapp/',
    tags: ['highchair', 'Stokke', 'klassiker'],
  },
  {
    emoji: '🛁',
    category: 'Bad',
    name: 'IKEA LÄTTSAM babybadkar',
    desc: 'Ergonomiskt, enkelt att använda, billigt. Perfekt för de första månaderna.',
    price: 'ca 149 kr',
    link: 'https://www.ikea.com/se/sv/p/lattsam-badkar-gronskal-form-groen-vit-90394594/',
    tags: ['bad', 'IKEA', 'budgetvänlig'],
  },
  {
    emoji: '🚗',
    category: 'Transport',
    name: 'Maxi-Cosi Pebble 360',
    desc: 'Bakåtvänd babyskål med 360° rotation. Enkel montering och optimal säkerhet.',
    price: 'ca 4 499 kr',
    link: 'https://www.maxicosi.com/se-se/',
    tags: ['bilbarnstol', 'säkerhet', 'premium'],
  },
  {
    emoji: '🚗',
    category: 'Transport',
    name: 'Joie i-Snug 2',
    desc: 'Bakåtvänd babyskål till lägre pris. Godkänd i 5-stjärnig ADAC-test.',
    price: 'ca 1 699 kr',
    link: 'https://se.joiebaby.com/i-snug-2/',
    tags: ['bilbarnstol', 'säkerhet', 'budgetvänlig'],
  },
  {
    emoji: '🏃',
    category: 'Transport',
    name: 'Thule Urban Glide 2',
    desc: 'Smidig joggingvagn för aktiva föräldrar. Perfekt för promenader och löpning.',
    price: 'ca 7 995 kr',
    link: 'https://www.thule.com/se-se/se/strollers',
    tags: ['vagn', 'träning', 'premium'],
  },
  {
    emoji: '🏃',
    category: 'Transport',
    name: 'Britax Go Next 2',
    desc: 'Prisvärd, enkel och flexibel sittvagn. Bra recensioner och hög säkerhet.',
    price: 'ca 2 799 kr',
    link: 'https://www.britax-roemer.se/',
    tags: ['vagn', 'budgetvänlig'],
  },
  {
    emoji: '🤱',
    category: 'Amning',
    name: 'Medela Freestyle Hands-Free bröstpump',
    desc: 'Diskret, trådlös pump du kan bära i BH. Frihet under pumpning.',
    price: 'ca 3 299 kr',
    link: 'https://www.medela.se/',
    tags: ['amning', 'pump', 'premium'],
  },
  {
    emoji: '🤱',
    category: 'Amning',
    name: 'Haakaa silikonpump',
    desc: 'Enkel silikon-hakapump. Fångar läckage och pumpar passivt. Budgetvänlig favorit.',
    price: 'ca 199 kr',
    link: 'https://www.haakaa.co.nz/',
    tags: ['amning', 'pump', 'budgetvänlig'],
  },
  {
    emoji: '🌡️',
    category: 'Hälsa',
    name: 'Braun No touch termometer',
    desc: 'Pannmätning utan att väcka barnet. Snabb och exakt.',
    price: 'ca 699 kr',
    link: 'https://www.braun.com/se-se/thermometers.html',
    tags: ['hälsa', 'termometer'],
  },
  {
    emoji: '👶',
    category: 'Bärning',
    name: 'Ergobaby Omni 360',
    desc: 'Premium-bärsjal. Bär från nyfödd, fram och bak. Ergonomisk M-position.',
    price: 'ca 1 799 kr',
    link: 'https://ergobaby.se/',
    tags: ['bärning', 'premium'],
  },
]

const categories = ['Alla', ...Array.from(new Set(products.map(p => p.category)))]

import { useState } from 'react'

export default function Inspiration() {
  const [activeCategory, setActiveCategory] = useState('Alla')

  const filtered = activeCategory === 'Alla' ? products : products.filter(p => p.category === activeCategory)

  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🛍️</div>
        <h1>Inspiration & produkter</h1>
        <p>Produkter jag vill köpa, inredning jag drömmer om och saker jag forskat på.</p>
      </div>

      <div className="container py-5">

        {/* Inredning moodboard */}
        <section className="mb-5">
          <h2 className="section-title">Inredning jag drömmer om</h2>
          <div className="row g-4">
            {[
              { emoji: '🌿', title: 'Skandinavisk skog', desc: 'Beige väggar, trädetaljer, björkträd-sticker, ullplaid och linnetextiler. Varmt, naturligt, tidlöst.', colors: ['#F5F0E8', '#D4C5A9', '#8B7355'] },
              { emoji: '🌙', title: 'Midnatt & guld', desc: 'Mörkblå väggfärg på en accent-vägg, guldfärgade detaljer, vita möbler och stjärn-mobil.', colors: ['#2C3E50', '#F4D03F', '#ECF0F1'] },
              { emoji: '🌸', title: 'Dusty rose & naturmaterial', desc: 'Dammig rosa, linne, korg-texturer, makramé-vägg och kaktus-möbler. Mjukt och feminint.', colors: ['#E8C4B8', '#D4A5A5', '#F5F0EC'] },
              { emoji: '🌈', title: 'Modern regnbåge', desc: 'Vita väggar, färgglada detaljer i pastell, öppna hyllor och leksaker i naturmaterial.', colors: ['#FFB3BA', '#BAFFC9', '#BAE1FF'] },
            ].map(m => (
              <div className="col-md-6" key={m.title}>
                <div className="card-soft h-100">
                  <div className="d-flex gap-2 mb-3">
                    {m.colors.map(c => (
                      <div key={c} style={{ width: 40, height: 40, background: c, borderRadius: 8, flexShrink: 0 }} />
                    ))}
                  </div>
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{m.emoji}</div>
                  <h4 style={{ color: '#B5624A' }}>{m.title}</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section>
          <h2 className="section-title">Produkter jag vill köpa</h2>
          <p className="section-subtitle">Klicka på en produkt för att läsa mer eller gå till butiken</p>

          {/* Category filter */}
          <div className="d-flex gap-2 flex-wrap mb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? '#B5624A' : '#F5E8E2',
                  color: activeCategory === cat ? 'white' : '#3D2B1F',
                  border: 'none',
                  borderRadius: 20,
                  padding: '8px 18px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filtered.map(p => (
              <div className="col-md-6 col-lg-4" key={p.name}>
                <div className="product-card h-100">
                  <div className="product-image">
                    <span>{p.emoji}</span>
                  </div>
                  <div className="product-info">
                    <span className="badge-rose">{p.category}</span>
                    <h5 style={{ marginTop: 8, marginBottom: 6 }}>{p.name}</h5>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: 12 }}>{p.desc}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <strong style={{ color: '#B5624A' }}>{p.price}</strong>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-custom"
                        style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                      >
                        Se produkt →
                      </a>
                    </div>
                    <div className="tag-list mt-2">
                      {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-4" style={{ background: '#FAF6F0', borderRadius: 12, padding: 20, fontSize: '0.85rem', opacity: 0.75 }}>
          <strong>OBS:</strong> Priserna är ungefärliga och kan ändras. Jag har inte betalt samarbete med något av dessa märken – det är produkter jag själv valt ut baserat på recensioner och forskning.
        </div>

      </div>
    </div>
  )
}
