const ageData: Record<string, {
  emoji: string
  title: string
  subtitle: string
  milestones: { category: string; items: string[] }[]
  sleep: { hours: string; naps: string; tips: string[] }
  feeding: string[]
  stimulation: string[]
  research: { title: string; body: string; evidence: string }[]
  tips: string[]
  warning: string
}> = {
  '0-3': {
    emoji: '👶',
    title: '0–3 månader',
    subtitle: 'Nyföddhetsperioden – allt är nytt och världen tar emot dig.',
    milestones: [
      { category: 'Social & emotionell', items: ['Fixerar på ansikten', 'Ler socialt (ca 6 v)', 'Svarar på din röst', 'Skapar ögonkontakt'] },
      { category: 'Motorik', items: ['Stark grepp-reflex', 'Börjar lyfta huvudet', 'Sparkar med benen', 'Händerna knyts/öppnas'] },
      { category: 'Kommunikation', items: ['Gråter för att kommunicera', 'Joller börjar (~2 mån)', 'Lyssnar på röster', 'Reagerar på höga ljud'] },
      { category: 'Kognitiv', items: ['Ser tydligast 20–30 cm', 'Föredrar ansikten', 'Följer rörliga föremål', 'Börjar känna igen dig'] },
    ],
    sleep: { hours: '14–17 tim totalt', naps: '3–4 tupplurar/dag', tips: ['Lägg trött men vaken', 'Svepning kan hjälpa', 'Vit brus fungerar bra', 'Sömnfönster: 45–90 min vaken'] },
    feeding: ['Amning/ersättning var 2–3 timme', '8–12 gånger per dygn', 'Cluster feeding normalt på kvällen', 'Spyfontän ≠ allergi (pratamedBVC)', 'Mät blöjor: 6+ blöjor/dag = bra intag'],
    stimulation: ['Ansikts-till-ansikts-kontakt', 'Sjung och prata hela dagen', 'Svart/vita kontrastbilder', 'Tummytime 3–5 min/tillfälle', 'Läs högt – vad som helst!', 'Mjuk massage'],
    research: [
      { title: 'PURPLE-gråt', body: 'Gråt kulminerar runt 6–8 veckors ålder. Det är normalt och går över. Sätt ner ett gråtande barn säkert om du behöver ta en paus – det är bättre än att skaka barnet.', evidence: '★★★' },
      { title: 'Tummytime och motorikutveckling', body: 'AAP rekommenderar tummytime varje dag från födseln. Det förhindrar platthuvudssyndrom och stärker nacke/axlar som behövs för att kunna sitta.', evidence: '★★★' },
    ],
    tips: ['Köp inte för mycket i nyföddt-storlek – de växer ur på veckor', 'Fotografera ofta – du glömmer hur liten de var', 'Accept hjälp från omgivningen', 'Det fjärde trimestern är verkligt – du återhämtar dig också'],
    warning: 'Kontakta BVC/1177 om: barnet inte vaknar för mat, gulsot, feber >38°C under 3 mån, eller om du är orolig',
  },
  '3-6': {
    emoji: '🧸',
    title: '3–6 månader',
    subtitle: 'Sociala leenden, skratt och en baby som börjar utforska världen.',
    milestones: [
      { category: 'Social & emotionell', items: ['Skrattar högt (ca 4 mån)', 'Söker kontakt aktivt', 'Visar glädje och spänning', 'Kan bli blyg för okända'] },
      { category: 'Motorik', items: ['Bra huvudkontroll', 'Rullar (mage→rygg ca 4 mån)', 'Sitter med stöd (5–6 mån)', 'Sträcker sig efter föremål'] },
      { category: 'Kommunikation', items: ['Babblande med konsonanter', 'Svarar på namn', 'Imiterar ljud', 'Varierar gråt'] },
      { category: 'Kognitiv', items: ['Object permanence börjar', 'Utforskar med munnen', 'Längre koncentration', 'Förstår orsak-verkan (skaka = ljud)'] },
    ],
    sleep: { hours: '12–15 tim totalt', naps: '2–3 tupplurar/dag', tips: ['Sömnfönster: 1,5–2 tim', '4-månaders sömnregression är verklig', 'Lägg för natten tidigt (18–19)', 'Rutiner hjälper nu'] },
    feeding: ['Amning/ersättning var 3–4 timme', 'Tillväxtsprång ökar hungern tillfälligt', 'Fast föda ÄNNU INTE – vänta till 6 mån', 'Vitamin D-droppar rekommenderas'],
    stimulation: ['Spegellek – barnet älskar speglar', 'Sjung med rörelser', 'Varierade texturer att känna på', 'Krypunderlag för utforskning', 'Pekböcker med tydliga bilder'],
    research: [
      { title: '4-månaders sömnregression', body: 'Runt 4 månader förändras hjärnans sömncykler permanent (som vuxna). Barnet vaknar nu mer medvetet mellan cykler. Det är biologiskt och normalt – och försvinner inte av sig självt utan sovrutiner.', evidence: '★★☆' },
      { title: 'Socialt leende och anknytning', body: 'Det sociala leendet (ca 6 veckor) är ett starkt signal om hjärnans sociala nätverk är intakt. Det är inte bara sött – det är ett neurologiskt milstolpe.', evidence: '★★★' },
    ],
    tips: ['Prata om vad du gör hela dagen', 'Välj leksaker med kontraster och ljud', 'Börja med rutiner för läggdags nu', 'Ta med barnet utomhus – naturintryck är stimulans'],
    warning: 'Kontakta BVC om: barnet inte ler socialt vid 3 mån, inte följer med ögonen, inte svarar på ljud',
  },
  '6-12': {
    emoji: '🌟',
    title: '6–12 månader',
    subtitle: 'Fast föda, krypande, de första orden – ett halvår fullt av milstolpar.',
    milestones: [
      { category: 'Social & emotionell', items: ['Separationsångest börjar (8–9 mån)', 'Förstår "nej"', 'Klapper och kikar', 'Vänder sig mot namnet'] },
      { category: 'Motorik', items: ['Sitter stabilt utan stöd', 'Kryper (de flesta)', 'Reser sig upp vid möbler', 'Pincettgrepp (9–12 mån)'] },
      { category: 'Kommunikation', items: ['Bablar med mening', '"Mama/papa" utan mening (8 mån)', '"Mama/papa" med mening (10–12 mån)', 'Pekar för att kommunicera'] },
      { category: 'Kognitiv', items: ['Object permanence klar', 'Imitation av handlingar', 'Enkla orsak-verkan lekar', 'Kategoriserar föremål'] },
    ],
    sleep: { hours: '12–14 tim totalt', naps: '2 tupplurar/dag', tips: ['8–10 månaders sömnregression', 'Sömnfönster: 2–3 tim', 'Konsekvent läggrutin är viktigt nu', 'Ev. sömnträning om det behövs'] },
    feeding: ['Starta fast föda runt 6 mån', 'Fortsätt amning/ersättning som primär näring', 'Erbjud en variation av smaker', 'Fingermatsformat eller puré', 'Undvik honung (<1 år), salt, socker', 'Introducera allergen tidigt'],
    stimulation: ['Pekböcker – låt barnet peka och bläddra', 'Sorterings-leksaker', 'Krypbana och hinder', 'Musik och dans', 'Enkel rollek – "ge muggen till nallen"'],
    research: [
      { title: 'Separationsångest är ett gott tecken', body: 'Separationsångest (ca 8–9 månader) är ett tecken på trygg anknytning. Barnet har förstått att du är separat och saknar dig. Det är neurologisk mognad, inte ett problem att lösa.', evidence: '★★★' },
      { title: 'Tidigt pekkande förutsäger språk', body: 'Forskning visar att barns protodeclarativa pekning (peka för att dela intresse, inte bara be om saker) vid 9–12 mån är en stark prediktor för framtida språkutveckling.', evidence: '★★★' },
    ],
    tips: ['Ge fingermat – viktigt för motorik och självständighet', 'Sätt upp barnlås nu (krypning börjar)', 'Läs varje dag – låt barnet bläddra', 'Svara på pekning – peka tillbaka och namnge'],
    warning: 'Kontakta BVC om: barnet inte sitter vid 9 mån, inte bablar, inte pekar, inte söker ögonkontakt',
  },
  '1-2': {
    emoji: '🚶',
    title: '1–2 år',
    subtitle: 'Toddler-livet börjar – gång, språkexplosion och stark vilja.',
    milestones: [
      { category: 'Social & emotionell', items: ['Empati börjar', 'Parallell lek med andra barn', 'Stark vilja och "nej"-fasen', 'Förstår enkla regler'] },
      { category: 'Motorik', items: ['Går (12–15 mån)', 'Springer (15–18 mån)', 'Klättrar', 'Kastar boll'] },
      { category: 'Kommunikation', items: ['10–50 ord vid 18 mån', 'Tvåords-fraser vid 24 mån', 'Pekar i böcker', 'Följer tvåstegs-instruktioner'] },
      { category: 'Kognitiv', items: ['Rollek börjar', 'Förstår "var är X?"', 'Imitation av vuxnas handlingar', 'Enkel problemlösning'] },
    ],
    sleep: { hours: '11–14 tim totalt', naps: '1 tupplur/dag (1,5–3 tim)', tips: ['Övergång till 1 tupplur sker ca 15–18 mån', 'Rutiner viktigare än någonsin', 'Lägg bok som del av rutin', 'Sömnproblem vanligt vid tillväxtsprång'] },
    feeding: ['Övergång till familjematen', 'Fortsätt variera smaker och texturer', 'Förvänta dig selektivt ätande (normalt)', 'Mjölk max 4–5 dl/dag', 'Ge vatten, inte juice'],
    stimulation: ['Utomhuslek varje dag oavsett väder', 'Klotter och målarfärg (barnvänlig)', 'Enkel rollek – kök, dockor', 'Byggleksaker: Duplo/Lego', 'Sång och dans'],
    research: [
      { title: 'Toddlertantrums är neurobiologiska', body: 'Utbrotten hos toddlare handlar om att prefrontala cortex inte är moget nog att reglera limbiska systemets emotioner. Det är inte uppfostran – det är hjärnbiologi. Lugna dig, reglera dig, reglera sedan barnet.', evidence: '★★★' },
      { title: 'Språkexplosion runt 18 månader', body: 'De flesta barn går igenom en "ordskördetid" runt 16–24 månader. Hjärnan gör kopplingar snabbt. Läs och prata mer än vanligt – det ger bränsle till explosionen.', evidence: '★★★' },
    ],
    tips: ['Ge val (inte fri vilja): "Vill du ha röd eller blå?"', 'Namnge känslor: "Du är arg nu"', 'Håll rutiner – förutsägbarhet är trygghet', 'Var beredd på föremåls-fas och samlande'],
    warning: 'Kontakta BVC om: inga ord vid 16 mån, inga tvåords-fraser vid 24 mån, förlust av tidigare förmågor',
  },
  '2-3': {
    emoji: '🎨',
    title: '2–3 år',
    subtitle: 'Fantasilek, potträning och de fantastiska "terrible twos".',
    milestones: [
      { category: 'Social & emotionell', items: ['Leker med andra barn', 'Förstår turtagning', 'Visar empati', 'Begynnande självkänsla'] },
      { category: 'Motorik', items: ['Hoppar med båda fötterna', 'Cyklar med trehjuling', 'Ritar enkla former', 'Klär på sig (delvis)'] },
      { category: 'Kommunikation', items: ['200–300 ord', 'Hela meningar (3–4 ord)', 'Berättar om händelser', 'Ställer "varför"-frågor'] },
      { category: 'Kognitiv', items: ['Symbolisk lek', 'Förstår "igår" och "imorgon"', 'Sorterar efter färg och form', 'Räknar 1–5 (med stöd)'] },
    ],
    sleep: { hours: '10–13 tim totalt', naps: '0–1 tupplur', tips: ['Många slutar med dagssömn 2,5–3 år', 'Lugn stund ersätter tupplur', 'Läggdagsmotstånd är normalt', 'Starka rutiner hjälper'] },
    feeding: ['Ätselektivt vanligt – oroa dig inte', 'Erbjud samma mat som familjen', 'Potentiellt 20 exponeringar för att gilla ny mat', 'Gör mat kul – forma, färga, baka', 'Inget belönande med mat'],
    stimulation: ['Fantasilek med roller', 'Enkla brädspel', 'Ritning, målning, klippa-klistra', 'Besök bibliotek, museum, natur', 'Lyssna på berättelser (podcast, ljudbok)'],
    research: [
      { title: 'Fantasilek och exekutiv funktion', body: 'Forskning (Vygotsky + moderna studier) visar att fantasilek är det bästa träningen för exekutiva funktioner hos 2–6-åringar. I leken håller barnet kvar regler och roller som kräver planering och impulskontroll.', evidence: '★★★' },
      { title: 'Potträning och readiness', body: 'Genomsnittlig ålder för potträning är 27–32 månader men variationen är stor. Forskning stöder att vänta på readiness-signaler snarare än att starta vid specifik ålder.', evidence: '★★☆' },
    ],
    tips: ['Potträning: vänta på tecknen, var konsekvent', '"Terrible twos" = barn som förstår mer än de kan uttrycka', 'Läs fortfarande högt varje dag', 'Utflykt = stimulans + sensorik + rörelse'],
    warning: 'Kontakta BVC om: inga meningar vid 2 år, förlust av språk, inget intresse för andra barn, upprepande rörelser',
  },
}

