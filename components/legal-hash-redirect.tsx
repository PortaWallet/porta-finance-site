'use client'

import { useEffect } from 'react'
import { POLICY_ID, POLICY_PATH, TERMS_ID, TERMS_PATH } from '@/content/legal'

/** Legacy OAuth hashes → canonical legal deep links. */
const HASH_TO_PATH: Record<string, string> = {
  [POLICY_ID]: POLICY_PATH,
  [TERMS_ID]: TERMS_PATH,
}

export function LegalHashRedirect() {
  useEffect(() => {
    const raw = window.location.hash.replace(/^#/, '')
    if (!raw) return
    const path = HASH_TO_PATH[raw]
    if (!path) return
    window.location.replace(path)
  }, [])

  return null
}
