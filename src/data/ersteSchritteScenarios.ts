import { Scenario } from '../types';

export const ersteSchritteScenarios: Scenario[] = [
  {
    id: 'einwohnermeldeamt',
    title: 'Einwohnermeldeamt',
    category: 'erste-schritte',
    level: 'A1',
    description: 'Learn how to register your address at the registration office',
    icon: '🏛️',
    completed: false,
    dialogues: [
      {
        id: '1',
        speaker: 'Sie',
        text: 'Guten Tag. Ich möchte mich anmelden.',
        translation: 'Good day. I would like to register.'
      },
      {
        id: '2',
        speaker: 'Mitarbeiter',
        text: 'Guten Tag. Haben Sie alle Dokumente dabei?',
        translation: 'Good day. Do you have all documents with you?'
      },
      {
        id: '3',
        speaker: 'Sie',
        text: 'Ja, hier sind mein Reisepass und der Mietvertrag.',
        translation: 'Yes, here are my passport and the rental contract.'
      },
      {
        id: '4',
        speaker: 'Mitarbeiter',
        text: 'Perfekt. Bitte füllen Sie dieses Formular aus.',
        translation: 'Perfect. Please fill out this form.'
      },
      {
        id: '5',
        speaker: 'Sie',
        text: 'Wie lange dauert die Anmeldung?',
        translation: 'How long does the registration take?'
      },
      {
        id: '6',
        speaker: 'Mitarbeiter',
        text: 'Sie bekommen die Anmeldebestätigung sofort.',
        translation: 'You will receive the registration confirmation immediately.'
      }
    ],
    vocabulary: [
      {
        german: 'anmelden',
        translation: 'to register',
        context: 'Ich möchte mich anmelden.'
      },
      {
        german: 'der Reisepass',
        translation: 'passport',
        context: 'Hier ist mein Reisepass.'
      },
      {
        german: 'der Mietvertrag',
        translation: 'rental contract',
        context: 'Ich brauche den Mietvertrag.'
      },
      {
        german: 'das Formular',
        translation: 'form',
        context: 'Bitte füllen Sie das Formular aus.'
      },
      {
        german: 'die Anmeldebestätigung',
        translation: 'registration confirmation',
        context: 'Sie bekommen die Anmeldebestätigung.'
      }
    ],
    exercises: [
      {
        id: '1',
        type: 'dialogue-completion',
        question: 'Was sagen Sie am Anfang? "Guten Tag. Ich möchte mich ___."',
        options: ['anmelden', 'abmelden', 'ummelden'],
        correctAnswer: 'anmelden',
        hint: 'You want to register for the first time'
      },
      {
        id: '2',
        type: 'vocabulary-match',
        question: 'Welches Dokument brauchen Sie? Der ___',
        options: ['Reisepass', 'Führerschein', 'Flugticket'],
        correctAnswer: 'Reisepass'
      },
      {
        id: '3',
        type: 'situation-response',
        question: 'Der Mitarbeiter fragt: "Haben Sie alle Dokumente dabei?" Sie antworten:',
        options: [
          'Ja, hier sind mein Reisepass und der Mietvertrag.',
          'Nein, ich habe nichts.',
          'Ich weiß nicht.'
        ],
        correctAnswer: 'Ja, hier sind mein Reisepass und der Mietvertrag.'
      }
    ]
  },
  {
    id: 'wohnungssuche',
    title: 'Wohnungssuche',
    category: 'erste-schritte',
    level: 'A1',
    description: 'Learn vocabulary and phrases for finding an apartment',
    icon: '🏠',
    completed: false,
    dialogues: [
      {
        id: '1',
        speaker: 'Sie',
        text: 'Guten Tag. Ich interessiere mich für die Wohnung.',
        translation: 'Good day. I am interested in the apartment.'
      },
      {
        id: '2',
        speaker: 'Vermieter',
        text: 'Hallo! Die Wohnung hat 60 Quadratmeter und zwei Zimmer.',
        translation: 'Hello! The apartment has 60 square meters and two rooms.'
      },
      {
        id: '3',
        speaker: 'Sie',
        text: 'Wie hoch ist die Miete?',
        translation: 'How much is the rent?'
      },
      {
        id: '4',
        speaker: 'Vermieter',
        text: 'Die Kaltmiete beträgt 800 Euro, plus 150 Euro Nebenkosten.',
        translation: 'The base rent is 800 euros, plus 150 euros additional costs.'
      },
      {
        id: '5',
        speaker: 'Sie',
        text: 'Wann kann ich die Wohnung besichtigen?',
        translation: 'When can I view the apartment?'
      },
      {
        id: '6',
        speaker: 'Vermieter',
        text: 'Morgen um 15 Uhr. Passt Ihnen das?',
        translation: 'Tomorrow at 3 PM. Does that suit you?'
      }
    ],
    vocabulary: [
      {
        german: 'die Wohnung',
        translation: 'apartment',
        context: 'Ich suche eine Wohnung.'
      },
      {
        german: 'die Miete',
        translation: 'rent',
        context: 'Wie hoch ist die Miete?'
      },
      {
        german: 'die Kaltmiete',
        translation: 'base rent (without utilities)',
        context: 'Die Kaltmiete beträgt 800 Euro.'
      },
      {
        german: 'die Nebenkosten',
        translation: 'additional costs',
        context: 'Plus 150 Euro Nebenkosten.'
      },
      {
        german: 'besichtigen',
        translation: 'to view/inspect',
        context: 'Ich möchte die Wohnung besichtigen.'
      },
      {
        german: 'der Vermieter',
        translation: 'landlord',
        context: 'Der Vermieter zeigt die Wohnung.'
      }
    ],
    exercises: [
      {
        id: '1',
        type: 'dialogue-completion',
        question: 'Sie möchten die Wohnung sehen. Sie fragen: "Wann kann ich die Wohnung ___?"',
        options: ['besichtigen', 'kaufen', 'verkaufen'],
        correctAnswer: 'besichtigen'
      },
      {
        id: '2',
        type: 'vocabulary-match',
        question: 'Wie viel kostet die Wohnung pro Monat? Die ___',
        options: ['Miete', 'Rechnung', 'Quittung'],
        correctAnswer: 'Miete'
      }
    ]
  },
  {
    id: 'arzttermin',
    title: 'Arzttermin',
    category: 'erste-schritte',
    level: 'A1',
    description: 'Make a doctor appointment and describe symptoms',
    icon: '👨‍⚕️',
    completed: false,
    dialogues: [
      {
        id: '1',
        speaker: 'Sie',
        text: 'Guten Tag. Ich möchte einen Termin beim Arzt.',
        translation: 'Good day. I would like an appointment with the doctor.'
      },
      {
        id: '2',
        speaker: 'Sprechstundenhilfe',
        text: 'Guten Tag. Was fehlt Ihnen denn?',
        translation: 'Good day. What is wrong with you?'
      },
      {
        id: '3',
        speaker: 'Sie',
        text: 'Ich habe Kopfschmerzen und Fieber.',
        translation: 'I have a headache and fever.'
      },
      {
        id: '4',
        speaker: 'Sprechstundenhilfe',
        text: 'Haben Sie Ihre Versichertenkarte dabei?',
        translation: 'Do you have your insurance card with you?'
      },
      {
        id: '5',
        speaker: 'Sie',
        text: 'Ja, hier ist sie.',
        translation: 'Yes, here it is.'
      },
      {
        id: '6',
        speaker: 'Sprechstundenhilfe',
        text: 'Gut. Bitte nehmen Sie im Wartezimmer Platz.',
        translation: 'Good. Please take a seat in the waiting room.'
      }
    ],
    vocabulary: [
      {
        german: 'der Termin',
        translation: 'appointment',
        context: 'Ich möchte einen Termin.'
      },
      {
        german: 'der Arzt / die Ärztin',
        translation: 'doctor',
        context: 'Ich gehe zum Arzt.'
      },
      {
        german: 'die Kopfschmerzen',
        translation: 'headache',
        context: 'Ich habe Kopfschmerzen.'
      },
      {
        german: 'das Fieber',
        translation: 'fever',
        context: 'Ich habe Fieber.'
      },
      {
        german: 'die Versichertenkarte',
        translation: 'insurance card',
        context: 'Hier ist meine Versichertenkarte.'
      },
      {
        german: 'das Wartezimmer',
        translation: 'waiting room',
        context: 'Bitte warten Sie im Wartezimmer.'
      }
    ],
    exercises: [
      {
        id: '1',
        type: 'dialogue-completion',
        question: 'Sie sind krank. Was sagen Sie? "Ich möchte einen ___ beim Arzt."',
        options: ['Termin', 'Urlaub', 'Job'],
        correctAnswer: 'Termin'
      },
      {
        id: '2',
        type: 'situation-response',
        question: 'Die Sprechstundenhilfe fragt: "Was fehlt Ihnen?" Sie antworten:',
        options: [
          'Ich habe Kopfschmerzen und Fieber.',
          'Ich bin gesund.',
          'Ich arbeite viel.'
        ],
        correctAnswer: 'Ich habe Kopfschmerzen und Fieber.'
      }
    ]
  },
  {
    id: 'bankkonto',
    title: 'Bankkonto eröffnen',
    category: 'erste-schritte',
    level: 'A1',
    description: 'Open a bank account in Germany',
    icon: '🏦',
    completed: false,
    dialogues: [
      {
        id: '1',
        speaker: 'Sie',
        text: 'Guten Tag. Ich möchte ein Konto eröffnen.',
        translation: 'Good day. I would like to open an account.'
      },
      {
        id: '2',
        speaker: 'Bankmitarbeiter',
        text: 'Guten Tag. Sind Sie EU-Bürger?',
        translation: 'Good day. Are you an EU citizen?'
      },
      {
        id: '3',
        speaker: 'Sie',
        text: 'Ja. Welche Dokumente brauche ich?',
        translation: 'Yes. Which documents do I need?'
      },
      {
        id: '4',
        speaker: 'Bankmitarbeiter',
        text: 'Ihren Personalausweis und die Anmeldebestätigung.',
        translation: 'Your ID card and the registration confirmation.'
      },
      {
        id: '5',
        speaker: 'Sie',
        text: 'Gibt es Kontoführungsgebühren?',
        translation: 'Are there account management fees?'
      },
      {
        id: '6',
        speaker: 'Bankmitarbeiter',
        text: 'Nein, das Girokonto ist kostenlos.',
        translation: 'No, the checking account is free.'
      }
    ],
    vocabulary: [
      {
        german: 'das Konto',
        translation: 'account',
        context: 'Ich möchte ein Konto eröffnen.'
      },
      {
        german: 'eröffnen',
        translation: 'to open',
        context: 'Ein Konto eröffnen.'
      },
      {
        german: 'der Personalausweis',
        translation: 'ID card',
        context: 'Hier ist mein Personalausweis.'
      },
      {
        german: 'die Anmeldebestätigung',
        translation: 'registration confirmation',
        context: 'Ich habe die Anmeldebestätigung.'
      },
      {
        german: 'die Kontoführungsgebühren',
        translation: 'account management fees',
        context: 'Gibt es Kontoführungsgebühren?'
      },
      {
        german: 'das Girokonto',
        translation: 'checking account',
        context: 'Das Girokonto ist kostenlos.'
      }
    ],
    exercises: [
      {
        id: '1',
        type: 'dialogue-completion',
        question: 'Sie möchten ein Bankkonto. Sie sagen: "Ich möchte ein Konto ___."',
        options: ['eröffnen', 'schließen', 'überweisen'],
        correctAnswer: 'eröffnen'
      },
      {
        id: '2',
        type: 'vocabulary-match',
        question: 'Welches Dokument zur Identifikation? Der ___',
        options: ['Personalausweis', 'Führerschein', 'Studentenausweis'],
        correctAnswer: 'Personalausweis'
      }
    ]
  },
  {
    id: 'supermarkt',
    title: 'Im Supermarkt',
    category: 'erste-schritte',
    level: 'A1',
    description: 'Shopping at the supermarket',
    icon: '🛒',
    completed: false,
    dialogues: [
      {
        id: '1',
        speaker: 'Sie',
        text: 'Entschuldigung, wo finde ich Brot?',
        translation: 'Excuse me, where can I find bread?'
      },
      {
        id: '2',
        speaker: 'Mitarbeiter',
        text: 'In der Bäckereiabteilung, ganz hinten links.',
        translation: 'In the bakery section, at the very back on the left.'
      },
      {
        id: '3',
        speaker: 'Sie',
        text: 'Und wo ist die Milch?',
        translation: 'And where is the milk?'
      },
      {
        id: '4',
        speaker: 'Mitarbeiter',
        text: 'Die Milchprodukte sind im Kühlregal rechts.',
        translation: 'The dairy products are in the refrigerated section on the right.'
      },
      {
        id: '5',
        speaker: 'Kassiererin',
        text: 'Das macht 24,50 Euro. Bar oder mit Karte?',
        translation: 'That will be 24.50 euros. Cash or card?'
      },
      {
        id: '6',
        speaker: 'Sie',
        text: 'Mit Karte, bitte.',
        translation: 'By card, please.'
      }
    ],
    vocabulary: [
      {
        german: 'der Supermarkt',
        translation: 'supermarket',
        context: 'Ich gehe zum Supermarkt.'
      },
      {
        german: 'das Brot',
        translation: 'bread',
        context: 'Wo finde ich Brot?'
      },
      {
        german: 'die Milch',
        translation: 'milk',
        context: 'Ich kaufe Milch.'
      },
      {
        german: 'die Kasse',
        translation: 'checkout/cashier',
        context: 'Ich gehe zur Kasse.'
      },
      {
        german: 'bar',
        translation: 'cash',
        context: 'Ich zahle bar.'
      },
      {
        german: 'die Karte',
        translation: 'card',
        context: 'Mit Karte bezahlen.'
      }
    ],
    exercises: [
      {
        id: '1',
        type: 'situation-response',
        question: 'Sie suchen Brot. Was fragen Sie? "Entschuldigung, wo finde ich ___?"',
        options: ['Brot', 'Auto', 'Arbeit'],
        correctAnswer: 'Brot'
      },
      {
        id: '2',
        type: 'dialogue-completion',
        question: 'Die Kassiererin fragt: "Bar oder mit Karte?" Sie antworten:',
        options: ['Mit Karte, bitte.', 'Nein, danke.', 'Ich weiß nicht.'],
        correctAnswer: 'Mit Karte, bitte.'
      }
    ]
  },
  {
    id: 'oeffentliche-verkehrsmittel',
    title: 'Öffentliche Verkehrsmittel',
    category: 'erste-schritte',
    level: 'A1',
    description: 'Using public transportation',
    icon: '🚇',
    completed: false,
    dialogues: [
      {
        id: '1',
        speaker: 'Sie',
        text: 'Eine Tageskarte, bitte.',
        translation: 'A day ticket, please.'
      },
      {
        id: '2',
        speaker: 'Verkäufer',
        text: 'Für welche Zone?',
        translation: 'For which zone?'
      },
      {
        id: '3',
        speaker: 'Sie',
        text: 'Zone AB. Was kostet das?',
        translation: 'Zone AB. How much does that cost?'
      },
      {
        id: '4',
        speaker: 'Verkäufer',
        text: '8,80 Euro.',
        translation: '8.80 euros.'
      },
      {
        id: '5',
        speaker: 'Sie',
        text: 'Entschuldigung, fährt diese U-Bahn zum Hauptbahnhof?',
        translation: 'Excuse me, does this subway go to the main station?'
      },
      {
        id: '6',
        speaker: 'Fahrgast',
        text: 'Nein, Sie müssen die U6 nehmen.',
        translation: 'No, you have to take the U6.'
      }
    ],
    vocabulary: [
      {
        german: 'die Tageskarte',
        translation: 'day ticket',
        context: 'Ich kaufe eine Tageskarte.'
      },
      {
        german: 'die U-Bahn',
        translation: 'subway',
        context: 'Ich fahre mit der U-Bahn.'
      },
      {
        german: 'der Bus',
        translation: 'bus',
        context: 'Der Bus kommt um 10 Uhr.'
      },
      {
        german: 'die S-Bahn',
        translation: 'city train',
        context: 'Die S-Bahn fährt zum Flughafen.'
      },
      {
        german: 'der Hauptbahnhof',
        translation: 'main train station',
        context: 'Ich fahre zum Hauptbahnhof.'
      },
      {
        german: 'umsteigen',
        translation: 'to transfer/change',
        context: 'Sie müssen umsteigen.'
      }
    ],
    exercises: [
      {
        id: '1',
        type: 'dialogue-completion',
        question: 'Sie möchten ein Ticket für den ganzen Tag. Sie sagen: "Eine ___, bitte."',
        options: ['Tageskarte', 'Monatskarte', 'Jahreskarte'],
        correctAnswer: 'Tageskarte'
      },
      {
        id: '2',
        type: 'vocabulary-match',
        question: 'Der Zug unter der Erde ist die ___',
        options: ['U-Bahn', 'S-Bahn', 'Straßenbahn'],
        correctAnswer: 'U-Bahn'
      }
    ]
  }
];
