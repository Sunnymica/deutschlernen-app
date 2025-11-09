import { useState } from 'react'

type Language = 'de' | 'en' | 'uk' | 'hr'
type View = 'home' | 'scenarios' | 'scenario-detail' | 'vocabulary' | 'grammar'
type ContentView = 'dialog' | 'vocabulary'

const translations = {
  de: {
    title: 'Deutsch Lernen',
    subtitle: 'Mehrsprachige Lernplattform',
    selectLanguage: 'Wähle deine Sprache:',
    scenarios: 'Erste Schritte',
    vocabulary: 'Vokabeln',
    grammar: 'Grammatik',
    back: 'Zurück',
    dialog: 'Dialog',
    vocabList: 'Vokabeln',
    start: 'Los geht\'s!',
    clickToFlip: 'Klicken zum Umdrehen'
  },
  en: {
    title: 'Learn German',
    subtitle: 'Multilingual Learning Platform',
    selectLanguage: 'Choose your language:',
    scenarios: 'First Steps',
    vocabulary: 'Vocabulary',
    grammar: 'Grammar',
    back: 'Back',
    dialog: 'Dialog',
    vocabList: 'Vocabulary',
    start: 'Let\'s go!',
    clickToFlip: 'Click to flip'
  },
  uk: {
    title: 'Вивчай німецьку',
    subtitle: 'Багатомовна навчальна платформа',
    selectLanguage: 'Оберіть мову:',
    scenarios: 'Перші кроки',
    vocabulary: 'Словник',
    grammar: 'Граматика',
    back: 'Назад',
    dialog: 'Діалог',
    vocabList: 'Словник',
    start: 'Розпочати!',
    clickToFlip: 'Клацніть, щоб перевернути'
  },
  hr: {
    title: 'Učite njemački',
    subtitle: 'Višejezična platforma za učenje',
    selectLanguage: 'Odaberite jezik:',
    scenarios: 'Prvi koraci',
    vocabulary: 'Vokabular',
    grammar: 'Gramatika',
    back: 'Natrag',
    dialog: 'Dijalog',
    vocabList: 'Vokabular',
    start: 'Idemo!',
    clickToFlip: 'Kliknite za okretanje'
  }
}

