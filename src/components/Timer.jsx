import React, { useEffect, useState } from 'react'

const Timer = ({ seconds = 15, onExpire }) => {
  const [sec, setSec] = useState(seconds)

  useEffect(() => {
    setSec(seconds)
  }, [seconds])

  useEffect(() => {
    if (sec <= 0) {
      onExpire()
      return
    }
    const t = setInterval(() => {
      setSec((s) => s - 1)
    }, 1000)
    return () => clearInterval(t)
  }, [sec, onExpire])

  const pct = Math.max(0, (sec / seconds) * 100)

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium">Time left</div>
        <div className="text-sm font-mono">{sec}s</div>
      </div>
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${pct}%` }}
          className="h-full bg-gradient-to-r from-rose-400 via-orange-400 to-amber-300 transition-all"
        />
      </div>
    </div>
  )
}

export default Timer
