/**
 * Product HOLDs for the marketing site.
 * Do not flip these on here — CoS / product owns the live-cutover decision.
 */
export const HOLDS = {
  /** F6.4 remains OFF — never claimed as shipped. */
  F6_4: false,
  /** Retail feature flags remain OFF — no swap/bridge-now CTAs. */
  RETAIL_FEATURE_FLAGS: false,
  /** One-tap accept is dead — no bulk-confirm control. */
  ACCEPT_ALL: false,
} as const

export const PUBLISH_HOLD = true