import { useParams } from 'react-router-dom'

export default function UtvecklingPage() {
  const { age } = useParams<{ age: string }>()
  const data = ageData[age || '0-3']

  if (!data) return <div className="container py-5"><h2>Sidan hittades inte</h2></div>

  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>{data.emoji}</div>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </div>

      <div className="container py-5">

        {/* Milstolpar */}
        <section className="mb-5">
          <h2 className="section-title">Milstolpar</h2>
          <div className="row g-4">
            {data.milestones.map(m => (
              <div className="col-md-6" key={m.category}>
                <div className="card-soft h-100">
                  <span className="badge-rose">{m.category}</span>
                  <ul className="checklist mt-3">
                    {m.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="warning-box mt-3">
            <strong>OBS:</strong> Milstolpar är riktmärken, inte krav. Stor variation är normal. Kontakta BVC om du är orolig.
          </div>
        </section>

        {/* Sömn */}
        <section className="mb-5">
          <h2 className="section-title">Sömn</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card-soft text-center h-100">
                <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>💤</div>
                <h5 style={{ color: '#B5624A' }}>{data.sleep.hours}</h5>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Totalt sömnbehov</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-soft text-center h-100">
                <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>🌤️</div>
                <h5 style={{ color: '#B5624A' }}>{data.sleep.naps}</h5>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Dagsömn</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-soft h-100">
                <span className="badge-sage">Sömnråd</span>
                <ul className="checklist mt-2">
                  {data.sleep.tips.map(t => <li key={t} style={{ fontSize: '0.88rem' }}>{t}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mat */}
        <section className="mb-5">
          <h2 className="section-title">Matning</h2>
          <div className="card-soft">
            <ul className="checklist">
              {data.feeding.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </section>

        {/* Stimulans */}
        <section className="mb-5">
          <h2 className="section-title">Stimulans & lek</h2>
          <div className="card-soft">
            <div className="row g-2">
              {data.stimulation.map(s => (
                <div className="col-md-6" key={s}>
                  <div style={{ background: '#FAF6F0', borderRadius: 8, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: '#A8BBA0', fontWeight: 700 }}>✓</span>
                    <span style={{ fontSize: '0.9rem' }}>{s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Forskning */}
        <section className="mb-5">
          <h2 className="section-title">Forskning att känna till</h2>
          {data.research.map(r => (
            <div className="research-card" key={r.title}>
              <span className="badge-rose">Forskning</span>
              <h5 className="mt-2">{r.title}</h5>
              <p style={{ fontSize: '0.9rem' }}>{r.body}</p>
              <div className="evidence-stars">Evidens: {r.evidence}</div>
            </div>
          ))}
        </section>

        {/* Tips */}
        <section className="mb-5">
          <h2 className="section-title">Praktiska tips</h2>
          <div className="card-soft">
            <ul className="checklist">
              {data.tips.map(t => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </section>

        {/* Varningssignaler */}
        <div className="warning-box">
          <strong>⚠️ Kontakta BVC:</strong> {data.warning}
        </div>

      </div>
    </div>
  )
}
