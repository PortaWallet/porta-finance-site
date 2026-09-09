/** In-repo brand pack. Fail loudly if any path is missing — do not ship broken imgs. */
export const BRAND = {
  portalHero: '/brand/portal-hero.webp',
  ring: '/brand/multichain-ring.svg',
  mesh: '/brand/mesh.svg',
  logo: '/logo.png',
  portalMark: '/portal-mark.png',
} as const

export const BRAND_ASSET_PATHS = [
  'public/brand/portal-hero.webp',
  'public/brand/multichain-ring.svg',
  'public/brand/mesh.svg',
  'public/logo.png',
  'public/portal-mark.png',
] as const
