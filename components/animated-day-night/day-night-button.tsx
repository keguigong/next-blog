import { useEffect, useState } from "react"
import { checkDarkMode, clearMode, setMode, watchDarkMode } from "@/utils/day-night"
import DayNight from "./day-night"

export default function DayNightButton() {
  const [isDarkMode, setDarkMode] = useState(() => checkDarkMode())

  const handleModeChange = (darkMode: boolean) => {
    setMode(darkMode)
    setDarkMode(darkMode)
  }

  useEffect(() => {
    setMode(isDarkMode)
    let removeListener = watchDarkMode((darkMode) => {
      setDarkMode(darkMode)
      clearMode()
    })

    return () => {
      removeListener()
    }
  }, [isDarkMode])

  return <DayNight darkMode={isDarkMode} onModeChange={handleModeChange} />
}