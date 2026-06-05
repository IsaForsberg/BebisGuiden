export default function Barnrummet() {
  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🛏️</div>
        <h1>Barnrummet</h1>
        <p>Inredning, färger, möbler, smart förvaring och säkerhet – allt du behöver tänka på.</p>
      </div>

      <div className="container py-5">

        {/* Färger */}
        <section className="mb-5">
          <h2 className="section-title">Färgval – vad forskning säger</h2>
          <div className="row g-4">
            <div className="col-md-8">
              <div className="card-soft">
                <p>Nyfödda kan bara se skarpt på 20–30 cm avstånd och uppfattar kontrast bättre än färg. Starka kontraster (svart/vitt/rött) stimulerar synen mer än pastellfärger under de första månaderna. Efter 3–4 månader ser barnet fler nyanser.</p>
                <div className="row g-3 mt-2">
                  {[
                    { color: '#F5E8E2', name: 'Dammig rosa', mood: 'Lugn, varm, feminin' },
                    { color: '#EBF0E9', name: 'Salviagrön', mood: 'Naturlig, fridfull' },
                    { color: '#E8F0F3', name: 'Duvblå', mood: 'Rolig, könsneutral' },
                    { color: '#FFF8F0', name: 'Varm vit', mood: 'Neutral, tidlös' },
                    { color: '#F0EBE3', name: 'Sand/beige', mood: 'Jordnära, varm' },
                    { color: '#E8E4F0', name: 'Lavendel', mood: 'Mild, lugn' },
                  ].map(c => (
                    <div className="col-4 col-md-2" key={c.name}>
                      <div style={{ background: c.color, borderRadius: 12, padding: '20px 8px', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{c.name}</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: 4 }}>{c.mood}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tip-box mt-3">
                  <strong>Tips:</strong> Välj en neutral basfärg på väggarna (beige, vit, duvblå) – det är lätt att byta ut textiler och detaljer när barnet växer utan att måla om.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-soft h-100">
                <h4>Kontraster för nyfödda</h4>
                <p style={{ fontSize: '0.9rem' }}>Häng svart/vita bilder på 20–30 cm avstånd – det är vad barnet kan se och vad som stimulerar synen mest.</p>
                <div className="mt-3" style={{ background: 'black', borderRadius: 12, padding: 20, color: 'white', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem' }}>⚫⚪</div>
                  <div style={{ fontSize: '0.8rem', marginTop: 8 }}>Kontrast stimulerar hjärnan</div>
                </div>
                <div className="mt-3 warning-box">
                  <strong>Undvik:</strong> Kraftiga, mättade färger direkt på väggarna – kan vara överstimmulerande för nyfödda.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Möbler */}
        <section className="mb-5">
          <h2 className="section-title">Möbler – vad du faktiskt behöver</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-rose">Måste ha</span>
                <h4>Basutrusning</h4>
                <ul className="checklist">
                  <li><strong>Säng/spjälsäng</strong> – CE-märkt, rätt madrass (fast och plan)</li>
                  <li><strong>Skötbord</strong> – med kanter, aldrig lämna barnet ensamt</li>
                  <li><strong>Förvaringslösning</strong> – kommod, hylla eller korg</li>
                  <li><strong>Amningsstol/fåtölj</strong> – du sitter mycket de första månaderna</li>
                  <li><strong>Gardiner/mörkläggning</strong> – viktig för dagsömn</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-sage">Bra att ha</span>
                <h4>Bekvämligheter</h4>
                <ul className="checklist">
                  <li><strong>Nattlampa</strong> – varmt ljus (rött/amber) stör minst sömnen</li>
                  <li><strong>Vit brus-maskin</strong> – påminner om livmodern, lugnande</li>
                  <li><strong>Humidifier</strong> – fuktigt luft hjälper mot torr hud</li>
                  <li><strong>Bokhylla</strong> – böcker tillgängliga tidigt normaliserar läsning</li>
                  <li><strong>Leksaksförvaring</strong> – öppna korgar gör det lätt att plocka upp</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Säkerhet */}
        <section className="mb-5">
          <h2 className="section-title">Säkerhet i barnrummet</h2>
          <div className="card-soft">
            <div className="row g-4">
              <div className="col-md-6">
                <h5 style={{ color: '#B5624A' }}>Sömnssäkerhet (Safe Sleep)</h5>
                <ul className="checklist">
                  <li>Barnet sover på rygg – alltid</li>
                  <li>Fast och plan madrass, välpassande lakan</li>
                  <li>Inga lösa föremål i sängen (kuddar, täcken, leksaker)</li>
                  <li>Ingen rökig miljö</li>
                  <li>Rumstemperatur 16–20°C</li>
                  <li>Undvik överhettning – kläd inte för varmt</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 style={{ color: '#B5624A' }}>Rumssäkerhet</h5>
                <ul className="checklist">
                  <li>Säkra alla uttag (strömskydd)</li>
                  <li>Fäst tunga möbler i väggen (IKEA-metoden)</li>
                  <li>Inga lösa sladdar eller gardinsladdar (strypningsrisk)</li>
                  <li>Sätt barnlås på lådor och skåpdörrar</li>
                  <li>Håll leksaker med smådelar utom räckhåll under 3 år</li>
                  <li>Kameraplats utan sladdar inom räckhåll</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Teman */}
        <section className="mb-5">
          <h2 className="section-title">Teman som håller länge</h2>
          <p className="section-subtitle">Välj ett tema som fungerar från bebis till 5+ år</p>
          <div className="row g-4">
            {[
              { emoji: '🌿', name: 'Natur & botanik', desc: 'Växter, djur, löv och jord. Tidlöst, lugnt, könsneutralt. Fungerar i alla åldrar.' },
              { emoji: '🌙', name: 'Stjärnor & månen', desc: 'Natt och rymdbarn. Svart, guld, mörkblå. Mystiskt och drömlikt.' },
              { emoji: '🏔️', name: 'Skandinavisk natur', desc: 'Älgar, rävar, fjäll, skog. Nordisk estetik. Passar svenska hem.' },
              { emoji: '🌈', name: 'Regnbåge & pastell', desc: 'Glatt och färgstarkt. Stimulerande. Kan bli överväldigande – välj dämpad palett.' },
              { emoji: '🐻', name: 'Djur (woodland)', desc: 'Björnar, rävar, kaniner i skog. Klassiskt och omtidslöst.' },
              { emoji: '📚', name: 'Böcker & lärande', desc: 'Kartor, alfabeter, bokstäver. Inspirerar nyfikenhet och lärande.' },
            ].map(t => (
              <div className="col-md-4 col-lg-2" key={t.name}>
                <div className="card-soft text-center h-100">
                  <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{t.emoji}</div>
                  <h6 style={{ color: '#B5624A' }}>{t.name}</h6>
                  <p style={{ fontSize: '0.8rem', opacity: 0.75 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Smart förvaring */}
        <section className="mb-5">
          <h2 className="section-title">Smart förvaring</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100">
                <h4>Kläder</h4>
                <ul className="checklist">
                  <li>Sortera kläder efter storlek – du byter ut snabbt</li>
                  <li>Lådor med etiketter (50, 56, 62, 68…)</li>
                  <li>Häng det som används mest, vik det som är säsong</li>
                  <li>Köp inte för mycket i nyföddstorlek – barnet växer ur snabbt</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft h-100">
                <h4>Leksaker & böcker</h4>
                <ul className="checklist">
                  <li>Öppna lådor och korgar – barnet kan plocka upp själv</li>
                  <li>Böcker i låg höjd – tillgänglighet uppmuntrar läsning</li>
                  <li>Rotera leksaker – färre ute = mer fokus och kreativitet</li>
                  <li>Undvik för mycket plastleksaker – naturmaterial är vackrare och hållbarare</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
