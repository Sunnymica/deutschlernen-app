import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import ErsteSchritte from './components/ErsteSchritte'
import ScenarioDetail from './components/ScenarioDetail'
import Vocabulary from './components/Vocabulary'
import Grammar from './components/Grammar'
import { ersteSchritteScenarios } from './data/ersteSchritteScenarios'

type Language = 'de' | 'en' | 'uk' | 'hr'

const translations = {
  de: {
    title: 'Deutsch Lernen',
    subtitle: 'Mehrsprachige Lernplattform',
    selectLanguage: 'Waehle deine Sprache:',
    start: 'Los gehts!',
    back: 'Zurueck'
  },
  en: {
    title: 'Learn German',
    subtitle: 'Multilingual Learning Platform',
    selectLanguage: 'Choose your language:',
    start: 'Lets go!',
    back: 'Back'
  },
  uk: {
    title: 'Вивчай німецьку',
    subtitle: 'Багатомовна навчальна платформа',
    selectLanguage: 'Оберіть мову:',
    start: 'Розпочати!',
    back: 'Назад'
  },
  hr: {
    title: 'Ucite njemacki',
    subtitle: 'Visejezicna platforma za ucenje',
    selectLanguage: 'Odaberite jezik:',
    start: 'Idemo!',
    back: 'Natrag'
  }
}

function LanguageSelector({ onSelect }: { onSelect: (lang: Language) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-indigo-600 mb-2">Deutsch Lernen</h1>
        <p className="text-gray-600 mb-8">Mehrsprachige Lernplattform</p>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Waehle deine Sprache:
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(['de', 'en', 'uk', 'hr'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onSelect(lang)}
                className="p-3 rounded-lg border-2 transition-all hover:border-indigo-300 hover:bg-indigo-50"
              >
                {lang === 'de' && 'Deutsch'}
                {lang === 'en' && 'English'}
                {lang === 'uk' && 'Українська'}
