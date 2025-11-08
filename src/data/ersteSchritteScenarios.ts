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
    id: 'jobcenter',
    title: 'Jobcenter',
    category: 'erste-schritte',
    level: 'A1',
    description: 'Leistungen beantragen und Termine wahrnehmen',
    icon: '🏢',
    completed: false,
    dialogues: [
      { id: '1', speaker: 'Andriy', text: 'Guten Tag.', translation: 'Good day.' },
      { id: '2', speaker: 'Sachbearbeiterin', text: 'Guten Tag. Wie kann ich Ihnen helfen?', translation: 'Good day. How can I help you?' },
      { id: '3', speaker: 'Andriy', text: 'Mein Name ist Andriy Shevchenko. Ich habe einen Termin um 14 Uhr.', translation: 'My name is Andriy Shevchenko. I have an appointment at 2 PM.' },
      { id: '4', speaker: 'Sachbearbeiterin', text: 'Einen Moment... Ja, hier steht Ihr Name. Setzen Sie sich bitte. Haben Sie alle Unterlagen dabei?', translation: 'One moment... Yes, here is your name. Please sit down. Do you have all documents with you?' },
      { id: '5', speaker: 'Andriy', text: 'Ja. Hier sind meine Papiere. Mein Pass, meine Fiktionsbescheinigung und meine Meldebescheinigung.', translation: 'Yes. Here are my papers. My passport, my temporary permit and my registration certificate.' },
      { id: '6', speaker: 'Sachbearbeiterin', text: 'Gut. Wohnen Sie alleine oder mit Familie?', translation: 'Good. Do you live alone or with family?' },
      { id: '7', speaker: 'Andriy', text: 'Ich wohne mit meiner Frau und meinem Kind. Meine Tochter ist 5 Jahre alt.', translation: 'I live with my wife and my child. My daughter is 5 years old.' },
      { id: '8', speaker: 'Sachbearbeiterin', text: 'Verstehe. Haben Sie einen Mietvertrag?', translation: 'I understand. Do you have a rental contract?' },
      { id: '9', speaker: 'Andriy', text: 'Noch nicht. Ich wohne in einer Sammelunterkunft. Hier ist die Bescheinigung.', translation: 'Not yet. I live in shared accommodation. Here is the certificate.' },
      { id: '10', speaker: 'Sachbearbeiterin', text: 'In Ordnung. Haben Sie ein Bankkonto in Deutschland?', translation: 'Alright. Do you have a bank account in Germany?' },
      { id: '11', speaker: 'Andriy', text: 'Nein, noch nicht. Ich habe nur ein Handy mit ukrainischer Nummer. Ist das ein Problem?', translation: 'No, not yet. I only have a phone with a Ukrainian number. Is that a problem?' },
      { id: '12', speaker: 'Sachbearbeiterin', text: 'Sie brauchen ein deutsches Bankkonto für das Bürgergeld. Ich gebe Ihnen eine Liste mit Banken. Das geht schnell, meist in 1-2 Tagen.', translation: 'You need a German bank account for the citizen\'s allowance. I\'ll give you a list of banks. It goes quickly, usually in 1-2 days.' },
      { id: '13', speaker: 'Andriy', text: 'Okay. Was muss ich noch machen?', translation: 'Okay. What else must I do?' },
      { id: '14', speaker: 'Sachbearbeiterin', text: 'Sie müssen diesen Antrag ausfüllen. Hier steht alles: Ihre persönlichen Daten, Ihre Familie, Ihre Wohnsituation. Können Sie gut Deutsch lesen?', translation: 'You must fill out this application. Everything is here: your personal data, your family, your living situation. Can you read German well?' },
      { id: '15', speaker: 'Andriy', text: 'Nicht so gut. Können Sie langsam sprechen? Und können Sie mir das aufschreiben?', translation: 'Not so well. Can you speak slowly? And can you write that down for me?' },
      { id: '16', speaker: 'Sachbearbeiterin', text: 'Ja, kein Problem. Ich helfe Ihnen. Haben Sie schon in Deutschland gearbeitet?', translation: 'Yes, no problem. I will help you. Have you worked in Germany already?' },
      { id: '17', speaker: 'Andriy', text: 'Nein, noch nicht. Ich bin Elektriker von Beruf. Ich habe 8 Jahre Berufserfahrung.', translation: 'No, not yet. I am an electrician by profession. I have 8 years of work experience.' },
      { id: '18', speaker: 'Sachbearbeiterin', text: 'Sehr gut! Elektriker werden gesucht. Haben Sie Ihre Zeugnisse dabei?', translation: 'Very good! Electricians are in demand. Do you have your certificates with you?' },
      { id: '19', speaker: 'Andriy', text: 'Ja, aber nur in ukrainischer Sprache. Ich habe auch mein Diplom.', translation: 'Yes, but only in Ukrainian language. I also have my diploma.' },
      { id: '20', speaker: 'Sachbearbeiterin', text: 'Das ist okay. Wir können Ihnen helfen, die Zeugnisse anerkennen zu lassen. Sprechen Sie andere Sprachen?', translation: 'That is okay. We can help you get the certificates recognized. Do you speak other languages?' },
      { id: '21', speaker: 'Andriy', text: 'Ich spreche Ukrainisch, Russisch und ein bisschen Englisch.', translation: 'I speak Ukrainian, Russian and a little English.' },
      { id: '22', speaker: 'Sachbearbeiterin', text: 'Gut. Sie sollten unbedingt einen Deutschkurs machen. Ich schreibe Ihnen eine Berechtigung für einen Integrationskurs.', translation: 'Good. You should definitely take a German course. I will write you an authorization for an integration course.' },
      { id: '23', speaker: 'Andriy', text: 'Danke. Wann bekomme ich das Geld?', translation: 'Thank you. When will I get the money?' },
      { id: '24', speaker: 'Sachbearbeiterin', text: 'Wenn Sie heute alle Unterlagen abgeben und das Bankkonto nächste Woche haben, bekommen Sie das erste Geld Ende des Monats.', translation: 'If you submit all documents today and have the bank account next week, you will get the first money at the end of the month.' },
      { id: '25', speaker: 'Andriy', text: 'Wie viel Geld bekomme ich?', translation: 'How much money will I get?' },
      { id: '26', speaker: 'Sachbearbeiterin', text: 'Für Sie, Ihre Frau und Ihr Kind ungefähr 1.800 Euro pro Monat. Das ist für Essen, Kleidung und andere Kosten. Die Miete zahlen wir direkt.', translation: 'For you, your wife and your child approximately 1,800 euros per month. That is for food, clothing and other costs. We pay the rent directly.' },
      { id: '27', speaker: 'Andriy', text: 'Verstehe. Und was ist, wenn ich krank bin? Ich war letzte Woche krank.', translation: 'I understand. And what if I am sick? I was sick last week.' },
      { id: '28', speaker: 'Sachbearbeiterin', text: 'Wenn Sie krank sind und nicht zum Termin kommen können, müssen Sie uns anrufen. Bringen Sie dann eine Krankschreibung vom Arzt mit.', translation: 'If you are sick and cannot come to the appointment, you must call us. Then bring a sick note from the doctor.' },
      { id: '29', speaker: 'Andriy', text: 'Okay. Und wenn ich Arbeit finde?', translation: 'Okay. And if I find work?' },
      { id: '30', speaker: 'Sachbearbeiterin', text: 'Sehr gut! Dann müssen Sie uns sofort informieren. Wir helfen Ihnen auch bei der Jobsuche. Haben Sie schon nach Arbeit gesucht?', translation: 'Very good! Then you must inform us immediately. We also help you with the job search. Have you looked for work already?' },
      { id: '31', speaker: 'Andriy', text: 'Ein bisschen. Aber mein Deutsch ist nicht so gut.', translation: 'A little bit. But my German is not so good.' },
      { id: '32', speaker: 'Sachbearbeiterin', text: 'Deshalb ist der Deutschkurs wichtig. Ich gebe Ihnen auch Kontakte zu Firmen, die Elektriker suchen.', translation: 'That is why the German course is important. I will also give you contacts to companies looking for electricians.' },
      { id: '33', speaker: 'Andriy', text: 'Danke! Das ist sehr hilfreich. Wann muss ich wiederkommen?', translation: 'Thank you! That is very helpful. When must I come back?' },
      { id: '34', speaker: 'Sachbearbeiterin', text: 'In 4 Wochen. Ich schicke Ihnen eine Einladung per Post. Bringen Sie dann Ihr Bankkonto mit und die Bescheinigung vom Deutschkurs.', translation: 'In 4 weeks. I will send you an invitation by mail. Then bring your bank account and the certificate from the German course.' },
      { id: '35', speaker: 'Andriy', text: 'Gut. Können Sie mir alles Wichtige aufschreiben?', translation: 'Good. Can you write down everything important for me?' },
      { id: '36', speaker: 'Sachbearbeiterin', text: 'Ja, hier ist eine Liste für Sie. Und hier ist meine Telefonnummer, falls Sie Fragen haben.', translation: 'Yes, here is a list for you. And here is my phone number in case you have questions.' },
      { id: '37', speaker: 'Andriy', text: 'Vielen Dank! Sie haben mir sehr geholfen.', translation: 'Thank you very much! You have helped me a lot.' },
      { id: '38', speaker: 'Sachbearbeiterin', text: 'Gern geschehen. Viel Erfolg beim Deutschkurs und bei der Jobsuche!', translation: 'You\'re welcome. Good luck with the German course and the job search!' },
      { id: '39', speaker: 'Andriy', text: 'Danke. Auf Wiedersehen!', translation: 'Thank you. Goodbye!' }
    ],
    vocabulary: [
      { german: 'das Jobcenter', translation: 'job center', context: 'Ich gehe zum Jobcenter.', translationUK: 'центр зайнятості', translationHR: 'centar za zapošljavanje' },
      { german: 'das Bürgergeld', translation: 'citizen\'s allowance', context: 'Ich beantrage Bürgergeld.', translationUK: 'допомога громадянам', translationHR: 'građanska naknada' },
      { german: 'der Antrag', translation: 'application', context: 'Ich stelle einen Antrag.', translationUK: 'заява', translationHR: 'zahtjev' },
      { german: 'der Bescheid', translation: 'decision/notification', context: 'Ich habe einen Bescheid bekommen.', translationUK: 'рішення, повідомлення', translationHR: 'odluka' },
      { german: 'die Leistungen', translation: 'benefits', context: 'Ich bekomme Leistungen.', translationUK: 'допомога, виплати', translationHR: 'naknade' },
      { german: 'der Bewilligungszeitraum', translation: 'approval period', context: 'Der Bewilligungszeitraum ist 6 Monate.', translationUK: 'період схвалення', translationHR: 'razdoblje odobrenja' },
      { german: 'das Bankkonto', translation: 'bank account', context: 'Ich brauche ein Bankkonto.', translationUK: 'банківський рахунок', translationHR: 'bankovni račun' },
      { german: 'der Mietvertrag', translation: 'rental contract', context: 'Hier ist mein Mietvertrag.', translationUK: 'договір оренди', translationHR: 'ugovor o najmu' },
      { german: 'die Meldebescheinigung', translation: 'registration certificate', context: 'Ich habe eine Meldebescheinigung.', translationUK: 'довідка про реєстрацію', translationHR: 'potvrda o prijavi' },
      { german: 'die Sammelunterkunft', translation: 'shared accommodation', context: 'Ich wohne in einer Sammelunterkunft.', translationUK: 'збірний центр', translationHR: 'zajednički smještaj' },
      { german: 'die Krankschreibung', translation: 'sick note', context: 'Ich brauche eine Krankschreibung.', translationUK: 'лікарняний', translationHR: 'bolovanje' },
      { german: 'die Berechtigung', translation: 'authorization', context: 'Ich habe eine Berechtigung für den Kurs.', translationUK: 'дозвіл', translationHR: 'ovlaštenje' },
      { german: 'der Integrationskurs', translation: 'integration course', context: 'Ich mache einen Integrationskurs.', translationUK: 'інтеграційний курс', translationHR: 'integracijski tečaj' },
      { german: 'die Anerkennung', translation: 'recognition', context: 'Ich brauche eine Anerkennung meiner Zeugnisse.', translationUK: 'визнання', translationHR: 'priznanje' },
      { german: 'die Berufserfahrung', translation: 'work experience', context: 'Ich habe 8 Jahre Berufserfahrung.', translationUK: 'досвід роботи', translationHR: 'radno iskustvo' },
      { german: 'die Jobsuche', translation: 'job search', context: 'Ich bin auf Jobsuche.', translationUK: 'пошук роботи', translationHR: 'traženje posla' },
      { german: 'informieren', translation: 'to inform', context: 'Ich muss Sie informieren.', translationUK: 'інформувати', translationHR: 'obavijestiti' },
      { german: 'ausfüllen', translation: 'to fill out', context: 'Ich muss das Formular ausfüllen.', translationUK: 'заповнити', translationHR: 'ispuniti' }
    ],
    exercises: [
      {
        id: '1',
        type: 'fill-in-blank',
        question: 'Guten Tag. Mein ___ ist Andriy Shevchenko. Ich habe einen ___ um 14 Uhr.',
        blanks: ['Name', 'Termin'],
        correctAnswer: 'Name, Termin',
        hint: 'Was sagt Andriy am Anfang?'
      },
      {
        id: '2',
        type: 'fill-in-blank',
        question: 'Haben Sie alle ___ dabei? Ja. Hier sind meine ___. Mein Pass, meine Fiktionsbescheinigung und meine Meldebescheinigung.',
        blanks: ['Unterlagen', 'Papiere'],
        correctAnswer: 'Unterlagen, Papiere'
      },
      {
        id: '3',
        type: 'fill-in-blank',
        question: 'Haben Sie einen ___? Noch nicht. Ich wohne in einer ___.',
        blanks: ['Mietvertrag', 'Sammelunterkunft'],
        correctAnswer: 'Mietvertrag, Sammelunterkunft'
      },
      {
        id: '4',
        type: 'fill-in-blank',
        question: 'Haben Sie ein ___ in Deutschland? Nein, noch nicht. Ich habe nur ein Handy mit ___ Nummer.',
        blanks: ['Bankkonto', 'ukrainischer'],
        correctAnswer: 'Bankkonto, ukrainischer'
      },
      {
        id: '5',
        type: 'fill-in-blank',
        question: 'Ich bin ___ von Beruf. Ich habe 8 Jahre ___.',
        blanks: ['Elektriker', 'Berufserfahrung'],
        correctAnswer: 'Elektriker, Berufserfahrung'
      },
      {
        id: '6',
        type: 'fill-in-blank',
        question: 'Haben Sie Ihre ___ dabei? Ja, aber nur in ___ Sprache.',
        blanks: ['Zeugnisse', 'ukrainischer'],
        correctAnswer: 'Zeugnisse, ukrainischer'
      },
      {
        id: '7',
        type: 'multiple-choice',
        question: 'Was braucht man für den Antrag auf Bürgergeld?',
        options: [
          'Nur den Pass',
          'Pass, Fiktionsbescheinigung, Meldebescheinigung',
          'Einen Arbeitsvertrag',
          'Nichts'
        ],
        correctAnswer: 'Pass, Fiktionsbescheinigung, Meldebescheinigung'
      },
      {
        id: '8',
        type: 'multiple-choice',
        question: 'Warum braucht man ein deutsches Bankkonto?',
        options: [
          'Für das Bürgergeld',
          'Für die Wohnung',
          'Für den Arzt',
          'Man braucht keins'
        ],
        correctAnswer: 'Für das Bürgergeld'
      },
      {
        id: '9',
        type: 'multiple-choice',
        question: 'Wie viel Bürgergeld bekommt eine Familie mit einem Kind (ungefähr)?',
        options: ['500 Euro', '1.000 Euro', '1.800 Euro', '3.000 Euro'],
        correctAnswer: '1.800 Euro'
      },
      {
        id: '10',
        type: 'multiple-choice',
        question: 'Was muss man tun, wenn man krank ist und nicht zum Termin kommen kann?',
        options: [
          'Einfach nicht kommen',
          'Anrufen und eine Krankschreibung bringen',
          'Eine E-Mail schreiben',
          'Nichts'
        ],
        correctAnswer: 'Anrufen und eine Krankschreibung bringen'
      },
      {
        id: '11',
        type: 'multiple-choice',
        question: 'Was hilft am meisten bei der Jobsuche?',
        options: ['Viel Geld', 'Ein Auto', 'Gute Deutschkenntnisse', 'Viele Freunde'],
        correctAnswer: 'Gute Deutschkenntnisse'
      },
      {
        id: '12',
        type: 'multiple-choice',
        question: 'Wann muss man das Jobcenter informieren?',
        options: [
          'Wenn man Arbeit findet',
          'Nur am Geburtstag',
          'Nie',
          'Nur wenn man will'
        ],
        correctAnswer: 'Wenn man Arbeit findet'
      }
    ],
    rolePlay: [
      { id: '1', prompt: 'Guten Tag. Wie heißen Sie?', expectedAnswer: 'Guten Tag. Mein Name ist...' },
      { id: '2', prompt: 'Wohnen Sie alleine oder mit Familie?', expectedAnswer: 'Ich wohne... (alleine/mit meiner Familie)' },
      { id: '3', prompt: 'Haben Sie ein deutsches Bankkonto?', expectedAnswer: 'Ja/Nein, ich habe...' },
      { id: '4', prompt: 'Was sind Sie von Beruf?', expectedAnswer: 'Ich bin... von Beruf.' },
      { id: '5', prompt: 'Haben Sie schon in Deutschland gearbeitet?', expectedAnswer: 'Ja/Nein, ich habe...' },
      { id: '6', prompt: 'Welche Sprachen sprechen Sie?', expectedAnswer: 'Ich spreche...' }
    ],
    culturalTips: [
      {
        id: '1',
        icon: '🕐',
        title: 'Termine',
        content: 'Jobcenter-Termine sind PFLICHT! Wenn du nicht kommst, kannst du Geld verlieren. Wenn du nicht kommen kannst, ruf sofort an!'
      },
      {
        id: '2',
        icon: '💶',
        title: 'Geld',
        content: 'Das erste Bürgergeld kommt meist am Ende des Monats. Plane dein Budget!'
      },
      {
        id: '3',
        icon: '🏦',
        title: 'Bankkonto',
        content: 'Ohne deutsches Bankkonto bekommst du kein Geld. Eröffne es so schnell wie möglich! Viele Banken haben kostenlose Konten für Geflüchtete.'
      },
      {
        id: '4',
        icon: '📚',
        title: 'Deutschkurs',
        content: 'Der Integrationskurs ist KOSTENLOS und sehr wichtig für Jobsuche! Nutze diese Chance!'
      },
      {
        id: '5',
        icon: '💼',
        title: 'Jobsuche',
        content: 'Das Jobcenter hilft dir bei der Jobsuche. Es gibt auch spezielle Programme für Berufsanerkennung.'
      },
      {
        id: '6',
        icon: '📧',
        title: 'Kommunikation',
        content: 'Das Jobcenter schreibt oft Briefe. Diese sind WICHTIG! Lies sie genau oder lass sie dir übersetzen.'
      },
      {
        id: '7',
        icon: '👨‍👩‍👧',
        title: 'Familie',
        content: 'Wenn deine Familie mit dir lebt, bekommt ihr mehr Geld. Informiere das Jobcenter über alle Familienmitglieder.'
      },
      {
        id: '8',
        icon: '🏥',
        title: 'Krankenversicherung',
        content: 'Das Jobcenter meldet dich automatisch bei der Krankenversicherung an. Du bekommst eine Versichertenkarte per Post.'
      },
      {
        id: '9',
        icon: '⚠️',
        title: 'Wichtig',
        content: 'Wenn sich etwas ändert (neue Wohnung, Job, Familie), musst du das Jobcenter SOFORT informieren!'
      }
    ],
    checklist: [
      { id: '1', category: 'Vor dem ersten Termin', text: 'Termin-Bestätigung (ausgedruckt oder auf dem Handy)' },
      { id: '2', category: 'Vor dem ersten Termin', text: 'Pass (Original!)' },
      { id: '3', category: 'Vor dem ersten Termin', text: 'Fiktionsbescheinigung oder Aufenthaltstitel' },
      { id: '4', category: 'Vor dem ersten Termin', text: 'Meldebescheinigung (vom Einwohnermeldeamt oder Unterkunft)' },
      { id: '5', category: 'Vor dem ersten Termin', text: 'Mietvertrag (falls vorhanden) ODER Bescheinigung von der Unterkunft' },
      { id: '6', category: 'Vor dem ersten Termin', text: 'Alle Zeugnisse und Diplome (auch in deiner Muttersprache!)' },
      { id: '7', category: 'Vor dem ersten Termin', text: 'Lebenslauf (falls vorhanden)' },
      { id: '8', category: 'Was du noch brauchst', text: 'Deutsches Bankkonto eröffnen (so schnell wie möglich!)' },
      { id: '9', category: 'Was du noch brauchst', text: 'Handynummer aufschreiben (deutsche oder ausländische)' },
      { id: '10', category: 'Was du noch brauchst', text: 'E-Mail-Adresse aufschreiben' },
      { id: '11', category: 'Wichtige Sätze zum Üben', text: 'Guten Tag, mein Name ist...' },
      { id: '12', category: 'Wichtige Sätze zum Üben', text: 'Ich habe einen Termin um...' },
      { id: '13', category: 'Wichtige Sätze zum Üben', text: 'Hier sind meine Papiere' },
      { id: '14', category: 'Wichtige Sätze zum Üben', text: 'Können Sie langsam sprechen?' },
      { id: '15', category: 'Wichtige Sätze zum Üben', text: 'Können Sie mir das aufschreiben?' },
      { id: '16', category: 'Wichtige Sätze zum Üben', text: 'Ich bin [Beruf] von Beruf' },
      { id: '17', category: 'Wichtige Sätze zum Üben', text: 'Ich habe [X] Jahre Berufserfahrung' },
      { id: '18', category: 'Wichtige Sätze zum Üben', text: 'Ich spreche [Sprachen]' },
      { id: '19', category: 'Wichtige Sätze zum Üben', text: 'Wann bekomme ich das Geld?' },
      { id: '20', category: 'Wichtige Sätze zum Üben', text: 'Wann muss ich wiederkommen?' },
      { id: '21', category: 'Nach dem Termin', text: 'Alle Bescheide gut aufbewahren!' },
      { id: '22', category: 'Nach dem Termin', text: 'Notiere dir: Wann ist der nächste Termin?' },
      { id: '23', category: 'Nach dem Termin', text: 'Notiere dir die Telefonnummer deines Sachbearbeiters' },
      { id: '24', category: 'Nach dem Termin', text: 'Deutschkurs anmelden (sehr wichtig!)' },
      { id: '25', category: 'Nach dem Termin', text: 'Prüfe regelmäßig deine E-Mails und Post' }
    ]
  },
  {
    id: 'sprachschule',
    title: 'Sprachschule / Integrationskurs',
    category: 'erste-schritte',
    level: 'A1',
    description: 'Deutschkurs anmelden und Einstufungstest machen',
    icon: '🏫',
    completed: false,
    dialogues: [
      { id: '1', speaker: 'Olena', text: 'Guten Tag.', translation: 'Good day.' },
      { id: '2', speaker: 'Mitarbeiterin', text: 'Guten Tag! Wie kann ich Ihnen helfen?', translation: 'Good day! How can I help you?' },
      { id: '3', speaker: 'Olena', text: 'Ich möchte einen Deutschkurs machen. Ich habe eine Berechtigung vom Jobcenter.', translation: 'I would like to take a German course. I have an authorization from the job center.' },
      { id: '4', speaker: 'Mitarbeiterin', text: 'Sehr gut! Einen Integrationskurs, richtig?', translation: 'Very good! An integration course, correct?' },
      { id: '5', speaker: 'Olena', text: 'Ja, genau. Aber ich spreche noch nicht so gut Deutsch. Können Sie langsam sprechen?', translation: 'Yes, exactly. But I don\'t speak German so well yet. Can you speak slowly?' },
      { id: '6', speaker: 'Mitarbeiterin', text: 'Natürlich, kein Problem. Wie heißen Sie?', translation: 'Of course, no problem. What is your name?' },
      { id: '7', speaker: 'Olena', text: 'Mein Name ist Olena Bondarenko. Ich komme aus der Ukraine.', translation: 'My name is Olena Bondarenko. I come from Ukraine.' },
      { id: '8', speaker: 'Mitarbeiterin', text: 'Willkommen! Wann sind Sie nach Deutschland gekommen?', translation: 'Welcome! When did you come to Germany?' },
      { id: '9', speaker: 'Olena', text: 'Im April 2023. Ich wohne jetzt in Berlin.', translation: 'In April 2023. I live in Berlin now.' },
      { id: '10', speaker: 'Mitarbeiterin', text: 'Gut. Haben Sie schon mal Deutsch gelernt?', translation: 'Good. Have you learned German before?' },
      { id: '11', speaker: 'Olena', text: 'Ja, ein bisschen. In der Schule hatte ich Deutsch, aber das ist lange her. Und ich habe eine App benutzt.', translation: 'Yes, a little bit. I had German in school, but that was long ago. And I used an app.' },
      { id: '12', speaker: 'Mitarbeiterin', text: 'Verstehe. Sie müssen einen Einstufungstest machen. Der Test zeigt uns Ihr Niveau: A1, A2, B1 oder B2.', translation: 'I understand. You must take a placement test. The test shows us your level: A1, A2, B1 or B2.' },
      { id: '13', speaker: 'Olena', text: 'Was ist ein Einstufungstest?', translation: 'What is a placement test?' },
      { id: '14', speaker: 'Mitarbeiterin', text: 'Das ist ein kurzer Test – Grammatik, Vokabeln, Lesen, Hören. Er dauert ungefähr 45 Minuten. Dann wissen wir, in welchen Kurs Sie passen.', translation: 'That is a short test – grammar, vocabulary, reading, listening. It takes about 45 minutes. Then we know which course fits you.' },
      { id: '15', speaker: 'Olena', text: 'Okay. Wann kann ich den Test machen?', translation: 'Okay. When can I take the test?' },
      { id: '16', speaker: 'Mitarbeiterin', text: 'Morgen um 10 Uhr. Geht das?', translation: 'Tomorrow at 10 o\'clock. Does that work?' },
      { id: '17', speaker: 'Olena', text: 'Ja, das geht. Was muss ich mitbringen?', translation: 'Yes, that works. What must I bring?' },
      { id: '18', speaker: 'Mitarbeiterin', text: 'Ihren Pass, die Berechtigung vom Jobcenter und einen Stift. Haben Sie die Berechtigung dabei?', translation: 'Your passport, the authorization from the job center and a pen. Do you have the authorization with you?' },
      { id: '19', speaker: 'Olena', text: 'Ja, hier. Können Sie mir alles aufschreiben? Wann und wo ist der Test?', translation: 'Yes, here. Can you write everything down for me? When and where is the test?' },
      { id: '20', speaker: 'Mitarbeiterin', text: 'Ja, ich schreibe es auf. Der Test ist hier in Raum 204, zweite Etage. Um 10 Uhr.', translation: 'Yes, I will write it down. The test is here in room 204, second floor. At 10 o\'clock.' },
      { id: '21', speaker: 'Olena', text: 'Danke. Und wann fängt der Kurs an?', translation: 'Thank you. And when does the course start?' },
      { id: '22', speaker: 'Mitarbeiterin', text: 'Der nächste Kurs startet am 15. Januar. Er ist von Montag bis Freitag, von 9 bis 13 Uhr.', translation: 'The next course starts on January 15th. It is Monday to Friday, from 9 to 1 PM.' },
      { id: '23', speaker: 'Olena', text: 'Jeden Tag? Vier Stunden?', translation: 'Every day? Four hours?' },
      { id: '24', speaker: 'Mitarbeiterin', text: 'Ja, genau. Der Integrationskurs hat 600 Stunden Deutschunterricht plus 100 Stunden Orientierungskurs.', translation: 'Yes, exactly. The integration course has 600 hours of German lessons plus 100 hours orientation course.' },
      { id: '25', speaker: 'Olena', text: 'Was ist ein Orientierungskurs?', translation: 'What is an orientation course?' },
      { id: '26', speaker: 'Mitarbeiterin', text: 'Da lernen Sie über Deutschland: Geschichte, Politik, Kultur, Gesetze. Das ist sehr wichtig für das Leben hier.', translation: 'There you learn about Germany: history, politics, culture, laws. That is very important for life here.' },
      { id: '27', speaker: 'Olena', text: 'Verstehe. Und wie lange dauert der ganze Kurs?', translation: 'I understand. And how long does the whole course take?' },
      { id: '28', speaker: 'Mitarbeiterin', text: 'Ungefähr 6-7 Monate, wenn Sie jeden Tag kommen. Am Ende gibt es eine Prüfung: den DTZ-Test.', translation: 'About 6-7 months if you come every day. At the end there is an exam: the DTZ test.' },
      { id: '29', speaker: 'Olena', text: 'DTZ? Was ist das?', translation: 'DTZ? What is that?' },
      { id: '30', speaker: 'Mitarbeiterin', text: '"Deutsch-Test für Zuwanderer". Wenn Sie die Prüfung bestehen, haben Sie ein B1-Zertifikat. Das brauchen Sie für viele Jobs und für die deutsche Staatsbürgerschaft.', translation: '"German Test for Immigrants". If you pass the exam, you have a B1 certificate. You need that for many jobs and for German citizenship.' },
      { id: '31', speaker: 'Olena', text: 'Okay. Ist der Kurs kostenlos? Ich habe nicht viel Geld.', translation: 'Okay. Is the course free? I don\'t have much money.' },
      { id: '32', speaker: 'Mitarbeiterin', text: 'Mit der Berechtigung vom Jobcenter ist der Kurs kostenlos! Sie zahlen nichts.', translation: 'With the authorization from the job center, the course is free! You pay nothing.' },
      { id: '33', speaker: 'Olena', text: 'Das ist gut! Und die Bücher?', translation: 'That is good! And the books?' },
      { id: '34', speaker: 'Mitarbeiterin', text: 'Die Bücher kosten ungefähr 30 Euro. Aber wenn Sie kein Geld haben, können Sie beim Jobcenter fragen. Manchmal bezahlen sie die Bücher.', translation: 'The books cost about 30 euros. But if you have no money, you can ask at the job center. Sometimes they pay for the books.' },
      { id: '35', speaker: 'Olena', text: 'Okay. Ich habe noch eine Frage: Ich habe ein Kind. Sie ist 6 Jahre alt und geht in die Schule. Kann ich den Kurs trotzdem machen?', translation: 'Okay. I have another question: I have a child. She is 6 years old and goes to school. Can I still take the course?' },
      { id: '36', speaker: 'Mitarbeiterin', text: 'Ja, natürlich! Der Kurs ist von 9 bis 13 Uhr. Ihre Tochter ist dann in der Schule, oder?', translation: 'Yes, of course! The course is from 9 to 1 PM. Your daughter is in school then, right?' },
      { id: '37', speaker: 'Olena', text: 'Ja, meistens. Aber manchmal ist sie krank. Was mache ich dann?', translation: 'Yes, mostly. But sometimes she is sick. What do I do then?' },
      { id: '38', speaker: 'Mitarbeiterin', text: 'Wenn Ihr Kind krank ist, können Sie zu Hause bleiben. Aber Sie müssen uns anrufen und eine Entschuldigung bringen. Wenn Sie zu oft fehlen, ist das ein Problem.', translation: 'If your child is sick, you can stay home. But you must call us and bring an excuse note. If you are absent too often, that is a problem.' },
      { id: '39', speaker: 'Olena', text: 'Verstehe. Wie viele Tage darf ich fehlen?', translation: 'I understand. How many days may I be absent?' },
      { id: '40', speaker: 'Mitarbeiterin', text: 'Nicht mehr als 20% – das sind ungefähr 140 Stunden. Wenn Sie mehr fehlen, können Sie die Prüfung nicht machen.', translation: 'No more than 20% – that is about 140 hours. If you are absent more, you cannot take the exam.' },
      { id: '41', speaker: 'Olena', text: 'Okay. Ich versuche, immer zu kommen. Gibt es auch Hausaufgaben?', translation: 'Okay. I will try to always come. Are there also homework?' },
      { id: '42', speaker: 'Mitarbeiterin', text: 'Ja, aber nicht zu viel. Vielleicht 30-60 Minuten pro Tag. Und Sie können in der Schule Fragen stellen.', translation: 'Yes, but not too much. Maybe 30-60 minutes per day. And you can ask questions at school.' },
      { id: '43', speaker: 'Olena', text: 'Gut. Ich habe nur ein Handy mit ukrainischer Nummer. Ist das okay?', translation: 'Good. I only have a phone with a Ukrainian number. Is that okay?' },
      { id: '44', speaker: 'Mitarbeiterin', text: 'Ja, kein Problem. Schreiben Sie Ihre Nummer hier auf. Wir schicken Ihnen auch E-Mails.', translation: 'Yes, no problem. Write your number here. We will also send you emails.' },
      { id: '45', speaker: 'Olena', text: 'Meine E-Mail-Adresse ist olena.bondarenko@gmail.com.', translation: 'My email address is olena.bondarenko@gmail.com.' },
      { id: '46', speaker: 'Mitarbeiterin', text: 'Perfekt. Dann sehen wir uns morgen um 10 Uhr zum Einstufungstest!', translation: 'Perfect. Then we will see each other tomorrow at 10 o\'clock for the placement test!' },
      { id: '47', speaker: 'Olena', text: 'Vielen Dank! Sie haben mir sehr geholfen. Auf Wiedersehen!', translation: 'Thank you very much! You have helped me a lot. Goodbye!' },
      { id: '48', speaker: 'Mitarbeiterin', text: 'Gern geschehen! Viel Erfolg morgen! Auf Wiedersehen!', translation: 'You\'re welcome! Good luck tomorrow! Goodbye!' }
    ],
    vocabulary: [
      { german: 'die Sprachschule', translation: 'language school', context: 'Ich gehe zur Sprachschule.', translationUK: 'мовна школа', translationHR: 'jezična škola' },
      { german: 'die Volkshochschule (VHS)', translation: 'adult education center', context: 'Ich lerne bei der VHS.', translationUK: 'народний університет', translationHR: 'pučko otvoreno učilište' },
      { german: 'der Integrationskurs', translation: 'integration course', context: 'Ich mache einen Integrationskurs.', translationUK: 'інтеграційний курс', translationHR: 'integracijski tečaj' },
      { german: 'der Einstufungstest', translation: 'placement test', context: 'Ich mache einen Einstufungstest.', translationUK: 'тест на рівень', translationHR: 'test za razvrstavanje' },
      { german: 'das Niveau', translation: 'level', context: 'Mein Niveau ist A2.', translationUK: 'рівень', translationHR: 'razina' },
      { german: 'die Berechtigung', translation: 'authorization', context: 'Ich habe eine Berechtigung.', translationUK: 'дозвіл', translationHR: 'ovlaštenje' },
      { german: 'der Unterricht', translation: 'lessons/classes', context: 'Der Unterricht ist interessant.', translationUK: 'заняття', translationHR: 'nastava' },
      { german: 'der Orientierungskurs', translation: 'orientation course', context: 'Nach dem Deutschkurs kommt der Orientierungskurs.', translationUK: 'орієнтаційний курс', translationHR: 'orijentacijski tečaj' },
      { german: 'die Prüfung', translation: 'exam', context: 'Ich mache eine Prüfung.', translationUK: 'іспит', translationHR: 'ispit' },
      { german: 'der DTZ (Deutsch-Test für Zuwanderer)', translation: 'German test for immigrants', context: 'Ich mache den DTZ.', translationUK: 'іспит з німецької для іммігрантів', translationHR: 'test njemačkog za useljenike' },
      { german: 'das Zertifikat', translation: 'certificate', context: 'Ich bekomme ein B1-Zertifikat.', translationUK: 'сертифікат', translationHR: 'certifikat' },
      { german: 'die Hausaufgaben', translation: 'homework', context: 'Ich mache meine Hausaufgaben.', translationUK: 'домашнє завдання', translationHR: 'domaća zadaća' },
      { german: 'fehlen', translation: 'to be absent', context: 'Ich fehle heute.', translationUK: 'бути відсутнім', translationHR: 'nedostajati' },
      { german: 'die Entschuldigung', translation: 'excuse/note', context: 'Ich bringe eine Entschuldigung.', translationUK: 'виправдання', translationHR: 'isprika' },
      { german: 'bestehen', translation: 'to pass (exam)', context: 'Ich bestehe die Prüfung.', translationUK: 'скласти (іспит)', translationHR: 'položiti' },
      { german: 'kostenlos', translation: 'free', context: 'Der Kurs ist kostenlos.', translationUK: 'безкоштовно', translationHR: 'besplatno' },
      { german: 'die Staatsbürgerschaft', translation: 'citizenship', context: 'Ich beantrage die deutsche Staatsbürgerschaft.', translationUK: 'громадянство', translationHR: 'državljanstvo' },
      { german: 'anmelden', translation: 'to register', context: 'Ich melde mich für den Kurs an.', translationUK: 'зареєструватися', translationHR: 'prijaviti se' }
    ],
    exercises: [
      {
        id: '1',
        type: 'fill-in-blank',
        question: 'Ich möchte einen ___ machen. Ich habe eine ___ vom Jobcenter.',
        blanks: ['Deutschkurs', 'Berechtigung'],
        correctAnswer: 'Deutschkurs, Berechtigung',
        hint: 'Was sagt Olena am Anfang?'
      },
      {
        id: '2',
        type: 'fill-in-blank',
        question: 'Einen ___, richtig? Ja. Aber ich spreche noch nicht so gut Deutsch. Können Sie ___ sprechen?',
        blanks: ['Integrationskurs', 'langsam'],
        correctAnswer: 'Integrationskurs, langsam'
      },
      {
        id: '3',
        type: 'fill-in-blank',
        question: 'Haben Sie schon mal Deutsch ___? Ja, ein bisschen. In der ___ hatte ich Deutsch.',
        blanks: ['gelernt', 'Schule'],
        correctAnswer: 'gelernt, Schule'
      },
      {
        id: '4',
        type: 'fill-in-blank',
        question: 'Sie müssen einen ___ machen. Der Test zeigt uns Ihr ___: A1, A2, B1 oder B2.',
        blanks: ['Einstufungstest', 'Niveau'],
        correctAnswer: 'Einstufungstest, Niveau'
      },
      {
        id: '5',
        type: 'fill-in-blank',
        question: 'Der ___ startet am 15. Januar. Der Integrationskurs hat 600 Stunden Deutschunterricht plus 100 Stunden ___.',
        blanks: ['Kurs', 'Orientierungskurs'],
        correctAnswer: 'Kurs, Orientierungskurs'
      },
      {
        id: '6',
        type: 'fill-in-blank',
        question: 'Am Ende gibt es eine ___: den DTZ-Test. Mit der Berechtigung vom Jobcenter ist der Kurs ___!',
        blanks: ['Prüfung', 'kostenlos'],
        correctAnswer: 'Prüfung, kostenlos'
      },
      {
        id: '7',
        type: 'multiple-choice',
        question: 'Was ist ein Einstufungstest?',
        options: [
          'Eine Prüfung am Ende des Kurses',
          'Ein Test, um das Sprachniveau zu bestimmen',
          'Eine Bewerbung',
          'Ein Deutschbuch'
        ],
        correctAnswer: 'Ein Test, um das Sprachniveau zu bestimmen'
      },
      {
        id: '8',
        type: 'multiple-choice',
        question: 'Wie lange dauert ein Integrationskurs?',
        options: ['1 Monat', '3 Monate', '6-7 Monate', '2 Jahre'],
        correctAnswer: '6-7 Monate'
      },
      {
        id: '9',
        type: 'multiple-choice',
        question: 'Was ist der DTZ?',
        options: [
          'Ein Deutschlehrer',
          'Ein Test für Zuwanderer',
          'Ein Bankkonto',
          'Eine Schule'
        ],
        correctAnswer: 'Ein Test für Zuwanderer'
      },
      {
        id: '10',
        type: 'multiple-choice',
        question: 'Wie viel kostet der Integrationskurs mit Berechtigung?',
        options: ['500 Euro', '100 Euro', '50 Euro', 'Kostenlos'],
        correctAnswer: 'Kostenlos'
      },
      {
        id: '11',
        type: 'multiple-choice',
        question: 'Wie viele Stunden darf man maximal fehlen?',
        options: ['10%', '20%', '50%', 'Man darf nicht fehlen'],
        correctAnswer: '20%'
      },
      {
        id: '12',
        type: 'multiple-choice',
        question: 'Was lernt man im Orientierungskurs?',
        options: [
          'Nur Grammatik',
          'Geschichte, Politik, Kultur von Deutschland',
          'Mathematik',
          'Englisch'
        ],
        correctAnswer: 'Geschichte, Politik, Kultur von Deutschland'
      }
    ],
    rolePlay: [
      { id: '1', prompt: 'Guten Tag! Wie kann ich Ihnen helfen?', expectedAnswer: 'Ich möchte einen Deutschkurs machen.' },
      { id: '2', prompt: 'Wie heißen Sie?', expectedAnswer: 'Mein Name ist...' },
      { id: '3', prompt: 'Haben Sie schon mal Deutsch gelernt?', expectedAnswer: 'Ja/Nein, ich habe...' },
      { id: '4', prompt: 'Haben Sie die Berechtigung vom Jobcenter dabei?', expectedAnswer: 'Ja/Nein, hier ist...' },
      { id: '5', prompt: 'Der Kurs ist von Montag bis Freitag, 9-13 Uhr. Geht das?', expectedAnswer: 'Ja, das geht. / Nein, das ist schwierig.' },
      { id: '6', prompt: 'Haben Sie noch Fragen?', expectedAnswer: 'Ja/Nein, ...' }
    ],
    culturalTips: [
      {
        id: '1',
        icon: '📚',
        title: 'Lernen',
        content: 'In Deutschland lernt man viel durch Hausaufgaben und Selbststudium. Der Lehrer erklärt, aber du musst auch zu Hause üben!'
      },
      {
        id: '2',
        icon: '⏰',
        title: 'Pünktlichkeit',
        content: 'Komm immer pünktlich! In Deutschland ist das sehr wichtig. Lieber 5 Minuten zu früh als 1 Minute zu spät.'
      },
      {
        id: '3',
        icon: '❓',
        title: 'Fragen',
        content: 'Hab keine Angst, Fragen zu stellen! Deutsche Lehrer mögen es, wenn Schüler aktiv sind.'
      },
      {
        id: '4',
        icon: '👥',
        title: 'Gruppenarbeit',
        content: 'In deutschen Kursen arbeitet man oft in Gruppen. Das hilft beim Lernen!'
      },
      {
        id: '5',
        icon: '🏠',
        title: 'Hausaufgaben',
        content: 'Hausaufgaben sind WICHTIG! Sie helfen dir, besser Deutsch zu lernen. Plan jeden Tag 30-60 Minuten ein.'
      },
      {
        id: '6',
        icon: '📱',
        title: 'Apps',
        content: 'Benutze Apps wie "Duolingo", "Anki" oder "Deutsche Welle" zusätzlich zum Kurs!'
      },
      {
        id: '7',
        icon: '🗣️',
        title: 'Sprechen',
        content: 'Versuche, so viel wie möglich Deutsch zu sprechen – auch außerhalb des Kurses! Mit Nachbarn, beim Einkaufen, überall!'
      },
      {
        id: '8',
        icon: '🎯',
        title: 'Prüfung',
        content: 'Der DTZ ist nicht super schwer, aber du musst lernen! Mit dem B1-Zertifikat findest du leichter Arbeit.'
      },
      {
        id: '9',
        icon: '💼',
        title: 'Berufsbezogener Kurs',
        content: 'Nach dem Integrationskurs kannst du einen Berufssprachkurs (BSK) machen – speziell für deinen Beruf!'
      },
      {
        id: '10',
        icon: '🆓',
        title: 'Kostenlos',
        content: 'Nutze ALLE kostenlosen Angebote! Bibliothek, Konversationskurse, Sprachtandems, Online-Ressourcen!'
      }
    ],
    checklist: [
      { id: '1', category: 'Für den Einstufungstest', text: 'Pass (Original)' },
      { id: '2', category: 'Für den Einstufungstest', text: 'Berechtigung vom Jobcenter oder BAMF' },
      { id: '3', category: 'Für den Einstufungstest', text: 'Stift' },
      { id: '4', category: 'Für den Einstufungstest', text: 'Pünktlich kommen (10 Minuten früher!)' },
      { id: '5', category: 'Für die Kurs-Anmeldung', text: 'Pass' },
      { id: '6', category: 'Für die Kurs-Anmeldung', text: 'Berechtigung' },
      { id: '7', category: 'Für die Kurs-Anmeldung', text: 'Passfoto (manchmal nötig)' },
      { id: '8', category: 'Für die Kurs-Anmeldung', text: 'Handynummer' },
      { id: '9', category: 'Für die Kurs-Anmeldung', text: 'E-Mail-Adresse' },
      { id: '10', category: 'Für den Kurs', text: 'Bücher kaufen (ca. 30 Euro) oder beim Jobcenter nachfragen' },
      { id: '11', category: 'Für den Kurs', text: 'Heft und Stifte' },
      { id: '12', category: 'Für den Kurs', text: 'Jeden Tag pünktlich kommen!' },
      { id: '13', category: 'Für den Kurs', text: 'Hausaufgaben machen' },
      { id: '14', category: 'Für den Kurs', text: 'Fragen stellen, wenn du etwas nicht verstehst' },
      { id: '15', category: 'Wichtige Informationen', text: 'Kurszeiten: Montag-Freitag, meistens 9-13 Uhr' },
      { id: '16', category: 'Wichtige Informationen', text: 'Dauer: ca. 6-7 Monate' },
      { id: '17', category: 'Wichtige Informationen', text: 'Fehlzeiten: max. 20% (ca. 140 Stunden)' },
      { id: '18', category: 'Wichtige Informationen', text: 'Prüfung: DTZ (Deutsch-Test für Zuwanderer)' },
      { id: '19', category: 'Wichtige Informationen', text: 'Ziel: B1-Zertifikat' },
      { id: '20', category: 'Bei Problemen', text: 'Wenn du krank bist: Anrufen und Entschuldigung bringen!' },
      { id: '21', category: 'Bei Problemen', text: 'Wenn dein Kind krank ist: Anrufen!' },
      { id: '22', category: 'Bei Problemen', text: 'Wenn du den Unterricht nicht verstehst: Mit dem Lehrer sprechen!' },
      { id: '23', category: 'Bei Problemen', text: 'Wenn du Hilfe brauchst: Es gibt oft kostenlose Nachhilfe!' }
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
