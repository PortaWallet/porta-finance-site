import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '../lib/site'
import { useKo, useLocale } from '../lib/locale'
import OfficialLinks from './OfficialLinks'

export default function Footer() {
  const locale = useLocale()
  const k = useKo()

  return (
    <footer className="section-void border-t border-porta-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div id="official" className="scroll-mt-20">
          <p className="eyebrow mb-3">Official links</p>
          <OfficialLinks />
        </div>
        <div>
          <a
            href={CONTACT_MAILTO}
            className="text-sm font-semibold text-porta-text transition hover:text-porta-primary"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2 text-sm text-porta-text/90">© 2026 DracoLabs Ltd</p>
          <p className="mt-1 text-xs text-porta-text/80">
            {k?.footer.blurb ??
              'Honest claims only. Non-custodial — keys stay on your device. No official X.'}
          </p>
          <p className="mt-3 text-xs font-medium text-porta-muted">
            <Link
              to="/"
              hrefLang="en"
              aria-current={locale === 'en' ? 'page' : undefined}
              className="transition hover:text-porta-lavender"
            >
              EN
            </Link>
            <span aria-hidden className="px-1.5">
              ·
            </span>
            <Link
              to="/ko"
              hrefLang="ko"
              aria-current={locale === 'ko' ? 'page' : undefined}
              className="transition hover:text-porta-lavender"
            >
              한국어
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
