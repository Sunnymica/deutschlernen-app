import { useTranslation } from 'react-i18next';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🎯',
      title: t('home.features.interactive'),
      description: 'Engage with dynamic content'
    },
    {
      icon: '📖',
      title: t('home.features.vocabulary'),
      description: 'Build your German vocabulary'
    },
    {
      icon: '✏️',
      title: t('home.features.grammar'),
      description: 'Master German grammar'
    },
    {
      icon: '📊',
      title: t('home.features.progress'),
      description: 'Track your learning journey'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('home.welcome')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          {t('home.description')}
        </p>
        <button
          onClick={() => onNavigate('lessons')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          {t('home.getStarted')}
        </button>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {t('home.features.title')}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
