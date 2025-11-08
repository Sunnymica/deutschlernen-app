import { useTranslation } from 'react-i18next';
import { Progress as ProgressType } from '../types';

interface ProgressProps {
  progress: ProgressType;
}

export default function Progress({ progress }: ProgressProps) {
  const { t } = useTranslation();

  const overallProgress = Math.round(
    ((progress.lessonsCompleted / progress.totalLessons +
      progress.vocabularyMastered / progress.totalVocabulary +
      progress.grammarTopicsCompleted / progress.totalGrammarTopics) /
      3) *
      100
  );

  const ProgressBar = ({ value, total, label, color }: { value: number; total: number; label: string; color: string }) => {
    const percentage = Math.round((value / total) * 100);
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-900 dark:text-white font-medium">{label}</span>
          <span className="text-gray-600 dark:text-gray-400">
            {value} / {total}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
          <div
            className={`h-4 rounded-full transition-all ${color}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">
          {percentage}%
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t('progress.title')}
      </h2>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
            <span className="text-4xl font-bold text-white">{overallProgress}%</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {t('progress.overallProgress')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{t('progress.keepGoing')}</p>
        </div>

        <div className="space-y-6">
          <ProgressBar
            value={progress.lessonsCompleted}
            total={progress.totalLessons}
            label={t('progress.lessonsCompleted')}
            color="bg-blue-600"
          />
          <ProgressBar
            value={progress.vocabularyMastered}
            total={progress.totalVocabulary}
            label={t('progress.vocabularyMastered')}
            color="bg-green-600"
          />
          <ProgressBar
            value={progress.grammarTopicsCompleted}
            total={progress.totalGrammarTopics}
            label={t('progress.grammarTopics')}
            color="bg-purple-600"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-2">📚</div>
          <div className="text-3xl font-bold text-blue-600 mb-1">
            {progress.lessonsCompleted}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t('nav.lessons')}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-2">📖</div>
          <div className="text-3xl font-bold text-green-600 mb-1">
            {progress.vocabularyMastered}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t('nav.vocabulary')}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <div className="text-4xl mb-2">✏️</div>
          <div className="text-3xl font-bold text-purple-600 mb-1">
            {progress.grammarTopicsCompleted}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t('nav.grammar')}
          </div>
        </div>
      </div>
    </div>
  );
}
