import React, { useState, useEffect } from 'react'
import StreakIcons from './StreakIcons'

interface HeroProps {
  streakIcons: { icon: string | null; isActive: boolean }[] | null
  totalStreak: number
}

export default function Hero({ streakIcons, totalStreak }: HeroProps) {
  const [isStreakVisible, setIsStreakVisible] = useState(false)

  useEffect(() => {
    setIsStreakVisible(false)
    const timeoutId = setTimeout(() => setIsStreakVisible(true), 500)
    return () => clearTimeout(timeoutId)
  }, [totalStreak])

  // Define the weekday labels
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="text-center mt-16 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Your streak is{' '}
        <span
          className={`transition-opacity duration-500 ${
            isStreakVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {totalStreak}
        </span>{' '}
        days
      </h1>
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-4">
        {/* Streak icons */}
        <StreakIcons streakIcons={streakIcons} />
        {/* Weekday labels */}
        <div className="flex justify-center gap-4 text-sm font-medium text-indigo-500 mb-2">
          {weekdays.map((day, idx) => (
            <span key={idx} className="w-10 text-center">
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
