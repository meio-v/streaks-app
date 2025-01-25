import { Case } from '../types/case.enum'
import { ActivityState } from '../types/activity-state.enum'
import { MockUserActivity } from '../types/mock-user-activity.interface'

export const mockUserActivities: Record<Case, MockUserActivity[]> = {
  [Case.Success]: [
    { activities: 0, state: ActivityState.Incomplete },
    { activities: 0, state: ActivityState.Incomplete },
    { activities: 3, state: ActivityState.Saved }, // Today
    { activities: 0, state: ActivityState.AtRisk },
    { activities: 0, state: ActivityState.AtRisk },
    { activities: 2, state: ActivityState.Completed },
    { activities: 1, state: ActivityState.Completed },
  ],
  [Case.Ongoing]: [
    { activities: 0, state: ActivityState.Incomplete },
    { activities: 0, state: ActivityState.Incomplete },
    { activities: 0, state: ActivityState.AtRisk }, // Today
    { activities: 0, state: ActivityState.AtRisk },
    { activities: 2, state: ActivityState.Completed },
    { activities: 2, state: ActivityState.Completed },
    { activities: 1, state: ActivityState.Completed },
  ],
  [Case.Fail]: [
    { activities: 0, state: ActivityState.Incomplete },
    { activities: 0, state: ActivityState.Incomplete },
    { activities: 0, state: ActivityState.Incomplete }, // Today
    { activities: 0, state: ActivityState.AtRisk },
    { activities: 0, state: ActivityState.AtRisk },
    { activities: 2, state: ActivityState.Saved },
    { activities: 0, state: ActivityState.AtRisk },
  ],
}
