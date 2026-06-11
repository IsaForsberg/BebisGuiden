import { useState } from 'react'

const weeks = [
  { week: 1,  size: '🌱', sizeText: 'Ett frö (0,1 mm)',        fetus: 'Befruktning sker. Zygoten börjar dela sig och bildar en liten cellklump.', body: 'Du märker troligen ingenting ännu. Tekniskt sett räknas graviditeten från sista mens.', tip: 'Börja med folsyra 400 µg/dag om du inte redan gjort det.' },
  { week: 2,  size: '🔵', sizeText: 'En prick (0,2 mm)',       fetus: 'Ägglossning sker. Embryot kallas blastocyst och börjar sin resa mot livmodern.', body: 'Ägglossningssymtom: lätt kramp, slemartad flytning.', tip: 'Det fertila fönstret är nu – 5–6 dagar kring ägglossning.' },
  { week: 3,  size: '🍒', sizeText: 'Ett vallmofrö (1 mm)',    fetus: 'Implantation – embryot fäster i livmoderväggen. Börjar producera hCG.', body: 'Möjligen lätt blödning (implantationsblödning). Knappt märkbar.', tip: 'Ta graviditetstest från första dagen av utebliven mens.' },
  { week: 4,  size: '🫐', sizeText: 'Ett sesamfrö (2 mm)',     fetus: 'Neuralröret börjar formas – blivande hjärna och ryggmärg. Hjärtat börjar struktureras.', body: 'Positivt graviditetstest! Trötthet och ömma bröst är vanligt.', tip: 'Boka MVC (mödravårdscentralen) så snart som möjligt.' },
  { week: 5,  size: '🌾', sizeText: 'En risplutt (4 mm)',      fetus: 'Hjärtat börjar slå – 100–160 slag/min. Hjärna, ryggmärg och hjärta syns.', body: 'Illamående kan börja. Hormonerna stiger snabbt – hCG på topp.', tip: 'Ät lite och ofta mot illamåendet. Kex på nattduksbordet hjälper.' },
  { week: 6,  size: '🫘', sizeText: 'En linse (6 mm)',         fetus: 'Armar och ben börjar knoppas. Ansiktet formas med ögon- och örongroppar.', body: 'Stark illamående, trötthet, täta toalettbesök är alla normalt.', tip: 'Vila när du kan – det är normalt att vara utmattad nu.' },
  { week: 7,  size: '🍇', sizeText: 'En vindruva (10 mm)',     fetus: 'Hjärnan växer snabbt – 100 nya nervceller per minut. Fingrar börjar formas.', body: 'Illamåendet är som värst för många. Saliv ökar – vanligt symtom.', tip: 'Ingefärste, ingefärskola och kex kan lindra illamåendet.' },
  { week: 8,  size: '🫑', sizeText: 'En hallon (15 mm)',       fetus: 'Alla inre organ finns nu i rudimentär form. Armbågar och knän böjbara.', body: 'Brösten växer och värker. Livmodern är nu apelsinsstor.', tip: 'Bra tid för första ultraljud om du beställt privat.' },
  { week: 9,  size: '🍓', sizeText: 'En jordgubbe (22 mm)',    fetus: 'Fingrar och tår är tydliga och separerade. Kallas nu "foster" – inte längre embryo.', body: 'Illamåendet börjar ofta avta. Fortfarande trött.', tip: 'Ha tålamod – den svåraste fasen brukar ta slut runt v. 12.' },
  { week: 10, size: '🍅', sizeText: 'En körsbärstomat (32 mm)', fetus: 'Hjärta, lever, njurar och tarm fungerar. Fostret kan suga och svälja.', body: 'Blodvolymen ökar med 40–50% – du kan känna dig andfådd.', tip: 'Järntillskott kan behövas – fråga din barnmorska.' },
  { week: 11, size: '🫛', sizeText: 'En sockerärta (42 mm)',   fetus: 'Fostret kan gäspa och suga. Reflexer utvecklas. Naglarna börjar växa.', body: 'Livmodern är nu apelsinstor och börjar lyfta ur bäckenet.', tip: 'KUB-ultraljud erbjuds v. 11–14 i Sverige – boka om du vill.' },
  { week: 12, size: '🍋', sizeText: 'En lime (53 mm)',         fetus: 'Fingertopparna har fingeravtryck. Könsorganen börjar formas.', body: 'Många mår bättre nu. Energin börjar återvända!', tip: 'Bra tid att berätta graviditeten – risken för missfall minskar.' },
  { week: 13, size: '🥝', sizeText: 'En kiwi (65 mm)',         fetus: 'Fostret suger på tummen. Ben och armar välproportionerade. Tarmen på plats.', body: 'Trimester 1 är slut! Välkommen till trimester 2.', tip: '"Honeymoon-trimestern" väntar – energi och välmående brukar öka.' },
  { week: 14, size: '🍑', sizeText: 'En persika (80 mm)',      fetus: 'Ansiktsuttryck möjliga – rynkar pannan, grimaserar. Njurarna producerar urin.', body: 'Energin ökar. Illamåendet brukar vara borta. Humöret lyfter.', tip: 'Perfekt tid att börja gravidträning om du inte gjort det.' },
  { week: 15, size: '🍎', sizeText: 'Ett äpple (93 mm)',       fetus: 'Hörseln börjar fungera – fostret hör din röst och hjärtslag!', body: 'Huden kan bli torrare. Hormonglöd gör huden len för många.', tip: 'Börja prata och sjunga med magen – barnet hör dig faktiskt.' },
  { week: 16, size: '🍐', sizeText: 'En päron (11 cm)',        fetus: 'Ögonen reagerar på ljus trots att de är slutna. Håret börjar växa.', body: 'Livmodern syns nu tydligt ovanför blygdbenet.', tip: 'Rutinultraljud erbjuds v. 18–20 i Sverige – boka om inte gjort.' },
  { week: 17, size: '🥔', sizeText: 'En potatis (12 cm)',      fetus: 'Fett börjar lagras under huden. Skyddar och ger energi efter födseln.', body: 'Du kan börja känna rörelser – som fjärilar i magen.', tip: 'Skriv ner datum när du känner första rörelsen – ett fint minne.' },
  { week: 18, size: '🥑', sizeText: 'En avokado (14 cm)',      fetus: 'Rörelserna tydligare. Fostret roterar och sparkar aktivt i livmodern.', body: 'Ryggvärk vanligt – bäcken och rygg belastas mer och mer.', tip: 'Gravidbälte och bäckenbottenträning hjälper mot ryggvärk.' },
  { week: 19, size: '🥭', sizeText: 'En mango (15 cm)',        fetus: 'Vernix caseosa – vit skyddande kräm täcker huden mot fostervatten.', body: 'Naveln börjar sticka ut för en del. Magen syns tydligt.', tip: 'Sov på vänster sida – ger bättre blodflöde till moderkakan.' },
  { week: 20, size: '🍌', sizeText: 'En banan (25 cm)',        fetus: 'Halvvägs! Fostret väger ca 300g. Rörelserna känns tydligt nu.', body: 'Rutinultraljud – du får se barnets anatomi i detalj!', tip: 'Ta med din partner – ett av graviditetens finaste ögonblick.' },
  { week: 21, size: '🥕', sizeText: 'En morot (26 cm)',        fetus: 'Ögonbrynen och hårfolliklar formas. Smaksinnet börjar fungera.', body: 'Magen syns tydligt. Sträckmärken kan börja synas.', tip: 'Fukta magen dagligen – förebygger inte alltid men mjukar huden.' },
  { week: 22, size: '🌽', sizeText: 'En majskolv (27 cm)',     fetus: 'Hör mycket tydligt – röster, musik, puls. Känner igen mammans röst.', body: 'Bäckensmärta (foglossning) vanligt från nu. Kan göra ont att gå.', tip: 'Kontakta barnmorska vid stark bäckensmärta – det finns hjälp.' },
  { week: 23, size: '🍈', sizeText: 'En liten melon (28 cm)', fetus: 'Lungorna börjar producera surfaktant – avgörande för andning vid födseln.', body: 'Rörelserna tydliga och regelbundna. Du lär känna mönstret.', tip: 'Börja lägga märke till rörelsemönstret – viktigt i tredje trimestern.' },
  { week: 24, size: '🌶️', sizeText: 'En paprika (30 cm)',     fetus: 'Livskraftsgränsen! Kan överleva med intensivvård om den föds nu.', body: 'Graviditetsdiabetes screenas v. 24–28 – viktigt att ta testet.', tip: 'Ta glukostestet som erbjuds, oavsett om du har riskfaktorer.' },
  { week: 25, size: '🥬', sizeText: 'En salladshuvud (34 cm)', fetus: 'Hjärnan mognar snabbt. Tydliga sov- och vakenperioder formas.', body: 'Svullna fötter och händer är vanligt – ta av ringar nu.', tip: 'Lyft upp fötterna under dagen och drick tillräckligt med vatten.' },
  { week: 26, size: '🥦', sizeText: 'En broccoli (35 cm)',    fetus: 'Ögonen öppnas för första gången! Kan se ljus och mörker.', body: 'Ryggen och höfterna värker mer. Sömnläge svårare att hitta.', tip: 'Gravidyoga eller simning är fantastiskt bra mot ryggvärk.' },
  { week: 27, size: '🍆', sizeText: 'En aubergine (36 cm)',   fetus: 'Hjärnan får nu vindlingar (gyri). Minne och lärande börjar.', body: 'Sista veckan i trimester 2! Snart börjar sista etappen.', tip: 'Boka förlossningskurs nu om du inte gjort det.' },
  { week: 28, size: '🥥', sizeText: 'En kokosnöt (37 cm)',    fetus: 'Vänder sig ofta – kan fortfarande byta position. Ögonfransar finns.', body: 'Trimester 3 börjar! Kroppen börjar förbereda sig aktivt.', tip: 'Börja fundera på BB-väskan och förlossningsplanen.' },
  { week: 29, size: '🎃', sizeText: 'En butternutsquash (38 cm)', fetus: 'Skelettet hårdnar. Lägger på sig fett – ca 200g per vecka nu.', body: 'Sömnen svårare – hitta bra kuddarrangement.', tip: 'En gravidkudde (full-body) är guld värd nu.' },
  { week: 30, size: '🍠', sizeText: 'En sötpotatis (39 cm)',  fetus: 'Hjärnan växer enormt. Det neurala nätverket expanderar snabbt.', body: 'Brösten producerar råmjölk (kolostrum) – kan läcka lite.', tip: 'Bröstskydd i BH är praktiskt om du läcker.' },
  { week: 31, size: '🌴', sizeText: 'En papaya (41 cm)',      fetus: 'De flesta organ är mogna – utom lungorna som behöver mer tid.', body: 'Braxton Hicks-värkar (träningsvärkar) vanliga nu.', tip: 'Braxton Hicks är oregelbundna och smärtfria – kontakta vid smärta.' },
  { week: 32, size: '🎾', sizeText: 'En nässquash (42 cm)',   fetus: 'Vänder sig nu med huvudet nedåt (förhoppningsvis!). Lungorna mognar.', body: 'Andfåddhet när livmodern trycker mot diafragman.', tip: 'Sitt upprätt och undvik stora måltider – hjälper mot andfåddhet.' },
  { week: 33, size: '🍍', sizeText: 'En ananas (43 cm)',      fetus: 'Immunsystemet stärks via antikroppar från moderkakan.', body: 'Tyngdkänsla och tryck mot bäckenbotten ökar.', tip: 'Kortare promenader och vila ofta. Prioritera sömn.' },
  { week: 34, size: '🫒', sizeText: 'En cantaloupemelon (45 cm)', fetus: 'Lungorna nästan färdiga. Fingernaglar fullt utformade.', body: 'CTG (fosterövervakning) kan erbjudas vid vissa kliniker.', tip: 'Förbered förlossningsplan – prata med din barnmorska.' },
  { week: 35, size: '🏉', sizeText: 'En honungsmelon (46 cm)', fetus: 'Njurarna fullt fungerande. Levern bearbetar avfall effektivt.', body: 'Bebisen sänker sig – lättare att andas, men mer tryck nedåt.', tip: 'Kontakta BB om du har: blödning, svår huvudvärk eller synstörningar.' },
  { week: 36, size: '🥬', sizeText: 'En romainsallad (47 cm)', fetus: 'Kroppen är redo. Lungmognad nästan klar. Fett under huden ökar.', body: 'Täta toalettbesök, svårt att sova i alla lägen.', tip: 'GBS-test (streptokockbärarskap) erbjuds nu – viktigt att ta.' },
  { week: 37, size: '🌿', sizeText: 'En mangold (48 cm)',     fetus: 'Fullgången! Alla system redo. Lägger fortfarande på sig fett.', body: 'Slempropp kan lossna. Braxton Hicks tätare. Värkar kan börja.', tip: 'Ha telefonnummer till BB redo och BB-väskan vid dörren.' },
  { week: 38, size: '🎁', sizeText: 'En stor pumpa (49 cm)', fetus: 'Lägger på sig ca 14g fett per dag. Hjärnan fortfarande i full tillväxt.', body: 'Blixtkänsla i vaginalområdet (nerv trycks av babyns huvud).', tip: 'Räkna fosterrörelser dagligen – kontakta BB om de minskar.' },
  { week: 39, size: '🧸', sizeText: 'En liten vattenmelon (50 cm)', fetus: 'Hjärnan fortsätter växa. Alla organ i fullgånget skick.', body: 'Cervix mjuknar och förkortas (mognar inför förlossningen).', tip: 'Vila, ät bra och njut av den sista lugna perioden.' },
  { week: 40, size: '🎉', sizeText: 'En vattenmelon (51 cm)', fetus: 'Väger i snitt 3,3–3,5 kg och är ca 50 cm lång. Redo att möta dig!', body: 'Beräknat datum – men 38–42 veckor är helt normalt.', tip: 'Om inget händer efter v. 41 diskuteras igångsättning med läkare.' },
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
