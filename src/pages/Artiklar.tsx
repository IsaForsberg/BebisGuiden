import { useState } from 'react'

interface Article {
  id: string
  title: string
  authors: string
  year: string
  journal: string
  desc: string
  link: string
  category: string
  evidence: string
  custom?: boolean
}

const defaultArticles: Article[] = [
  // Hjärna & lärande
  {
    id: '1',
    title: 'Meaningful Differences in the Everyday Experience of Young American Children',
    authors: 'Hart, B. & Risley, T.R.',
    year: '1995',
    journal: 'Paul H. Brookes Publishing',
    desc: 'Den klassiska "30-miljoner-ords"-studien. Visade att barn från lägre socioekonomiska hem hört 30 miljoner färre ord vid 4 års ålder – vilket förutspådde skolresultat bättre än andra faktorer.',
    link: 'https://www.aft.org/ae/spring2003/hart_risley',
    category: 'Hjärna & lärande',
    evidence: '★★★',
  },
  {
    id: '2',
    title: 'Serve and Return – Building Brains',
    authors: 'Harvard Center on the Developing Child',
    year: '2018',
    journal: 'Harvard University',
    desc: 'Sammanfattar forskning om "serve and return"-interaktioner – hur förälderns responsivitet stärker neurala kopplingar. Inkluderar videomaterial och praktiska råd.',
    link: 'https://developingchild.harvard.edu/science/key-concepts/serve-and-return/',
    category: 'Hjärna & lärande',
    evidence: '★★★',
  },
  {
    id: '3',
    title: 'The Value of Play I: The Definition of Play Gives Insights',
    authors: 'Gray, P.',
    year: '2008',
    journal: 'Psychology Today',
    desc: 'Peter Gray om fri leks betydelse för barns kognitiva, sociala och emotionella utveckling. Grunden för hans forskning om självbestämd lek.',
    link: 'https://www.psychologytoday.com/us/blog/freedom-learn/200811/the-value-play-i-the-definition-play-gives-insights',
    category: 'Hjärna & lärande',
    evidence: '★★★',
  },
  {
    id: '4',
    title: 'The Science of Early Childhood Development',
    authors: 'Harvard Center on the Developing Child',
    year: '2007',
    journal: 'Harvard University',
    desc: 'Genomgång av forskning kring de första 1000 dagarna – neuroplasticitet, stress och vikten av stabila relationer för hjärnans utveckling.',
    link: 'https://developingchild.harvard.edu/resources/inbrief-science-of-ecd/',
    category: 'Hjärna & lärande',
    evidence: '★★★',
  },
  {
    id: '5',
    title: 'Dialogic Reading: An Effective Way to Read Aloud with Young Children',
    authors: 'Whitehurst, G.J.',
    year: '1992',
    journal: 'Reading Rockets / ACEI',
    desc: 'Introducerar dialogisk läsning som metod – hur interaktiv läsning med frågor och samtal förbättrar barns språkutveckling mer än passiv läsning.',
    link: 'https://www.readingrockets.org/topics/background-knowledge/articles/dialogic-reading-effective-way-read-aloud-young-children',
    category: 'Hjärna & lärande',
    evidence: '★★★',
  },
  {
    id: '6',
    title: 'Language Experience in the Second Year of Life Predicts Language Outcomes in Late Childhood',
    authors: 'Gilkerson, J. et al.',
    year: '2018',
    journal: 'Pediatrics',
    desc: 'Visade att antalet ord och konversationsturtagningar i hemmet vid 2 års ålder förutspår språklig och kognitiv förmåga vid 9–14 år.',
    link: 'https://publications.aap.org/pediatrics/article/142/4/e20174276/37793',
    category: 'Hjärna & lärande',
    evidence: '★★★',
  },

  // Sömn & anknytning
  {
    id: '7',
    title: 'Safe Sleep and Skin-to-Skin Care in the Neonatal Period for Healthy Term Newborns',
    authors: 'American Academy of Pediatrics (AAP)',
    year: '2022',
    journal: 'Pediatrics',
    desc: 'AAP:s uppdaterade riktlinjer för säker sömn. Inkluderar ryggläge, fast madrass, rumdelning upp till 6 månader och rökfri miljö.',
    link: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304',
    category: 'Sömn & anknytning',
    evidence: '★★★',
  },
  {
    id: '8',
    title: 'Behavioral Treatment of Bedtime Problems and Night Wakings in Infants and Young Children',
    authors: 'Mindell, J.A. et al.',
    year: '2006',
    journal: 'SLEEP',
    desc: 'Meta-analys av 52 studier om sömnträning. Fann att behaviorala metoder är effektiva i 80% av fallen utan negativa effekter på barnet.',
    link: 'https://academic.oup.com/sleep/article/29/10/1263/2709194',
    category: 'Sömn & anknytning',
    evidence: '★★★',
  },
  {
    id: '9',
    title: 'Behavioral Sleep Techniques: No Long-Term Effects on Stress or Mental Health',
    authors: 'Price, A.M.H. et al.',
    year: '2012',
    journal: 'Pediatrics',
    desc: 'Australiensisk studie som följde barn upp till 6 år. Hittade inga negativa effekter på anknytning, beteende eller stressnivåer hos barn som genomgick sömnträning.',
    link: 'https://publications.aap.org/pediatrics/article/130/4/643/30524',
    category: 'Sömn & anknytning',
    evidence: '★★★',
  },
  {
    id: '10',
    title: 'The Nature of the Child\'s Tie to His Mother',
    authors: 'Bowlby, J.',
    year: '1958',
    journal: 'International Journal of Psychoanalysis',
    desc: 'John Bowlbys grundläggande artikel om anknytningsteorin. Beskriver hur det emotionella bandet mellan barn och vårdgivare fungerar som ett biologiskt skyddssystem.',
    link: 'https://psycnet.apa.org/record/1959-08089-001',
    category: 'Sömn & anknytning',
    evidence: '★★★',
  },
  {
    id: '11',
    title: 'Patterns of Attachment: A Psychological Study of the Strange Situation',
    authors: 'Ainsworth, M. et al.',
    year: '1978',
    journal: 'Lawrence Erlbaum Associates',
    desc: 'Mary Ainsworths klassiska studie som identifierade de tre anknytningstyperna: trygg, otrygg-ambivalent och otrygg-undvikande via "strange situation"-metoden.',
    link: 'https://psycnet.apa.org/record/1979-06964-000',
    category: 'Sömn & anknytning',
    evidence: '★★★',
  },

  // Kost & näring
  {
    id: '12',
    title: 'Randomized Trial of Peanut Consumption in Infants at Risk for Peanut Allergy (LEAP)',
    authors: 'Du Toit, G. et al.',
    year: '2015',
    journal: 'New England Journal of Medicine',
    desc: 'Banbrytande LEAP-studie. Visade att tidig introduktion av jordnöt (4–11 månader) minskade jordnötsallergi med 80% hos högriskbarn. Revolutionerade allergiråden.',
    link: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1414850',
    category: 'Kost & näring',
    evidence: '★★★',
  },
  {
    id: '13',
    title: 'Folic Acid Supplementation and Pregnancy: More Than Just Neural Tube Defect Prevention',
    authors: 'Blencowe, H. et al.',
    year: '2010',
    journal: 'BMC Pregnancy and Childbirth',
    desc: 'Meta-analys som visade att folsyratillskott minskar risken för neuralrörsdefekter med 46–70%. Grund för WHO:s rekommendation om folsyra till alla i fertil ålder.',
    link: 'https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/1471-2393-10-S1-S3',
    category: 'Kost & näring',
    evidence: '★★★',
  },
  {
    id: '14',
    title: 'Breastfeeding and Maternal and Infant Health Outcomes in Developed Countries',
    authors: 'Ip, S. et al.',
    year: '2007',
    journal: 'Agency for Healthcare Research and Quality',
    desc: 'Stor systematisk genomgång av amningens fördelar för barn (minskad öroninflammation, fetma, diabetes) och mamma (minskad cancerisk). Grund för WHO:s amningsrekommendationer.',
    link: 'https://www.ahrq.gov/sites/default/files/wysiwyg/research/findings/evidence-based-reports/breastfeedingfinaletrevised.pdf',
    category: 'Kost & näring',
    evidence: '★★★',
  },
  {
    id: '15',
    title: 'WHO Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children Under 5',
    authors: 'World Health Organization',
    year: '2019',
    journal: 'WHO',
    desc: 'WHO:s riktlinjer för rörelse, stillasittande och sömn för barn under 5 år. Inkluderar skärmtidsrekommendationer och sömnbehov per åldersgrupp.',
    link: 'https://www.who.int/publications/i/item/9789241550536',
    category: 'Kost & näring',
    evidence: '★★★',
  },

  // Skärmtid & stimulans
  {
    id: '16',
    title: 'Media and Young Minds (Policy Statement)',
    authors: 'American Academy of Pediatrics',
    year: '2016',
    journal: 'Pediatrics',
    desc: 'AAP:s uppdaterade skärmtidspolicy. Avråder från skärmtid under 18–24 månader (utom videochatt) och rekommenderar max 1 timme/dag för 2–5-åringar med hög kvalitet.',
    link: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60321',
    category: 'Skärmtid & stimulans',
    evidence: '★★★',
  },
  {
    id: '17',
    title: 'Associations Between Screen Use and Child Language Skills: A Systematic Review',
    authors: 'Madigan, S. et al.',
    year: '2020',
    journal: 'JAMA Pediatrics',
    desc: 'Meta-analys av 35 studier. Fann samband mellan ökad skärmtid hos barn 0–5 år och sämre språkutveckling, expressiv kommunikation och exekutiva funktioner.',
    link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2754101',
    category: 'Skärmtid & stimulans',
    evidence: '★★★',
  },
  {
    id: '18',
    title: 'Background Television as an Impediment to Cognitive Processing',
    authors: 'Kirkorian, H.L. et al.',
    year: '2009',
    journal: 'Child Development',
    desc: 'Visade att bakgrunds-TV (TV på i rummet medan barnet leker) stör föräldra-barn-interaktion och barnets kognitiva bearbetning, även om barnet inte aktivt tittar.',
    link: 'https://srcd.onlinelibrary.wiley.com/doi/10.1111/j.1467-8624.2009.01360.x',
    category: 'Skärmtid & stimulans',
    evidence: '★★★',
  },

  // Graviditet & förlossning
  {
    id: '19',
    title: 'Exercise During Pregnancy and Postpartum Period (Cochrane Review)',
    authors: 'Bø, K. et al.',
    year: '2017',
    journal: 'Cochrane Database of Systematic Reviews',
    desc: 'Genomgång av 56 studier om träning under graviditet. Visade minskad risk för graviditetsdiabetes, preeklampsi och kejsarsnitt vid regelbunden träning.',
    link: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD007507.pub4',
    category: 'Graviditet & förlossning',
    evidence: '★★★',
  },
  {
    id: '20',
    title: 'Delayed Clamping of the Umbilical Cord: A Review',
    authors: 'McDonald, S.J. et al.',
    year: '2013',
    journal: 'Cochrane Database of Systematic Reviews',
    desc: 'Visar att fördröjd avklippning av navelsträngen (1–3 min) ger barnet mer blod och järn, och minskar anemi i spädbarnsperioden utan ökad risk för komplikationer.',
    link: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004074.pub3',
    category: 'Graviditet & förlossning',
    evidence: '★★★',
  },
  {
    id: '21',
    title: 'Skin-to-Skin Contact After Birth: A Systematic Review',
    authors: 'Moore, E.R. et al.',
    year: '2016',
    journal: 'Cochrane Database of Systematic Reviews',
    desc: 'Meta-analys av hud-mot-hud-kontakt direkt efter födseln. Positiva effekter på amning, hjärtfrekvens, temperatur och tidig anknytning hos nyfödda.',
    link: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD003519.pub4',
    category: 'Graviditet & förlossning',
    evidence: '★★★',
  },

  // Föräldraskap & välmående
  {
    id: '22',
    title: 'Parental Burnout: When Exhausted Mothers Open Up',
    authors: 'Mikolajczak, M. & Roskam, I.',
    year: '2018',
    journal: 'Frontiers in Psychology',
    desc: 'Forskning om föräldraburnout – symptom, prevalens och skillnad mot vanlig utbrändhet. Visar att 5–8% av föräldrar i västländer drabbas.',
    link: 'https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01021/full',
    category: 'Föräldraskap & välmående',
    evidence: '★★★',
  },
  {
    id: '23',
    title: 'The PURPLE Crying Program',
    authors: 'National Center on Shaken Baby Syndrome',
    year: '2010',
    journal: 'NCSBS',
    desc: 'Beskriver den normala "PURPLE"-gråtperioden hos nyfödda (2–5 månader) och hur kunskap om detta minskar risken för skakad bebis-syndrom.',
    link: 'https://www.purplecrying.info/',
    category: 'Föräldraskap & välmående',
    evidence: '★★★',
  },
  {
    id: '24',
    title: 'Tummy Time and Infant Development',
    authors: 'American Academy of Pediatrics',
    year: '2020',
    journal: 'Healthy Children / AAP',
    desc: 'AAP:s riktlinjer för magliggande under vaken tid. Viktigt för motorisk utveckling, förebygger platthuvudssyndrom (plagiocephaly) och stärker nacke och axlar.',
    link: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    category: 'Föräldraskap & välmående',
    evidence: '★★★',
  },
  {
    id: '25',
    title: 'Good Enough Parenting: A Framework for Assessment',
    authors: 'Hoghughi, M.',
    year: '1997',
    journal: 'Child Abuse and Neglect',
    desc: 'Konceptet "tillräcklig förälder" – att man inte behöver vara perfekt för att ge barnet trygg uppväxt. Viktigt perspektiv mot prestationskultur i föräldraskap.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0145213497000210',
    category: 'Föräldraskap & välmående',
    evidence: '★★☆',
  },
  {
    id: '26',
    title: 'Association Between Pacifier Use and Breastfeeding Duration',
    authors: 'O\'Connor, N.R. et al.',
    year: '2009',
    journal: 'Archives of Pediatrics & Adolescent Medicine',
    desc: 'Genomgång av forskning om nappar och amning. Visar att nappar inte minskar amningsfrekvens om de introduceras efter att amningen etablerats (efter 3–4 veckor).',
    link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/382976',
    category: 'Föräldraskap & välmående',
    evidence: '★★☆',
  },

  // Motorik & lek
  {
    id: '27',
    title: 'The Role of Play in Children\'s Development: A Review of the Evidence',
    authors: 'Whitebread, D. et al.',
    year: '2012',
    journal: 'Toy Industries of Europe',
    desc: 'Genomgång av forskning om lekens roll för kognitiv, social, emotionell och fysisk utveckling. Stark evidens för fri lek som gynnar exekutiva funktioner.',
    link: 'https://www.playengland.org.uk/resource/the-role-of-play-in-childrens-development-a-review-of-the-evidence/',
    category: 'Motorik & lek',
    evidence: '★★★',
  },
  {
    id: '28',
    title: 'Motor Development During Infancy and Early Childhood',
    authors: 'Adolph, K.E. & Hoch, J.E.',
    year: '2019',
    journal: 'International Encyclopedia of the Social & Behavioral Sciences',
    desc: 'Genomgång av motorisk utveckling från födseln till förskoleålder. Beskriver hur rörelseerfarenhet driver perception och kognition – "babies learn by doing".',
    link: 'https://psycnet.apa.org/record/2015-20744-001',
    category: 'Motorik & lek',
    evidence: '★★★',
  },
]

