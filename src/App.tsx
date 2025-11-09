import { useState } from 'react'

type Language = 'de' | 'en' | 'uk' | 'hr'
type View = 'home' | 'scenarios' | 'scenario-detail' | 'vocabulary' | 'grammar'

const translations = {
  de: {
    title: 'Deutsch Lernen',
    subtitle: 'Mehrsprachige Lernplattform',
    selectLanguage: 'Waehle deine Sprache:',
    scenarios: 'Erste Schritte',
    vocabulary: 'Vokabeln',
    grammar: 'Grammatik',
    back: 'Zurueck',
    start: 'Los gehts!'
  },
  en: {
    title: 'Learn German',
    subtitle: 'Multilingual Learning Platform',
    selectLanguage: 'Choose your language:',
    scenarios: 'First Steps',
    vocabulary: 'Vocabulary',
    grammar: 'Grammar',
    back: 'Back',
    start: 'Lets go!'
  },
  uk: {
    title: 'Вивчай німецьку',
    subtitle: 'Багатомовна навчальна платформа',
    selectLanguage: 'Оберіть мову:',
    scenarios: 'Перші кроки',
    vocabulary: 'Словник',
    grammar: 'Граматика',
    back: 'Назад',
    start: 'Розпочати!'
  },
  hr: {
    title: 'Ucite njemacki',
    subtitle: 'Visejezicna platforma za ucenje',
    selectLanguage: 'Odaberite jezik:',
    scenarios: 'Prvi koraci',
    vocabulary: 'Vokabular',
    grammar: 'Gramatika',
    back: 'Natrag',
    start: 'Idemo!'
  }
}

const scenarios = [
  {
    id: 'auslaenderbehoerde',
    title: 'Auslaenderbehoerde',
    description: 'Aufenthaltstitel beantragen und verlaengern',
    icon: '🏛️'
  },
  {
    id: 'arztbesuch',
    title: 'Arztbesuch',
    description: 'Termin vereinbaren und Beschwerden erklaeren',
    icon: '🏥'
  }
]

function App() {
  const [language, setLanguage] = useState<Language | null>(null)
  const [view, setView] = useState<View>('home')
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null)

  const t = language ? translations[language] : translations.de

  // Language Selector
  if (!language) {
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
                  onClick={() => setLanguage(lang)}
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

  // Home View
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
            <p className="text-gray-600">{t.subtitle}</p>
          </div>

          <div className="grid gap-4">
            <button
              onClick={() => setView('scenarios')}
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all shadow-md text-lg"
            >
              📚 {t.scenarios}
            </button>
            
            <button
              onClick={() => setView('vocabulary')}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all shadow-md text-lg"
            >
              📝 {t.vocabulary}
            </button>
            
            <button
              onClick={() => setView('grammar')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all shadow-md text-lg"
            >
              📖 {t.grammar}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Scenarios List
  if (view === 'scenarios') {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setView('home')}
            className="text-indigo-600 hover:text-indigo-800 mb-4 font-medium flex items-center"
          >
            ← {t.back}
          </button>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.scenarios}</h1>

          <div className="grid gap-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => {
                  setSelectedScenario(scenario.id)
                  setView('scenario-detail')
                }}
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

  // Scenario Detail
  if (view === 'scenario-detail') {
    const scenario = scenarios.find(s => s.id === selectedScenario)
    
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setView('scenarios')}
            className="text-indigo-600 hover:text-indigo-800 mb-4 font-medium flex items-center"
          >
            ← {t.back}
          </button>

          {scenario && (
            <>
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="text-4xl mb-3">{scenario.icon}</div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{scenario.title}</h1>
                <p className="text-gray-600">{scenario.description}</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Dialog</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">Sachbearbeiter:</p>
                    <p className="text-gray-700">Guten Tag. Wie kann ich Ihnen helfen?</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">Sie:</p>
                    <p className="text-gray-700">Guten Tag. Ich moechte meinen Aufenthaltstitel verlaengern.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Wichtige Vokabeln</h2>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">der Aufenthaltstitel</p>
                    <p className="text-sm text-gray-600">residence permit</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold">verlaengern</p>
                    <p className="text-sm text-gray-600">to extend</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  // Vocabulary View
  if (view === 'vocabulary') {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setView('home')}
            className="text-indigo-600 hover:text-indigo-800 mb-4 font-medium flex items-center"
          >
            ← {t.back}
          </button>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.vocabulary}</h1>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600">Vokabel-Trainer wird geladen...</p>
          </div>
        </div>
      </div>
    )
  }

  // Grammar View
  if (view === 'grammar') {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setView('home')}
            className="text-indigo-600 hover:text-indigo-800 mb-4 font-medium flex items-center"
          >
            ← {t.back}
          </button>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.grammar}</h1>

          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600">Grammatik-Uebungen werden geladen...</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default App
