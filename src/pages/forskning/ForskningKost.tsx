export default function ForskningKost() {
  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🥕</div>
        <h1>Kost & hälsa</h1>
        <p>Evidensbaserade råd om näring under graviditet, amning och barnets första år.</p>
      </div>

      <div className="container py-5">

        {/* Graviditetskost */}
        <section className="mb-5">
          <h2 className="section-title">Näring under graviditet</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-rose">Viktiga näringsämnen</span>
                <div className="mt-3">
                  {[
                    { nutrient: 'Folsyra', dose: '400 µg/dag', sources: 'Baljväxter, gröna blad, lever, tillskott', why: 'Förhindrar neuralrörsdefekter' },
                    { nutrient: 'Järn', dose: '27 mg/dag', sources: 'Rött kött, bönor, spenat + C-vitamin', why: 'Fostrets blodbildning, din ökade blodvolym' },
                    { nutrient: 'Jod', dose: '175 µg/dag', sources: 'Fisk, mejeri, jodat salt', why: 'Sköldkörtelhormon, hjärnutveckling' },
                    { nutrient: 'Omega-3 (DHA)', dose: '200 mg/dag', sources: 'Fet fisk 2x/v, algolja', why: 'Hjärnans och näthinnahans uppbyggnad' },
                    { nutrient: 'D-vitamin', dose: '10 µg/dag', sources: 'Sol, fet fisk, tillskott', why: 'Kalcium-absorption, immunförsvar' },
                    { nutrient: 'Kalcium', dose: '1000 mg/dag', sources: 'Mejeri, kål, mandel', why: 'Fostrets skelett, dina tänder' },
                  ].map(n => (
                    <div key={n.nutrient} style={{ borderBottom: '1px solid #F5E8E2', padding: '10px 0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4 }}>
                        <strong style={{ color: '#B5624A' }}>{n.nutrient}</strong>
                        <span style={{ fontSize: '0.85rem', background: '#F5E8E2', borderRadius: 10, padding: '2px 10px' }}>{n.dose}</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', margin: '4px 0 0', opacity: 0.8 }}>{n.why} · Källa: {n.sources}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft mb-4">
                <span className="badge-rose">Undvik</span>
                <h5 className="mt-2">Vad du bör undvika</h5>
                <ul className="checklist">
                  <li>Alkohol – ingen säker mängd är känd</li>
                  <li>Råa ägg och lättrimmad fisk (listeria, salmonella)</li>
                  <li>Opastöriserade mejeriprodukter</li>
                  <li>Rökt och gravad lax (högst 2 gånger/vecka)</li>
                  <li>Lever och lever-produkter (för mycket A-vitamin)</li>
                  <li>Haj, svärdfisk, marlin (kvicksilver)</li>
                  <li>Koffein &gt; 200 mg/dag (ca 2 koppar)</li>
                  <li>Örtteer i stora mängder (kontrollera innehåll)</li>
                </ul>
              </div>
              <div className="card-soft">
                <span className="badge-sage">Graviditetsdiabetes</span>
                <h5 className="mt-2">Graviditetsdiabetes</h5>
                <p style={{ fontSize: '0.9rem' }}>Drabbar 1–3% av gravida i Sverige. Kroppen hanterar inte insulin lika effektivt. Screenas v. 24–28 med glukostest. Behandlas med kost och ibland insulin. Ökad risk för stort barn och kejsarsnitt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Amning */}
        <section className="mb-5">
          <h2 className="section-title">Amning – forskning och fakta</h2>
          <div className="research-card">
            <span className="badge-rose">WHO:s rekommendation</span>
            <h5>Exklusiv amning 6 månader, sedan kombinerat upp till 2 år</h5>
            <p>WHO och UNICEF rekommenderar exklusiv amning i 6 månader. Fördelar för barnet: minskad risk för öroninflammationer, luftvägsinfektioner, mag-tarmsjukdomar, fetma, typ 1-diabetes och allergier. Fördelar för dig: minskad risk för bröst- och äggstockscancer, typ 2-diabetes och osteoporos.</p>
            <div className="evidence-stars">★★★ Hög evidens (Cochrane-review)</div>
          </div>
          <div className="tip-box mt-3">
            <strong>Amning eller inte:</strong> Det viktigaste är ett väl mätt och tryggt barn. Amning är optimalt men inte alltid möjligt – ersättning är ett utmärkt alternativ och ett väl mätt barn med formel är bättre än ett undernutrerat ammningsbarn.
          </div>
        </section>

        {/* Fast föda */}
        <section className="mb-5">
          <h2 className="section-title">Introduktion av fast föda</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100">
                <h4>Tecknen på readiness (ca 6 månader)</h4>
                <ul className="checklist">
                  <li>Kan sitta stabilt med stöd</li>
                  <li>Har försvagat extrusionsreflexen (spottar inte ut mat automatiskt)</li>
                  <li>Visar intresse för mat (sträcker sig, öppnar munnen)</li>
                  <li>Har bra huvudkontroll</li>
                </ul>
                <div className="warning-box mt-3">
                  <strong>Inte en hälsosam signal:</strong> Vaknar mer på natten, verkar hungrig, börjar med välling på flaska. Dessa är INTE tecken på att solid föda behövs.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft h-100">
                <h4>BLW vs traditionell matning</h4>
                <p><strong>Baby-Led Weaning (BLW):</strong> Barnet matar sig själv med fingermatsliknande bitar. Forskning visar bättre självreglering av hunger/mättnad, mer positiv inställning till mat.</p>
                <p className="mt-2"><strong>Traditionell purékost:</strong> Mosad mat matas med sked. Enklare att kontrollera mängd. Lättare vid allergier.</p>
                <div className="tip-box mt-3">
                  <strong>Kombinationen fungerar bäst:</strong> Introducera båda metoderna – gör det roligt och socialt, inte stressigt.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Allergier */}
        <section className="mb-5">
          <h2 className="section-title">Allergier – ny forskning</h2>
          <div className="research-card">
            <span className="badge-sage">Paradigmskifte</span>
            <h5>Tidig introduktion förebygger allergi</h5>
            <p>LEAP-studien (2015, <em>NEJM</em>) visade att tidig introduktion av jordnöt (4–11 månader) minskade risken för jordnötsallergi med 80% hos högriskbarn. Detta har revolutionerat råden – vi ska INTE undvika allergen utan introducera dem tidigt.</p>
            <p className="mt-2">Nuvarande råd: Introducera de vanligaste allergenerna (mjölk, ägg, vete, jordnöt, soja, nötter, fisk, skaldjur) tidigt – runt 6 månaders ålder, ett i taget.</p>
            <div className="evidence-stars">★★★ Hög evidens (RCT)</div>
          </div>
        </section>

      </div>
    </div>
  )
}
