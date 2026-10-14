'use client'

import { useEffect } from 'react'
import {
  inAppHelpDestination,
  type InAppHelpSlug,
  type InAppHelpTarget,
} from '@/content-help/in-app-anchors'

/**
 * Client redirect: works on the Node build and the static Pages export.
 * The anchor map is resolved on the server. The hash is only available here.
 */
export function HelpHashRedirect({
  anchors,
}: {
  anchors: Readonly<Partial<Record<InAppHelpSlug, InAppHelpTarget>>>
}) {
  useEffect(() => {
    const destination = inAppHelpDestination(window.location.hash, undefined, anchors)
    if (!destination) return
    window.location.replace(destination)
  }, [anchors])

  return null
}
