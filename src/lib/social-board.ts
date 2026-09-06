/** Marketing can append posts later — empty now, no invented metrics. */
export type SocialPlatform = 'linkedin' | 'telegram' | 'youtube'

export type SocialPost = {
  id: string
  platform: SocialPlatform
  title: string
  url: string
  publishedAt: string
}

export type SocialBoardContent = {
  version: number
  posts: SocialPost[]
}

/** In-repo SoT. Mirror: public/content/social-board.json */
export const SOCIAL_BOARD: SocialBoardContent = {
  version: 1,
  posts: [],
}
