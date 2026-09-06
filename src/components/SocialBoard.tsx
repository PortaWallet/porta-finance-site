import { MotionSection } from './MotionSection'
import { SOFT_TIP } from '../lib/site'
import { SOCIAL_BOARD } from '../lib/social-board'
import { useKo } from '../lib/locale'

export default function SocialBoard() {
  const k = useKo()
  const posts = SOCIAL_BOARD.posts

  return (
    <MotionSection
      id="updates"
      className="section-void scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-3">
          {k?.updates.eyebrow ?? 'Updates'} · tip {SOFT_TIP}
        </p>
        <h2 className="section-title">
          {k?.updates.title ?? 'Social posts'}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-porta-muted">
          {k?.updates.lede ??
            'Official posts will land here. LinkedIn and Telegram URLs come later — no invented metrics.'}
        </p>

        {posts.length === 0 ? (
          <div className="panel mt-10 max-w-2xl rounded-3xl p-6 sm:p-8">
            <p className="text-base font-semibold text-porta-text">
              {k?.updates.empty ?? 'Posts go live as we ship'}
            </p>
          </div>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {posts.map((post) => (
              <li key={post.id}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel flex h-full flex-col rounded-3xl p-5 sm:p-6"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-porta-lavender">
                    {post.platform}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-porta-text">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-porta-muted">
                    {post.publishedAt}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </MotionSection>
  )
}
