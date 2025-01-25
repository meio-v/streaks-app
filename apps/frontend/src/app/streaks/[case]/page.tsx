'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import CaseSelector from '../../../components/CaseSelector'
import { mapActivitiesToWeekdays } from '@/utils/streak-utils'
import { UserActivity } from '@/types/user-activity.interface'
import { fetchStreakData } from '@/services/streakService'

export default function CasePage({
  params,
}: {
  params: Promise<{ case: string }>
}) {
  const router = useRouter()
  const [caseType, setCaseType] = useState<string | null>(null)
  const [totalStreak, setTotalStreak] = useState(0)
  const [rawActivities, setRawActivities] = useState<UserActivity[] | null>(
    null,
  )
  const [loading, setLoading] = useState(false)


  const fetchAndSetData = async (caseType: string) => {
    setLoading(true) // Show loading spinner
    try {
      const response = await fetchStreakData(caseType)
      setTotalStreak(response.total)
      setRawActivities(response.days)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    setLoading(false)
  }

  const handleCaseChange = async (newCase: string) => {
    await fetchAndSetData(newCase)
    router.push(`/streaks/${newCase}`)
  }


  useEffect(() => {
    params.then((resolvedParams) => {
      const resolvedCaseType = resolvedParams.case

      if (!resolvedCaseType) {
        router.push('/streaks/1')
        return
      }

      setCaseType(resolvedCaseType)
      fetchAndSetData(resolvedCaseType)
    })
  }, [params])


  const streakIcons = rawActivities
    ? mapActivitiesToWeekdays(rawActivities)
    : null

  if (!caseType) {
    return <p>Loading...</p>
  }

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white min-h-screen relative">
      <Header />
      <div className="absolute inset-0 top-[4rem] flex flex-col justify-center items-center">
        <Hero
          streakIcons={streakIcons}
          totalStreak={totalStreak}
          isLoading={loading}
        />
        <CaseSelector currentCase={caseType} onSelect={handleCaseChange} />
      </div>
    </div>
  )
}
