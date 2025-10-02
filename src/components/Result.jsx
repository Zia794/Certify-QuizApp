import React from 'react'

const Result = ({ score, total, onRestart }) => {
  const percent = Math.round((score / total) * 100)

  return (
    <div className="p-8 text-center">
      <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-white border border-emerald-100 shadow-md">
        <h2 className="text-2xl font-bold mb-2">Quiz Completed</h2>
        <p className="text-slate-600 mb-4">
          You scored <span className="font-semibold text-slate-800">{score}</span> out of{' '}
          <span className="font-semibold">{total}</span>
        </p>

        <div className="w-40 h-40 mx-auto mb-4 grid place-items-center rounded-full bg-white shadow-inner border border-slate-100">
          <div className="text-3xl font-extrabold">{percent}%</div>
        </div>

        <button
          onClick={onRestart}
          className="px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:shadow-lg transition"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  )
}

export default Result
