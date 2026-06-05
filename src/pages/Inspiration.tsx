import { useState, useEffect } from 'react'

interface Product {
  id: string
  emoji: string
  category: string
  name: string
  desc: string
  price: string
  link: string
  tags: string[]
  imageUrl?: string
  custom?: boolean
}

const defaultProducts: Product[] = [
  {
    id: '1',
    emoji: '🛏️',
    category: 'Sömn',
    name: 'IKEA Sniglar spjälsäng',
    desc: 'Enkel, solid, CE-märkt. Konverteras till juniorsäng. Bästa pris/kvalitet.',
    price: 'ca 599 kr',
    link: 'https://www.ikea.com/se/sv/p/sniglar-spjalssang-bok-50426420/',
    imageUrl: 'https://www.ikea.com/se/sv/images/products/sniglar-spjalssang-bok__0637999_pe698459_s5.jpg',
    tags: ['säng', 'IKEA', 'budgetvänlig'],
  },
  {
    id: '2',
    emoji: '🛏️',
    category: 'Sömn',
    name: 'Stokke Sleepi Mini',
    desc: 'Oval design, vaggar med barnet. Konverteras i flera steg. Premium-alternativet.',
    price: 'ca 4 995 kr',
    link: 'https://www.stokke.com/se-se/baby-furniture/stokke-sleepi/',
    imageUrl: 'https://www.stokke.com/medias/sys_master/h48/h20/9523551576094.jpg',
    tags: ['säng', 'Stokke', 'premium'],
  },
  {
    id: '3',
    emoji: '🪑',
    category: 'Matning',
    name: 'Stokke Tripp Trapp',
    desc: 'Världens bästa highchair. Justeras för alla åldrar. En investering för livet.',
    price: 'ca 2 495 kr',
    link: 'https://www.stokke.com/se-se/baby-chairs/tripp-trapp/',
    imageUrl: 'https://www.stokke.com/medias/sys_master/h80/hd8/9539765346334.jpg',
    tags: ['highchair', 'Stokke', 'klassiker'],
  },
  {
    id: '4',
    emoji: '🛁',
    category: 'Bad',
    name: 'IKEA LÄTTSAM babybadkar',
    desc: 'Ergonomiskt, enkelt att använda, billigt. Perfekt för de första månaderna.',
    price: 'ca 149 kr',
    link: 'https://www.ikea.com/se/sv/p/lattsam-badkar-gronskal-form-groen-vit-90394594/',
    imageUrl: 'https://www.ikea.com/se/sv/images/products/lattsam-badkar-gronskal-form-groen-vit__1032464_pe836009_s5.jpg',
    tags: ['bad', 'IKEA', 'budgetvänlig'],
  },
  {
    id: '5',
    emoji: '🚗',
    category: 'Transport',
    name: 'Maxi-Cosi Pebble 360 Pro',
    desc: 'Bakåtvänd babyskål med 360° rotation. Enkel montering och optimal säkerhet.',
    price: 'ca 4 499 kr',
    link: 'https://www.maxicosi.com/se-se/',
    imageUrl: 'https://images.maxicosi.com/is/image/maxicosi/8044510110_MaxiCosi_CarSeat_Pebble360Pro_AuthenticBlack_3qrt_back_shadow.png',
    tags: ['bilbarnstol', 'säkerhet', 'premium'],
  },
  {
    id: '6',
    emoji: '🚗',
    category: 'Transport',
    name: 'Joie i-Snug 2',
    desc: 'Bakåtvänd babyskål till lägre pris. Godkänd i 5-stjärnig ADAC-test.',
    price: 'ca 1 699 kr',
    link: 'https://se.joiebaby.com/',
    imageUrl: '',
    tags: ['bilbarnstol', 'säkerhet', 'budgetvänlig'],
  },
  {
    id: '7',
    emoji: '🏃',
    category: 'Transport',
    name: 'Thule Urban Glide 2',
    desc: 'Smidig joggingvagn för aktiva föräldrar. Perfekt för promenader och löpning.',
    price: 'ca 7 995 kr',
    link: 'https://www.thule.com/se-se/se/strollers',
    imageUrl: 'https://www.thule.com/globalassets/pdp-hero/strollers/jogging-strollers/thule-urban-glide-2_heroimage_black_10101950.jpg',
    tags: ['vagn', 'träning', 'premium'],
  },
  {
    id: '8',
    emoji: '🤱',
    category: 'Amning',
    name: 'Medela Freestyle Hands-Free',
    desc: 'Diskret, trådlös pump du kan bära i BH. Frihet under pumpning.',
    price: 'ca 3 299 kr',
    link: 'https://www.medela.se/',
    imageUrl: 'https://www.medela.com/dam/jcr:6e8d9a9a-a6b4-4b2b-a3b5-6e8d9a9a6e8d/freestyle-handsfree.png',
    tags: ['amning', 'pump', 'premium'],
  },
  {
    id: '9',
    emoji: '🤱',
    category: 'Amning',
    name: 'Haakaa silikonpump',
    desc: 'Enkel silikon-pump. Fångar läckage och pumpar passivt. Budgetvänlig favorit.',
    price: 'ca 199 kr',
    link: 'https://www.haakaa.co.nz/',
    imageUrl: '',
    tags: ['amning', 'pump', 'budgetvänlig'],
  },
  {
    id: '10',
    emoji: '👶',
    category: 'Bärning',
    name: 'Ergobaby Omni 360',
    desc: 'Premium-bärsjal. Bär från nyfödd, fram och bak. Ergonomisk M-position.',
    price: 'ca 1 799 kr',
    link: 'https://ergobaby.se/',
    imageUrl: 'https://ergobaby.com/cdn/shop/products/omni360_pearlgrey.jpg',
    tags: ['bärning', 'premium'],
  },
  {
    id: '11',
    emoji: '🌡️',
    category: 'Hälsa',
    name: 'Braun No touch-termometer',
    desc: 'Pannmätning utan att väcka barnet. Snabb och exakt.',
    price: 'ca 699 kr',
    link: 'https://www.braun.com/se-se/thermometers.html',
    imageUrl: '',
    tags: ['hälsa', 'termometer'],
  },
  {
    id: '12',
    emoji: '🧸',
    category: 'Stimulans',
    name: 'Manhattan Toy Winkel Rattle',
    desc: 'Klassisk bite-rattle. BPA-fri, perfekt för 3–12 månader. Stimulerar motorik och syn.',
    price: 'ca 249 kr',
    link: 'https://manhattantoy.com/',
    imageUrl: '',
    tags: ['leksak', 'stimulans', 'klassiker'],
  },
]

