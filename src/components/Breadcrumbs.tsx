interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-gray-900 dark:text-white font-medium">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <span className="text-gray-400">›</span>
          )}
        </div>
      ))}
    </nav>
  );
}
