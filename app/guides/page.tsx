import type { Metadata } from 'next'
import Link from 'next/link'
import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { GUIDES } from '@/content/guides'
import { SITE_URL } from '@/lib/site'

export const revalidate = 86400

export const metadata: Metadata = {
  title: GUIDES.title,
  description: GUIDES.lede,
  alternates: { canonical: `${SITE_URL}/guides` },
}

export default function GuidesPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <MotionSection className="section-y">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow mb-2">{GUIDES.eyebrow}</p>
            <h1 className="section-title max-w-2xl">{GUIDES.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {GUIDES.lede}
            </p>
            <MotionStagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {GUIDES.items.map((item) => (
                <MotionItem key={item.href} className="h-full">
                  <Link href={item.href} className="block h-full">
                    <Card className="app-card h-full">
                      <CardHeader className="p-5">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="mt-1.5 leading-relaxed">
                          {item.body}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </MotionItem>
              ))}
            </MotionStagger>
            <p className="mt-8 text-sm font-medium">
              <Link href="/" className="underline-offset-4 hover:text-primary hover:underline">
                Back to Porta
              </Link>
            </p>
          </div>
        </MotionSection>
      </main>
      <SiteFooter />
    </div>
  )
}
