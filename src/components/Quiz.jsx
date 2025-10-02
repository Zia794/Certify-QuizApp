import React, { useEffect, useMemo, useState } from 'react'
import QuestionCard from './QuestionCard'
import Result from './Result'
import Timer from './Timer'

const QUESTIONS = [
  {
    id: 1,
    q: 'Which language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    answer: 'JavaScript'
  },
  {
    id: 2,
    q: 'What does CSS stand for?',
    options: ['Central Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Computer Style Sheets'],
    answer: 'Cascading Style Sheets'
  },
  {
    id: 3,
    q: 'Which company developed React?',
    options: ['Google', 'Facebook', 'Microsoft', 'Twitter'],
    answer: 'Facebook'
  },
   {
    id: 4,
    q: 'What is the current version of React?',
    options: ['18', '16', '19', '17'],
    answer: '19'
  },
  {
    id: 5,
    q: 'What is the current version of HTML?',
    options: ['4', '5', '3', '6'],
    answer: '5'
  },
  {
    id: 6,
    q: 'What is the current version of CSS?',
    options: ['2', '4', '1', '3'],
    answer: '3'
  },
  {
    id: 7,
    q: 'DOM stand for?',
    options: ['Document Object Model', 'Direct Object Mapping', 'Dynamic Output Matrix', 'Data Object Management'],
    answer: 'Document Object Model'
  },
   {
    id: 8,
    q: 'Which keyword is used to declare a constant variable in JavaScript?',
    options: ['var', 'const', 'let', 'static'],
    answer: 'const'
  },
   {
    id: 9,
    q: 'In CSS, which symbol is used to select a class?',
    options: ['classname', '.classname', '#classname', '@classname'],
    answer: '.classname'
  },
   {
    id: 10,
    q: 'Which data type is NOT primitive in JavaScript?',
    options: ['Number', 'Boolean', 'String', 'Object'],
    answer: 'Object'
  }
]

const Quiz = () => {
  const [shuffled, setShuffled] = useState([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [secondsPerQ, setSecondsPerQ] = useState(15)

  const prepared = useMemo(() => {
    const arr = [...QUESTIONS]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [])

  useEffect(() => {
    setShuffled(prepared)
  }, [prepared])

  const handleAnswer = (selected) => {
    const current = shuffled[index]
    if (selected === current.answer) setScore((prev) => prev + 1)
    if (index + 1 < shuffled.length) {
      setIndex((i) => i + 1)
    } else {
      setFinished(true)
    }
  }

  const handleTimeOut = () => {
    if (index + 1 < shuffled.length) setIndex((i) => i + 1)
    else setFinished(true)
  }

  const restart = () => {
    setIndex(0)
    setScore(0)
    setFinished(false)
    setShuffled(prepared)
  }

  if (!shuffled.length) return null

  return (
    <section className="bg-white/80 p-6 rounded-2xl shadow-lg border border-slate-100">
      {!finished ? (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="px-3 py-1 rounded-lg bg-indigo-500 text-white font-semibold">
              Question {index + 1} / {shuffled.length}
            </div>
            <div className="text-sm text-slate-600">
              Score: <span className="font-medium text-slate-800">{score}</span>
            </div>
          </div>

          <QuestionCard question={shuffled[index]} onAnswer={handleAnswer} />
          <div className="mt-4">
            <Timer key={index} seconds={secondsPerQ} onExpire={handleTimeOut} />
          </div>
        </div>
      ) : (
        <Result score={score} total={shuffled.length} onRestart={restart} />
      )}
    </section>
  )
}

export default Quiz
