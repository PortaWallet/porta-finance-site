import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/site'
import { FOOTER } from '@/content/copy'
import { OfficialLinks } from '@/components/official-links'
import { Separator } from '@/components/ui/separator'

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div id="official" className="scroll-mt-24">
          <p className="eyebrow mb-4">Official links</p>
          <OfficialLinks />
        </div>
        <Separator />
        <div>
          <a
            href={CONTACT_MAILTO}
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">{FOOTER.legal}</p>
          <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground">
            {FOOTER.honesty}
          </p>
        </div>
      </div>
    </footer>
  )
}
