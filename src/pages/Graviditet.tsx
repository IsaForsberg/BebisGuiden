import { useState } from 'react'

const weeks = [
  { week: 1, size: '🌱', sizeText: 'Ett frö', fetus: 'Befruktning sker. Zygoten börjar dela sig.', body: 'Du märker troligen ingenting ännu.', tip: 'Börja med folsyra om du inte redan gjort det.' },
  { week: 2, size: '🌱', sizeText: 'Ett frö', fetus: 'Embryot är en liten klump av celler – blastocysten.', body: 'Ägglossning sker runt dag 14.', tip: 'Optimalt tillfälle att bli gravid.' },
  { week: 3, size: '🍒', sizeText: 'Ett sesamfrö', fetus: 'Implantation – embryot fäster i livmoderväggen.', body: 'Möjligen lätt blödning (implantationsblödning).', tip: 'Ta graviditetstest om mens uteblir.' },
  { week: 4, size: '🫐', sizeText: 'Ett blåbär', fetus: 'Neuralröret börjar formas – blivande hjärna och ryggmärg.', body: 'Positivt graviditetstest. Trötthet, ömma bröst.', tip: 'Boka MVC (mödravårdscentralen).' },
  { week: 5, size: '🫐', sizeText: 'Ett blåbär', fetus: 'Hjärtat börjar slå – 100–160 slag/min.', body: 'Illamående kan börja. Hormonerna stiger snabbt.', tip: 'Ät lite och ofta mot illamåendet.' },
  { week: 6, size: '🫘', sizeText: 'En linse', fetus: 'Armar och ben börjar knoppas. Ansiktet formas.', body: 'Stark illamående, trötthet, frekvent urinering.', tip: 'Vila när du kan – det är normalt att vara utmattad.' },
  { week: 7, size: '🫘', sizeText: 'En böna', fetus: 'Hjärnan växer snabbt. Ögon och öron formas.', body: 'Illamående som värst för många. Hormonhöjdpunkt.', tip: 'Ingefärste och kex kan hjälpa mot illamåendet.' },
  { week: 8, size: '🍇', sizeText: 'En vindruva', fetus: 'Alla organ finns nu i rudimentär form. Embryot rör sig.', body: 'Brösten växer, midjan kan vara öm.', tip: 'Bra tid för första ultraljud på en del kliniker.' },
  { week: 9, size: '🍓', sizeText: 'En jordgubbe', fetus: 'Fingrar och tår är synliga. Kallas nu foster (foster).', body: 'Illamåendet börjar ofta avta något.', tip: 'Ha tålamod – den svåra fasen brukar ta slut runt v. 12.' },
  { week: 10, size: '🍅', sizeText: 'En körsbärstomat', fetus: 'Viktig period – hjärta, lever, njurar fungerar.', body: 'Blodvolymen ökar – du kan känna dig andfådd.', tip: 'Järntillskott kan behövas – kolla med barnmorska.' },
  { week: 11, size: '🍋', sizeText: 'En lime', fetus: 'Fostret kan gäspa och suga. Reflexer utvecklas.', body: 'Midjan börjar runda sig något.', tip: 'KUB-ultraljud erbjuds v. 11–14 i Sverige.' },
  { week: 12, size: '🍋', sizeText: 'En lime', fetus: 'Fingertopparna har fingeravtryck. Könsorganen formas.', body: 'Många mår bättre nu. Energi återvänder.', tip: 'Berätta graviditeten för nära och kära.' },
  { week: 13, size: '🍑', sizeText: 'En persika', fetus: 'Foster kan suga på tummen. Ben och armar välproportionerade.', body: 'Trimester 1 är slut – välkommen till trimester 2!', tip: 'Trimester 2 kallas ofta "honeymoon-trimestern".' },
  { week: 14, size: '🍑', sizeText: 'En persika', fetus: 'Ansiktsuttryck möjliga – rynkar pannan, grimaserar.', body: 'Energin ökar. Illamåendet brukar vara borta.', tip: 'Bra tid att börja gravidträning om du inte gjort det.' },
  { week: 15, size: '🍎', sizeText: 'Ett äpple', fetus: 'Hörseln börjar fungera – fostret hör din röst!', body: 'Huden kan bli torrare. Hormonglöd för många.', tip: 'Börja prata och sjunga med magen – barnet hör dig.' },
  { week: 16, size: '🍐', sizeText: 'En päron', fetus: 'Ögonen reagerar på ljus, men är fortfarande slutna.', body: 'Livmodern är nu synlig ovanför blygdbenet.', tip: 'Rutinultraljud erbjuds v. 18–20 i Sverige.' },
  { week: 17, size: '🥐', sizeText: 'En croissant', fetus: 'Fett börjar lagras under huden. Skyddar och ger energi.', body: 'Du kan börja känna rörelser – som fjärilar i magen.', tip: 'Skriv ner när du känner första rörelsen.' },
  { week: 18, size: '🥑', sizeText: 'En avokado', fetus: 'Rörelserna tydligare. Fostret roterar i livmodern.', body: 'Ryggvärk vanligt nu – bäcken och rygg belastas.', tip: 'Gravidpudrar, gravidbälte och bäckenbottenträning hjälper.' },
  { week: 19, size: '🥭', sizeText: 'En mango', fetus: 'Vernix caseosa – en vit skyddande kräm täcker huden.', body: 'Naveln börjar sticka ut för en del.', tip: 'Sov gärna på vänster sida – bättre blodflöde.' },
  { week: 20, size: '🍌', sizeText: 'En banan', fetus: 'Halvvägs! Fostret väger ca 300g. Rörelserna tydliga.', body: 'Rutinultraljud – du får se barnets anatomi.', tip: 'Ta med din partner till ultraljudet.' },
  { week: 21, size: '🥕', sizeText: 'En morot', fetus: 'Ögonbrynen och hårfolliklar formas.', body: 'Magen syns tydligt. Sträckmärken kan börja synas.', tip: 'Fukta huden dagligen för att förebygga sträckmärken.' },
  { week: 22, size: '🌽', sizeText: 'En majskolv', fetus: 'Hör tydligt – röster, musik, puls.', body: 'Bäckensmärta (foglossning) vanligt från nu.', tip: 'Kontakta barnmorska vid stark bäckensmärta.' },
  { week: 23, size: '🍆', sizeText: 'En aubergine', fetus: 'Lungorna börjar producera surfaktant – livsviktigt för andning.', body: 'Rörelserna tydliga och regelbundna.', tip: 'Lär dig följa fosterrörelserna – viktigt i sista trimestern.' },
  { week: 24, size: '🌽', sizeText: 'En majskolv', fetus: 'Livskraftsgränsen. Överlever med intensivvård om född nu.', body: 'Graviditetsdiabetes screenas v. 24–28.', tip: 'Ta glukostestet som erbjuds om du hör till riskgrupp.' },
  { week: 25, size: '🥬', sizeText: 'En salladshuvud', fetus: 'Hjärnan mognar snabbt. Sova- och vakenperioder börjar.', body: 'Svullna fötter och händer är vanligt.', tip: 'Lyft upp fötterna under dagen. Drick tillräckligt med vatten.' },
  { week: 26, size: '🥦', sizeText: 'En broccoli', fetus: 'Ögonen öppnas för första gången.', body: 'Ryggen och höfterna kan värka mer.', tip: 'Gravidyoga eller simning lindrar ryggvärk.' },
  { week: 27, size: '🧅', sizeText: 'En kålrot', fetus: 'Hjärnan har nu vindlingar (gyri). Minne och lärande börjar.', body: 'Sista veckan i trimester 2!', tip: 'Boka förlossningskurs om du inte gjort det.' },
  { week: 28, size: '🍆', sizeText: 'En aubergine', fetus: 'Vänder sig ofta – kan fortfarande byta position.', body: 'Trimester 3 – kroppen förbereder sig.', tip: 'Börja packa BB-väskan.' },
  { week: 29, size: '🎃', sizeText: 'En squash', fetus: 'Skelettet hårdnar. Lägger på sig fett.', body: 'Sömn svårare – hitta bra kuddarrangement.', tip: 'Gravidkudde är guld värd nu.' },
  { week: 30, size: '🎃', sizeText: 'En squash', fetus: 'Hjärnan växer enormt. Neural nätverket expanderar.', body: 'Brösten producerar råmjölk (kolostrum).', tip: 'Du kan börja massera bröstvårtorna försiktigt.' },
  { week: 31, size: '🥥', sizeText: 'En kokosnöt', fetus: 'De flesta organ är mogna utom lungorna.', body: 'Braxton Hicks-värkar – träningsvärkar.', tip: 'Braxton Hicks är normalt – kontakta vid smärta eller täta värkar.' },
  { week: 32, size: '🎾', sizeText: 'En squash', fetus: 'Vänder sig nu med huvudet nedåt (förhoppningsvis).', body: 'Andfåddhet när livmodern trycker på diafragman.', tip: 'Sitt upprätt och undvik stora måltider.' },
  { week: 33, size: '🍍', sizeText: 'En ananas', fetus: 'Immunsystemet stärks via moderkakan.', body: 'Tyngdkänsla och tryck mot bäckenbotten.', tip: 'Gå kortare promenader och vila ofta.' },
  { week: 34, size: '🍍', sizeText: 'En ananas', fetus: 'Lungorna nästan färdiga. Fingernaglar fullt utformade.', body: 'CTG (fosterövervakning) kan erbjudas.', tip: 'Förbered förlossningsplan med önskemål.' },
  { week: 35, size: '🎯', sizeText: 'En melon', fetus: 'Njurarna fullt fungerande. Lever bearbetar avfall.', body: 'Bebisen sänker sig – lättare att andas, mer tryck nedåt.', tip: 'Kontakta BB om du har: blödning, svår huvdvärk, synstörningar.' },
  { week: 36, size: '🎯', sizeText: 'En melon', fetus: 'Kroppen är redo. Lungmognad nästan klar.', body: 'Täta blåsbesök, svår att sova i alla lägen.', tip: 'GBS-test (streptokockinfektion) erbjuds nu.' },
  { week: 37, size: '🍉', sizeText: 'En liten vattenmelon', fetus: 'Fullgången! Allt är klart att ta emot världen.', body: 'Slempropp kan lossna. Värkar kan börja.', tip: 'Ha telefonnummer till BB redo.' },
  { week: 38, size: '🍉', sizeText: 'En vattenmelon', fetus: 'Lägger på sig ca 14g fett per dag.', body: 'Blixtar i vaginalområdet (nerv från babyns huvud).', tip: 'Fortsätt räkna fosterrörelser dagligen.' },
  { week: 39, size: '🎁', sizeText: 'En liten vattenmelon', fetus: 'Hjärnan fortsätter att växa snabbt.', body: 'Cervix mjuknar och förkortas (mognar).', tip: 'Vila, ät, njut av den sista friden innan.' },
  { week: 40, size: '🎉', sizeText: 'En vattenmelon', fetus: 'Väger i snitt 3,3–3,5 kg. Redo att möta dig!', body: 'Beräknat datum – men 38–42 veckor är normalt.', tip: 'Om inget händer efter v. 41 diskuteras igångsättning.' },
]

