import Sections from '@/components/Sections'
import { LocaleProvider } from '@/components/LocaleProvider'

export default function Home() {
  return (
    <LocaleProvider locale="en">
      <Sections />
    </LocaleProvider>
  )
}
