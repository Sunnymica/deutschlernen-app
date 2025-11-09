import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import ErsteSchritte from './components/ErsteSchritte'
import ScenarioDetail from './components/ScenarioDetail'
import Vocabulary from './components/Vocabulary'
import Grammar from './components/Grammar'
import { ersteSchritteScenarios } from './data/ersteSchritteScenarios'

type Language = 'de' | 'en' | 'uk' | 'hr'

const translations = {
  de: {
    title: 'Deutsch Lernen',
    subtitle: 'Mehrsprachige Lernplattform',
    selectLanguage: 'Waehle deine Sprache:',
    start: 'Los gehts!',
    back: 'Zurueck'
  },
  en: {
    title: 'Learn German',
    subtitle: 'Multilingual Learning Platform',
    selectLanguage: 'Choose your language:',
    start: 'Lets go!',
    back: 'Back'
  },
  uk: {
    title: 'Вивчай німецьку',
    subtitle: 'Багатомовна навчальна платформа',
    selectLanguage: 'Оберіть мову:',
    start: 'Розпочати!',
    back: 'Назад'
  },
  hr: {
    title: 'Ucite njemacki',
    subtitle: 'Visejezicna platforma za ucenje',
    selectLanguage: 'Odaberite jezik:',
    start: 'Idemo!',
    back: 'Natrag'
  }
}

function LanguageSelector({ onSelect }: { onSelect: (lang: Language) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-indigo-600 mb-2">Deutsch Lernen</h1>
        <p className="text-gray-600 mb-8">Mehrsprachige Lernplattform</p>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Waehle deine Sprache:
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(['de', 'en', 'uk', 'hr'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onSelect(lang)}
                className="p-3 rounded-lg border-2 transition-all hover:border-indigo-300 hover:bg-indigo-50"
              >
                {lang === 'de' && 'Deutsch'}
                {lang === 'en' && 'English'}
                {lang === 'uk' && 'Українська'}
                {lang === 'hr' && 'Hrvatski'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Home({ language }: { language: Language }) {
  const navigate = useNavigate()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid gap-4">
          <button
            onClick={() => navigate('/scenarios')}
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all shadow-md"
          >
            Erste Schritte
          </button>
          
          <button
            onClick={() => navigate('/vocabulary')}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md"
          >
            Vokabeln
          </button>
          
          <button
            onClick={() => navigate('/grammar')}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all shadow-md"
          >
            Grammatik
          </button>
        </div>
      </div>
    </div>
  )
}

function ScenariosOverview({ language }: { language: Language }) {
  const navigate = useNavigate()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="text-indigo-600 hover:text-indigo-800 mb-4 flex items-center"
        >
          {t.back}
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Erste Schritte Szenarien</h1>

        <div className="grid gap-4">
          {ersteSchritteScenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => navigate(`/scenario/${scenario.id}`)}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-2">{scenario.icon}</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{scenario.title}</h2>
              <p className="text-gray-600">{scenario.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState<Language | null>(null)

  if (!language) {
    return <LanguageSelector onSelect={setLanguage} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/scenarios" element={<ScenariosOverview language={language} />} />
        <Route path="/scenario/:id" element={<ScenarioDetail language={language} />} />
        <Route path="/vocabulary" element={<Vocabulary language={language} />} />
        <Route path="/grammar" element={<Grammar language={language} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
