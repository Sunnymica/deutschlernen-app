import { Lesson, VocabularyCard, GrammarTopic } from '../types';

export const sampleLessons: Lesson[] = [
  {
    id: '1',
    title: 'Greetings and Introductions',
    level: 'beginner',
    description: 'Learn basic German greetings and how to introduce yourself',
    completed: false,
    progress: 0
  },
  {
    id: '2',
    title: 'Numbers and Counting',
    level: 'beginner',
    description: 'Master German numbers from 1 to 100',
    completed: false,
    progress: 35
  },
  {
    id: '3',
    title: 'Daily Routines',
    level: 'intermediate',
    description: 'Describe your daily activities in German',
    completed: false,
    progress: 0
  },
  {
    id: '4',
    title: 'German Case System',
    level: 'intermediate',
    description: 'Understanding Nominative, Accusative, Dative, and Genitive',
    completed: false,
    progress: 0
  },
  {
    id: '5',
    title: 'Advanced Conversation',
    level: 'advanced',
    description: 'Express complex ideas and opinions in German',
    completed: false,
    progress: 0
  }
];

export const sampleVocabulary: VocabularyCard[] = [
  {
    id: '1',
    german: 'Hallo',
    translation: 'Hello',
    example: 'Hallo, wie geht es dir?',
    mastered: false
  },
  {
    id: '2',
    german: 'Danke',
    translation: 'Thank you',
    example: 'Danke für deine Hilfe!',
    mastered: false
  },
  {
    id: '3',
    german: 'Bitte',
    translation: 'Please / You\'re welcome',
    example: 'Bitte schön!',
    mastered: false
  },
  {
    id: '4',
    german: 'Tschüss',
    translation: 'Goodbye',
    example: 'Tschüss, bis morgen!',
    mastered: false
  },
  {
    id: '5',
    german: 'Entschuldigung',
    translation: 'Excuse me / Sorry',
    example: 'Entschuldigung, wo ist der Bahnhof?',
    mastered: false
  },
  {
    id: '6',
    german: 'Guten Morgen',
    translation: 'Good morning',
    example: 'Guten Morgen! Hast du gut geschlafen?',
    mastered: false
  },
  {
    id: '7',
    german: 'Gute Nacht',
    translation: 'Good night',
    example: 'Gute Nacht und süße Träume!',
    mastered: false
  },
  {
    id: '8',
    german: 'Wie geht es dir?',
    translation: 'How are you?',
    example: 'Hallo Maria, wie geht es dir heute?',
    mastered: false
  },
  {
    id: '9',
    german: 'Ich verstehe nicht',
    translation: 'I don\'t understand',
    example: 'Entschuldigung, ich verstehe nicht. Kannst du das wiederholen?',
    mastered: false
  },
  {
    id: '10',
    german: 'Sprechen Sie Englisch?',
    translation: 'Do you speak English?',
    example: 'Sprechen Sie Englisch? Ich spreche nur ein bisschen Deutsch.',
    mastered: false
  }
];

export const sampleGrammarTopics: GrammarTopic[] = [
  {
    id: '1',
    title: 'German Articles (der, die, das)',
    explanation: 'German nouns have three genders: masculine (der), feminine (die), and neuter (das). Learning the correct article is essential for proper German grammar.',
    examples: [
      'der Mann (the man) - masculine',
      'die Frau (the woman) - feminine',
      'das Kind (the child) - neuter',
      'die Kinder (the children) - plural'
    ],
    exercises: [
      {
        id: '1',
        question: 'Choose the correct article: ___ Buch (the book)',
        options: ['der', 'die', 'das'],
        correctAnswer: 'das',
        type: 'multiple-choice'
      },
      {
        id: '2',
        question: 'Choose the correct article: ___ Tisch (the table)',
        options: ['der', 'die', 'das'],
        correctAnswer: 'der',
        type: 'multiple-choice'
      },
      {
        id: '3',
        question: 'Choose the correct article: ___ Tür (the door)',
        options: ['der', 'die', 'das'],
        correctAnswer: 'die',
        type: 'multiple-choice'
      }
    ]
  },
  {
    id: '2',
    title: 'Present Tense Conjugation',
    explanation: 'German verbs change their endings based on the subject. The stem of the verb stays the same, but the ending changes.',
    examples: [
      'ich lerne (I learn)',
      'du lernst (you learn)',
      'er/sie/es lernt (he/she/it learns)',
      'wir lernen (we learn)',
      'ihr lernt (you all learn)',
      'sie/Sie lernen (they/you formal learn)'
    ],
    exercises: [
      {
        id: '1',
        question: 'Conjugate "spielen" for "ich": ich ___',
        correctAnswer: 'spiele',
        type: 'fill-in'
      },
      {
        id: '2',
        question: 'Conjugate "machen" for "du": du ___',
        correctAnswer: 'machst',
        type: 'fill-in'
      },
      {
        id: '3',
        question: 'Conjugate "gehen" for "wir": wir ___',
        correctAnswer: 'gehen',
        type: 'fill-in'
      }
    ]
  },
  {
    id: '3',
    title: 'Word Order in German',
    explanation: 'German sentence structure follows specific rules. In main clauses, the verb is in the second position. In questions, the verb comes first.',
    examples: [
      'Ich lerne Deutsch. (I learn German) - Statement',
      'Lernst du Deutsch? (Do you learn German?) - Question',
      'Heute lerne ich Deutsch. (Today I learn German) - Time at beginning',
      'Ich lerne heute Deutsch. (I learn German today) - Time at end'
    ],
    exercises: [
      {
        id: '1',
        question: 'Arrange the words correctly: ich / Kaffee / trinke',
        correctAnswer: 'ich trinke Kaffee',
        type: 'fill-in'
      },
      {
        id: '2',
        question: 'Arrange the words correctly: du / kommst / woher / ?',
        correctAnswer: 'woher kommst du?',
        type: 'fill-in'
      }
    ]
  }
];
