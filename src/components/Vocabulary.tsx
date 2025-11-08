import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { VocabularyCard } from '../types';

interface VocabularyProps {
  cards: VocabularyCard[];
  onUpdateCard: (cardId: string, mastered: boolean) => void;
}

export default function Vocabulary({ cards, onUpdateCard }: VocabularyProps) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handleKnow = () => {
    onUpdateCard(currentCard.id, true);
    handleNext();
  };

  const handleDontKnow = () => {
    onUpdateCard(currentCard.id, false);
    handleNext();
  };

  if (!currentCard) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400">No vocabulary cards available.</p>
      </div>
    );
  }

  const masteredCount = cards.filter((c) => c.mastered).length;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t('vocabulary.title')}
      </h2>

      <div className="mb-6 flex justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Card {currentIndex + 1} of {cards.length}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {t('vocabulary.mastered')}: {masteredCount} / {cards.length}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-6 min-h-[300px] flex flex-col justify-center">
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {currentCard.german}
          </div>
          {showAnswer && (
            <div className="space-y-4 animate-fadeIn">
              <div className="text-2xl text-blue-600 dark:text-blue-400">
                {currentCard.translation}
              </div>
              <div className="text-gray-600 dark:text-gray-400 italic">
                "{currentCard.example}"
              </div>
            </div>
          )}
        </div>

        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="w-full py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {t('vocabulary.showAnswer')}
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={handleDontKnow}
              className="flex-1 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
            >
              ✗ {t('vocabulary.dontKnow')}
            </button>
            <button
              onClick={handleKnow}
              className="flex-1 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              ✓ {t('vocabulary.know')}
            </button>
          </div>
        )}
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-green-600 h-2 rounded-full transition-all"
          style={{ width: `${(masteredCount / cards.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