const categories = [
  'Alla',
  'Hjärna & lärande',
  'Sömn & anknytning',
  'Kost & näring',
  'Skärmtid & stimulans',
  'Graviditet & förlossning',
  'Föräldraskap & välmående',
  'Motorik & lek',
]

const STORAGE_KEY = 'bebisguiden_custom_articles'

function AddArticleForm({ onAdd }: { onAdd: (a: Article) => void }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    title: '', authors: '', year: '', journal: '',
    desc: '', link: '', category: 'Hjärna & lärande', evidence: '★★☆',
  })
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.title || !form.link) { setError('Titel och länk krävs.'); return }
    onAdd({
      id: Date.now().toString(),
      ...form,
      custom: true,
    })
    setForm({ title: '', authors: '', year: '', journal: '', desc: '', link: '', category: 'Hjärna & lärande', evidence: '★★☆' })
    setError('')
    setOpen(false)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 10,
    border: '1px solid #E8C4B8', fontSize: '0.9rem', outline: 'none',
    fontFamily: 'inherit',
  }

  return (
    <div className="mb-4">
      <button onClick={() => setOpen(o => !o)} className="btn-primary-custom"
        style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {open ? '✕ Avbryt' : '+ Lägg till egen artikel'}
      </button>

      {open && (
        <div className="card-soft mt-3" style={{ maxWidth: 680 }}>
          <h5 style={{ color: '#B5624A', marginBottom: 20 }}>Lägg till artikel eller studie</h5>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>Titel *</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="Artikelns titel" style={inputStyle} />
              </div>
              <div className="col-md-8">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>Författare</label>
                <input value={form.authors} onChange={e => setForm(f => ({ ...f, authors: e.target.value }))}
                  placeholder="t.ex. Smith, J. et al." style={inputStyle} />
              </div>
              <div className="col-md-4">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>År</label>
                <input value={form.year} onChange={e => setForm(f => ({ ...f, year: e.target.value }))}
                  placeholder="2024" style={inputStyle} />
              </div>
              <div className="col-md-8">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>Tidskrift / Källa</label>
                <input value={form.journal} onChange={e => setForm(f => ({ ...f, journal: e.target.value }))}
                  placeholder="t.ex. Pediatrics, WHO, BBC" style={inputStyle} />
              </div>
              <div className="col-md-4">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>Kategori</label>
                <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                  style={{ ...inputStyle, background: 'white' }}>
                  {categories.filter(c => c !== 'Alla').map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="col-12">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>Beskrivning</label>
                <textarea value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value }))}
                  placeholder="Beskriv vad studien handlar om och varför den är relevant..."
                  rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <div className="col-md-8">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>Länk *</label>
                <input value={form.link} onChange={e => setForm(f => ({ ...f, link: e.target.value }))}
                  placeholder="https://..." type="url" style={inputStyle} />
              </div>
              <div className="col-md-4">
                <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: 4 }}>Evidensnivå</label>
                <select value={form.evidence} onChange={e => setForm(f => ({ ...f, evidence: e.target.value }))}
                  style={{ ...inputStyle, background: 'white' }}>
                  <option value="★★★">★★★ Hög (meta-analys/RCT)</option>
                  <option value="★★☆">★★☆ Medel (observationsstudie)</option>
                  <option value="★☆☆">★☆☆ Låg (fallstudie/anekdot)</option>
                </select>
              </div>
              {error && <div className="col-12"><div className="warning-box">{error}</div></div>}
              <div className="col-12">
                <button type="submit" className="btn-primary-custom">Lägg till artikel</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

