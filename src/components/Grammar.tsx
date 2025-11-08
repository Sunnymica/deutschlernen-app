import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GrammarTopic } from '../types';

interface GrammarProps {
  topics: GrammarTopic[];
}

export default function Grammar({ topics }: GrammarProps) {
  const { t } = useTranslation();
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(topics[0] || null);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showExplanation, setShowExplanation] = useState(true);

  if (!selectedTopic) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400">No grammar topics available.</p>
      </div>
    );
  }

  const exercise = selectedTopic.exercises[currentExercise];

  const checkAnswer = () => {
    if (userAnswer.trim().toLowerCase() === exercise.correctAnswer.toLowerCase()) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  const nextExercise = () => {
    setFeedback(null);
    setUserAnswer('');
    setCurrentExercise((prev) => (prev + 1) % selectedTopic.exercises.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t('grammar.title')}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t('grammar.topics')}
          </h3>
          <div className="space-y-2">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(topic);
                  setCurrentExercise(0);
                  setFeedback(null);
                  setUserAnswer('');
                  setShowExplanation(true);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTopic.id === topic.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setShowExplanation(true)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                showExplanation
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              {t('grammar.explanation')}
            </button>
            <button
              onClick={() => setShowExplanation(false)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                !showExplanation
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              {t('grammar.exercises')}
            </button>
          </div>

          {showExplanation ? (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {selectedTopic.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedTopic.explanation}
              </p>
              <div className="space-y-2">
                {selectedTopic.examples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 p-3 rounded border-l-4 border-blue-600"
                  >
                    <code className="text-gray-900 dark:text-white">{example}</code>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {t('grammar.exercises')} {currentExercise + 1} / {selectedTopic.exercises.length}
              </div>
              <p className="text-lg text-gray-900 dark:text-white mb-4">
                {exercise.question}
              </p>

              {exercise.type === 'multiple-choice' && exercise.options ? (
                <div className="space-y-2 mb-4">
                  {exercise.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setUserAnswer(option)}
                      className={`w-full text-left px-4 py-2 rounded-lg border-2 transition-colors ${
                        userAnswer === option
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg mb-4 dark:bg-gray-900 dark:text-white"
                  placeholder="Your answer..."
                />
              )}

              {feedback && (
                <div
                  className={`p-4 rounded-lg mb-4 ${
                    feedback === 'correct'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300'
                  }`}
                >
                  {feedback === 'correct' ? t('grammar.correct') : t('grammar.incorrect')}
                </div>
              )}

              {!feedback ? (
                <button
                  onClick={checkAnswer}
                  disabled={!userAnswer}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
                >
                  {t('grammar.checkAnswer')}
                </button>
              ) : (
                <button
                  onClick={nextExercise}
                  className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  {t('common.next')}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
