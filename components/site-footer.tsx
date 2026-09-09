import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/site'
import { FOOTER, SITE_MAP } from '@/content/copy'
import { OfficialLinks } from '@/components/official-links'
import { Separator } from '@/components/ui/separator'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-start">
          <div
            id="official"
            className="scroll-mt-20 rounded-xl border border-border bg-card px-4 py-4"
          >
            <p className="eyebrow mb-1">Official</p>
            <h2 className="mb-3 text-base font-semibold tracking-tight">Official links</h2>
            <OfficialLinks />
          </div>
          <nav aria-label="On this page" className="grid grid-cols-2 gap-6">
            {SITE_MAP.map((column) => (
              <div key={column.label}>
                <p className="eyebrow mb-3">{column.label}</p>
                <ul className="grid gap-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <Separator />
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <a
              href={CONTACT_MAILTO}
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{FOOTER.legal}</p>
          </div>
          <p className="max-w-md text-xs leading-snug text-muted-foreground sm:text-right">
            {FOOTER.honesty}
          </p>
        </div>
      </div>
    </footer>
  )
}
