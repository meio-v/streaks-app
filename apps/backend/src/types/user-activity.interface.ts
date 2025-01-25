import { ActivityState } from './activity-state.enum'

export interface UserActivity {
  date: string
  activities: number
  state: ActivityState
}
