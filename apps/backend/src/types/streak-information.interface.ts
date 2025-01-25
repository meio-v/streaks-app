import { UserActivity } from './user-activity.interface'

export interface StreakInformation {
  total: number
  activitiesToday: number
  days: UserActivity[]
}
