const tips = [
  {
    emoji: '😴',
    category: 'Sömn',
    title: 'Sömnfönster – "wake windows"',
    body: 'Nyfödda kan bara vara vakna i 45–60 min åt gången. Väntar du för länge blir de överstimulerade och svårare att lugna. Lär dig sömnfönstren: 0–3 mån: 45–90 min. 3–6 mån: 1,5–2 tim. 6–9 mån: 2–3 tim.',
    source: 'Taking Cara Babies',
  },
  {
    emoji: '🍼',
    category: 'Matning',
    title: 'Mata på tecken – inte klockan',
    body: 'Bebisars hungertecken: suger på händer, vrider huvud, öppnar munnen, rotar. Det är lättare att mata ett lite hungrigt barn än ett skrikigt. Gråt är ett sent hungertecken.',
    source: 'WHO / UNICEF',
  },
  {
    emoji: '🧠',
    category: 'Stimulans',
    title: 'Prata, prata, prata',
    body: 'Barn som hör fler ord tidigt har bättre språkutveckling och skolresultat. Namnge allt du gör: "Nu tar vi på dig tröjan, den är blå." Det kallas "sportkommentar-tekniken".',
    source: 'Hart & Risley, 1995',
  },
  {
    emoji: '😭',
    category: 'Gråt',
    title: 'PURPLE-gråt',
    body: 'Period: 2–5 veckors ålder. Unexpected: plötslig utan anledning. Resists soothing: inget hjälper. Pain-like face: ser ut att ha ont. Long: kan gråta i timmar. Evening: värst på kvällen. Detta är normalt och går över.',
    source: 'National Center on Shaken Baby Syndrome',
  },
  {
    emoji: '💤',
    category: 'Sömn',
    title: 'Säker sömn – the ABCs',
    body: 'Alone – barnet sover ensamt. Back – alltid på rygg. Crib – i en säker sängutrustning med fast madrass. Inga lösa föremål. Denna kombination minskar SIDS-risk med 50–70%.',
    source: 'American Academy of Pediatrics',
  },
  {
    emoji: '🤱',
    category: 'Amning',
    title: 'Anläggningsteknik – nyckeln till bra amning',
    body: 'Munnen ska ta ett stort tag om bröstvårtan OCH vävnaden runt (areolan). Bebisens näsa ska peka mot bröstvårtan. Om det gör ont – tag loss och börja om. Rätt anläggning = smärtfri amning.',
    source: 'Socialstyrelsen / IBCLC',
  },
  {
    emoji: '🎵',
    category: 'Stimulans',
    title: 'Musik och rytm',
    body: 'Bebisars hjärnor är särskilt mottagliga för rytm och musik. Sjung – oavsett om du sjunger bra eller inte. Barnet bryr sig inte om tonträff, de älskar din röst. Musik stärker matematiskt och lingvistiskt tänkande.',
    source: 'Nina Kraus, Northwestern University',
  },
  {
    emoji: '🌡️',
    category: 'Hälsa',
    title: 'Feber hos nyfödda – akut under 3 månader',
    body: 'Feber över 38°C hos ett barn under 3 månader = sök akut. Det är inte dramatiserande, det är medicinskt nödvändigt. Nyfödda kan inte visa typiska sjukdomstecken och kan bli allvarligt sjuka snabbt.',
    source: 'Socialstyrelsen / 1177',
  },
  {
    emoji: '🧸',
    category: 'Lek',
    title: 'Fri lek är inte slöseri med tid',
    body: 'Ostrukturerad lek, utan mål eller instruktioner, är det bästa sättet för barn att lära sig kreativitet, problemlösning och social förmåga. Undvik att alltid facilitera leken – låt barnet styra.',
    source: 'Peter Gray, Boston College',
  },
  {
    emoji: '💊',
    category: 'Hälsa',
    title: 'Vaccinationsschemat i Sverige',
    body: 'Svenska barn erbjuds gratis vaccin mot 12 sjukdomar. Börjar vid 3 månaders ålder. Vaccination är en av de mest effektiva folkhälsoinsatserna i historien. Se 1177 för aktuellt schema.',
    source: '1177 / Folkhälsomyndigheten',
  },
  {
    emoji: '🛁',
    category: 'Hygien',
    title: 'Du behöver inte bada nyfödda varje dag',
    body: 'Nyfödda behöver egentligen bara bad 2–3 gånger per vecka. Daglig bad kan torka ut huden. Fokusera på ansiktet, halsvecken, armvecken och blöjområdet – "toppa och svansen".',
    source: 'American Academy of Pediatrics',
  },
  {
    emoji: '🌿',
    category: 'Välmående',
    title: 'Föräldraburnout är verkligt',
    body: 'Föräldraburnout drabbar uppskattningsvis 5–8% av föräldrar i Sverige. Tecken: extremt trötthet, distans till barnet, känsla av att vara otillräcklig. Sök hjälp tidigt – det är mod, inte svaghet.',
    source: 'Moïra Mikolajczak, UCLouvain',
  },
]

