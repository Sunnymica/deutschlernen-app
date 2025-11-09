import { useState } from 'react'

type Language = 'de' | 'en' | 'uk' | 'hr'

const translations = {
  de: {
    title: 'Deutsch Lernen',
    subtitle: 'Mehrsprachige Lernplattform',
    selectLanguage: 'Wähle deine Sprache:',
    start: 'Los geht\'s!',
    scenario: 'Ausländerbehörde',
    scenarioDesc: 'Aufenthaltstitel beantragen'
  },
  en: {
    title: 'Learn German',
    subtitle: 'Multilingual Learning Platform',
    selectLanguage: 'Choose your language:',
    start: 'Let\'s go!',
    scenario: 'Immigration Office',
    scenarioDesc: 'Apply for residence permit'
  },
  uk: {
    title: 'Вивчай німецьку',
    subtitle: 'Багатомовна навчальна платформа',
    selectLanguage: 'Оберіть мову:',
    start: 'Розпочати!',
    scenario: 'Відділ у справах іноземців',
    scenarioDesc: 'Подати заяву на дозвіл на проживання'
  },
  hr: {
    title: 'Učite njemački',
    subtitle: 'Višejezična platforma za učenje',
    selectLanguage: 'Odaberite jezik:',
    start: 'Idemo!',
    scenario: 'Ured za strance',
    scenarioDesc: 'Zatražite dozvolu boravka'
  }
}

export default function App() {
  const [language, setLanguage] = useState<Language>('de')
  const [started, setStarted] = useState(false)
  
  const t = translations[language]
  
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">{t.title}</h1>
          <p className="text-gray-600 mb-8">{t.subtitle}</p>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {t.selectLanguage}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(['de', 'en', 'uk', 'hr'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    language === lang
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 hover:border-indigo-300'
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
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all shadow-md"
          >
            {t.start}
          </button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <button
            onClick={() => setStarted(false)}
            className="text-indigo-600 hover:text-indigo-800 mb-4"
          >
            ← Zurück
          </button>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.scenario}</h2>
          <p className="text-gray-600">{t.scenarioDesc}</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-800">
                <strong>Sachbearbeiter:</strong> Guten Tag. Wie kann ich Ihnen helfen?
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg ml-8">
              <p className="text-gray-800">
                <strong>Sie:</strong> Guten Tag. Ich möchte meinen Aufenthaltstitel verlängern.
              </p>
            </div>
</div>
      </div>
    </div>
  )
}
