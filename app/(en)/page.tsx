import { en } from '@/lib/content/en'
import Sections from '@/components/Sections'
import { LocaleProvider } from '@/components/LocaleProvider'

export default function Home() {
  return (
    <LocaleProvider locale="en" c={en}>
      <Sections />
    </LocaleProvider>
  )
}
