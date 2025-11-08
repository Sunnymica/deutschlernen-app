import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Scenario } from '../types';
import Breadcrumbs from './Breadcrumbs';
import VocabFlipCard from './VocabFlipCard';

interface ScenarioDetailProps {
  scenario: Scenario;
  onBack: () => void;
  onComplete: () => void;
}

export default function ScenarioDetail({ scenario, onBack, onComplete }: ScenarioDetailProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'dialogue' | 'vocabulary' | 'exercises' | 'roleplay' | 'checklist'>('dialogue');
  const [showTranslations, setShowTranslations] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [rolePlayAnswers, setRolePlayAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [exercisesCompleted, setExercisesCompleted] = useState(0);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const checkAnswer = () => {
    const exercise = scenario.exercises[currentExercise];

    if (exercise.type === 'fill-in-blank') {
      const correctAnswers = exercise.correctAnswer.split(', ').map(a => a.toLowerCase().trim());
      const userAnswersList = userAnswers.map(a => a.toLowerCase().trim());
      const isCorrect = correctAnswers.every((ans, idx) => ans === userAnswersList[idx]);

      setFeedback(isCorrect ? 'correct' : 'incorrect');
      if (isCorrect && !scenario.completed) {
        setExercisesCompleted(prev => prev + 1);
      }
    } else {
      if (userAnswer.trim().toLowerCase() === exercise.correctAnswer.toLowerCase()) {
        setFeedback('correct');
        if (!scenario.completed) {
          setExercisesCompleted(prev => prev + 1);
        }
      } else {
        setFeedback('incorrect');
      }
    }
  };

  const nextExercise = () => {
    if (currentExercise < scenario.exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setUserAnswer('');
      setUserAnswers([]);
      setFeedback(null);
    } else if (exercisesCompleted === scenario.exercises.length) {
      onComplete();
    }
  };

  const toggleChecklistItem = (id: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleFillInBlankChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const exercise = scenario.exercises[currentExercise];

  // Group checklist items by category
  const checklistByCategory = scenario.checklist?.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof scenario.checklist>);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: t('nav.home'), onClick: onBack },
          { label: t('ersteSchritte.title'), onClick: onBack },
          { label: scenario.title }
        ]}
      />

      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-soft hover:shadow-medium hover:scale-105 mb-4 min-h-[44px]"
        >
          ← Zurück zur Übersicht
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

      {/* Cultural Tips (if available) */}
      {scenario.culturalTips && scenario.culturalTips.length > 0 && (
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900 dark:to-yellow-900 border-2 border-amber-300 dark:border-amber-600 rounded-xl p-6 mb-6 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            <span>Kulturelle Tipps</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {scenario.culturalTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-amber-500 hover:border-amber-600"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{tip.icon}</span>
                  <span className="font-bold text-gray-900 dark:text-white text-base">
                    {tip.title}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed ml-12">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveTab('dialogue')}
          className={`px-6 py-3 font-bold transition-all duration-300 whitespace-nowrap rounded-xl min-h-[44px] ${
            activeTab === 'dialogue'
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-medium scale-105'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-soft hover:scale-105'
          }`}
        >
          💬 {t('ersteSchritte.dialogue')}
        </button>
        <button
          onClick={() => setActiveTab('vocabulary')}
          className={`px-6 py-3 font-bold transition-all duration-300 whitespace-nowrap rounded-xl min-h-[44px] ${
            activeTab === 'vocabulary'
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-medium scale-105'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-soft hover:scale-105'
          }`}
        >
          📖 {t('ersteSchritte.vocabulary')}
        </button>
        <button
          onClick={() => setActiveTab('exercises')}
          className={`px-6 py-3 font-bold transition-all duration-300 whitespace-nowrap rounded-xl min-h-[44px] ${
            activeTab === 'exercises'
              ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-medium scale-105'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-soft hover:scale-105'
          }`}
        >
          ✏️ {t('ersteSchritte.practice')}
        </button>
        {scenario.rolePlay && scenario.rolePlay.length > 0 && (
          <button
            onClick={() => setActiveTab('roleplay')}
            className={`px-6 py-3 font-bold transition-all duration-300 whitespace-nowrap rounded-xl min-h-[44px] ${
              activeTab === 'roleplay'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-medium scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-soft hover:scale-105'
            }`}
          >
            🎭 Rollenspiel
          </button>
        )}
        {scenario.checklist && scenario.checklist.length > 0 && (
          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-6 py-3 font-bold transition-all duration-300 whitespace-nowrap rounded-xl min-h-[44px] ${
              activeTab === 'checklist'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-medium scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-soft hover:scale-105'
            }`}
          >
            ✅ Checkliste
          </button>
        )}
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

            <div className="space-y-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
              {scenario.dialogues.map((dialogue, idx) => {
                // Determine if this is the user or another person
                const isUser = dialogue.speaker === 'Maria' || dialogue.speaker === 'Sie' ||
                               dialogue.speaker === 'Andriy' || dialogue.speaker === 'Olena';

                // Get emoji for speaker
                let speakerEmoji = '🏛️';
                if (dialogue.speaker.includes('Sachbearbeiter') || dialogue.speaker.includes('Mitarbeiter')) {
                  speakerEmoji = scenario.id === 'jobcenter' ? '🏢' : scenario.id === 'sprachschule' ? '🏫' : '🏛️';
                }

                return (
                  <div
                    key={dialogue.id}
                    className={`flex gap-3 animate-scale-in ${isUser ? 'justify-end' : 'justify-start'}`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Avatar for non-user */}
                    {!isUser && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-xl shadow-soft">
                        {speakerEmoji}
                      </div>
                    )}

                    <div className={`max-w-[75%] md:max-w-[65%]`}>
                      <div className={`flex items-center gap-2 mb-1 ${isUser ? 'justify-end' : 'justify-start'}`}>
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                          {dialogue.speaker}
                        </span>
                      </div>
                      <div
                        className={`px-5 py-4 rounded-3xl shadow-soft transition-all duration-300 hover:shadow-medium ${
                          isUser
                            ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-br-sm'
                            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-tl-sm'
                        }`}
                      >
                        <div className="text-base leading-relaxed">
                          {dialogue.text}
                        </div>
                        {showTranslations && dialogue.translation && (
                          <div className={`text-sm mt-3 pt-3 border-t ${
                            isUser
                              ? 'border-primary-400 text-primary-50'
                              : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'
                          } italic`}>
                            💬 {dialogue.translation}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Avatar for user */}
                    {isUser && (
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-xl shadow-soft">
                        👤
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Vocabulary Tab */}
        {activeTab === 'vocabulary' && (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                {t('ersteSchritte.vocabularyTitle')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                🔄 Klicke auf eine Karte, um sie umzudrehen und die Übersetzungen zu sehen
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scenario.vocabulary.map((vocab, index) => (
                <VocabFlipCard key={index} vocab={vocab} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Exercises Tab */}
        {activeTab === 'exercises' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  {t('ersteSchritte.practiceTitle')}
                </h3>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-xl font-bold text-sm">
                  {currentExercise + 1} / {scenario.exercises.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-success-500 to-primary-500 h-3 rounded-full transition-all duration-500 shadow-soft"
                  style={{ width: `${((currentExercise + 1) / scenario.exercises.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {exercise && (
              <div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
                  <div className="mb-2 text-xs font-semibold text-gray-500 uppercase">
                    {exercise.type === 'fill-in-blank' && '📝 Lückentext'}
                    {exercise.type === 'multiple-choice' && '☑️ Multiple Choice'}
                    {exercise.type === 'dialogue-completion' && '💬 Dialog vervollständigen'}
                    {exercise.type === 'vocabulary-match' && '📖 Vokabel zuordnen'}
                    {exercise.type === 'situation-response' && '🗣️ Situationsantwort'}
                  </div>
                  <p className="text-lg text-gray-900 dark:text-white mb-4">
                    {exercise.question}
                  </p>

                  {exercise.hint && (
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 bg-blue-50 dark:bg-blue-900 p-2 rounded">
                      💡 {exercise.hint}
                    </div>
                  )}

                  {/* Fill-in-blank Exercise */}
                  {exercise.type === 'fill-in-blank' && exercise.blanks && (
                    <div className="space-y-4">
                      {exercise.blanks.map((blank, index) => (
                        <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm">
                              {index + 1}
                            </span>
                            {blank}
                          </label>
                          <input
                            type="text"
                            value={userAnswers[index] || ''}
                            onChange={(e) => handleFillInBlankChange(index, e.target.value)}
                            className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl dark:bg-gray-800 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-800 transition-all duration-300 text-lg shadow-soft min-h-[44px]"
                            placeholder="Deine Antwort..."
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Multiple Choice / Other Options */}
                  {exercise.options && exercise.type !== 'fill-in-blank' && (
                    <div className="space-y-3">
                      {exercise.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => setUserAnswer(option)}
                          className={`w-full text-left px-6 py-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-102 shadow-soft hover:shadow-medium font-medium text-base min-h-[44px] ${
                            userAnswer === option
                              ? 'border-primary-500 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 text-primary-900 dark:text-primary-100 scale-102'
                              : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:border-primary-400'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              userAnswer === option
                                ? 'border-primary-500 bg-primary-500'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}>
                              {userAnswer === option && <span className="text-white text-sm">✓</span>}
                            </span>
                            <span>{option}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Fill-in without blanks array (legacy) */}
                  {!exercise.options && exercise.type !== 'fill-in-blank' && (
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
                    className={`p-6 rounded-2xl mb-6 shadow-medium ${
                      feedback === 'correct'
                        ? 'bg-gradient-to-r from-success-50 to-success-100 dark:from-success-900 dark:to-success-800 border-2 border-success-300 dark:border-success-600 animate-pulse-success'
                        : 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 border-2 border-red-300 dark:border-red-600 animate-shake'
                    }`}
                  >
                    {feedback === 'correct' ? (
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">✅</span>
                        <div>
                          <span className="font-bold text-lg text-success-800 dark:text-success-200">
                            {t('grammar.correct')}
                          </span>
                          <p className="text-sm text-success-700 dark:text-success-300 mt-1">
                            Fantastisch! Weiter so! 🎉
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-4xl">❌</span>
                          <span className="font-bold text-lg text-red-800 dark:text-red-200">
                            {t('grammar.incorrect')}
                          </span>
                        </div>
                        <div className="text-sm bg-white dark:bg-red-950 p-3 rounded-xl">
                          {t('ersteSchritte.correctAnswer')}: <strong className="text-red-700 dark:text-red-300">{exercise.correctAnswer}</strong>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex gap-4">
                  {!feedback ? (
                    <button
                      onClick={checkAnswer}
                      disabled={
                        exercise.type === 'fill-in-blank'
                          ? userAnswers.length === 0
                          : !userAnswer
                      }
                      className="flex-1 py-4 px-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-bold text-lg shadow-medium hover:shadow-large hover:scale-105 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 min-h-[44px]"
                    >
                      {t('grammar.checkAnswer')} ✨
                    </button>
                  ) : (
                    <button
                      onClick={nextExercise}
                      className="flex-1 py-4 px-6 bg-gradient-to-r from-success-500 to-success-600 text-white rounded-xl font-bold text-lg shadow-medium hover:shadow-large hover:scale-105 transition-all duration-300 min-h-[44px]"
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

        {/* Role-play Tab */}
        {activeTab === 'roleplay' && scenario.rolePlay && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              🎭 Rollenspiel-Übung
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Du bist bei der {scenario.title}. Antworte auf die Fragen:
            </p>
            <div className="space-y-6">
              {scenario.rolePlay.map((question) => (
                <div key={question.id} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="mb-3">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      🏢 Sachbearbeiter:
                    </span>
                    <p className="text-gray-900 dark:text-white ml-6 mt-1">{question.prompt}</p>
                  </div>
                  <div className="ml-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      ➡️ Deine Antwort:
                    </label>
                    <input
                      type="text"
                      value={rolePlayAnswers[question.id] || ''}
                      onChange={(e) =>
                        setRolePlayAnswers({ ...rolePlayAnswers, [question.id]: e.target.value })
                      }
                      placeholder={question.expectedAnswer || 'Schreibe deine Antwort...'}
                      className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"
                    />
                    {question.expectedAnswer && (
                      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                        Beispiel: {question.expectedAnswer}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Checklist Tab */}
        {activeTab === 'checklist' && scenario.checklist && checklistByCategory && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                ✅ Checkliste zum Ausdrucken
              </h3>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-success-500 to-success-600 hover:from-success-600 hover:to-success-700 text-white rounded-xl font-bold shadow-medium hover:shadow-large hover:scale-105 transition-all duration-300 min-h-[44px]"
              >
                🖨️ Drucken
              </button>
            </div>
            <div className="space-y-6">
              {Object.entries(checklistByCategory).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                    {category}:
                  </h4>
                  <div className="space-y-2">
                    {items?.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={checkedItems.has(item.id)}
                          onChange={() => toggleChecklistItem(item.id)}
                          className="mt-1 w-5 h-5 text-blue-600 rounded"
                        />
                        <span className={`flex-1 ${checkedItems.has(item.id) ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                          {item.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                💡 Tipp: Diese Checkliste kannst du ausdrucken und abhaken!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
