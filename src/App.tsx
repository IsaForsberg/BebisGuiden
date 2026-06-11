import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import InnanGraviditet from './pages/InnanGraviditet'
import Graviditet from './pages/Graviditet'
import InforForlossning from './pages/InforForlossning'
import Barnrummet from './pages/Barnrummet'
import Inspiration from './pages/Inspiration'
import Tips from './pages/Tips'
import Boktips from './pages/Boktips'
import UtvecklingPage from './pages/utveckling/UtvecklingPage'
import ForskningHjarna from './pages/forskning/ForskningHjarna'
import ForskningSomn from './pages/forskning/ForskningSomn'
import ForskningKost from './pages/forskning/ForskningKost'
import ForskningSkarmtid from './pages/forskning/ForskningSkarmtid'
import Artiklar from './pages/Artiklar'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/innan-graviditet" element={<InnanGraviditet />} />
          <Route path="/graviditet" element={<Graviditet />} />
          <Route path="/infor-forlossning" element={<InforForlossning />} />
          <Route path="/barnrummet" element={<Barnrummet />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/boktips" element={<Boktips />} />
          <Route path="/artiklar" element={<Artiklar />} />
          <Route path="/utveckling/:age" element={<UtvecklingPage />} />
          <Route path="/forskning/hjarna" element={<ForskningHjarna />} />
          <Route path="/forskning/somn" element={<ForskningSomn />} />
          <Route path="/forskning/kost" element={<ForskningKost />} />
          <Route path="/forskning/skarmtid" element={<ForskningSkarmtid />} />
          <Route path="*" element={
            <div className="container py-5 text-center">
              <div style={{ fontSize: '4rem' }}>🌸</div>
              <h2 style={{ color: '#B5624A' }}>Sidan hittades inte</h2>
              <p>Den här sidan finns inte ännu – men vi jobbar på det!</p>
              <a href="/" className="btn-primary-custom" style={{ marginTop: 20 }}>Tillbaka till startsidan</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
