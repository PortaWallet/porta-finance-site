import { Mail } from 'lucide-react'
import { MotionSection } from '@/components/motion-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CONTACT } from '@/content/copy'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/site'

export function Contact() {
  return (
    <MotionSection id="contact" className="section-y">
      <div className="mx-auto max-w-6xl">
        <Card className="app-card">
          <CardContent className="grid gap-6 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-12 sm:p-8">
            <div>
              <p className="eyebrow mb-3">{CONTACT.eyebrow}</p>
              <h2 className="section-title">{CONTACT.title}</h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                {CONTACT.body}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={CONTACT_MAILTO}>
                  <Mail className="size-4" aria-hidden />
                  Email {CONTACT_EMAIL}
                </a>
              </Button>
              <a
                href={CONTACT_MAILTO}
                className="text-sm font-medium hover:text-primary"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="max-w-xs text-xs leading-snug text-muted-foreground sm:text-right">
                {CONTACT.never}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MotionSection>
  )
}
