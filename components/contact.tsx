import { Mail } from 'lucide-react'
import { MotionSection } from '@/components/motion-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CONTACT } from '@/content/copy'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/site'

export function Contact() {
  return (
    <MotionSection id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Card className="overflow-hidden">
          <CardHeader className="p-6 sm:p-10">
            <p className="eyebrow mb-3">{CONTACT.eyebrow}</p>
            <CardTitle className="section-title">{CONTACT.title}</CardTitle>
            <CardDescription className="mt-4 max-w-2xl text-base">
              {CONTACT.body}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-8 sm:px-10">
            <Button asChild size="lg">
              <a href={CONTACT_MAILTO}>
                <Mail className="size-4" aria-hidden />
                Email {CONTACT_EMAIL}
              </a>
            </Button>
            <p className="mt-5 text-sm font-medium">
              <a href={CONTACT_MAILTO} className="hover:text-primary">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground">
              {CONTACT.never}
            </p>
          </CardContent>
        </Card>
      </div>
    </MotionSection>
  )
}
