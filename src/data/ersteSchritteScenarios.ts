import { Scenario } from '../types';

export const ersteSchritteScenarios: Scenario[] = [
  {
    id: 'auslaenderbehoerde',
    title: 'Ausländerbehörde',
    category: 'erste-schritte',
    level: 'A1',
    description: 'Aufenthaltstitel beantragen und verlängern',
    icon: '🏛️',
    completed: false,
    dialogues: [
      { id: '1', speaker: 'Maria', text: 'Guten Tag.', translation: 'Good day.' },
      { id: '2', speaker: 'Sachbearbeiter', text: 'Guten Tag. Wie kann ich Ihnen helfen?', translation: 'Good day. How can I help you?' },
      { id: '3', speaker: 'Maria', text: 'Mein Name ist Maria Kovalenko. Ich habe einen Termin um 10 Uhr.', translation: 'My name is Maria Kovalenko. I have an appointment at 10 o\'clock.' },
      { id: '4', speaker: 'Sachbearbeiter', text: 'Moment bitte... Ja, hier ist Ihr Termin. Haben Sie Ihre Unterlagen dabei?', translation: 'One moment please... Yes, here is your appointment. Do you have your documents with you?' },
      { id: '5', speaker: 'Maria', text: 'Ja. Hier sind meine Papiere. Mein Pass und meine Bescheinigung.', translation: 'Yes. Here are my papers. My passport and my certificate.' },
      { id: '6', speaker: 'Sachbearbeiter', text: 'Danke. Ich sehe, Sie kommen aus der Ukraine. Wann sind Sie nach Deutschland gekommen?', translation: 'Thank you. I see you come from Ukraine. When did you come to Germany?' },
      { id: '7', speaker: 'Maria', text: 'Im März 2022. Können Sie langsam sprechen? Ich spreche wenig Deutsch.', translation: 'In March 2022. Can you speak slowly? I speak little German.' },
      { id: '8', speaker: 'Sachbearbeiter', text: 'Kein Problem. Ich spreche langsam. Sie brauchen einen Aufenthaltstitel, richtig?', translation: 'No problem. I speak slowly. You need a residence permit, correct?' },
      { id: '9', speaker: 'Maria', text: 'Ja, genau. Was muss ich machen?', translation: 'Yes, exactly. What must I do?' },
      { id: '10', speaker: 'Sachbearbeiter', text: 'Sie müssen dieses Formular ausfüllen. Haben Sie biometrische Fotos?', translation: 'You must fill out this form. Do you have biometric photos?' },
      { id: '11', speaker: 'Maria', text: 'Ja, hier. Ich habe auch eine Frage: Ich habe nur ein Handy mit ukrainischer Nummer. Ist das ein Problem?', translation: 'Yes, here. I also have a question: I only have a phone with a Ukrainian number. Is that a problem?' },
      { id: '12', speaker: 'Sachbearbeiter', text: 'Nein, das geht. Schreiben Sie die Nummer hier auf. Haben Sie eine E-Mail-Adresse?', translation: 'No, that\'s fine. Write the number here. Do you have an email address?' },
      { id: '13', speaker: 'Maria', text: 'Ja, meine E-Mail-Adresse ist maria.kovalenko@gmail.com. Können Sie mir das alles aufschreiben? Ich verstehe nicht alles.', translation: 'Yes, my email address is maria.kovalenko@gmail.com. Can you write everything down for me? I don\'t understand everything.' },
      { id: '14', speaker: 'Sachbearbeiter', text: 'Natürlich. Ich schreibe Ihnen alles auf. Sie bekommen heute eine Fiktionsbescheinigung. Ihr Aufenthaltstitel kommt in 4-6 Wochen per Post.', translation: 'Of course. I will write everything down for you. You will receive a temporary permit today. Your residence permit will come in 4-6 weeks by post.' },
      { id: '15', speaker: 'Maria', text: 'Wie lange dauert das? 4 bis 6 Wochen?', translation: 'How long does that take? 4 to 6 weeks?' },
      { id: '16', speaker: 'Sachbearbeiter', text: 'Ja, ungefähr. Wir schicken Ihnen auch eine E-Mail.', translation: 'Yes, approximately. We will also send you an email.' },
      { id: '17', speaker: 'Maria', text: 'Danke. Und was kostet das?', translation: 'Thank you. And what does that cost?' },
      { id: '18', speaker: 'Sachbearbeiter', text: 'Der Aufenthaltstitel kostet 100 Euro. Sie können heute bar oder mit Karte bezahlen.', translation: 'The residence permit costs 100 euros. You can pay today in cash or by card.' },
      { id: '19', speaker: 'Maria', text: 'Ich bezahle mit Karte. Wann muss ich wiederkommen?', translation: 'I will pay by card. When must I come back?' },
      { id: '20', speaker: 'Sachbearbeiter', text: 'Sie müssen nicht wiederkommen. Wir schicken Ihnen alles per Post. Nur wenn es Probleme gibt, rufen wir Sie an.', translation: 'You don\'t have to come back. We will send you everything by post. Only if there are problems, we will call you.' },
      { id: '21', speaker: 'Maria', text: 'Gut, danke. Können Sie mir eine Telefonnummer geben? Falls ich Fragen habe?', translation: 'Good, thank you. Can you give me a phone number? In case I have questions?' },
      { id: '22', speaker: 'Sachbearbeiter', text: 'Ja, hier ist unsere Nummer: 030-123456. Sie können auch eine E-Mail schreiben.', translation: 'Yes, here is our number: 030-123456. You can also write an email.' },
      { id: '23', speaker: 'Maria', text: 'Vielen Dank! Auf Wiedersehen.', translation: 'Thank you very much! Goodbye.' },
      { id: '24', speaker: 'Sachbearbeiter', text: 'Auf Wiedersehen, Frau Kovalenko. Viel Erfolg!', translation: 'Goodbye, Ms. Kovalenko. Good luck!' }
    ],
    vocabulary: [
      { german: 'die Ausländerbehörde', translation: 'immigration office', context: 'Ich gehe zur Ausländerbehörde.', translationUK: 'міграційна служба', translationHR: 'ured za strance' },
      { german: 'der Aufenthaltstitel', translation: 'residence permit', context: 'Ich brauche einen Aufenthaltstitel.', translationUK: 'дозвіл на проживання', translationHR: 'boravišna dozvola' },
      { german: 'die Fiktionsbescheinigung', translation: 'temporary permit', context: 'Sie bekommen eine Fiktionsbescheinigung.', translationUK: 'тимчасова довідка', translationHR: 'privremena potvrda' },
      { german: 'der Pass', translation: 'passport', context: 'Hier ist mein Pass.', translationUK: 'паспорт', translationHR: 'putovnica' },
      { german: 'die Bescheinigung', translation: 'certificate', context: 'Ich habe eine Bescheinigung.', translationUK: 'довідка', translationHR: 'potvrda' },
      { german: 'der Termin', translation: 'appointment', context: 'Ich habe einen Termin.', translationUK: 'запис, зустріч', translationHR: 'termin' },
      { german: 'das Formular', translation: 'form', context: 'Bitte füllen Sie das Formular aus.', translationUK: 'форма, бланк', translationHR: 'formular' },
      { german: 'das biometrische Foto', translation: 'biometric photo', context: 'Ich brauche biometrische Fotos.', translationUK: 'біометричне фото', translationHR: 'biometrijska fotografija' },
      { german: 'die Unterlagen', translation: 'documents', context: 'Haben Sie Ihre Unterlagen dabei?', translationUK: 'документи', translationHR: 'dokumenti' },
      { german: 'die Gebühr', translation: 'fee', context: 'Die Gebühr beträgt 100 Euro.', translationUK: 'плата, збір', translationHR: 'naknada' },
      { german: 'bar bezahlen', translation: 'pay in cash', context: 'Ich bezahle bar.', translationUK: 'платити готівкою', translationHR: 'platiti gotovinom' },
      { german: 'mit Karte bezahlen', translation: 'pay by card', context: 'Ich bezahle mit Karte.', translationUK: 'платити карткою', translationHR: 'platiti karticom' },
      { german: 'die Verlängerung', translation: 'extension', context: 'Ich brauche eine Verlängerung.', translationUK: 'продовження', translationHR: 'produženje' },
      { german: 'die Handynummer', translation: 'mobile number', context: 'Meine Handynummer ist...', translationUK: 'номер телефону', translationHR: 'broj mobitela' },
      { german: 'die E-Mail-Adresse', translation: 'email address', context: 'Meine E-Mail-Adresse ist...', translationUK: 'електронна адреса', translationHR: 'email adresa' },
      { german: 'der Antrag', translation: 'application', context: 'Ich stelle einen Antrag.', translationUK: 'заява', translationHR: 'zahtjev' }
    ],
    exercises: [
      {
        id: '1',
        type: 'fill-in-blank',
        question: 'Guten Tag. Mein ___ ist Maria Kovalenko. Ich habe einen ___ um 10 Uhr.',
        blanks: ['Name', 'Termin'],
        correctAnswer: 'Name, Termin',
        hint: 'Was sagt Maria am Anfang?'
      },
      {
        id: '2',
        type: 'fill-in-blank',
        question: 'Haben Sie Ihre ___ dabei? Ja. Hier sind meine ___. Mein Pass und meine Bescheinigung.',
        blanks: ['Unterlagen', 'Papiere'],
        correctAnswer: 'Unterlagen, Papiere'
      },
      {
        id: '3',
        type: 'fill-in-blank',
        question: 'Können Sie ___ sprechen? Ich spreche ___ Deutsch.',
        blanks: ['langsam', 'wenig'],
        correctAnswer: 'langsam, wenig'
      },
      {
        id: '4',
        type: 'multiple-choice',
        question: 'Was braucht man für den Aufenthaltstitel?',
        options: [
          'Nur den Pass',
          'Pass, Fotos und Bescheinigung',
          'Nur eine E-Mail-Adresse',
          'Nichts'
        ],
        correctAnswer: 'Pass, Fotos und Bescheinigung'
      },
      {
        id: '5',
        type: 'multiple-choice',
        question: 'Wie viel kostet der Aufenthaltstitel?',
        options: ['50 Euro', '100 Euro', '200 Euro', 'Er ist kostenlos'],
        correctAnswer: '100 Euro'
      },
      {
        id: '6',
        type: 'multiple-choice',
        question: 'Wie lange dauert es, bis der Aufenthaltstitel kommt?',
        options: ['1-2 Tage', '1 Woche', '4-6 Wochen', '6 Monate'],
        correctAnswer: '4-6 Wochen'
      },
      {
        id: '7',
        type: 'multiple-choice',
        question: 'Was ist eine Fiktionsbescheinigung?',
        options: [
          'Ein falsches Dokument',
          'Eine vorläufige Erlaubnis, bis der Aufenthaltstitel kommt',
          'Ein Arbeitsvertrag',
          'Ein Bankkonto'
        ],
        correctAnswer: 'Eine vorläufige Erlaubnis, bis der Aufenthaltstitel kommt'
      },
      {
        id: '8',
        type: 'multiple-choice',
        question: 'Was sagt man, wenn man nicht alles versteht?',
        options: [
          'Ich gehe nach Hause',
          'Das ist mir egal',
          'Können Sie mir das aufschreiben?',
          'Ich weiß es'
        ],
        correctAnswer: 'Können Sie mir das aufschreiben?'
      }
    ],
    rolePlay: [
      { id: '1', prompt: 'Guten Tag. Wie heißen Sie?', expectedAnswer: 'Guten Tag. Mein Name ist...' },
      { id: '2', prompt: 'Haben Sie Ihren Pass dabei?', expectedAnswer: 'Ja, hier ist mein Pass.' },
      { id: '3', prompt: 'Wann sind Sie nach Deutschland gekommen?', expectedAnswer: 'Im... (Monat/Jahr)' },
      { id: '4', prompt: 'Haben Sie eine deutsche Handynummer?', expectedAnswer: 'Ja/Nein, ich habe...' },
      { id: '5', prompt: 'Welche Sprachen sprechen Sie?', expectedAnswer: 'Ich spreche...' }
    ],
    culturalTips: [
      {
        id: '1',
        icon: '🕐',
        title: 'Pünktlichkeit',
        content: 'In Deutschland ist Pünktlichkeit sehr wichtig! Komme 5-10 Minuten früher zum Termin.'
      },
      {
        id: '2',
        icon: '📱',
        title: 'Handynummer',
        content: 'Eine ukrainische/ausländische Nummer ist kein Problem. Aber: Eine deutsche Nummer macht vieles einfacher (z.B. für Wohnungssuche, Jobsuche).'
      },
      {
        id: '3',
        icon: '💶',
        title: 'Kosten',
        content: 'Der Aufenthaltstitel kostet Geld. Wenn du kein Geld hast, frage beim Jobcenter nach Hilfe.'
      },
      {
        id: '4',
        icon: '⏰',
        title: 'Wartezeit',
        content: 'Es kann lange dauern (4-6 Wochen oder mehr). Die Fiktionsbescheinigung ist in dieser Zeit dein wichtigstes Dokument!'
      },
      {
        id: '5',
        icon: '🗣️',
        title: 'Dolmetscher',
        content: 'Du darfst eine Person mitbringen, die übersetzt. Frage vorher beim Amt, ob das okay ist.'
      },
      {
        id: '6',
        icon: '📧',
        title: 'Kommunikation',
        content: 'Deutsche Behörden schreiben oft Briefe (per Post). Prüfe deinen Briefkasten regelmäßig!'
      }
    ],
    checklist: [
      { id: '1', category: 'Vor dem Termin', text: 'Termin-Bestätigung ausdrucken oder auf dem Handy speichern' },
      { id: '2', category: 'Vor dem Termin', text: 'Pass mitbringen (Original!)' },
      { id: '3', category: 'Vor dem Termin', text: '2 biometrische Fotos (35x45mm)' },
      { id: '4', category: 'Vor dem Termin', text: 'Bescheinigung von der Erstaufnahme/Unterkunft' },
      { id: '5', category: 'Vor dem Termin', text: 'Krankenversicherungsnachweis (falls vorhanden)' },
      { id: '6', category: 'Vor dem Termin', text: '100 Euro für die Gebühr (bar oder Karte)' },
      { id: '7', category: 'Wichtige Sätze', text: 'Guten Tag, mein Name ist...' },
      { id: '8', category: 'Wichtige Sätze', text: 'Ich habe einen Termin um...' },
      { id: '9', category: 'Wichtige Sätze', text: 'Hier sind meine Papiere' },
      { id: '10', category: 'Wichtige Sätze', text: 'Können Sie langsam sprechen?' },
      { id: '11', category: 'Wichtige Sätze', text: 'Können Sie mir das aufschreiben?' },
      { id: '12', category: 'Wichtige Sätze', text: 'Ich habe nur ein Handy mit [ukrainischer] Nummer' },
      { id: '13', category: 'Wichtige Sätze', text: 'Wann muss ich wiederkommen?' },
      { id: '14', category: 'Nach dem Termin', text: 'Fiktionsbescheinigung gut aufbewahren!' },
      { id: '15', category: 'Nach dem Termin', text: 'Notiere dir: Wann kommt der Aufenthaltstitel?' },
      { id: '16', category: 'Nach dem Termin', text: 'Notiere dir die Telefonnummer für Rückfragen' },
      { id: '17', category: 'Nach dem Termin', text: 'Prüfe regelmäßig deine E-Mails und Post' }
    ]
  },
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
