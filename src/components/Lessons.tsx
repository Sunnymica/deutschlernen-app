import { useTranslation } from 'react-i18next';
import { Lesson } from '../types';

interface LessonsProps {
  lessons: Lesson[];
  onStartLesson: (lessonId: string) => void;
}

export default function Lessons({ lessons, onStartLesson }: LessonsProps) {
  const { t } = useTranslation();

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t('lessons.title')}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {t('lessons.selectLesson')}
      </p>

      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {lesson.description}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(lesson.level)}`}>
                  {t(`lessons.${lesson.level}`)}
                </span>
              </div>
              <div className="ml-4">
                {lesson.completed ? (
                  <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
                    ✓ {t('lessons.completed')}
                  </span>
                ) : (
                  <button
                    onClick={() => onStartLesson(lesson.id)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    {lesson.progress > 0 ? t('lessons.continue') : t('lessons.start')}
                  </button>
                )}
              </div>
            </div>
            {lesson.progress > 0 && !lesson.completed && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${lesson.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {lesson.progress}% {t('lessons.completed').toLowerCase()}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
