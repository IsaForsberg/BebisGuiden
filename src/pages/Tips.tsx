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
  {
    emoji: '🧩',
    category: 'Stimulans',
    title: 'Tristess är bra för barnet',
    body: 'Det är okej att barnet blir uttråkat. Tristess tvingar hjärnan att hitta på egna lösningar – det är grunden för kreativitet. Föräldrar behöver inte underhålla barnet hela dagen. Fri lek utan instruktioner är mer värdefullt än strukturerade aktiviteter.',
    source: 'Peter Gray, Boston College',
  },
  {
    emoji: '🔁',
    category: 'Sömn',
    title: 'Sömnregression = neural mognad',
    body: '4-, 8-, 12- och 18-månaders sömnregressioner är tecken på hjärnans snabba tillväxt. Barnet vaknar mer för att det lär sig något nytt – krypa, stå, prata. Dessa perioder varar vanligtvis 2–6 veckor. Du gör ingenting fel.',
    source: 'The Wonder Weeks (Hetzel-van den Bosch & Plooij)',
  },
  {
    emoji: '💬',
    category: 'Stimulans',
    title: '"Serve and return" – pingis för hjärnan',
    body: 'Varje gång barnet gör ett ljud, pekar eller ler och du svarar – stärks en neural koppling. Harvard kallar detta "serve and return". Du behöver inga dyra leksaker – din uppmärksamhet och responsivitet är det bästa verktyget.',
    source: 'Harvard Center on the Developing Child',
  },
  {
    emoji: '🌡️',
    category: 'Hälsa',
    title: 'Tandbrytning orsakar INTE hög feber',
    body: 'En utbredd myt. Forskning visar att tandbrytning kan orsaka lätt temperaturökning (under 38°C) men INTE feber. Om barnet har feber under tandbrytning – sök orsaken på annat håll. Feber är alltid ett tecken på infektion.',
    source: 'Pediatrics (2016)',
  },
  {
    emoji: '🤸',
    category: 'Motorik',
    title: 'Hoppa över krypning är okej',
    body: 'Många oroar sig om barnet inte kryper "rätt". Forskning visar att krypning inte är ett obligatoriskt steg – en del barn skojar, rullar eller reser sig direkt. Det som spelar roll är att barnet rör sig och utforskar, inte metoden.',
    source: 'American Academy of Pediatrics',
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

        {/* Myter */}
        <section className="mt-5">
          <h2 className="section-title">Myter vs. fakta</h2>
          <p className="section-subtitle">Saker som "alla vet" men som forskning motbevisar</p>
          <div className="row g-4 mt-2">
            {[
              {
                myth: 'Du bortskämmer barnet om du tar upp det varje gång det gråter',
                fact: 'Omöjligt under det första levnadsåret. Att konsekvent svara på gråt bygger trygg anknytning. Barn som bärs och hålls mycket gråter faktiskt MINDRE, inte mer.',
              },
              {
                myth: 'Bebisen ska sova igenom natten vid 3 månader',
                fact: 'Biologiskt normalt att vakna om natten upp till 18 månaders ålder. Nattuppvaknanden är ett evolutionärt skyddssystem. Förväntningarna är orealistiska och skapar onödig skuldkänsla.',
              },
              {
                myth: 'Välling/gröt tidigt ger barnet bättre sömn',
                fact: 'Stora studier visar att tidig introduktion av välling INTE förbättrar sömnen. WHO och Socialstyrelsen avråder från välling under 6 månader – det kan dessutom orsaka mag-problem.',
              },
              {
                myth: 'Barn lär sig bäst av strukturerade aktiviteter och "lärande lekar"',
                fact: 'Forskning är tydlig: fri, ostrukturerad lek är det effektivaste sättet att lära sig. Barn som lek mer fritt har bättre exekutiva funktioner, kreativitet och social förmåga.',
              },
              {
                myth: 'Du måste prata med barnet på ditt modersmål – annars förvirras det',
                fact: 'Flerspråkighet förvirrar INTE barn. De skiljer på språk från ca 6 månaders ålder. Flerspråkiga barn kan ha en något smalare vokabulär per språk initialt men totalt sett lika stor eller större.',
              },
              {
                myth: 'Tidig läs- och skrivträning ger smartare barn',
                fact: 'Forskning visar att tidig formell undervisning (innan 6–7 år) inte ger långvariga fördelar. Lek, utforskning och relationer är mer värdefull "skolförberedelse" än ABC-träning.',
              },
              {
                myth: 'Tandbrytning orsakar feber',
                fact: 'En utbredd myt som studier motbevisar. Tandbrytning kan ge lätt temperaturökning (under 38°C) men INTE feber. Feber vid tandbrytning = sök annan orsak.',
              },
              {
                myth: 'Pojkar utvecklas långsammare än flickor',
                fact: 'Det finns statistiska skillnader i grupp men oerhört stor variation inom varje kön. Att förvänta sig att "pojkar alltid är senare" kan göra att man missar verkliga förseningar som bör utredas.',
              },
              {
                myth: 'Klassisk musik gör barn intelligentare (Mozart-effekten)',
                fact: 'Mozart-effekten (1993) var en liten studie på vuxna, feltolkad som att klassisk musik gör BARN smartare. Uppföljningsstudier har inte kunnat replikera resultaten. Musik är bra – men inte för IQ-höjning.',
              },
              {
                myth: 'Du ska inte prata med bebisen – de förstår ändå inte',
                fact: 'Nyfödda känner igen mammans röst vid födseln (hörde den i livmodern). Barn registrerar och lagrar språkljud från dag ett. Varje ord du säger bygger neural kapacitet – oavsett om de "förstår" eller inte.',
              },
              {
                myth: 'Att bära barnet hindrar det från att bli självständigt',
                fact: 'Tvärtom: forskning visar att barn som bärs mycket och har trygg anknytning VÅGAR utforska mer självständigt. Trygghet är grunden för självständighet, inte ett hinder.',
              },
              {
                myth: 'Magliggande (tummytime) är farligt',
                fact: 'Magliggande under VAKEN tid och under UPPSIKT är inte bara säkert – det är nödvändigt för motorisk utveckling. "Back to sleep, tummy to play" är standardrådet från AAP.',
              },
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
