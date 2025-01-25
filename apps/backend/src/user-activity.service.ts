import { Injectable } from '@nestjs/common'
import { Case } from './types/case.enum'
import { mockUserActivities } from './data/mock-user-activities'
import { UserActivity } from './types/user-activity.interface'
import { MockUserActivity } from './types/mock-user-activity.interface'

@Injectable()
export class UserActivityService {
  fetchUserActivities(caseType: Case): UserActivity[] {
    const mockUserActivities = this.generateMockUserActivities(caseType)
    const sevenDayRange = this.generateSevenDayWindow()

    return mockUserActivities.map((activity, idx) => {
      return {
        ...activity,
        date: sevenDayRange[idx],
      }
    })
  }

  private generateMockUserActivities(caseType: Case): MockUserActivity[] {
    return mockUserActivities[caseType]
  }

  private generateSevenDayWindow(): string[] {
    const days: string[] = []
    const today = new Date()

    for (let i = -2; i <= 4; i++) {
      const day = new Date(today)
      day.setDate(today.getDate() + i)
      days.push(day.toISOString().split('T')[0])
    }

    return days.reverse()
  }
}