import { useState } from 'react'

const categories = ['Alla', ...Array.from(new Set(tips.map(t => t.category)))]

export default function Tips() {
  const [activeCategory, setActiveCategory] = useState('Alla')
  const filtered = activeCategory === 'Alla' ? tips : tips.filter(t => t.category === activeCategory)

  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>💡</div>
        <h1>Tips & Tricks</h1>
        <p>Praktiska råd, smarta genvägar och saker ingen berättar för dig – men som gör stor skillnad.</p>
      </div>

      <div className="container py-5">

        <div className="quote-block text-center mb-5" style={{ maxWidth: 600, margin: '0 auto 40px' }}>
          "Föräldraskap handlar inte om perfektion. Det handlar om närvaro."
        </div>

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
          {filtered.map(tip => (
            <div className="col-md-6" key={tip.title}>
              <div className="card-soft h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div style={{ fontSize: '2rem' }}>{tip.emoji}</div>
                  <div>
                    <span className="badge-rose">{tip.category}</span>
                    <h5 style={{ margin: '4px 0 0', color: '#B5624A' }}>{tip.title}</h5>
                  </div>
                </div>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>{tip.body}</p>
                <div style={{ marginTop: 12, fontSize: '0.8rem', opacity: 0.6 }}>
                  Källa: {tip.source}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Do/Don't sektion */}
        <section className="mt-5">
          <h2 className="section-title">Vanliga missförstånd</h2>
          <div className="row g-4 mt-2">
            {[
              { myth: 'Du ska inte bortskämma barnet genom att ta upp det', fact: 'Omöjligt under det första levnadsåret. Att svara på gråt bygger trygg anknytning. Barn som bärs mycket GRÅTER MINDRE.' },
              { myth: 'Bebisen ska sova igenom natten vid 3 månader', fact: 'Biologiskt sett är det normalt att vakna på natten upp till 18 månaders ålder. Förväntningarna är orealistiska och skapar onödig stress.' },
              { myth: 'Läs graviditetsböcker – de är sanna', fact: 'Många populärbeter är inte evidensbaserade. Prioritera böcker skrivna av läkare eller barnpsykologer med referenser.' },
              { myth: 'Konvalescent mat (välling tidigt) gör barnet mätare', fact: 'Forskning visar att tidig introduktion av välling INTE gör barn mer mätta eller ger bättre sömn. Det kan tvärtom orsaka mag-problem.' },
            ].map(m => (
              <div className="col-md-6" key={m.myth}>
                <div className="card-soft h-100">
                  <div className="warning-box mb-3">
                    <strong>❌ Myt:</strong> {m.myth}
                  </div>
                  <div className="tip-box">
                    <strong>✅ Fakta:</strong> {m.fact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
