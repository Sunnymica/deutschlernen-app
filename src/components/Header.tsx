import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const { t } = useTranslation();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'ersteSchritte', label: t('nav.ersteSchritte') },
    { id: 'lessons', label: t('nav.lessons') },
    { id: 'vocabulary', label: t('nav.vocabulary') },
    { id: 'grammar', label: t('nav.grammar') },
    { id: 'progress', label: t('nav.progress') }
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-soft border-b border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-4xl">📚</div>
            <div className="text-left">
              <h1 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                {t('app.title')}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {t('app.subtitle')}
              </p>
            </div>
          </button>
          <LanguageSwitcher />
        </div>
        <nav className="mt-5">
          <ul className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 min-h-[44px] ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-medium hover:shadow-large'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 shadow-soft'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
