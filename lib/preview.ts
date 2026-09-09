/** Preview-export home href. Empty on the Node/Vercel build. */
export const PREVIEW_EXPORT = process.env.NEXT_PUBLIC_PREVIEW_EXPORT === '1'

export const HOME_HREF = PREVIEW_EXPORT ? './' : '/'
