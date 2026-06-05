export default function ForskningSkarmtid() {
  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>📱</div>
        <h1>Skärmtid & stimulans</h1>
        <p>Vad forskning faktiskt säger om skärmtid – och hur du stimulerar barnets nyfikenhet optimalt.</p>
      </div>

      <div className="container py-5">

        {/* Skärmtid */}
        <section className="mb-5">
          <h2 className="section-title">Skärmtid – riktlinjer och forskning</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100">
                <h4>WHO:s riktlinjer (2019)</h4>
                <div style={{ borderLeft: '4px solid #E8C4B8', paddingLeft: 16 }}>
                  {[
                    { age: 'Under 1 år', rec: 'Ingen skärmtid. Undantag: videochatt med familj.' },
                    { age: '1–2 år', rec: 'Ingen skärmtid, eller max med förälder aktiv involvering.' },
                    { age: '2–5 år', rec: 'Max 1 timme/dag med hög kvalitet (PBS, SVT Barnkanalen).' },
                    { age: '6+ år', rec: 'Konsekventa begränsningar som inte stör sömn, rörelse eller socialt liv.' },
                  ].map(r => (
                    <div key={r.age} style={{ padding: '10px 0', borderBottom: '1px solid #F5E8E2' }}>
                      <strong style={{ color: '#B5624A', fontSize: '0.9rem' }}>{r.age}:</strong>
                      <span style={{ fontSize: '0.9rem', marginLeft: 8 }}>{r.rec}</span>
                    </div>
                  ))}
                </div>
                <div className="evidence-stars mt-3">★★★ WHO:s officiella rekommendationer</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft h-100">
                <h4>Varför begränsa för de yngsta?</h4>
                <ul className="checklist">
                  <li>Under 2 år lär sig barn inte lika bra från skärmar som från verkliga interaktioner</li>
                  <li>Passivt tittande ger inte "serve and return"-interaktion</li>
                  <li>Snabba klipp och ljud kan träna hjärnan att kräva konstant stimulans</li>
                  <li>Ersätter tid för fri lek, rörelse och socialt samspel</li>
                  <li>Blått ljus från skärmar stör melatoninproduktionen (sömnhormon)</li>
                </ul>
                <div className="tip-box mt-3">
                  <strong>Undantaget:</strong> Videochatt med morföräldrar = social interaktion. Det är ok.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuansen */}
        <section className="mb-5">
          <h2 className="section-title">Nuansen – det handlar om hur, inte bara hur mycket</h2>
          <div className="research-card">
            <span className="badge-sage">Forskning</span>
            <h5>Innehåll och kontext spelar större roll än tid</h5>
            <p>En studie från University of Michigan (Radesky et al., 2020) visade att kvaliteten på innehållet och om föräldern är med och tittar/kommenterar spelar stor roll. Pedagogiska program tittade tillsammans med en aktiv förälder kan faktiskt vara lärorika från ca 2 år.</p>
            <p className="mt-2"><strong>Passivt bakgrunds-TV</strong> (TV på i bakgrunden) visade sig i flertalet studier vara negativt – det stör barnets uppmärksamhet och föräldrars samspel.</p>
            <div className="evidence-stars">★★☆ Medelhög evidens</div>
          </div>
        </section>

        {/* Alternativ stimulans */}
        <section className="mb-5">
          <h2 className="section-title">Optimal stimulans – utan skärm</h2>
          <div className="row g-4">
            {[
              {
                emoji: '👶',
                age: '0–3 månader',
                activities: ['Ansikts-till-ansikts-kontakt', 'Sjunga och prata', 'Svarta/vita kontrastbilder', 'Mjuk massage', 'Bärning i sjal'],
              },
              {
                emoji: '🧸',
                age: '3–6 månader',
                activities: ['Tummytime (magliggande)', 'Skramla och ringliga leksaker', 'Utflykt och naturintryck', 'Babysång/musikgrupp', 'Spegellek'],
              },
              {
                emoji: '🎯',
                age: '6–12 månader',
                activities: ['Pekböcker och läsning', 'Krypbanor', 'Vatten- och sandlek', 'Sorteringslekar', 'Dans och rytm'],
              },
              {
                emoji: '🏃',
                age: '1–3 år',
                activities: ['Fri utomhuslek', 'Klotsleksaker och pussel', 'Måla och modellera', 'Rolleksaker', 'Biblioteksbesök'],
              },
            ].map(a => (
              <div className="col-md-6" key={a.age}>
                <div className="card-soft h-100">
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{a.emoji}</div>
                  <span className="badge-sage">{a.age}</span>
                  <ul className="checklist mt-3">
                    {a.activities.map(act => <li key={act}>{act}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sensorisk stimulans */}
        <section className="mb-5">
          <h2 className="section-title">Sensorisk stimulans</h2>
          <div className="card-soft">
            <p>Barns hjärnor lär sig via alla sinnen – inte bara syn och hörsel. Varierad sensorisk stimulans stärker neural integration.</p>
            <div className="row g-3 mt-2">
              {[
                { sense: '👁️ Syn', examples: 'Kontrastbilder, naturintryck, ansikten, ljus/skugga' },
                { sense: '👂 Hörsel', examples: 'Röst, musik, naturljud, silence (viktigt med pauser)' },
                { sense: '🤚 Känsel', examples: 'Olika texturer, temperatur, massage, sand, vatten' },
                { sense: '👃 Lukt', examples: 'Naturliga dofter, mat, förälderns lukt (viktig för anknytning)' },
                { sense: '👅 Smak', examples: 'Varierande smaker från 6 mån – inte bara sött' },
                { sense: '⚖️ Rörelse', examples: 'Gunga, lyfta, snurra, vagga – vestibulär stimulans' },
              ].map(s => (
                <div className="col-md-4" key={s.sense}>
                  <div style={{ background: '#FAF6F0', borderRadius: 10, padding: 16 }}>
                    <strong style={{ display: 'block', marginBottom: 6, color: '#B5624A' }}>{s.sense}</strong>
                    <p style={{ fontSize: '0.85rem', margin: 0 }}>{s.examples}</p>
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
