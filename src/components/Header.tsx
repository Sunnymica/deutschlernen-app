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
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="text-3xl">📚</div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('app.title')}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('app.subtitle')}
              </p>
            </div>
          </button>
          <LanguageSwitcher />
        </div>
        <nav className="mt-4">
          <ul className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
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
