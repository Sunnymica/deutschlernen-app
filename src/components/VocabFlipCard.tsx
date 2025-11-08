import { useState } from 'react';
import { ScenarioVocabulary } from '../types';

interface VocabFlipCardProps {
  vocab: ScenarioVocabulary;
  index: number;
}

export default function VocabFlipCard({ vocab, index }: VocabFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 h-56 cursor-pointer animate-scale-in"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side - German */}
        <div
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 p-6 flex flex-col justify-center items-center border-2 border-primary-200 dark:border-primary-700"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-5xl mb-4">🇩🇪</div>
          <div className="text-2xl font-heading font-bold text-gray-900 dark:text-white text-center mb-3">
            {vocab.german}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 italic text-center px-4">
            💭 "{vocab.context}"
          </div>
          <div className="mt-auto text-xs text-primary-600 dark:text-primary-300 font-medium">
            Klicken zum Umdrehen →
          </div>
        </div>

        {/* Back Side - Translations */}
        <div
          className="absolute w-full h-full backface-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 p-6 border-2 border-gray-200 dark:border-gray-700"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="h-full flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900 rounded-xl">
              <span className="text-3xl">🇬🇧</span>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">English</div>
                <div className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                  {vocab.translation}
                </div>
              </div>
            </div>

            {vocab.translationUK && (
              <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-xl">
                <span className="text-3xl">🇺🇦</span>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Українська</div>
                  <div className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">
                    {vocab.translationUK}
                  </div>
                </div>
              </div>
            )}

            {vocab.translationHR && (
              <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900 rounded-xl">
                <span className="text-3xl">🇭🇷</span>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Hrvatski</div>
                  <div className="text-lg font-semibold text-red-700 dark:text-red-300">
                    {vocab.translationHR}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-auto text-xs text-gray-500 dark:text-gray-400 font-medium text-center">
            ← Klicken zum Zurückdrehen
          </div>
        </div>
      </div>
    </div>
  );
}
