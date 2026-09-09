import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/site'
import { FOOTER } from '@/content/copy'
import { OfficialLinks } from '@/components/official-links'
import { Separator } from '@/components/ui/separator'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <div id="official" className="scroll-mt-20">
          <p className="eyebrow mb-2">Official links</p>
          <OfficialLinks />
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
