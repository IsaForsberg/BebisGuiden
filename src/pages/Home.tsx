import { Link } from 'react-router-dom'

const sections = [
  {
    icon: '🌱',
    title: 'Innan graviditeten',
    desc: 'Vad du kan göra nu för att förbereda din kropp och ditt liv.',
    path: '/innan-graviditet',
    color: 'light-sage',
  },
  {
    icon: '🤰',
    title: 'Graviditet vecka för vecka',
    desc: 'Följ fostrets resa från vecka 1 till 40 med forskning och checklistor.',
    path: '/graviditet',
    color: 'light-rose',
  },
  {
    icon: '🏥',
    title: 'Inför förlossning',
    desc: 'Förlossningsplan, vad du packar, vad du kan förvänta dig.',
    path: '/infor-forlossning',
    color: 'light-blue',
  },
  {
    icon: '👶',
    title: '0–3 månader',
    desc: 'Nyföddhetsperioden – sömn, matning, anknytning och sensorisk stimulans.',
    path: '/utveckling/0-3',
    color: 'light-rose',
  },
  {
    icon: '🧸',
    title: '3–6 månader',
    desc: 'Leenden, skratt och det första "sociala" halvåret.',
    path: '/utveckling/3-6',
    color: 'light-sage',
  },
  {
    icon: '🌟',
    title: '6–12 månader',
    desc: 'Fast föda, krypande, stå upp – en milstolpe-fylld tid.',
    path: '/utveckling/6-12',
    color: 'light-blue',
  },
  {
    icon: '🚶',
    title: '1–2 år',
    desc: 'Toddler-liv, språkexplosion och självständighet.',
    path: '/utveckling/1-2',
    color: 'light-rose',
  },
  {
    icon: '🎨',
    title: '2–3 år',
    desc: 'Potträning, fantasilek och de fantastiska "terrible twos".',
    path: '/utveckling/2-3',
    color: 'light-sage',
  },
  {
    icon: '🧠',
    title: 'Hjärna & lärande',
    desc: 'Forskning om hur barnets hjärna utvecklas och vad som stärker den.',
    path: '/forskning/hjarna',
    color: 'light-rose',
  },
  {
    icon: '😴',
    title: 'Sömn & anknytning',
    desc: 'Evidensbaserade råd om sömn, anknytning och trygghet.',
    path: '/forskning/somn',
    color: 'light-sage',
  },
  {
    icon: '🥕',
    title: 'Kost & hälsa',
    desc: 'Näring under graviditet, amning och barnets första år.',
    path: '/forskning/kost',
    color: 'light-blue',
  },
  {
    icon: '📱',
    title: 'Skärmtid & stimulans',
    desc: 'Vad forskning säger om skärmtid och hur du stimulerar nyfikenhet.',
    path: '/forskning/skarmtid',
    color: 'light-rose',
  },
  {
    icon: '🛏️',
    title: 'Barnrummet',
    desc: 'Inredning, säkerhet, färger och smarta förvaringslösningar.',
    path: '/barnrummet',
    color: 'light-sage',
  },
  {
    icon: '🛍️',
    title: 'Inspiration & produkter',
    desc: 'Produkter jag vill köpa och inredning jag drömmer om.',
    path: '/inspiration',
    color: 'light-blue',
  },
  {
    icon: '💡',
    title: 'Tips & Tricks',
    desc: 'Praktiska råd, genvägar och saker ingen berättar för dig.',
    path: '/tips',
    color: 'light-rose',
  },
  {
    icon: '📚',
    title: 'Boktips',
    desc: 'Böcker för föräldrar och barn – sorterade efter ålder och ämne.',
    path: '/boktips',
    color: 'light-sage',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-home">
        <div className="container">
          <div style={{ fontSize: '4rem', marginBottom: 16 }}>🌸</div>
          <h1>BebisGuiden</h1>
          <p>
            En plats full av forskning, kärlek och praktiska råd — för dig som förbereder dig för det största äventyret i livet.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/graviditet" className="btn-primary-custom">Graviditet vecka för vecka</Link>
            <Link to="/forskning/hjarna" className="btn-secondary-custom">Utforska forskning</Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="container py-5">
        <div className="quote-block text-center" style={{ maxWidth: 700, margin: '0 auto' }}>
          "Det finns ingen anledning att planera perfekt — men det finns all anledning att planera med kärlek."
        </div>
      </section>

      {/* Navigation grid */}
      <section className="container pb-5">
        <div className="text-center mb-5">
          <h2 className="section-title">Utforska BebisGuiden</h2>
          <p className="section-subtitle">Klicka på ett ämne för att dyka djupare</p>
        </div>
        <div className="row g-4">
          {sections.map((s) => (
            <div className="col-6 col-md-4 col-lg-3" key={s.path}>
              <Link to={s.path} className="nav-card h-100">
                <span className="icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Did you know */}
      <section style={{ background: 'white', padding: '60px 20px' }}>
        <div className="container">
          <h2 className="section-title text-center mb-2">Visste du att…</h2>
          <p className="section-subtitle text-center">Intressanta forskningsfakta om spädbarn</p>
          <div className="row g-4 mt-2">
            {[
              { emoji: '🧠', fact: 'Barnets hjärna producerar 700 nya neurala kopplingar per sekund under de första åren.' },
              { emoji: '👁️', fact: 'Nyfödda kan bara se tydligt på 20–30 cm avstånd — precis avståndet till ditt ansikte vid amning.' },
              { emoji: '🗣️', fact: 'Barn som hör fler ord tidigt har bättre skolresultat senare. Prata med barnet hela dagen!' },
              { emoji: '😴', fact: 'Sömn är inte slöseri med tid — under sömn konsoliderar hjärnan allt barnet lärt sig under dagen.' },
            ].map((item) => (
              <div className="col-md-6 col-lg-3" key={item.emoji}>
                <div className="card-soft text-center h-100">
                  <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{item.emoji}</div>
                  <p style={{ fontSize: '0.95rem' }}>{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
