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

// New types for onboarding and scenarios
export type Profession =
  | 'handwerk'
  | 'finanzen'
  | 'logistik'
  | 'pflege'
  | 'medizin'
  | 'gastronomie'
  | 'it'
  | 'einzelhandel'
  | 'bildung'
  | 'technik';

export type LifeSituation =
  | 'neu-in-deutschland'
  | 'mit-kindern'
  | 'jobsuche'
  | 'studium'
  | 'ausbildung'
  | 'rentenalter';

export interface UserProfile {
  profession: Profession | null;
  lifeSituations: LifeSituation[];
  onboardingCompleted: boolean;
  name?: string;
}

export interface Scenario {
  id: string;
  title: string;
  category: 'erste-schritte' | 'profession-specific';
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  description: string;
  icon: string;
  dialogues: Dialogue[];
  vocabulary: ScenarioVocabulary[];
  exercises: ScenarioExercise[];
  completed: boolean;
  culturalTips?: CulturalTip[];
  checklist?: ChecklistItem[];
  rolePlay?: RolePlayQuestion[];
}

export interface Dialogue {
  id: string;
  speaker: string;
  text: string;
  translation?: string;
  audioUrl?: string;
}

export interface ScenarioVocabulary {
  german: string;
  translation: string;
  context: string;
  translationUK?: string;
  translationHR?: string;
}

export interface ScenarioExercise {
  id: string;
  type: 'dialogue-completion' | 'role-play' | 'vocabulary-match' | 'situation-response' | 'fill-in-blank' | 'multiple-choice';
  question: string;
  options?: string[];
  correctAnswer: string;
  hint?: string;
  blanks?: string[]; // for fill-in-blank exercises
}

export interface CulturalTip {
  id: string;
  icon: string;
  title: string;
  content: string;
}

export interface ChecklistItem {
  id: string;
  category: string;
  text: string;
  checked?: boolean;
}

export interface RolePlayQuestion {
  id: string;
  prompt: string;
  expectedAnswer?: string;
}
