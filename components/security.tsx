import { Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SECURITY } from '@/content/copy'

export function Security() {
  return (
    <Card id="security" className="app-card h-full">
      <CardContent className="p-5">
        <p className="eyebrow mb-2">{SECURITY.eyebrow}</p>
        <h2 className="text-lg font-semibold tracking-tight">{SECURITY.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {SECURITY.body}
        </p>
        <ul className="mt-4 grid gap-2">
          {SECURITY.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-snug">
              <Shield className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
