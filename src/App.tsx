import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Lessons from './components/Lessons';
import Vocabulary from './components/Vocabulary';
import Grammar from './components/Grammar';
import Progress from './components/Progress';
import { Lesson, VocabularyCard, GrammarTopic, Progress as ProgressType } from './types';
import { sampleLessons, sampleVocabulary, sampleGrammarTopics } from './data/sampleData';

type Page = 'home' | 'lessons' | 'vocabulary' | 'grammar' | 'progress';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [lessons, setLessons] = useState<Lesson[]>(sampleLessons);
  const [vocabularyCards, setVocabularyCards] = useState<VocabularyCard[]>(sampleVocabulary);
  const [grammarTopics] = useState<GrammarTopic[]>(sampleGrammarTopics);

  // Load saved data from localStorage
  useEffect(() => {
    const savedLessons = localStorage.getItem('lessons');
    const savedVocabulary = localStorage.getItem('vocabulary');

    if (savedLessons) {
      setLessons(JSON.parse(savedLessons));
    }
    if (savedVocabulary) {
      setVocabularyCards(JSON.parse(savedVocabulary));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lessons', JSON.stringify(lessons));
  }, [lessons]);

  useEffect(() => {
    localStorage.setItem('vocabulary', JSON.stringify(vocabularyCards));
  }, [vocabularyCards]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleStartLesson = (lessonId: string) => {
    console.log('Starting lesson:', lessonId);
    // In a real app, this would navigate to the lesson content
    // For now, we'll just update the progress
    setLessons(prev =>
      prev.map(lesson =>
        lesson.id === lessonId
          ? { ...lesson, progress: Math.min(lesson.progress + 10, 100) }
          : lesson
      )
    );
  };

  const handleUpdateVocabularyCard = (cardId: string, mastered: boolean) => {
    setVocabularyCards(prev =>
      prev.map(card =>
        card.id === cardId ? { ...card, mastered } : card
      )
    );
  };

  const calculateProgress = (): ProgressType => {
    const completedLessons = lessons.filter(l => l.completed).length;
    const masteredVocabulary = vocabularyCards.filter(v => v.mastered).length;

    return {
      lessonsCompleted: completedLessons,
      totalLessons: lessons.length,
      vocabularyMastered: masteredVocabulary,
      totalVocabulary: vocabularyCards.length,
      grammarTopicsCompleted: 0, // Would be calculated based on completed exercises
      totalGrammarTopics: grammarTopics.length
    };
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'lessons':
        return <Lessons lessons={lessons} onStartLesson={handleStartLesson} />;
      case 'vocabulary':
        return (
          <Vocabulary
            cards={vocabularyCards}
            onUpdateCard={handleUpdateVocabularyCard}
          />
        );
      case 'grammar':
        return <Grammar topics={grammarTopics} />;
      case 'progress':
        return <Progress progress={calculateProgress()} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <footer className="bg-white dark:bg-gray-800 mt-16 py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Deutsch Lernen - Multilingual Learning Platform</p>
          <p className="text-sm mt-2">Supporting DE • EN • UK • HR</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
