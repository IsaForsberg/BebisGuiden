import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container-lg">
        <div className="row g-4 mb-4">
          <div className="col-md-3">
            <h5>🌸 BebisGuiden</h5>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: 8 }}>
              Forskning, kärlek och praktiska råd för dig som förbereder dig för det största äventyret.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Förberedelser</h5>
            <Link to="/innan-graviditet">Innan graviditeten</Link>
            <Link to="/graviditet">Graviditet vecka för vecka</Link>
            <Link to="/infor-forlossning">Inför förlossning</Link>
          </div>
          <div className="col-md-3">
            <h5>Barnets ålder</h5>
            <Link to="/utveckling/0-3">0–3 månader</Link>
            <Link to="/utveckling/3-6">3–6 månader</Link>
            <Link to="/utveckling/6-12">6–12 månader</Link>
            <Link to="/utveckling/1-2">1–2 år</Link>
            <Link to="/utveckling/2-3">2–3 år</Link>
          </div>
          <div className="col-md-3">
            <h5>Mer innehåll</h5>
            <Link to="/barnrummet">Barnrummet</Link>
            <Link to="/inspiration">Inspiration</Link>
            <Link to="/forskning/hjarna">Forskning</Link>
            <Link to="/tips">Tips & Tricks</Link>
            <Link to="/boktips">Boktips</Link>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(232,196,184,0.3)', margin: '16px 0' }} />
        <p style={{ opacity: 0.5, fontSize: '0.8rem', textAlign: 'center', margin: 0 }}>
          © {new Date().getFullYear()} BebisGuiden · Gjord med ❤️ · Innehållet är informativt och ersätter inte medicinsk rådgivning
        </p>
      </div>
    </footer>
  )
}
