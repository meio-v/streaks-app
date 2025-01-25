import { UserActivity } from '../types/user-activity.interface'

export function mapActivitiesToWeekdays(
  userActivities: UserActivity[],
): { icon: string; isActive: boolean }[] {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const sortedActivities = userActivities.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  )

  return daysOfWeek.map((day, idx) => {
    const activity = sortedActivities[idx]
    if (!activity) {
      return {
        icon: '/icons/incomplete.svg',
        isActive: false,
      }
    }

    const icon =
      activity.state === 'COMPLETED' || activity.state === 'SAVED'
        ? '/icons/check.svg'
        : activity.state === 'AT_RISK'
          ? '/icons/at-risk.svg'
          : '/icons/incomplete.svg'

    return {
      icon,
      isActive: activity.state === 'COMPLETED' || activity.state === 'SAVED',
    }
  })
}
