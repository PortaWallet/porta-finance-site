import { TG_BOT_HANDLE, TG_BOT_URL } from '../lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-porta-border/60 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-porta-muted">
            © 2026 DracoLabs Ltd ·{' '}
            <a
              href="https://porta.finance"
              className="text-porta-text transition hover:text-porta-accent"
            >
              porta.finance
            </a>
          </p>
          <p className="mt-1 text-xs text-porta-muted/70">
            Honest claims only. Non-custodial — keys stay on your device.
          </p>
        </div>
        <a
          href={TG_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-porta-accent transition hover:underline"
        >
          {TG_BOT_HANDLE}
        </a>
      </div>
    </footer>
  )
}
