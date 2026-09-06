import { SITE_HOST, SITE_URL } from '../lib/site'
import OfficialLinks from './OfficialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-porta-border/60 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm text-porta-muted">
              © 2026 DracoLabs Ltd ·{' '}
              <a
                href={SITE_URL}
                className="text-porta-text transition hover:text-porta-accent"
              >
                {SITE_HOST}
              </a>
            </p>
            <p className="mt-1 text-xs text-porta-muted/70">
              Honest claims only. Non-custodial — keys stay on your device.
            </p>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-3">Official links</p>
          <OfficialLinks />
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-porta-muted/75">
            These are Porta&apos;s official surfaces. Ignore lookalike accounts
            elsewhere (including on X). No official X.
          </p>
        </div>
      </div>
    </footer>
  )
}