const categories = ['Alla', 'Sömn', 'Matning', 'Transport', 'Amning', 'Bad', 'Bärning', 'Hälsa', 'Stimulans']

const emojis = ['🛏️','🪑','🛁','🚗','🤱','🧸','🌡️','👶','🏃','🎯','🍼','🧦','🎨','📚','🌿']

const STORAGE_KEY = 'bebisguiden_custom_products'

function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="product-card h-100" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Image */}
      <div style={{
        width: '100%', height: 200, background: '#FAF6F0',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', position: 'relative',
        borderRadius: '16px 16px 0 0',
      }}>
        {product.imageUrl && !imgError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 12 }}
          />
        ) : (
          <span style={{ fontSize: '4rem' }}>{product.emoji}</span>
        )}
        {product.custom && (
          <span style={{
            position: 'absolute', top: 8, right: 8,
            background: '#A8BBA0', color: 'white',
            borderRadius: 10, padding: '2px 8px', fontSize: '0.75rem', fontWeight: 700,
          }}>Eget val</span>
        )}
      </div>

      <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span className="badge-rose">{product.category}</span>
        <h5 style={{ marginTop: 8, marginBottom: 6, fontSize: '1rem' }}>{product.name}</h5>
        <p style={{ fontSize: '0.88rem', opacity: 0.8, flex: 1 }}>{product.desc}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <strong style={{ color: '#B5624A' }}>{product.price}</strong>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom"
            style={{ padding: '7px 16px', fontSize: '0.82rem' }}
          >
            Se produkt →
          </a>
        </div>
        <div className="tag-list mt-2">
          {product.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}