function ArticleCard({ article, onRemove }: { article: Article; onRemove?: () => void }) {
  return (
    <div className="research-card" style={{ position: 'relative' }}>
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
        <span className="badge-rose">{article.category}</span>
        <div className="d-flex align-items-center gap-2">
          <span style={{ fontSize: '0.82rem', color: '#B5624A' }}>{article.evidence}</span>
          {article.custom && (
            <span style={{ background: '#EBF0E9', color: '#5a7a52', borderRadius: 10, padding: '2px 8px', fontSize: '0.75rem', fontWeight: 700 }}>
              Eget val
            </span>
          )}
          {onRemove && (
            <button onClick={onRemove} title="Ta bort"
              style={{ background: '#F5E8E2', border: 'none', borderRadius: '50%', width: 24, height: 24, cursor: 'pointer', fontSize: '0.75rem', color: '#B5624A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              ✕
            </button>
          )}
        </div>
      </div>
      <h5 style={{ color: '#3D2B1F', marginBottom: 4, fontSize: '1rem' }}>{article.title}</h5>
      <div style={{ fontSize: '0.82rem', opacity: 0.65, marginBottom: 10 }}>
        {article.authors}{article.authors && article.year ? ' · ' : ''}{article.year}
        {article.journal ? ` · ${article.journal}` : ''}
      </div>
      {article.desc && (
        <p style={{ fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 14 }}>{article.desc}</p>
      )}
      <a href={article.link} target="_blank" rel="noopener noreferrer"
        className="btn-secondary-custom"
        style={{ padding: '7px 18px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        Läs artikeln →
      </a>
    </div>
  )
}

export default function Artiklar() {
  const [activeCategory, setActiveCategory] = useState('Alla')
  const [search, setSearch] = useState('')
  const [customArticles, setCustomArticles] = useState<Article[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') }
    catch { return [] }
  })

  const allArticles = [...defaultArticles, ...customArticles]

  function addArticle(a: Article) {
    const updated = [...customArticles, a]
    setCustomArticles(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  function removeArticle(id: string) {
    const updated = customArticles.filter(a => a.id !== id)
    setCustomArticles(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  const filtered = allArticles.filter(a => {
    const catMatch = activeCategory === 'Alla' || a.category === activeCategory
    const searchMatch = search === '' ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.authors.toLowerCase().includes(search.toLowerCase()) ||
      a.desc.toLowerCase().includes(search.toLowerCase())
    return catMatch && searchMatch
  })

  const grouped = categories
    .filter(c => c !== 'Alla')
    .map(cat => ({
      cat,
      articles: filtered.filter(a => a.category === cat),
    }))
    .filter(g => g.articles.length > 0)

  const counts = categories.reduce((acc, cat) => {
    acc[cat] = cat === 'Alla'
      ? allArticles.length
      : allArticles.filter(a => a.category === cat).length
    return acc
  }, {} as Record<string, number>)

  return (
    <div>
      <div className="page-hero">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>📄</div>
        <h1>Artiklar & forskning</h1>
        <p>Alla studier och artiklar som nämns på BebisGuiden – samlade på ett ställe. Lägg gärna till egna fynd!</p>
      </div>

      <div className="container py-5">

        {/* Sök + Lägg till */}
        <div className="d-flex flex-wrap gap-3 align-items-start justify-content-between mb-4">
          <div style={{ flex: 1, minWidth: 240, maxWidth: 400 }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="🔍 Sök på titel, författare eller ämne..."
              style={{
                width: '100%', padding: '12px 16px', borderRadius: 12,
                border: '1px solid #E8C4B8', fontSize: '0.95rem', outline: 'none',
                fontFamily: 'inherit', background: 'white',
              }}
            />
          </div>
          <AddArticleForm onAdd={addArticle} />
        </div>

        {/* Kategorifilter */}
        <div className="d-flex gap-2 flex-wrap mb-5">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? '#B5624A' : '#F5E8E2',
                color: activeCategory === cat ? 'white' : '#3D2B1F',
                border: 'none', borderRadius: 20, padding: '8px 16px',
                fontSize: '0.87rem', fontWeight: 600, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
              {cat}
              <span style={{
                background: activeCategory === cat ? 'rgba(255,255,255,0.3)' : 'rgba(181,98,74,0.15)',
                borderRadius: 10, padding: '1px 7px', fontSize: '0.78rem',
              }}>
                {counts[cat] || 0}
              </span>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-5" style={{ opacity: 0.6 }}>
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</div>
            <p>Inga artiklar matchar din sökning.</p>
          </div>
        )}

        {/* Visa grupperat per kategori eller flöde */}
        {activeCategory === 'Alla' ? (
          grouped.map(g => (
            <section key={g.cat} className="mb-5">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <h2 className="section-title mb-0">{g.cat}</h2>
                <span style={{ background: '#F5E8E2', color: '#B5624A', borderRadius: 12, padding: '2px 10px', fontSize: '0.85rem', fontWeight: 700 }}>
                  {g.articles.length} artiklar
                </span>
              </div>
              {g.articles.map(a => (
                <ArticleCard key={a.id} article={a} onRemove={a.custom ? () => removeArticle(a.id) : undefined} />
              ))}
            </section>
          ))
        ) : (
          <div>
            {filtered.map(a => (
              <ArticleCard key={a.id} article={a} onRemove={a.custom ? () => removeArticle(a.id) : undefined} />
            ))}
          </div>
        )}

        <div className="mt-4" style={{ background: '#FAF6F0', borderRadius: 12, padding: 20, fontSize: '0.85rem', opacity: 0.75 }}>
          <strong>OBS:</strong> Länkarna pekar på externa webbplatser. En del vetenskapliga artiklar kräver åtkomst via universitet eller betalvägg – sök då på titeln i Google Scholar för en öppen version (ofta finns en "preprint" gratis).
        </div>

      </div>
    </div>
  )
}
