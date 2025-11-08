export interface Lesson {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  completed: boolean;
  progress: number;
}

export interface VocabularyCard {
  id: string;
  german: string;
  translation: string;
  example: string;
  mastered: boolean;
}

export interface GrammarTopic {
  id: string;
  title: string;
  explanation: string;
  examples: string[];
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  type: 'multiple-choice' | 'fill-in' | 'translation';
}

export interface Progress {
  lessonsCompleted: number;
  totalLessons: number;
  vocabularyMastered: number;
  totalVocabulary: number;
  grammarTopicsCompleted: number;
  totalGrammarTopics: number;
}
