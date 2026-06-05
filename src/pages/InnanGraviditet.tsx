export default function InnanGraviditet() {
  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🌱</div>
        <h1>Innan graviditeten</h1>
        <p>Vad du kan göra nu för att förbereda din kropp, ditt sinne och ditt liv inför graviditeten.</p>
      </div>

      <div className="container py-5">

        {/* Kroppen */}
        <section className="mb-5">
          <h2 className="section-title">Förbered kroppen</h2>
          <p className="section-subtitle">Det du gör innan graviditeten spelar stor roll</p>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-rose">Folsyra</span>
                <h4>Folsyra – börja minst 3 månader innan</h4>
                <p>Folsyra (400 µg/dag) minskar risken för neuralrörsdefekter med upp till 70 %. Den största nyttan sker de första 28 dagarna efter befruktning – innan du ens vet att du är gravid.</p>
                <div className="tip-box mt-3">
                  <strong>Råd:</strong> Börja med folsyra så snart du planerar att försöka. Livsmedelsverket rekommenderar 400 µg dagligen.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-sage">Kost</span>
                <h4>Kost och näring inför graviditeten</h4>
                <ul className="checklist mt-3">
                  <li>Folsyra (400 µg/dag) – via tillskott och spenat, baljväxter</li>
                  <li>D-vitamin – särskilt viktigt vid låg solexponering</li>
                  <li>Järn – rött kött, bönor, linser, mörkgröna blad</li>
                  <li>Jod – mejeriprodukter, fisk, jodat salt</li>
                  <li>Omega-3 – fet fisk 2–3 ggr/vecka</li>
                  <li>Minska ultrafärdigmat och socker</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-blue">Träning</span>
                <h4>Rörelse och fysisk förberedelse</h4>
                <p>Regelbunden träning inför graviditet är kopplad till enklare graviditet, kortare förlossning och snabbare återhämtning. WHO rekommenderar 150 min måttlig aktivitet per vecka.</p>
                <ul className="checklist mt-3">
                  <li>Bäckenbottenträning – börja nu, inte efter</li>
                  <li>Styrketräning för core och höfter</li>
                  <li>Promenader – 30 min/dag är utmärkt</li>
                  <li>Simning och yoga – skonsamt och effektivt</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-rose">Livsstil</span>
                <h4>Livsstilsfaktorer att se över</h4>
                <ul className="checklist mt-3">
                  <li>Sluta röka – påverkar fertilitet och fostrets tillväxt</li>
                  <li>Alkohol – säkraste rådet är noll under graviditet</li>
                  <li>Koffein – håll under 200 mg/dag (ca 2 koppar kaffe)</li>
                  <li>Stress – kronisk stress påverkar hormonbalansen</li>
                  <li>Sömn – sikta på 7–9 timmar per natt</li>
                  <li>Gå igenom medicinlista med läkare</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fertilitet */}
        <section className="mb-5">
          <h2 className="section-title">Förstå fertilitet</h2>
          <div className="row g-4">
            <div className="col-md-8">
              <div className="card-soft">
                <h4>Menscykeln och ägglossning</h4>
                <p>Den genomsnittliga menscykeln är 28 dagar, men 21–35 dagar är normalt. Ägglossning sker vanligtvis 14 dagar <em>innan</em> nästa mens – inte 14 dagar efter senaste mens (om cykeln inte är exakt 28 dagar).</p>
                <div className="row g-3 mt-2">
                  {[
                    { day: 'Dag 1–5', desc: 'Menstruation', color: '#F5E8E2' },
                    { day: 'Dag 6–13', desc: 'Follikelfas – östrogen stiger', color: '#EBF0E9' },
                    { day: 'Dag 14', desc: 'Ägglossning (ca) – fertilt fönster', color: '#E8F0F3' },
                    { day: 'Dag 15–28', desc: 'Lutealfas – progesteron stiger', color: '#F5E8E2' },
                  ].map(p => (
                    <div className="col-6 col-md-3" key={p.day}>
                      <div style={{ background: p.color, borderRadius: 12, padding: 16, textAlign: 'center' }}>
                        <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: 4 }}>{p.day}</strong>
                        <span style={{ fontSize: '0.8rem' }}>{p.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="tip-box mt-3">
                  <strong>Fertilt fönster:</strong> Äggcellen lever 12–24 timmar. Spermier lever 3–5 dagar. Det fertila fönstret är alltså 5–6 dagar per cykel.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-soft h-100">
                <h4>När ska man söka hjälp?</h4>
                <p style={{ fontSize: '0.9rem' }}>Sök hjälp om du försökt utan resultat i:</p>
                <ul className="checklist">
                  <li>Under 35 år: 12 månader</li>
                  <li>Över 35 år: 6 månader</li>
                  <li>Tidigare PCOS, endometrios, oregelbunden mens: söka direkt</li>
                  <li>Manlig partner med kända problem: söka direkt</li>
                </ul>
                <div className="tip-box mt-3">
                  <strong>1177:</strong> Ring din vårdcentral – de kan göra grundläggande utredning.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mental förberedelse */}
        <section className="mb-5">
          <h2 className="section-title">Mental och praktisk förberedelse</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-rose">Relationen</span>
                <h4>Prata med din partner</h4>
                <p>Forskning visar att par som diskuterar föräldraskap i förväg – förväntningar, arbetsfördelning, ekonomi, uppfostran – trivs bättre som föräldrar.</p>
                <ul className="checklist mt-3">
                  <li>Hur vill vi fördela föräldraledigheten?</li>
                  <li>Hur ser vår ekonomi ut?</li>
                  <li>Vilken barnomsorg passar oss?</li>
                  <li>Hur hanterar vi konflikter som trötta föräldrar?</li>
                  <li>Vad bär vi med oss från vår uppväxt?</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-soft h-100">
                <span className="badge-sage">Praktiskt</span>
                <h4>Praktisk checklista</h4>
                <ul className="checklist">
                  <li>Boka läkartid för förgravid-kontroll</li>
                  <li>Ta reda på om du är vaccinerad mot röda hund</li>
                  <li>Kolla din sjukförsäkring och föräldraförsäkring</li>
                  <li>Planera för ekonomisk buffert</li>
                  <li>Gå igenom boende – finns plats för bebis?</li>
                  <li>Ta bort spiral / sluta med p-piller (kräver tid)</li>
                  <li>Berätta för tandläkaren – kontroll innan graviditet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Forskning */}
        <section className="mb-5">
          <h2 className="section-title">Forskning att känna till</h2>
          <div className="research-card">
            <span className="badge-rose">Studie</span>
            <h5>Folsyra och neuralrörsdefekter</h5>
            <p>En stor meta-analys (Blencowe et al., 2010, <em>International Journal of Epidemiology</em>) visade att folsyratillskott minskar risken för neuralrörsdefekter med 46–70 %. WHO rekommenderar folsyra till alla kvinnor i fertil ålder.</p>
            <div className="evidence-stars">★★★ Hög evidens (meta-analys)</div>
          </div>
          <div className="research-card">
            <span className="badge-sage">Studie</span>
            <h5>Träning och graviditetsutfall</h5>
            <p>En Cochrane-review (2017) av 56 studier visade att regelbunden träning under och inför graviditet minskar risken för graviditetsdiabetes, preeklampsi och kejsarsnitt, samt förbättrar välmående.</p>
            <div className="evidence-stars">★★★ Hög evidens (Cochrane-review)</div>
          </div>
          <div className="research-card">
            <span className="badge-blue">Studie</span>
            <h5>Ålder och fertilitet</h5>
            <p>Fertilitet minskar gradvis från 30-årsåldern och mer markant efter 35. American Society for Reproductive Medicine publicerade 2023 uppdaterade riktlinjer som visar att tidig utredning vid misstanke om problem alltid är bättre än att vänta.</p>
            <div className="evidence-stars">★★★ Hög evidens (kliniska riktlinjer)</div>
          </div>
        </section>

      </div>
    </div>
  )
}
