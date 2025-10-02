import React, { useState } from 'react'

const QuestionCard = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState(null)

  const choose = (opt) => {
    setSelected(opt)
    setTimeout(() => {
      onAnswer(opt)
      setSelected(null)
    }, 400)
  }

  return (
    <div className="p-6 bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-sm border border-slate-100">
      <h2 className="text-lg md:text-xl font-semibold mb-4">{question.q}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options.map((opt, idx) => {
          const isSelected = selected === opt
          return (
            <button
              key={idx}
              onClick={() => choose(opt)}
              className={`text-left p-3 rounded-lg border flex items-center gap-3 transition ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="w-6 h-6 flex items-center justify-center rounded-full font-semibold text-sm bg-slate-100">
                {String.fromCharCode(65 + idx)}
              </div>
              <div className="text-sm text-slate-800">{opt}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionCard
