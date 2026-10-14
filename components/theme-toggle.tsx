'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

function documentIsDark() {
  return document.documentElement.classList.contains('dark')
}

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(documentIsDark())
  }, [])

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="relative size-11"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => {
        // next-themes leaves its theme state undefined after SSR hydration, so
        // resolvedTheme misses the dark class the blocking script already set.
        // A system-dark phone then re-applied "dark" and the tap looked dead.
        const next = documentIsDark() ? 'light' : 'dark'
        setTheme(next)
        setIsDark(next === 'dark')
      }}
    >
      <Sun className="size-4 scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
