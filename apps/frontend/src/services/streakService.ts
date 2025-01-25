export async function fetchStreakData(caseType: string) {
  const apiUrl = `http://localhost:4000/streaks/${caseType}` // Replace with your backend URL
  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch streak data: ${response.statusText}`)
    }

    return response.json() // Return the parsed JSON
  } catch (error) {
    console.error('Error fetching streak data:', error)
    throw error // Re-throw the error for higher-level handling
  }
}
