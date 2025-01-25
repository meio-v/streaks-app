export interface UserActivity {
  date: string
  activities: number
  state: 'COMPLETED' | 'INCOMPLETE' | 'AT_RISK' | 'SAVED'
}
