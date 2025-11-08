import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Scenario } from '../types';

interface ScenarioDetailProps {
  scenario: Scenario;
  onBack: () => void;
  onComplete: () => void;
}

export default function ScenarioDetail({ scenario, onBack, onComplete }: ScenarioDetailProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'dialogue' | 'vocabulary' | 'exercises'>('dialogue');
  const [showTranslations, setShowTranslations] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [exercisesCompleted, setExercisesCompleted] = useState(0);

  const checkAnswer = () => {
    const exercise = scenario.exercises[currentExercise];
    if (userAnswer.trim().toLowerCase() === exercise.correctAnswer.toLowerCase()) {
      setFeedback('correct');
      if (!scenario.completed) {
        setExercisesCompleted(prev => prev + 1);
      }
    } else {
      setFeedback('incorrect');
    }
  };

  const nextExercise = () => {
    if (currentExercise < scenario.exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setUserAnswer('');
      setFeedback(null);
    } else if (exercisesCompleted === scenario.exercises.length) {
      onComplete();
    }
  };

  const exercise = scenario.exercises[currentExercise];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          ← {t('common.back')}
        </button>
        <div className="flex items-start gap-4">
          <div className="text-6xl">{scenario.icon}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {scenario.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{scenario.description}</p>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded">
              {scenario.level}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-300 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('dialogue')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'dialogue'
              ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          💬 {t('ersteSchritte.dialogue')}
        </button>
        <button
          onClick={() => setActiveTab('vocabulary')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'vocabulary'
              ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          📖 {t('ersteSchritte.vocabulary')}
        </button>
        <button
          onClick={() => setActiveTab('exercises')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'exercises'
              ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
          }`}
        >
          ✏️ {t('ersteSchritte.practice')}
        </button>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        {/* Dialogue Tab */}
        {activeTab === 'dialogue' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('ersteSchritte.dialogueTitle')}
              </h3>
              <button
                onClick={() => setShowTranslations(!showTranslations)}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-lg font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {showTranslations ? '🙈 ' + t('ersteSchritte.hideTranslations') : '👁️ ' + t('ersteSchritte.showTranslations')}
              </button>
            </div>

            <div className="space-y-4">
              {scenario.dialogues.map((dialogue) => (
                <div
                  key={dialogue.id}
                  className={`p-4 rounded-lg ${
                    dialogue.speaker === 'Sie'
                      ? 'bg-blue-50 dark:bg-blue-900 ml-8'
                      : 'bg-gray-50 dark:bg-gray-900 mr-8'
                  }`}
                >
                  <div className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-1">
                    {dialogue.speaker}:
                  </div>
                  <div className="text-lg text-gray-900 dark:text-white mb-1">
                    {dialogue.text}
                  </div>
                  {showTranslations && dialogue.translation && (
                    <div className="text-sm text-gray-600 dark:text-gray-400 italic">
                      → {dialogue.translation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vocabulary Tab */}
        {activeTab === 'vocabulary' && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {t('ersteSchritte.vocabularyTitle')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {scenario.vocabulary.map((vocab, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-blue-600"
                >
                  <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {vocab.german}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    {vocab.translation}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 italic">
                    "{vocab.context}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exercises Tab */}
        {activeTab === 'exercises' && (
          <div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t('ersteSchritte.practiceTitle')}
                </h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {currentExercise + 1} / {scenario.exercises.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${((currentExercise + 1) / scenario.exercises.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {exercise && (
              <div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <p className="text-lg text-gray-900 dark:text-white mb-4">
                    {exercise.question}
                  </p>

                  {exercise.hint && (
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      💡 {exercise.hint}
                    </div>
                  )}

                  {exercise.options ? (
                    <div className="space-y-2">
                      {exercise.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => setUserAnswer(option)}
                          className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                            userAnswer === option
                              ? 'border-blue-600 bg-blue-50 dark:bg-blue-900'
                              : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
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
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"
                      placeholder={t('ersteSchritte.yourAnswer')}
                    />
                  )}
                </div>

                {feedback && (
                  <div
                    className={`p-4 rounded-lg mb-4 ${
                      feedback === 'correct'
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300'
                    }`}
                  >
                    {feedback === 'correct' ? (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">✅</span>
                        <span className="font-medium">{t('grammar.correct')}</span>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">❌</span>
                          <span className="font-medium">{t('grammar.incorrect')}</span>
                        </div>
                        <div className="text-sm">
                          {t('ersteSchritte.correctAnswer')}: <strong>{exercise.correctAnswer}</strong>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex gap-4">
                  {!feedback ? (
                    <button
                      onClick={checkAnswer}
                      disabled={!userAnswer}
                      className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      {t('grammar.checkAnswer')}
                    </button>
                  ) : (
                    <button
                      onClick={nextExercise}
                      className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      {currentExercise < scenario.exercises.length - 1
                        ? t('common.next') + ' →'
                        : t('ersteSchritte.finish') + ' 🎉'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