const scenarios = [
  {
    id: 'auslaenderbehoerde',
    title: 'Ausländerbehörde',
    description: 'Aufenthaltstitel beantragen und verlängern',
    icon: '🏛️',
    dialog: [
      { speaker: 'Sachbearbeiter', text: 'Guten Tag. Wie kann ich Ihnen helfen?' },
      { speaker: 'Sie', text: 'Guten Tag. Ich möchte meinen Aufenthaltstitel verlängern.' },
      { speaker: 'Sachbearbeiter', text: 'Haben Sie alle Unterlagen dabei?' },
      { speaker: 'Sie', text: 'Ja, genau. Was muss ich tun?' },
      { speaker: 'Sachbearbeiter', text: 'Ich brauche Ihren aktuellen Aufenthaltstitel, Ihren Pass und eine aktuelle Meldebescheinigung.' },
      { speaker: 'Sie', text: 'Ja, hier. Ich habe auch eine Frage: Wie lange dauert das?' },
      { speaker: 'Sachbearbeiter', text: '4 bis 6 Wochen. Wir schicken Ihnen alles per Post.' },
      { speaker: 'Sie', text: 'OK. Muss ich bis dahin noch etwas tun?' },
      { speaker: 'Sachbearbeiter', text: 'Nein. Sie bekommen eine E-Mail, wenn der neue Titel fertig ist.' }
    ],
    vocabulary: [
      { de: 'der Aufenthaltstitel', en: 'residence permit', uk: 'вид на проживання', hr: 'boravišna dozvola' },
      { de: 'verlängern', en: 'to extend', uk: 'продовжити', hr: 'produžiti' },
      { de: 'die Unterlage', en: 'document', uk: 'документ', hr: 'dokument' },
      { de: 'der Pass', en: 'passport', uk: 'паспорт', hr: 'putovnica' },
      { de: 'die Meldebescheinigung', en: 'registration certificate', uk: 'довідка про реєстрацію', hr: 'potvrda o prijavi' }
    ]
  },
  {
    id: 'jobcenter',
    title: 'Jobcenter',
    description: 'Termin vereinbaren und Leistungen beantragen',
    icon: '💼',
    dialog: [
      { speaker: 'Sachbearbeiter', text: 'Guten Morgen. Haben Sie einen Termin?' },
      { speaker: 'Sie', text: 'Ja, ich habe einen Termin um 10 Uhr.' },
      { speaker: 'Sachbearbeiter', text: 'Gut. Wie kann ich Ihnen helfen?' },
      { speaker: 'Sie', text: 'Ich möchte Arbeitslosengeld beantragen.' },
      { speaker: 'Sachbearbeiter', text: 'Haben Sie die erforderlichen Unterlagen dabei?' },
      { speaker: 'Sie', text: 'Ja. Ich habe meine Kündigungsbestätigung, meinen Lebenslauf und meine Zeugnisse.' },
      { speaker: 'Sachbearbeiter', text: 'Sehr gut. Dann füllen wir jetzt gemeinsam das Formular aus.' }
    ],
    vocabulary: [
      { de: 'das Jobcenter', en: 'job center', uk: 'центр зайнятості', hr: 'centar za zapošljavanje' },
      { de: 'das Arbeitslosengeld', en: 'unemployment benefit', uk: 'допомога по безробіттю', hr: 'naknada za nezaposlenost' },
      { de: 'die Kündigungsbestätigung', en: 'termination confirmation', uk: 'підтвердження звільнення', hr: 'potvrda o otkazu' },
      { de: 'der Lebenslauf', en: 'CV / resume', uk: 'резюме', hr: 'životopis' }
    ]
  },
  {
    id: 'sprachschule',
    title: 'Sprachschule',
    description: 'Kursanmeldung und Niveau testen',
    icon: '📚',
    dialog: [
      { speaker: 'Sekretärin', text: 'Guten Tag! Wie kann ich Ihnen helfen?' },
      { speaker: 'Sie', text: 'Hallo! Ich möchte mich für einen Deutschkurs anmelden.' },
      { speaker: 'Sekretärin', text: 'Welches Niveau haben Sie?' },
      { speaker: 'Sie', text: 'Ich denke B1, aber ich bin nicht sicher.' },
      { speaker: 'Sekretärin', text: 'Kein Problem. Wir machen erst einen Einstufungstest. Wann haben Sie Zeit?' },
      { speaker: 'Sie', text: 'Nächste Woche Dienstag wäre gut.' },
      { speaker: 'Sekretärin', text: 'Perfekt. Der Test dauert etwa eine Stunde. Bringen Sie bitte einen Ausweis mit.' }
    ],
    vocabulary: [
      { de: 'die Sprachschule', en: 'language school', uk: 'мовна школа', hr: 'jezična škola' },
      { de: 'sich anmelden', en: 'to register / enroll', uk: 'зареєструватися', hr: 'prijaviti se' },
      { de: 'das Niveau', en: 'level', uk: 'рівень', hr: 'razina' },
      { de: 'der Einstufungstest', en: 'placement test', uk: 'тест на визначення рівня', hr: 'test razvrstavanja' }
    ]
  },
  {
    id: 'einwohnermeldeamt',
    title: 'Einwohnermeldeamt',
    description: 'Wohnsitz anmelden',
    icon: '🏛️',
    dialog: [
      { speaker: 'Beamter', text: 'Guten Tag. Was kann ich für Sie tun?' },
      { speaker: 'Sie', text: 'Ich möchte meinen Wohnsitz anmelden.' },
      { speaker: 'Beamter', text: 'Haben Sie das ausgefüllte Formular dabei?' },
      { speaker: 'Sie', text: 'Ja, hier. Brauchen Sie noch etwas anderes?' },
      { speaker: 'Beamter', text: 'Ja, Ihren Pass und die Wohnungsgeberbestätigung vom Vermieter.' }
    ],
    vocabulary: [
      { de: 'das Einwohnermeldeamt', en: 'registration office', uk: 'реєстраційний офіс', hr: 'ured za prijavu boravišta' },
      { de: 'den Wohnsitz anmelden', en: 'to register residence', uk: 'зареєструвати місце проживання', hr: 'prijaviti prebivalište' },
      { de: 'die Wohnungsgeberbestätigung', en: 'landlord confirmation', uk: 'підтвердження від орендодавця', hr: 'potvrda iznajmljivača' }
    ]
  },
  {
    id: 'wohnungssuche',
    title: 'Wohnungssuche',
    description: 'Besichtigungstermin vereinbaren',
    icon: '🏠',
    dialog: [
      { speaker: 'Makler', text: 'Guten Tag! Interessieren Sie sich für die Wohnung?' },
      { speaker: 'Sie', text: 'Ja, ich habe Ihre Anzeige gesehen. Ist die Wohnung noch frei?' },
      { speaker: 'Makler', text: 'Ja, die ist noch verfügbar. Möchten Sie sie besichtigen?' },
      { speaker: 'Sie', text: 'Gerne. Wann wäre das möglich?' },
      { speaker: 'Makler', text: 'Morgen Nachmittag um 15 Uhr?' }
    ],
    vocabulary: [
      { de: 'die Wohnung', en: 'apartment', uk: 'квартира', hr: 'stan' },
      { de: 'der Makler', en: 'real estate agent', uk: 'агент з нерухомості', hr: 'agent za nekretnine' },
      { de: 'besichtigen', en: 'to view', uk: 'оглянути', hr: 'razgledati' },
      { de: 'die Kaution', en: 'deposit', uk: 'застава', hr: 'polog' }
    ]
  },
  {
    id: 'arztbesuch',
    title: 'Arztbesuch',
    description: 'Termin vereinbaren und Beschwerden erklären',
    icon: '🏥',
    dialog: [
      { speaker: 'Arzthelferin', text: 'Praxis Dr. Müller, guten Tag.' },
      { speaker: 'Sie', text: 'Guten Tag. Ich brauche einen Termin.' },
      { speaker: 'Arzthelferin', text: 'Sind Sie Kassenpatient oder Privatpatient?' },
      { speaker: 'Sie', text: 'Kassenpatient.' },
      { speaker: 'Arzthelferin', text: 'Nächste Woche Mittwoch um 9:30 Uhr?' }
    ],
    vocabulary: [
      { de: 'der Arzt / die Ärztin', en: 'doctor', uk: 'лікар', hr: 'liječnik' },
      { de: 'der Termin', en: 'appointment', uk: 'прийом', hr: 'termin' },
      { de: 'die Krankenversicherung', en: 'health insurance', uk: 'медичне страхування', hr: 'zdravstveno osiguranje' },
      { de: 'die Beschwerde', en: 'complaint / symptom', uk: 'скарга / симптом', hr: 'pritužba / simptom' }
    ]
  },
  {
    id: 'bank',
    title: 'Bank',
    description: 'Konto eröffnen',
    icon: '🏦',
    dialog: [
      { speaker: 'Bankangestellter', text: 'Guten Tag. Wie kann ich Ihnen helfen?' },
      { speaker: 'Sie', text: 'Ich möchte ein Girokonto eröffnen.' },
      { speaker: 'Bankangestellter', text: 'Gerne. Haben Sie einen Ausweis dabei?' },
      { speaker: 'Sie', text: 'Ja, hier ist mein Pass.' }
    ],
    vocabulary: [
      { de: 'das Girokonto', en: 'checking account', uk: 'поточний рахунок', hr: 'tekući račun' },
      { de: 'die Bank', en: 'bank', uk: 'банк', hr: 'banka' },
      { de: 'eröffnen', en: 'to open', uk: 'відкрити', hr: 'otvoriti' },
      { de: 'der Ausweis', en: 'ID card', uk: 'посвідчення особи', hr: 'osobna iskaznica' }
    ]
  },
  {
    id: 'supermarkt',
    title: 'Im Supermarkt',
    description: 'Einkaufen und nach Produkten fragen',
    icon: '🛒',
    dialog: [
      { speaker: 'Kassierer', text: 'Hallo! Haben Sie eine Kundenkarte?' },
      { speaker: 'Sie', text: 'Nein, noch nicht.' },
      { speaker: 'Kassierer', text: 'Möchten Sie eine bekommen? Die ist kostenlos.' },
      { speaker: 'Sie', text: 'Ja, gerne.' }
    ],
    vocabulary: [
      { de: 'der Supermarkt', en: 'supermarket', uk: 'супермаркет', hr: 'supermarket' },
      { de: 'die Kasse', en: 'checkout', uk: 'каса', hr: 'blagajna' },
      { de: 'bezahlen', en: 'to pay', uk: 'платити', hr: 'platiti' },
      { de: 'die Tüte', en: 'bag', uk: 'пакет', hr: 'vrećica' }
    ]
  },
  {
    id: 'verkehrsmittel',
    title: 'Öffentliche Verkehrsmittel',
    description: 'Ticket kaufen und nach Verbindungen fragen',
    icon: '🚇',
    dialog: [
      { speaker: 'Sie', text: 'Entschuldigung, wie komme ich zum Hauptbahnhof?' },
      { speaker: 'Passant', text: 'Am besten mit der U-Bahn. Linie 3, Richtung Zentrum.' },
      { speaker: 'Sie', text: 'Wo kann ich ein Ticket kaufen?' },
      { speaker: 'Passant', text: 'Am Automaten dort drüben.' }
    ],
    vocabulary: [
      { de: 'die U-Bahn', en: 'subway', uk: 'метро', hr: 'metro' },
      { de: 'die S-Bahn', en: 'commuter train', uk: 'приміська електричка', hr: 'prigradska željeznica' },
      { de: 'das Ticket', en: 'ticket', uk: 'квиток', hr: 'karta' },
      { de: 'der Automat', en: 'ticket machine', uk: 'автомат', hr: 'automat' }
    ]
  }
]

