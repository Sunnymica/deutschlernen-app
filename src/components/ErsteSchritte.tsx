import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Scenario } from '../types';
import ScenarioDetail from './ScenarioDetail';

interface ErsteSchritteProps {
  scenarios: Scenario[];
  onUpdateScenario: (scenarioId: string, completed: boolean) => void;
}

export default function ErsteSchritte({ scenarios, onUpdateScenario }: ErsteSchritteProps) {
  const { t } = useTranslation();
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  if (selectedScenario) {
    return (
      <ScenarioDetail
        scenario={selectedScenario}
        onBack={() => setSelectedScenario(null)}
        onComplete={() => {
          onUpdateScenario(selectedScenario.id, true);
          setSelectedScenario(null);
        }}
      />
    );
  }

  const completedCount = scenarios.filter(s => s.completed).length;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {t('ersteSchritte.title')}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {t('ersteSchritte.description')}
        </p>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-green-600 h-3 rounded-full transition-all"
              style={{ width: `${(completedCount / scenarios.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {completedCount} / {scenarios.length}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setSelectedScenario(scenario)}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-blue-500 relative group"
          >
            {scenario.completed && (
              <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">✓</span>
              </div>
            )}

            <div className="text-5xl mb-4">{scenario.icon}</div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {scenario.title}
            </h3>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded">
                {scenario.level}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {scenario.dialogues.length} {t('ersteSchritte.dialogues')}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {scenario.description}
            </p>

            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
              <span>📖 {scenario.vocabulary.length} {t('ersteSchritte.words')}</span>
              <span>✏️ {scenario.exercises.length} {t('ersteSchritte.exercises')}</span>
            </div>

            <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              {scenario.completed ? t('ersteSchritte.review') : t('ersteSchritte.start')}
              <span>→</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          💡 {t('ersteSchritte.tips.title')}
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• {t('ersteSchritte.tips.tip1')}</li>
          <li>• {t('ersteSchritte.tips.tip2')}</li>
          <li>• {t('ersteSchritte.tips.tip3')}</li>
        </ul>
      </div>
    </div>
  );
}
