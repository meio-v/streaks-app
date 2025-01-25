interface StreakIconProps {
  icon: string | null // Icon URL or `null`
  isActive: boolean // Whether the icon is active
}

export default function StreakIcon({ icon, isActive }: StreakIconProps) {
  const iconColor = isActive ? 'bg-indigo-500' : 'bg-gray-300'
  return (
    <div className="flex flex-col items-center">
      <div className={`h-10 w-10 rounded-full p-1 ${iconColor}`}>
        {icon ? (
          <img src={icon} alt={'streak-icon'} />
        ) : (
          <div className="h-full w-full bg-gray-200"></div>
        )}
      </div>
    </div>
  )
}
