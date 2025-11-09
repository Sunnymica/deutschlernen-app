import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ErsteSchritte from './components/ErsteSchritte'
import { ersteSchritteScenarios } from './data/ersteSchritteScenarios'
import { Scenario } from './types'
import './i18n'

type Language = 'de' | 'en' | 'uk' | 'hr'

export default function App() {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<Language>('de')
  const [started, setStarted] = useState(false)
  const [scenarios, setScenarios] = useState<Scenario[]>(ersteSchritteScenarios)

  // Update i18n language when language changes
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  const handleUpdateScenario = (scenarioId: string, completed: boolean) => {
    setScenarios(prev =>
      prev.map(s => s.id === scenarioId ? { ...s, completed } : s)
    )
  }

  const translations = {
    de: {
      title: 'Deutsch Lernen',
      subtitle: 'Mehrsprachige Lernplattform für erste Schritte in Deutschland',
      selectLanguage: 'Wähle deine Sprache:',
      start: 'Los geht\'s!',
    },
    en: {
      title: 'Learn German',
      subtitle: 'Multilingual learning platform for first steps in Germany',
      selectLanguage: 'Choose your language:',
      start: 'Let\'s go!',
    },
    uk: {
      title: 'Вивчай німецьку',
      subtitle: 'Багатомовна платформа для перших кроків у Німеччині',
      selectLanguage: 'Оберіть мову:',
      start: 'Розпочати!',
    },
    hr: {
      title: 'Učite njemački',
      subtitle: 'Višejezična platforma za prve korake u Njemačkoj',
      selectLanguage: 'Odaberite jezik:',
      start: 'Idemo!',
    }
  }

  const t = translations[language]

  // Language Selection Screen
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full border-2 border-gray-100 dark:border-gray-700 animate-scale-in">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🇩🇪</div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-3">
              {t.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {t.subtitle}
            </p>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 text-center">
              {t.selectLanguage}
            </label>
            <div className="grid grid-cols-2 gap-4">
              {(['de', 'en', 'uk', 'hr'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 font-medium text-lg transform hover:scale-105 min-h-[60px] ${
                    language === lang
                      ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900 dark:to-blue-900 text-indigo-700 dark:text-indigo-300 shadow-lg scale-105'
                      : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-soft'
                  }`}
                >
                  {lang === 'de' && '🇩🇪 Deutsch'}
                  {lang === 'en' && '🇬🇧 English'}
                  {lang === 'uk' && '🇺🇦 Українська'}
                  {lang === 'hr' && '🇭🇷 Hrvatski'}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 min-h-[60px]"
          >
            {t.start} 🚀
          </button>
        </div>
      </div>
    )
  }

  // Main App Screen with Scenarios
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={() => setStarted(false)}
            className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-soft hover:shadow-medium hover:scale-105 border border-gray-200 dark:border-gray-700 mb-6 min-h-[48px]"
          >
            ← Zurück zur Sprachauswahl
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">🎓</div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Erste Schritte in Deutschland
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Lerne wichtige Alltagssituationen auf Deutsch
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scenarios Overview */}
        <ErsteSchritte
          scenarios={scenarios}
          onUpdateScenario={handleUpdateScenario}
        />
      </div>
    </div>
  )
}
