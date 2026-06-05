export default function ForskningHjarna() {
  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🧠</div>
        <h1>Hjärna & lärande</h1>
        <p>Hur barnets hjärna utvecklas, vad som stärker den och hur lekbaserat lärande fungerar.</p>
      </div>

      <div className="container py-5">

        {/* De första 1000 dagarna */}
        <section className="mb-5">
          <h2 className="section-title">De första 1000 dagarna</h2>
          <div className="row g-4">
            <div className="col-md-7">
              <div className="card-soft h-100">
                <p>De 1000 dagarna från befruktning till 2 års ålder är den mest kritiska perioden för hjärnans utveckling. Under denna tid:</p>
                <ul className="checklist mt-3">
                  <li>Produceras 700 nya neurala kopplingar per sekund</li>
                  <li>Hjärnan växer till 80% av sin vuxna storlek</li>
                  <li>Läggs grunden för kognitiv förmåga, emotionell reglering och social förmåga</li>
                  <li>Är hjärnan mer formbar (plastisk) än vid något annat tillfälle i livet</li>
                </ul>
                <div className="quote-block mt-3">
                  "Hjärnan är inte ett kärl att fylla, utan en eld att tända."
                  <div style={{ fontSize: '0.9rem', marginTop: 4 }}>— Plutarchos (fortfarande aktuellt)</div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-soft h-100">
                <h4>Hjärnans delar och funktioner</h4>
                {[
                  { part: 'Hjärnstammen', func: 'Reglerar andning, hjärtslag, sömn/vaka. Färdigutvecklat vid födseln.' },
                  { part: 'Limbiska systemet', func: 'Känslor, minne, stressrespons. Formas av tidiga erfarenheter.' },
                  { part: 'Prefrontala cortex', func: 'Planering, impulskontroll, empati. Färdigutvecklas inte förrän vid 25 år.' },
                  { part: 'Cerebellum', func: 'Motorik och balans. Stor tillväxt under de första 2 åren.' },
                ].map(p => (
                  <div key={p.part} style={{ borderBottom: '1px solid #F5E8E2', padding: '10px 0' }}>
                    <strong style={{ color: '#B5624A', fontSize: '0.9rem' }}>{p.part}</strong>
                    <p style={{ fontSize: '0.85rem', margin: '4px 0 0' }}>{p.func}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Serve and return */}
        <section className="mb-5">
          <h2 className="section-title">Serve and Return – hjärnans näring</h2>
          <div className="card-soft mb-4">
            <p>Harvard Center on the Developing Child beskriver "serve and return" som det viktigaste för hjärnutvecklingen. Det fungerar som ett pingis-spel:</p>
            <div className="row g-3 mt-2">
              {[
                { step: '🏓', title: 'Barnet servar', desc: 'Barnet gör ett ljud, pekar, ler eller gråter – ett kommunikations-initiativ.' },
                { step: '🏓', title: 'Förälder returnerar', desc: 'Du svarar: ler tillbaka, namnger, svarar på pekning. Ansikte mot ansikte.' },
                { step: '🧠', title: 'Neural koppling', desc: 'En neural koppling stärks i barnets hjärna. Upprepa 100 gånger om dagen.' },
              ].map(s => (
                <div className="col-md-4" key={s.title}>
                  <div style={{ background: '#FAF6F0', borderRadius: 12, padding: 20, textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 8 }}>{s.step}</div>
                    <strong style={{ color: '#B5624A', display: 'block', marginBottom: 6 }}>{s.title}</strong>
                    <p style={{ fontSize: '0.88rem', margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="evidence-stars mt-3">★★★ Hög evidens – Harvard Center on the Developing Child</div>
          </div>
        </section>

        {/* Lekbaserat lärande */}
        <section className="mb-5">
          <h2 className="section-title">Lekbaserat lärande</h2>
          <div className="research-card">
            <span className="badge-rose">Forskning</span>
            <h5>Varför fri lek är avgörande</h5>
            <p>Peter Gray (Boston College) har i decennier forskat om lek. Hans slutsats: ostrukturerad fri lek är den viktigaste mekanismen för barns kognitiva, sociala och emotionella utveckling.</p>
            <p className="mt-2">Studier visar att barn som lek mer under förskoleåren har bättre:</p>
            <ul className="checklist mt-2">
              <li>Exekutiva funktioner (planering, impulskontroll)</li>
              <li>Kreativitet och problemlösning</li>
              <li>Social förmåga och empati</li>
              <li>Akademiska resultat i skolan</li>
            </ul>
            <div className="evidence-stars">★★★ Hög evidens (longitudinella studier)</div>
          </div>

          <div className="row g-4 mt-2">
            {[
              { emoji: '🏗️', type: 'Konstruktionslek', desc: 'Bygga med klossar, Lego, sand. Tränar rumsuppfattning, matematik och planeringsförmåga.' },
              { emoji: '🎭', type: 'Rollek', desc: 'Låtsaslek och fantasilekar. Tränar empati, språk och abstrakt tänkande.' },
              { emoji: '🏃', type: 'Rörelselek', desc: 'Springa, klättra, hoppa. Bygger motorik, koordination och kroppskännedom.' },
              { emoji: '🎨', type: 'Skapande lek', desc: 'Rita, måla, modellera. Ger möjlighet att uttrycka sig och bearbeta upplevelser.' },
            ].map(l => (
              <div className="col-md-6" key={l.type}>
                <div className="card-soft h-100">
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{l.emoji}</div>
                  <h5 style={{ color: '#B5624A' }}>{l.type}</h5>
                  <p style={{ fontSize: '0.9rem' }}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Språk */}
        <section className="mb-5">
          <h2 className="section-title">Språkutveckling</h2>
          <div className="research-card">
            <span className="badge-sage">Klassisk studie</span>
            <h5>30 miljoner ord – Hart & Risley (1995)</h5>
            <p>Studien visade att barn från familjer med lägre socioekonomisk status hört 30 miljoner färre ord vid 4 års ålder jämfört med barn från familjer med hög utbildning. Denna "ordgap" förutspådde skolprestationer bättre än någon annan variabel.</p>
            <p className="mt-2"><strong>Vad detta innebär:</strong> Prata med ditt barn hela dagen. Namnge saker, förklara, beskriv. Inte "vi går ut" utan "vi tar på oss stövlarna, det är blött ute, du kommer se maskarna i gräset".</p>
            <div className="evidence-stars">★★★ Klassisk studie (replikerad)</div>
          </div>

          <div className="card-soft mt-4">
            <h4>Språkliga milstolpar</h4>
            <div className="row g-3 mt-2">
              {[
                { age: '2 månader', milestone: 'Joller – "ahh, ooh"' },
                { age: '6 månader', milestone: 'Babblande – "ba ba, ma ma"' },
                { age: '9 månader', milestone: 'Förstår enkla ord ("nej", eget namn)' },
                { age: '12 månader', milestone: 'Första ord. Pekar för att kommunicera.' },
                { age: '18 månader', milestone: 'Ca 20–50 ord. Kombinerar gester och ord.' },
                { age: '24 månader', milestone: 'Tvåords-fraser ("mama mat", "bil bort")' },
                { age: '36 månader', milestone: 'Hela meningar. Berättar om händelser.' },
              ].map(m => (
                <div className="col-md-6" key={m.age}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', background: '#FAF6F0', borderRadius: 8, padding: '10px 14px' }}>
                    <span style={{ fontWeight: 700, color: '#B5624A', minWidth: 110, fontSize: '0.85rem' }}>{m.age}</span>
                    <span style={{ fontSize: '0.9rem' }}>{m.milestone}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="warning-box mt-3">
              <strong>OBS:</strong> Dessa är riktmärken, inte absoluta gränser. Stor variation är normal. Kontakta BVC om du är orolig.
            </div>
          </div>
        </section>

        {/* Metoder */}
        <section className="mb-5">
          <h2 className="section-title">Pedagogiska metoder – vad har evidens?</h2>
          <div className="row g-4">
            {[
              {
                name: 'Montessori',
                evidence: '★★☆',
                desc: 'Barnets eget tempo, konkreta material, blandalder. Stöds av viss forskning men studiekvaliteten varierar. Fungerar bra för motorik och självständighet.',
                badge: 'badge-rose',
              },
              {
                name: 'RIE (Resources for Infant Educarers)',
                evidence: '★★☆',
                desc: 'Respektera barnets autonomi, undvik att "rädda" barnet från utmaningar, observera istället för att instruera. Begränsad forskning men väl beprövad.',
                badge: 'badge-sage',
              },
              {
                name: 'Attachment Parenting',
                evidence: '★★☆',
                desc: 'Bärning, amning, gemensam sömn. Stöds av anknytningsforskning men är inga villkor för trygg anknytning – lyhördhet är det viktigaste.',
                badge: 'badge-blue',
              },
              {
                name: 'Dialogisk läsning',
                evidence: '★★★',
                desc: 'Interaktiv läsning med frågor och samtal kring boken. En av de mest evidensbaserade metoderna för språkutveckling. Fungerar från 6 månaders ålder.',
                badge: 'badge-rose',
              },
            ].map(m => (
              <div className="col-md-6" key={m.name}>
                <div className="card-soft h-100">
                  <span className={m.badge}>{m.name}</span>
                  <p style={{ fontSize: '0.9rem', marginTop: 10 }}>{m.desc}</p>
                  <div className="evidence-stars">Evidens: {m.evidence}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
