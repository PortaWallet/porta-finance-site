'use client'

import { useEffect } from 'react'
import { inAppHelpDestination } from '@/content-help/in-app-anchors'

/** Client redirect: works on the Node build and the static Pages export. */
export function HelpHashRedirect() {
  useEffect(() => {
    const destination = inAppHelpDestination(window.location.hash)
    if (!destination) return
    window.location.replace(destination)
  }, [])

  return null
}
