import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/streaks/1')
}
