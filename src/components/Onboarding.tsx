import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Profession, LifeSituation, UserProfile } from '../types';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [selectedProfession, setSelectedProfession] = useState<Profession | null>(null);
  const [selectedSituations, setSelectedSituations] = useState<LifeSituation[]>([]);

  const professions: { id: Profession; icon: string }[] = [
    { id: 'handwerk', icon: '🔨' },
    { id: 'finanzen', icon: '💰' },
    { id: 'logistik', icon: '📦' },
    { id: 'pflege', icon: '👨‍⚕️' },
    { id: 'medizin', icon: '⚕️' },
    { id: 'gastronomie', icon: '🍽️' },
    { id: 'it', icon: '💻' },
    { id: 'einzelhandel', icon: '🛒' },
    { id: 'bildung', icon: '📚' },
    { id: 'technik', icon: '⚙️' }
  ];

  const lifeSituations: { id: LifeSituation; icon: string }[] = [
    { id: 'neu-in-deutschland', icon: '🇩🇪' },
    { id: 'mit-kindern', icon: '👨‍👩‍👧‍👦' },
    { id: 'jobsuche', icon: '💼' },
    { id: 'studium', icon: '🎓' },
    { id: 'ausbildung', icon: '📖' },
    { id: 'rentenalter', icon: '👴' }
  ];

  const toggleSituation = (situation: LifeSituation) => {
    setSelectedSituations(prev =>
      prev.includes(situation)
        ? prev.filter(s => s !== situation)
        : [...prev, situation]
    );
  };

  const handleComplete = () => {
    const profile: UserProfile = {
      name: name || undefined,
      profession: selectedProfession,
      lifeSituations: selectedSituations,
      onboardingCompleted: true
    };
    onComplete(profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full p-8">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('onboarding.step')} {step} / 3
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {Math.round((step / 3) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Welcome & Name */}
        {step === 1 && (
          <div className="text-center">
            <div className="text-6xl mb-6">👋</div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('onboarding.welcome')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {t('onboarding.welcomeDescription')}
            </p>
            <div className="max-w-md mx-auto">
              <label className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('onboarding.yourName')} ({t('onboarding.optional')})
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('onboarding.namePlaceholder')}
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-blue-600 focus:outline-none dark:bg-gray-900 dark:text-white text-lg"
              />
            </div>
            <button
              onClick={() => setStep(2)}
              className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              {t('common.next')} →
            </button>
          </div>
        )}

        {/* Step 2: Profession */}
        {step === 2 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {t('onboarding.chooseProfession')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t('onboarding.professionDescription')}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {professions.map((prof) => (
                <button
                  key={prof.id}
                  onClick={() => setSelectedProfession(prof.id)}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedProfession === prof.id
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900 shadow-lg scale-105'
                      : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-2">{prof.icon}</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {t(`professions.${prof.id}`)}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                ← {t('common.back')}
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!selectedProfession}
                className="px-8 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {t('common.next')} →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Life Situation */}
        {step === 3 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {t('onboarding.chooseLifeSituation')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t('onboarding.lifeSituationDescription')}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {lifeSituations.map((situation) => (
                <button
                  key={situation.id}
                  onClick={() => toggleSituation(situation.id)}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedSituations.includes(situation.id)
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900 shadow-lg'
                      : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-2">{situation.icon}</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {t(`lifeSituations.${situation.id}`)}
                  </div>
                  {selectedSituations.includes(situation.id) && (
                    <div className="text-blue-600 mt-2">✓</div>
                  )}
                </button>
              ))}
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                ← {t('common.back')}
              </button>
              <button
                onClick={handleComplete}
                disabled={selectedSituations.length === 0}
                className="px-8 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {t('onboarding.getStarted')} 🚀
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
