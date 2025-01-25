import { Injectable } from '@nestjs/common'
import { Case } from './types/case.enum'
import { UserActivityService } from './user-activity.service'
import { UserActivity } from './types/user-activity.interface'
import { StreakInformation } from './types/streak-information.interface'
import { ActivityState } from './types/activity-state.enum'

@Injectable()
export class StreakService {
  constructor(private readonly userActivityService: UserActivityService) {}

  generateStreakInformation(caseName: Case): StreakInformation {
    const userActivities =
      this.userActivityService.fetchUserActivities(caseName)

    const total = userActivities.reduce(this.accumulateStreak, 0)
    const activitiesToday = this.findTotalActivitiesToday(userActivities)

    return { total, activitiesToday, days: userActivities }
  }

  private accumulateStreak(streak: number, userActivity: UserActivity): number {
    if (
      userActivity.state === ActivityState.Saved ||
      userActivity.state === ActivityState.Completed
    ) {
      streak++
    }

    return streak
  }

  private findTotalActivitiesToday(userActivities: UserActivity[]): number {
    const today = new Date().toISOString().split('T')[0]

    return (<UserActivity>(
      userActivities.find((activity) => activity.date === today)
    )).activities
  }
}