const trimesterColors = { 1: '#F5E8E2', 2: '#EBF0E9', 3: '#E8F0F3' }

function getTrimester(week: number): 1 | 2 | 3 {
  if (week <= 13) return 1
  if (week <= 27) return 2
  return 3
}

export default function Graviditet() {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null)
  const [filter, setFilter] = useState<1 | 2 | 3 | 'all'>('all')

  const filtered = filter === 'all' ? weeks : weeks.filter(w => getTrimester(w.week) === filter)
  const selected = weeks.find(w => w.week === selectedWeek)

  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🤰</div>
        <h1>Graviditet vecka för vecka</h1>
        <p>Följ ditt fosters resa från vecka 1 till 40 – vad som händer, vad du kan förvänta dig och praktiska råd.</p>
      </div>

      <div className="container py-5">

        {/* Filter */}
        <div className="d-flex gap-2 justify-content-center mb-4 flex-wrap">
          {([['all', 'Alla veckor', '#E8C4B8'], [1, 'Trimester 1 (v. 1–13)', '#F5E8E2'], [2, 'Trimester 2 (v. 14–27)', '#EBF0E9'], [3, 'Trimester 3 (v. 28–40)', '#E8F0F3']] as const).map(([val, label, color]) => (
            <button
              key={String(val)}
              onClick={() => setFilter(val)}
              style={{
                background: filter === val ? '#B5624A' : color,
                color: filter === val ? 'white' : '#3D2B1F',
                border: 'none',
                borderRadius: 20,
                padding: '8px 20px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Selected week detail */}
        {selected && (
          <div className="card-soft mb-4" style={{ borderTop: `4px solid #B5624A` }}>
            <div className="row align-items-center">
              <div className="col-md-2 text-center">
                <div className="week-number">{selected.week}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>veckan</div>
                <div className="fruit-size">{selected.size}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{selected.sizeText}</div>
              </div>
              <div className="col-md-10">
                <div className="row g-3">
                  <div className="col-md-4">
                    <div style={{ background: '#F5E8E2', borderRadius: 12, padding: 16 }}>
                      <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>🧬 Fostrets utveckling</strong>
                      <p style={{ fontSize: '0.9rem', margin: 0 }}>{selected.fetus}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{ background: '#EBF0E9', borderRadius: 12, padding: 16 }}>
                      <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>💪 Din kropp</strong>
                      <p style={{ fontSize: '0.9rem', margin: 0 }}>{selected.body}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{ background: '#E8F0F3', borderRadius: 12, padding: 16 }}>
                      <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: 6 }}>💡 Tips</strong>
                      <p style={{ fontSize: '0.9rem', margin: 0 }}>{selected.tip}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedWeek(null)}
                  style={{ background: 'none', border: 'none', color: '#B5624A', cursor: 'pointer', marginTop: 12, fontSize: '0.9rem' }}
                >
                  ✕ Stäng
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Week grid */}
        <div className="row g-3">
          {filtered.map(w => (
            <div className="col-6 col-md-4 col-lg-3" key={w.week}>
              <div
                className="week-card"
                style={{ borderTopColor: trimesterColors[getTrimester(w.week)], cursor: 'pointer', background: selectedWeek === w.week ? '#FFF5F2' : 'white' }}
                onClick={() => setSelectedWeek(selectedWeek === w.week ? null : w.week)}
              >
                <div className="week-number">v.{w.week}</div>
                <div style={{ fontSize: '1.8rem', margin: '6px 0' }}>{w.size}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#B5624A' }}>{w.sizeText}</div>
                <p style={{ fontSize: '0.8rem', marginTop: 8, opacity: 0.75, marginBottom: 0 }}>{w.fetus.substring(0, 60)}…</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trimester overview */}
        <section className="mt-5">
          <h2 className="section-title">Trimester-översikt</h2>
          <div className="row g-4 mt-2">
            {[
              { t: 'Trimester 1', weeks: 'Vecka 1–13', color: '#F5E8E2', emoji: '🌱', desc: 'Alla organ formas. Kroppen anpassar sig. Illamående, trötthet och hormonsvängningar är normalt. Håll ut – det brukar bli bättre!' },
              { t: 'Trimester 2', weeks: 'Vecka 14–27', color: '#EBF0E9', emoji: '🌸', desc: 'Kallad "honeymoon-trimestern" – energin återvänder. Du börjar se gravid ut. Fostret hörs, ses och rör sig. Rutinultraljud.' },
              { t: 'Trimester 3', weeks: 'Vecka 28–40', color: '#E8F0F3', emoji: '🌟', desc: 'Kroppen förbereder sig. Tungkänsla, sömnsvårigheter, Braxton Hicks. Barnet lägger på sig fett och är snart klart.' },
            ].map(tr => (
              <div className="col-md-4" key={tr.t}>
                <div className="card-soft h-100" style={{ borderTop: `4px solid ${tr.color === '#F5E8E2' ? '#E8C4B8' : tr.color === '#EBF0E9' ? '#A8BBA0' : '#9BB5C0'}` }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{tr.emoji}</div>
                  <h4 style={{ color: '#B5624A' }}>{tr.t}</h4>
                  <div style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: 12 }}>{tr.weeks}</div>
                  <p style={{ fontSize: '0.9rem' }}>{tr.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Checklistor */}
        <section className="mt-5">
          <h2 className="section-title">Checklistor per trimester</h2>
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="card-soft h-100">
                <h4 style={{ color: '#B5624A' }}>🌱 Trimester 1</h4>
                <ul className="checklist">
                  <li>Börja med folsyra (400 µg/dag)</li>
                  <li>Boka MVC (mödravårdscentralen)</li>
                  <li>KUB-ultraljud (v. 11–14)</li>
                  <li>Sluta röka och alkohol</li>
                  <li>Berätta för arbetsgivaren (när du är redo)</li>
                  <li>Ta blodprover</li>
                  <li>Boka tandläkare</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-soft h-100">
                <h4 style={{ color: '#5a7a52' }}>🌸 Trimester 2</h4>
                <ul className="checklist">
                  <li>Rutinultraljud (v. 18–20)</li>
                  <li>Glukostest om riskgrupp (v. 24–28)</li>
                  <li>Boka förlossningskurs</li>
                  <li>Börja planera barnrummet</li>
                  <li>Ansök om parkeringstillstånd (gravid)</li>
                  <li>Kolla föräldrapenning och ledighet</li>
                  <li>Börja köpa basutrusning</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-soft h-100">
                <h4 style={{ color: '#4a7080' }}>🌟 Trimester 3</h4>
                <ul className="checklist">
                  <li>Packa BB-väskan (v. 35–36)</li>
                  <li>GBS-test (v. 35–36)</li>
                  <li>Förlossningsplan klar</li>
                  <li>Installera bilbarnstol</li>
                  <li>Barnet hemma-redo (barnrum, utrustning)</li>
                  <li>Boka besök av barnmorska hemma</li>
                  <li>Lär dig räkna fosterrörelser</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
