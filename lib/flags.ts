import { HOLDS } from '@/content/holds'

/** Marketing-site flags. Retail / F6.4 / one-tap accept stay off. */
export const FLAGS = {
  f64: HOLDS.F6_4,
  retailFeatureFlags: HOLDS.RETAIL_FEATURE_FLAGS,
  oneTapAccept: HOLDS.ACCEPT_ALL,
  cwsLive: HOLDS.CWS_LIVE,
} as const

export function isRetailCtaAllowed(): false {
  return FLAGS.retailFeatureFlags
}

export function isF64Live(): false {
  return FLAGS.f64
}

export function isOneTapAcceptEnabled(): false {
  return FLAGS.oneTapAccept
}

export function isCwsLive(): false {
  return FLAGS.cwsLive
}
