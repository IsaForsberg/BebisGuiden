export default function ForskningSomn() {
  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>😴</div>
        <h1>Sömn & anknytning</h1>
        <p>Evidensbaserade råd om barns sömn, trygg anknytning och hur de hänger ihop.</p>
      </div>

      <div className="container py-5">

        {/* Anknytning */}
        <section className="mb-5">
          <h2 className="section-title">Anknytningsteorin</h2>
          <div className="row g-4">
            <div className="col-md-7">
              <div className="card-soft h-100">
                <span className="badge-rose">Grundforskning</span>
                <h4>John Bowlby & Mary Ainsworth</h4>
                <p>Anknytning är det emotionella band som formas mellan ett spädbarn och dess primära omsorgsperson. John Bowlby (1950-60-tal) och Mary Ainsworth (1970-tal) lade grunden för modern anknytnigsforskning.</p>
                <p className="mt-2">Ainsworth identifierade tre grundläggande anknytningsmönster:</p>
                <div className="row g-3 mt-1">
                  {[
                    { type: 'Trygg', color: '#EBF0E9', desc: 'Barnet utforskar med förälder som bas. Protesterar vid separation men lugnas snabbt vid återkomst. Kopplas till lyhörda föräldrar.' },
                    { type: 'Otrygg-ambivalent', color: '#FFF8F0', desc: 'Barnet är klängigt, svårt att lugna. Kopplas till inkonsekvent föräldrarespons.' },
                    { type: 'Otrygg-undvikande', color: '#F5E8E2', desc: 'Barnet verkar oberört vid separation. Kopplas till avvisande föräldrarespons.' },
                  ].map(t => (
                    <div className="col-md-4" key={t.type}>
                      <div style={{ background: t.color, borderRadius: 10, padding: 14 }}>
                        <strong style={{ fontSize: '0.9rem', display: 'block', marginBottom: 6 }}>{t.type}</strong>
                        <p style={{ fontSize: '0.82rem', margin: 0 }}>{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="evidence-stars mt-3">★★★ Mycket hög evidens – anknytningsteori är en av psykologins mest replikerade teorier</div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card-soft h-100">
                <h4>Vad stärker trygg anknytning?</h4>
                <ul className="checklist">
                  <li>Svara konsekvent på gråt – speciellt under 6 månader</li>
                  <li>Ögonkontakt och leenden</li>
                  <li>Hålla, bära, röra vid barnet</li>
                  <li>"Serve and return" – svara på barnets initiativ</li>
                  <li>Namnge barnets känslor: "Du är trött nu"</li>
                  <li>Förutsägbara rutiner</li>
                  <li>Reparera – det är okej att göra fel om man reparerar</li>
                </ul>
                <div className="tip-box mt-3">
                  <strong>Viktig insikt:</strong> Du behöver inte vara perfekt – "good enough parenting" (tillräcklig förälder) räcker för trygg anknytning.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sömn */}
        <section className="mb-5">
          <h2 className="section-title">Barns sömn – vad forskning säger</h2>

          <div className="research-card">
            <span className="badge-rose">Safe Sleep</span>
            <h5>American Academy of Pediatrics (AAP) – Safe Sleep Guidelines 2022</h5>
            <p>Uppdaterade riktlinjer betonar: barnet ska sova på rygg, på fast plan yta, ensamt (eget sovutrymme), i rökfri miljö. Dessa riktlinjer minskar SIDS-risken dramatiskt.</p>
            <p className="mt-2"><strong>Nyheter 2022:</strong> AAP har nu också godkänt rum-delning (förälder och barn i samma rum, men inte i samma säng) som skyddande – upp till 6 månaders ålder.</p>
            <div className="evidence-stars">★★★ Hög evidens (systematisk genomgång)</div>
          </div>

          <div className="research-card">
            <span className="badge-sage">Sömnträning</span>
            <h5>Sömnträning – skadar den anknytningen?</h5>
            <p>En stor australiensisk studie (Price et al., 2012, <em>Pediatrics</em>) följde barn upp till 6 år och fann INGA negativa effekter på anknytning, beteende eller stresshormoner hos barn som genomgick sömnträning.</p>
            <p className="mt-2">En meta-analys (Meltzer & Mindell, 2014) visade att behaviorala sömninterventioner är effektiva och säkra – barn sover bättre, föräldrar mår bättre.</p>
            <div className="evidence-stars">★★★ Hög evidens (RCT + meta-analys)</div>
          </div>

          <div className="research-card">
            <span className="badge-blue">Samsovsning</span>
            <h5>Samsovsning – risker och fördelar</h5>
            <p>WHO och AAP avråder från samsovsning i sängen under de 6 första månaderna pga ökad SIDS-risk, särskilt vid rökning, alkohol och övervikt. Däremot är rum-delning (baby i basinet vid sängen) skyddande.</p>
            <p className="mt-2">Efter 6 månader minskar riskerna. Många familjer väljer samsovsning och det praktiseras i stora delar av världen utan förhöjd risk när säkerhetsriktlinjerna följs.</p>
            <div className="evidence-stars">★★☆ Medel evidens (observationsstudier)</div>
          </div>
        </section>

        {/* Sömnbehov */}
        <section className="mb-5">
          <h2 className="section-title">Sömnbehov per ålder</h2>
          <div className="card-soft">
            <div className="row g-3">
              {[
                { age: 'Nyfödd (0–3 mån)', total: '14–17 tim', night: '8–9 tim', naps: '4–6 tim (3–4 tupplurar)' },
                { age: '3–6 månader', total: '12–15 tim', night: '9–10 tim', naps: '3–4 tim (2–3 tupplurar)' },
                { age: '6–12 månader', total: '12–14 tim', night: '10–12 tim', naps: '2–3 tim (2 tupplurar)' },
                { age: '1–2 år', total: '11–14 tim', night: '10–12 tim', naps: '1–2 tim (1 tupplur)' },
                { age: '2–3 år', total: '10–13 tim', night: '10–12 tim', naps: '0–1 tim' },
              ].map(s => (
                <div className="col-12" key={s.age}>
                  <div style={{ background: '#FAF6F0', borderRadius: 10, padding: '14px 20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                    <strong style={{ minWidth: 160 }}>{s.age}</strong>
                    <span style={{ fontSize: '0.9rem' }}>Totalt: <strong>{s.total}</strong></span>
                    <span style={{ fontSize: '0.9rem' }}>Natt: <strong>{s.night}</strong></span>
                    <span style={{ fontSize: '0.9rem' }}>Dagsömn: <strong>{s.naps}</strong></span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', opacity: 0.65, marginTop: 12 }}>Källa: National Sleep Foundation / AAP</p>
          </div>
        </section>

      </div>
    </div>
  )
}