function FlipCard({ vocab, language }: { vocab: { de: string; en: string; uk: string; hr: string }; language: Language }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative h-40 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`absolute w-full h-full transition-all duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div 
          className="absolute w-full h-full bg-indigo-500 text-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <p className="text-2xl font-bold mb-2">{vocab.de}</p>
          <p className="text-sm opacity-75">Klicken zum Umdrehen</p>
        </div>
        
        <div 
          className="absolute w-full h-full bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold text-gray-800">
              {language === 'en' && `🇬🇧 ${vocab.en}`}
              {language === 'uk' && `🇺🇦 ${vocab.uk}`}
              {language === 'hr' && `🇭🇷 ${vocab.hr}`}
              {language === 'de' && `🇬🇧 ${vocab.en}`}
            </p>
            <p className="text-sm text-gray-500">Klicken zum Zurückdrehen</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState<Language | null>(null)
  const [view, setView] = useState<View>('home')
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null)
  const [contentView, setContentView] = useState<ContentView>('dialog')

  const t = language ? translations[language] : translations.de

  if (!language) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">Deutsch Lernen</h1>
          <p className="text-gray-600 mb-8">Mehrsprachige Lernplattform</p>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Wähle deine Sprache:
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(['de', 'en', 'uk', 'hr'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className="p-3 rounded-lg border-2 border-gray-200 transition-all hover:border-indigo-500 hover:bg-indigo-50"
                >
                  {lang === 'de' && '🇩🇪 Deutsch'}
                  {lang === 'en' && '🇬🇧 English'}
                  {lang === 'uk' && '🇺🇦 Українська'}
                  {lang === 'hr' && '🇭🇷 Hrvatski'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

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
                  setContentView('dialog')
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

  if (view === 'scenario-detail') {
    const scenario = scenarios.find(s => s.id === selectedScenario)
    
    if (!scenario) {
      return null
    }

    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setView('scenarios')}
            className="text-indigo-600 hover:text-indigo-800 mb-4 font-medium flex items-center"
          >
            ← {t.back}
          </button>

          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="text-4xl mb-3">{scenario.icon}</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{scenario.title}</h1>
            <p className="text-gray-600">{scenario.description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => setContentView('dialog')}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  contentView === 'dialog'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t.dialog}
              </button>
              <button
                onClick={() => setContentView('vocabulary')}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  contentView === 'vocabulary'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t.vocabList}
              </button>
            </div>
          </div>

          {contentView === 'dialog' && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t.dialog}</h2>
              <div className="space-y-4">
                {scenario.dialog.map((line, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      line.speaker === 'Sie' ? 'bg-green-50' : 'bg-blue-50'
                    }`}
                  >
                    <p className="font-semibold text-gray-800">{line.speaker}:</p>
                    <p className="text-gray-700">{line.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {contentView === 'vocabulary' && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t.vocabList}</h2>
              <div className="space-y-4">
                {scenario.vocabulary.map((vocab, index) => (
                  <FlipCard key={index} vocab={vocab} language={language} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

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
            <p className="text-gray-600">Grammatik-Übungen werden geladen...</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default App