function AddProductForm({ onAdd }: { onAdd: (p: Product) => void }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: '', category: 'Sömn', desc: '', price: '', link: '', imageUrl: '', emoji: '🛏️', tags: '',
  })
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.link) { setError('Namn och länk krävs.'); return }
    const product: Product = {
      id: Date.now().toString(),
      name: form.name,
      category: form.category,
      desc: form.desc,
      price: form.price || 'Pris okänt',
      link: form.link,
      imageUrl: form.imageUrl,
      emoji: form.emoji,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      custom: true,
    }
    onAdd(product)
    setForm({ name: '', category: 'Sömn', desc: '', price: '', link: '', imageUrl: '', emoji: '🛏️', tags: '' })
    setError('')
    setOpen(false)
  }

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(o => !o)}
        className="btn-primary-custom"
        style={{ display: 'flex', alignItems: 'center', gap: 8 }}
      >
        {open ? '✕ Avbryt' : '+ Lägg till egen produkt'}
      </button>

      {open && (
        <div className="card-soft mt-3" style={{ maxWidth: 600 }}>
          <h5 style={{ color: '#B5624A', marginBottom: 20 }}>Ny produkt</h5>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, display: 'block' }}>Emoji *</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {emojis.map(e => (
                    <button
                      type="button" key={e}
                      onClick={() => setForm(f => ({ ...f, emoji: e }))}
                      style={{
                        fontSize: '1.4rem', padding: '4px 8px', border: '2px solid',
                        borderColor: form.emoji === e ? '#B5624A' : '#E8C4B8',
                        borderRadius: 8, background: form.emoji === e ? '#F5E8E2' : 'white',
                        cursor: 'pointer',
                      }}
                    >{e}</button>
                  ))}
                </div>
              </div>

              <div className="col-md-8">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, display: 'block' }}>Produktnamn *</label>
                <input
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="t.ex. Stokke Tripp Trapp"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #E8C4B8', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div className="col-md-4">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, display: 'block' }}>Kategori</label>
                <select
                  value={form.category}
                  onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #E8C4B8', fontSize: '0.9rem', background: 'white', outline: 'none' }}
                >
                  {categories.filter(c => c !== 'Alla').map(c => <option key={c}>{c}</option>)}
                  <option>Övrigt</option>
                </select>
              </div>

              <div className="col-12">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, display: 'block' }}>Beskrivning</label>
                <textarea
                  value={form.desc}
                  onChange={e => setForm(f => ({ ...f, desc: e.target.value }))}
                  placeholder="Kort beskrivning av produkten..."
                  rows={2}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #E8C4B8', fontSize: '0.9rem', resize: 'vertical', outline: 'none' }}
                />
              </div>

              <div className="col-md-4">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, display: 'block' }}>Pris</label>
                <input
                  value={form.price}
                  onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
                  placeholder="ca 599 kr"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #E8C4B8', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div className="col-md-8">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, display: 'block' }}>Länk till produkten *</label>
                <input
                  value={form.link}
                  onChange={e => setForm(f => ({ ...f, link: e.target.value }))}
                  placeholder="https://..."
                  type="url"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #E8C4B8', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div className="col-12">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, display: 'block' }}>Bild-URL (valfritt)</label>
                <input
                  value={form.imageUrl}
                  onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))}
                  placeholder="https://... (klistra in länk till produktbild)"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #E8C4B8', fontSize: '0.9rem', outline: 'none' }}
                />
                <p style={{ fontSize: '0.78rem', opacity: 0.6, marginTop: 4 }}>Tips: högerklicka på en produktbild på butikens sida → "Kopiera bildadress"</p>
              </div>

              <div className="col-12">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 4, display: 'block' }}>Taggar (kommaseparerade)</label>
                <input
                  value={form.tags}
                  onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                  placeholder="säkerhet, premium, budgetvänlig"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #E8C4B8', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              {error && <div className="col-12"><div className="warning-box">{error}</div></div>}

              <div className="col-12">
                <button type="submit" className="btn-primary-custom">Lägg till produkt</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default function Inspiration() {
  const [activeCategory, setActiveCategory] = useState('Alla')
  const [customProducts, setCustomProducts] = useState<Product[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    } catch { return [] }
  })

  const allProducts = [...defaultProducts, ...customProducts]

  function addProduct(p: Product) {
    const updated = [...customProducts, p]
    setCustomProducts(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  function removeProduct(id: string) {
    const updated = customProducts.filter(p => p.id !== id)
    setCustomProducts(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  useEffect(() => {
    // keep localStorage in sync if component re-mounts
  }, [])

  const filtered = activeCategory === 'Alla' ? allProducts : allProducts.filter(p => p.category === activeCategory)

  const allCategories = ['Alla', ...Array.from(new Set(allProducts.map(p => p.category)))]

  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🛍️</div>
        <h1>Inspiration & produkter</h1>
        <p>Produkter jag vill köpa, inredning jag drömmer om – och möjlighet att lägga till egna favoriter.</p>
      </div>

      <div className="container py-5">

        {/* Moodboards */}
        <section className="mb-5">
          <h2 className="section-title">Inredning jag drömmer om</h2>
          <div className="row g-4">
            {[
              { emoji: '🌿', title: 'Skandinavisk skog', desc: 'Beige väggar, trädetaljer, björkträd-sticker, ullplaid och linnetextiler. Varmt, naturligt, tidlöst.', colors: ['#F5F0E8', '#D4C5A9', '#8B7355'] },
              { emoji: '🌙', title: 'Midnatt & guld', desc: 'Mörkblå accent-vägg, guldfärgade detaljer, vita möbler och stjärn-mobil.', colors: ['#2C3E50', '#F4D03F', '#ECF0F1'] },
              { emoji: '🌸', title: 'Dusty rose & naturmaterial', desc: 'Dammig rosa, linne, korg-texturer, makramé-vägg. Mjukt och feminin.', colors: ['#E8C4B8', '#D4A5A5', '#F5F0EC'] },
              { emoji: '🌈', title: 'Modern regnbåge', desc: 'Vita väggar, färgglada pastelldetaljer, öppna hyllor med naturmaterial.', colors: ['#FFB3BA', '#BAFFC9', '#BAE1FF'] },
            ].map(m => (
              <div className="col-md-6" key={m.title}>
                <div className="card-soft h-100">
                  <div className="d-flex gap-2 mb-3">
                    {m.colors.map(c => <div key={c} style={{ width: 40, height: 40, background: c, borderRadius: 8 }} />)}
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
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
            <h2 className="section-title mb-0">Produkter</h2>
            <AddProductForm onAdd={addProduct} />
          </div>

          {/* Category filter */}
          <div className="d-flex gap-2 flex-wrap mb-4">
            {allCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? '#B5624A' : '#F5E8E2',
                  color: activeCategory === cat ? 'white' : '#3D2B1F',
                  border: 'none', borderRadius: 20, padding: '8px 18px',
                  fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
                }}>{cat}</button>
            ))}
          </div>

          <div className="row g-4">
            {filtered.map(p => (
              <div className="col-md-6 col-lg-4" key={p.id} style={{ position: 'relative' }}>
                <ProductCard product={p} />
                {p.custom && (
                  <button
                    onClick={() => removeProduct(p.id)}
                    title="Ta bort"
                    style={{
                      position: 'absolute', top: 8, left: 24,
                      background: '#E8C4B8', border: 'none',
                      borderRadius: '50%', width: 28, height: 28,
                      cursor: 'pointer', fontSize: '0.8rem', color: '#3D2B1F',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >✕</button>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-4" style={{ background: '#FAF6F0', borderRadius: 12, padding: 20, fontSize: '0.85rem', opacity: 0.75 }}>
          <strong>OBS:</strong> Priserna är ungefärliga och kan ändras. Inga betalda samarbeten – egna val baserade på recensioner och forskning.
        </div>

      </div>
    </div>
  )
}
