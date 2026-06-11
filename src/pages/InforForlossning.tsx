export default function InforForlossning() {
  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🏥</div>
        <h1>Inför förlossningen</h1>
        <p>Förbered dig mentalt och praktiskt – vad du kan förvänta dig, vad du packar och hur du gör en förlossningsplan.</p>
      </div>

      <div className="container py-5">

        {/* Tecken på förlossning */}
        <section className="mb-5">
          <h2 className="section-title">Tecken på att förlossningen börjar</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-rose">Ring BB</span>
                <h4>Kontakta BB direkt om</h4>
                <ul className="checklist">
                  <li>Fostervattnet går (klart/gulaktigt vatten)</li>
                  <li>Kraftiga värkar med 5 min intervall i 1 timme</li>
                  <li>Blödning (mer än slempropp)</li>
                  <li>Fosterrörelser minskar markant</li>
                  <li>Svår huvudvärk, synstörningar, svullnad i händer/ansikte</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-sage">Avvakta hemma</span>
                <h4>Tidiga tecken – avvakta hemma</h4>
                <ul className="checklist">
                  <li>Slemproppen lossnar (kan se blodig ut)</li>
                  <li>Oregelbundna eller milda värkar</li>
                  <li>Lös mage (kroppen rensar sig)</li>
                  <li>Svårighet att sova</li>
                  <li>Känsla av att "något händer snart"</li>
                </ul>
                <div className="tip-box mt-3">
                  <strong>Tips:</strong> Ät lätt, drick vatten, vila och försök sova. Spara energi till aktiv fas.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Förlossningens faser */}
        <section className="mb-5">
          <h2 className="section-title">Förlossningens faser</h2>
          <div className="row g-4">
            {[
              { fase: 'Latent fas', tid: 'Timmar till dygn', desc: 'Livmoderhalsen öppnar sig 0–4 cm. Värkar oregelbundna. De flesta är hemma under denna fas.', color: '#F5E8E2' },
              { fase: 'Aktiv fas', tid: 'Ca 4–8 timmar', desc: 'Livmoderhalsen öppnar 4–10 cm. Värkar kraftigare, längre, tätare. Nu är du oftast på BB.', color: '#EBF0E9' },
              { fase: 'Utdrivningsfas', tid: 'Minuter till timmar', desc: 'Barnet föds. Kraftig press-känsla. Barnmorska guider dig. Det är nu det händer!', color: '#E8F0F3' },
              { fase: 'Placenta', tid: 'Ca 30 min', desc: 'Moderkakan föds. Ofta fokus på barnet – du märker knappt av det.', color: '#F5E8E2' },
            ].map(f => (
              <div className="col-md-6 col-lg-3" key={f.fase}>
                <div className="card-soft h-100 text-center" style={{ borderTop: '3px solid #E8C4B8' }}>
                  <h5 style={{ color: '#B5624A' }}>{f.fase}</h5>
                  <div style={{ background: f.color, borderRadius: 8, padding: '6px 12px', fontSize: '0.85rem', marginBottom: 12 }}>{f.tid}</div>
                  <p style={{ fontSize: '0.9rem' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Smärtlindring */}
        <section className="mb-5">
          <h2 className="section-title">Smärtlindring</h2>
          <p className="section-subtitle">Du har rätt att bestämma – ingen metod är bättre eller sämre</p>
          <div className="row g-4">
            {[
              { name: 'Epidural', desc: 'Bedövning i ryggraden. Effektivast av alla metoder. Kan påverka krystningsförmåga och rörlighet.', evidence: '★★★', badge: 'badge-rose' },
              { name: 'Lustgas', desc: 'Inandas vid värk. Tar bort den värsta udden. Säkert för barnet. Kan ge yrsel och illamående.', evidence: '★★☆', badge: 'badge-sage' },
              { name: 'Sterilt vatten', desc: 'Injektioner med sterilt vatten i nedre ryggen. Effektivt mot ryggvärk. Svider i 30 sek.', evidence: '★★★', badge: 'badge-blue' },
              { name: 'TENS', desc: 'Elektriska impulser via elektroder. Bäst i tidig fas. Kan kombineras med andra metoder.', evidence: '★★☆', badge: 'badge-rose' },
              { name: 'Varmt bad/dusch', desc: 'Vatten lindrar smärta naturligt. Avslappnande. Används ofta i aktiv fas.', evidence: '★★☆', badge: 'badge-sage' },
              { name: 'Rörelser & massage', desc: 'Rörlighet, bollsittning, partner-massage och andning hjälper många.', evidence: '★★☆', badge: 'badge-blue' },
            ].map(m => (
              <div className="col-md-6 col-lg-4" key={m.name}>
                <div className="card-soft h-100">
                  <span className={m.badge}>{m.name}</span>
                  <p style={{ fontSize: '0.9rem', marginTop: 8 }}>{m.desc}</p>
                  <div style={{ fontSize: '0.85rem', color: '#B5624A', marginTop: 8 }}>Evidens: {m.evidence}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BB-väskan */}
        <section className="mb-5">
          <h2 className="section-title">BB-väskan – packlista</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card-soft h-100">
                <h5 style={{ color: '#B5624A' }}>👶 Till bebisen</h5>
                <ul className="checklist">
                  <li>3–5 sparkdräkter (storlek 50–56)</li>
                  <li>2–3 bodys</li>
                  <li>Mössa, vantar, strumpor</li>
                  <li>Filt eller filtar</li>
                  <li>Blöjor (newborn eller 1)</li>
                  <li>Våtservetter</li>
                  <li>Bilbarnstol (klar hemma)</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-soft h-100">
                <h5 style={{ color: '#5a7a52' }}>🤰 Till dig</h5>
                <ul className="checklist">
                  <li>2–3 lösa bekväma kläder</li>
                  <li>Amnings-BH eller sportBH</li>
                  <li>Trosor (hög midja, gärna engångs)</li>
                  <li>Nattlinne/pyjamas</li>
                  <li>Sandaler/tofflor</li>
                  <li>Toalettsaker och handduk</li>
                  <li>Bröstvårtsskydd och bröstskydd</li>
                  <li>Smärtlindring (paracetamol)</li>
                  <li>Snacks och dryck!</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-soft h-100">
                <h5 style={{ color: '#4a7080' }}>📋 Dokument & övrigt</h5>
                <ul className="checklist">
                  <li>Legitimation</li>
                  <li>Förlossningsplan (utskriven)</li>
                  <li>Telefon + laddare</li>
                  <li>Kamera</li>
                  <li>TENS-apparat (om du planerar)</li>
                  <li>Läsplatta eller bok</li>
                  <li>Snacks till partner</li>
                  <li>Hörlurar och spellistor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Förlossningsplan */}
        <section className="mb-5">
          <h2 className="section-title">Förlossningsplan</h2>
          <p className="section-subtitle">En plan kommunicerar dina önskemål – men håll den flexibel</p>
          <div className="card-soft">
            <p>En förlossningsplan hjälper personalen förstå dina önskemål snabbt. Kom ihåg att förlossningar sällan följer en plan – använd den som ett kommunikationsverktyg, inte ett kontrakt.</p>
            <div className="row g-4 mt-2">
              {[
                { emoji: '💊', topic: 'Smärtlindring', questions: 'Vill du ha epidural? Är det okej med lustgas? Önskar du naturliga metoder?' },
                { emoji: '🧘', topic: 'Miljö', questions: 'Ljus, musik, tystnad? Vill du ha dimmer? Kan du röra dig fritt?' },
                { emoji: '👥', topic: 'Stöd', questions: 'Vem är med? Vilken roll ska de ha? Får fler vara med?' },
                { emoji: '👶', topic: 'Efter födseln', questions: 'Hud-mot-hud direkt? Vem klipper navelsträngen? Amning direkt?' },
              ].map(item => (
                <div className="col-md-6" key={item.topic}>
                  <div style={{ background: '#FAF6F0', borderRadius: 12, padding: 20 }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{item.emoji}</div>
                    <strong style={{ color: '#B5624A' }}>{item.topic}</strong>
                    <p style={{ fontSize: '0.9rem', marginTop: 6, opacity: 0.85 }}>{item.questions}</p>
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
