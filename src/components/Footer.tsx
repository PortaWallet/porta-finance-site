import { CONTACT_EMAIL, CONTACT_MAILTO } from '../lib/site'
import OfficialLinks from './OfficialLinks'

export default function Footer() {
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
            Honest claims only. Non-custodial — keys stay on your device. No
            official X.
          </p>
        </div>
      </div>
    </footer>
  )
}
