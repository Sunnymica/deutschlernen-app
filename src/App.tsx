import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'

type Language = 'de' | 'en' | 'uk' | 'hr'

const translations = {
  de: {
    title: 'Deutsch Lernen',
    subtitle: 'Mehrsprachige Lernplattform',
    selectLanguage: 'Waehle deine Sprache:',
    scenarios: 'Szenarien',
    vocabulary: 'Vokabeln',
    grammar: 'Grammatik',
    back: 'Zurueck'
  },
  en: {
    title: 'Learn German',
    subtitle: 'Multilingual Learning Platform',
    selectLanguage: 'Choose your language:',
    scenarios: 'Scenarios',
    vocabulary: 'Vocabulary',
    grammar: 'Grammar',
    back: 'Back'
  },
  uk: {
    title: 'Вивчай німецьку',
    subtitle: 'Багатомовна навчальна платформа',
    selectLanguage: 'Оберіть мову:',
    scenarios: 'Сценарії',
    vocabulary: 'Словник',
    grammar: 'Граматика',
    back: 'Назад'
  },
  hr: {
    title: 'Ucite njemacki',
    subtitle: 'Visejezicna platforma za ucenje',
    selectLanguage: 'Odaberite jezik:',
    scenarios: 'Scenariji',
    vocabulary: 'Vokabular',
    grammar: 'Gramatika',
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
                className="p-3 rounded-lg border-2 border-gray-200 transition-all hover:border-indigo-500 hover:bg-indigo-50"
              >
                {lang === 'de' && 'DE Deutsch'}
                {lang === 'en' && 'GB English'}
                {lang === 'uk' && 'UA Українська'}
                {lang === 'hr' && 'HR Hrvatski'}
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
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all shadow-md text-lg"
          >
            {t.scenarios}
          </button>
          
          <button
            onClick={() => navigate('/vocabulary')}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all shadow-md text-lg"
          >
            {t.vocabulary}
          </button>
          
          <button
            onClick={() => navigate('/grammar')}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all shadow-md text-lg"
          >
            {t.grammar}
          </button>
        </div>
      </div>
    </div>
  )
}

function ScenariosPage({ language }: { language: Language }) {
  const navigate = useNavigate()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="text-indigo-600 hover:text-indigo-800 mb-4 font-medium"
        >
          ← {t.back}
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.scenarios}</h1>

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600">Szenarien werden geladen...</p>
        </div>
      </div>
    </div>
  )
}

function VocabularyPage({ language }: { language: Language }) {
  const navigate = useNavigate()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="text-indigo-600 hover:text-indigo-800 mb-4 font-medium"
        >
          ← {t.back}
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.vocabulary}</h1>

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600">Vokabeln werden geladen...</p>
        </div>
      </div>
    </div>
  )
}

function GrammarPage({ language }: { language: Language }) {
  const navigate = useNavigate()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="text-indigo-600 hover:text-indigo-800 mb-4 font-medium"
        >
          ← {t.back}
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.grammar}</h1>

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600">Grammatik wird geladen...</p>
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
        <Route path="/scenarios" element={<ScenariosPage language={language} />} />
        <Route path="/vocabulary" element={<VocabularyPage language={language} />} />
        <Route path="/grammar" element={<GrammarPage language={language} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
