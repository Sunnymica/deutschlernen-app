# 📚 Deutsch Lernen - Multilingual Learning Platform

A comprehensive German language learning platform with support for **four languages**: German (DE), English (EN), Ukrainian (UK), and Croatian (HR).

## ✨ Features

- **🌍 Multilingual Interface**: Switch seamlessly between German, English, Ukrainian, and Croatian
- **📖 Interactive Lessons**: Structured lessons for beginner, intermediate, and advanced levels
- **🔤 Vocabulary Training**: Flashcard-based vocabulary learning with spaced repetition
- **✏️ Grammar Exercises**: Interactive grammar topics with explanations and practice exercises
- **📊 Progress Tracking**: Monitor your learning progress across all areas
- **💾 Local Storage**: Your progress is automatically saved in your browser

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd deutschlernen-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Project Structure

```
deutschlernen-app/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Home.tsx         # Home page
│   │   ├── Lessons.tsx      # Lessons page
│   │   ├── Vocabulary.tsx   # Vocabulary training
│   │   ├── Grammar.tsx      # Grammar exercises
│   │   ├── Progress.tsx     # Progress tracking
│   │   └── LanguageSwitcher.tsx  # Language selector
│   ├── data/                # Sample data
│   │   └── sampleData.ts    # Lessons, vocabulary, grammar topics
│   ├── locales/             # i18n translations
│   │   ├── de.json          # German translations
│   │   ├── en.json          # English translations
│   │   ├── uk.json          # Ukrainian translations
│   │   └── hr.json          # Croatian translations
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── i18n.ts              # i18next configuration
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles (Tailwind)
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next

## 🌐 Supported Languages

The platform interface is available in:

- 🇩🇪 **German (Deutsch)** - Native language
- 🇬🇧 **English** - International
- 🇺🇦 **Ukrainian (Українська)** - For Ukrainian speakers
- 🇭🇷 **Croatian (Hrvatski)** - For Croatian speakers

## 📚 Learning Modules

### Lessons
- Structured learning paths
- Three difficulty levels: Beginner, Intermediate, Advanced
- Progress tracking for each lesson

### Vocabulary
- Flashcard-based learning
- German words with translations and example sentences
- Mark words as mastered or needs practice
- Progress visualization

### Grammar
- Comprehensive grammar topics
- Detailed explanations with examples
- Interactive exercises:
  - Multiple choice questions
  - Fill-in-the-blank exercises
  - Translation practice

### Progress Dashboard
- Overall learning progress
- Lessons completed
- Vocabulary mastered
- Grammar topics covered

## 🎨 Customization

### Adding New Languages

1. Create a new JSON file in `src/locales/` (e.g., `fr.json`)
2. Copy the structure from an existing language file
3. Translate all keys
4. Add the language to `src/i18n.ts`:
```typescript
import translationFR from './locales/fr.json';

const resources = {
  // ... existing languages
  fr: {
    translation: translationFR
  }
};
```
5. Add the language to `src/components/LanguageSwitcher.tsx`

### Adding New Lessons/Vocabulary/Grammar

Edit `src/data/sampleData.ts` to add new content. The data structure is defined in `src/types/index.ts`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

## 👥 Author

Regina - Multilingual Learning Platform Developer

---

**Viel Erfolg beim Deutschlernen! 🎓**