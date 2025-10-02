import React from 'react'
import Quiz from './components/Quiz'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <header className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">Quiz App</h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Responsive React + Tailwind quiz with timer and randomizer
          </p>
        </header>

        <main>
          <Quiz />
        </main>

        <footer className="mt-8 text-center text-xs text-slate-500">
          Built with React & Tailwind — responsive and modern UI
        </footer>
      </div>
    </div>
  )
}

export default App
