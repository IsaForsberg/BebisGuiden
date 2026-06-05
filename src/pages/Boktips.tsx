const books = [
  // STEM & nyfikenhet
  {
    emoji: '🤖',
    category: 'STEM & nyfikenhet',
    ageGroup: '6–10 år',
    title: 'Machine Learning for Kids',
    author: 'Dale Lane',
    desc: 'Lär ut AI och maskininlärning via Scratch. Barnet tränar egna modeller att känna igen bilder, text och ljud. Fantastisk för barn som gillar teknik. Boken kompletterar gratis-verktyget machinelearningforkids.co.uk.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '💻',
    category: 'STEM & nyfikenhet',
    ageGroup: '5–8 år',
    title: 'Hello Ruby: Adventures in Coding',
    author: 'Linda Liukas',
    desc: 'Skriven av en finsk programmerare. Ruby löser problem med hjälp av logik och kreativitet. Introducerar programmeringsbegrepp (loopar, algoritmer) via saga. Finns på svenska: "Hej Ruby".',
    stars: 5,
    swedish: true,
  },
  {
    emoji: '🔬',
    category: 'STEM & nyfikenhet',
    ageGroup: '4–8 år',
    title: 'Ada Twist, Scientist',
    author: 'Andrea Beaty',
    desc: 'Ada ställer frågor om allt – varför luktar saker, hur fungerar saker. Perfekt för att visa att vetenskapligt tänkande = nyfikenhet. Finns i en hel serie om barnforskare.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '🧮',
    category: 'STEM & nyfikenhet',
    ageGroup: '3–6 år',
    title: 'Mathstart-serien',
    author: 'Stuart J. Murphy',
    desc: 'Bilderböcker som introducerar matematiska begrepp (sortering, mönster, addition) via berättelser. Gör matematik naturligt och roligt långt innan skolan.',
    stars: 4,
    swedish: false,
  },
  {
    emoji: '🌱',
    category: 'STEM & nyfikenhet',
    ageGroup: '2–5 år',
    title: 'National Geographic Little Kids',
    author: 'National Geographic',
    desc: 'Faktaböcker om djur, natur och rymden – för de minsta. Fantastiska fotografier. Bygger nyfikenhet och ordförråd på ett naturligt sätt. Bästa fakta-serien för små barn.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '🚀',
    category: 'STEM & nyfikenhet',
    ageGroup: '7–12 år',
    title: 'George and the Secret Key to the Universe',
    author: 'Lucy & Stephen Hawking',
    desc: 'Skriven av Stephen Hawking och hans dotter. Äventyr i rymden som lär ut riktig astrofysik. Barn som läser den vill bli astronomer. Finns i en serie på 5 böcker.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '🧪',
    category: 'STEM & nyfikenhet',
    ageGroup: '0–3 år',
    title: 'Baby Loves Science-serien',
    author: 'Ruth Spiro',
    desc: 'Pappböcker om kvantfysik, termodynamik och fotosyntesen – på babysvenska! Vad barnet tar in vet vi inte, men du läser begreppen högt och normaliserar vetenskapligt språk från dag ett.',
    stars: 4,
    swedish: false,
  },
  // För föräldrar
  {
    emoji: '📖',
    category: 'För föräldrar',
    ageGroup: null,
    title: 'The Whole-Brain Child',
    author: 'Daniel J. Siegel & Tina Payne Bryson',
    desc: 'Hur barnets hjärna fungerar och hur du kan kommunicera med den på ett sätt som stärker anknytning och reglering. En av de bästa böckerna om barns psykologi.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '📖',
    category: 'För föräldrar',
    ageGroup: null,
    title: 'The Happiest Baby on the Block',
    author: 'Harvey Karp',
    desc: '5 S-metoden för att lugna nyfödda: Swaddle, Side/Stomach, Shush, Swing, Suck. Praktisk och evidensbaserad.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '📖',
    category: 'För föräldrar',
    ageGroup: null,
    title: 'Förstå ditt barn',
    author: 'Jesper Juul',
    desc: 'Klassisk dansk barnpsykolog. Handlar om respekt, gränser och relation. Läs med kritiska ögon – inte allt är evidensbaserat, men det är perspektivgivande.',
    stars: 4,
    swedish: true,
  },
  {
    emoji: '📖',
    category: 'För föräldrar',
    ageGroup: null,
    title: 'Graviditetsboken',
    author: 'Jenny Lindqvist & Eva Lenberg',
    desc: 'Svensk, praktisk och uppdaterad guide genom hela graviditeten. Skriven av barnmorskor.',
    stars: 4,
    swedish: true,
  },
  {
    emoji: '📖',
    category: 'För föräldrar',
    ageGroup: null,
    title: 'Crib Sheet',
    author: 'Emily Oster',
    desc: 'Nationalekonom och mamma som granskar all forskning om det första levnadsåret. Amning, sömn, välling, dagis – hon tar bort myterna och ger fakta.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '📖',
    category: 'För föräldrar',
    ageGroup: null,
    title: 'Brain Rules for Baby',
    author: 'John Medina',
    desc: 'Hur hjärnforskning kan tillämpas i föräldraskap. Intelligent, välskriven och full av forskning.',
    stars: 5,
    swedish: false,
  },
  // Barnböcker 0-6 mån
  {
    emoji: '📚',
    category: 'Barnböcker',
    ageGroup: '0–6 månader',
    title: 'Black & White (kontrast-bok)',
    author: 'Tana Hoban',
    desc: 'Svart/vita bilder för nyfödda. Stimulerar synen maximalt under de första veckorna.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '📚',
    category: 'Barnböcker',
    ageGroup: '0–6 månader',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown',
    desc: 'Klassiker. Rytmisk, lugn text. Perfekt som ritual innan läggdags från ca 3 månaders ålder.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '📚',
    category: 'Barnböcker',
    ageGroup: '0–6 månader',
    title: 'Babbarna pekar (pekbok)',
    author: 'Olika förlag',
    desc: 'Svenska tjocksidiga pekböcker med tydliga bilder. Namnge det du ser – perfekt språkträning.',
    stars: 4,
    swedish: true,
  },
  // Barnböcker 6-12 mån
  {
    emoji: '📚',
    category: 'Barnböcker',
    ageGroup: '6–12 månader',
    title: 'Very Hungry Caterpillar',
    author: 'Eric Carle',
    desc: 'Världens mest sålda barnbok. Räknar, namnger mat, berättar om förvandling. Hålig bok för att peka i.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '📚',
    category: 'Barnböcker',
    ageGroup: '6–12 månader',
    title: 'Where is Spot?',
    author: 'Eric Hill',
    desc: 'Pekbok med flikar. Barnet söker efter Spot – tränar förståelse för "objekt finns även när vi inte ser dem" (object permanence).',
    stars: 5,
    swedish: false,
  },
  // Toddler
  {
    emoji: '📚',
    category: 'Barnböcker',
    ageGroup: '1–3 år',
    title: 'Alfons Åberg',
    author: 'Gunilla Bergström',
    desc: 'Svensk klassiker. Alfons är en vanlig liten pojke med vanliga stora känslor. Tidlöst.',
    stars: 5,
    swedish: true,
  },
  {
    emoji: '📚',
    category: 'Barnböcker',
    ageGroup: '1–3 år',
    title: 'The Gruffalo',
    author: 'Julia Donaldson',
    desc: 'Rytmisk, rolig och upprepningsbar. Barn älskar att höra den om och om igen. Bra för språk.',
    stars: 5,
    swedish: false,
  },
  {
    emoji: '📚',
    category: 'Barnböcker',
    ageGroup: '1–3 år',
    title: 'Pettson och Findus',
    author: 'Sven Nordqvist',
    desc: 'Fantastiska illustrationer fulla med detaljer att hitta. Barnen studerar bilderna i timmar.',
    stars: 5,
    swedish: true,
  },
]

