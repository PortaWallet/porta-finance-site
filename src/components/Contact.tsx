import { MotionSection } from './MotionSection'
import { CONTACT_EMAIL, CONTACT_MAILTO, SOFT_TIP } from '../lib/site'

export default function Contact() {
  return (
    <MotionSection
      id="contact"
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="glass-elevated rounded-3xl p-6 sm:p-10">
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="section-title">Talk to Porta</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-porta-muted">
            Email the team. Porta is an independent non-custodial wallet — not a
            Telegram product. Soft tip {SOFT_TIP}. We will never ask for your
            seed phrase.
          </p>
          <a
            href={CONTACT_MAILTO}
            className="btn-primary mt-8 px-7 text-base"
          >
            Email {CONTACT_EMAIL}
          </a>
          <p className="mt-5 text-sm font-medium text-porta-text">
            <a
              href={CONTACT_MAILTO}
              className="transition hover:text-porta-accent"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-3 text-xs leading-relaxed text-porta-muted">
            Never send seeds, keys, or recovery phrases. No form. Official
            email only.
          </p>
        </div>
      </div>
    </MotionSection>
  )
}
