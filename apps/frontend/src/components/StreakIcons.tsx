import React, { useEffect, useState } from 'react'

interface StreakIcon {
  icon: string | null
  isActive: boolean
}

interface StreakIconsProps {
  streakIcons: StreakIcon[] | null
}

export default function StreakIcons({ streakIcons }: StreakIconsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(false)
    const timeoutId = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timeoutId)
  }, [streakIcons])

  const placeholders = Array.from({ length: 7 }, (_, idx) => ({
    icon: null,
    isActive: false,
  }))

  const opacityClassName = isVisible ? 'opacity-100' : 'opacity-0'
  const iconsToRender = streakIcons || placeholders
  return (
    <div
      className={`flex gap-4 transition-opacity duration-700 ease-in-out ${opacityClassName}`}
    >
      {iconsToRender.map((iconObj, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div
            className={`h-10 w-10 rounded-full p-1 ${iconObj.isActive ? 'bg-indigo-500' : 'bg-gray-300'}`}
          >
            <img
              src={iconObj.icon ?? ''}
              alt="streak-icon"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