import { useState } from 'react'

const categories = ['Alla', 'STEM & nyfikenhet', 'För föräldrar', 'Barnböcker']
const ageGroups = ['Alla åldrar', '0–3 år', '3–6 år', '6–12 månader', '0–6 månader', '1–3 år', '4–8 år', '5–8 år', '6–10 år', '7–12 år']

export default function Boktips() {
  const [activeCategory, setActiveCategory] = useState('Alla')
  const [activeAge, setActiveAge] = useState('Alla åldrar')

  const filtered = books.filter(b => {
    const catMatch = activeCategory === 'Alla' || b.category === activeCategory
    const ageMatch = activeAge === 'Alla åldrar' || b.ageGroup === activeAge
    return catMatch && ageMatch
  })

  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>📚</div>
        <h1>Boktips</h1>
        <p>Böcker för föräldrar och barn – noggrant utvalda baserat på forskning, recensioner och kärlek.</p>
      </div>

      <div className="container py-5">

        <div className="quote-block text-center mb-5" style={{ maxWidth: 650, margin: '0 auto 40px' }}>
          "Att läsa högt för sitt barn är det enskilt bästa du kan göra för deras språkutveckling."
          <div style={{ fontSize: '1rem', marginTop: 8, color: '#3D2B1F', opacity: 0.7 }}>— American Academy of Pediatrics</div>
        </div>

        {/* Filter */}
        <div className="d-flex gap-2 flex-wrap mb-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? '#B5624A' : '#F5E8E2',
                color: activeCategory === cat ? 'white' : '#3D2B1F',
                border: 'none', borderRadius: 20,
                padding: '8px 18px', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
              }}
            >{cat}</button>
          ))}
        </div>

        {activeCategory !== 'För föräldrar' && (
          <div className="d-flex gap-2 flex-wrap mb-4">
            {ageGroups.map(age => (
              <button
                key={age}
                onClick={() => setActiveAge(age)}
                style={{
                  background: activeAge === age ? '#A8BBA0' : '#EBF0E9',
                  color: activeAge === age ? 'white' : '#3D2B1F',
                  border: 'none', borderRadius: 20,
                  padding: '6px 14px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
                }}
              >{age}</button>
            ))}
          </div>
        )}

        <div className="row g-4">
          {filtered.map(book => (
            <div className="col-md-6 col-lg-4" key={book.title}>
              <div className="card-soft h-100">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className={book.category === 'För föräldrar' ? 'badge-rose' : 'badge-sage'}>
                    {book.ageGroup || book.category}
                  </span>
                  {book.swedish && <span className="badge-blue">🇸🇪 Svenska</span>}
                </div>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>{book.emoji}</div>
                <h5 style={{ color: '#B5624A', marginBottom: 2 }}>{book.title}</h5>
                <div style={{ fontSize: '0.85rem', opacity: 0.65, marginBottom: 12 }}>{book.author}</div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{book.desc}</p>
                <div style={{ marginTop: 12, color: '#B5624A' }}>
                  {'★'.repeat(book.stars)}{'☆'.repeat(5 - book.stars)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hur man läser */}
        <section className="mt-5">
          <h2 className="section-title">Hur man läser – dialogisk läsning</h2>
          <div className="card-soft">
            <p>Dialogisk läsning är en metod som ökar språkutvecklingen mer än vanlig läsning. Istället för att bara läsa texten interagerar du med barnet.</p>
            <div className="row g-4 mt-2">
              {[
                { step: '1', title: 'Fråga', desc: 'Ställ frågor om bilderna: "Vad ser du där?" "Vad gör hunden?"' },
                { step: '2', title: 'Peka', desc: 'Peka på saker och namnge dem. Låt barnet peka och bekräfta.' },
                { step: '3', title: 'Pausa', desc: 'Läs inte i ett svep – pausa och vänta. Ge barnet tid att reagera.' },
                { step: '4', title: 'Upprepa', desc: 'Läs samma bok om och om igen. Barn lär sig mer vid varje genomläsning.' },
              ].map(s => (
                <div className="col-md-3" key={s.step}>
                  <div style={{ background: '#F5E8E2', borderRadius: 12, padding: 20, textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', color: '#B5624A' }}>{s.step}</div>
                    <strong style={{ display: 'block', marginBottom: 8 }}>{s.title}</strong>
                    <p style={{ fontSize: '0.85rem', margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
