import { Card, CardContent } from '@/components/ui/card'
import { AA } from '@/content/copy'

export function AccountAbstraction() {
  return (
    <Card id="aa" className="app-card h-full">
      <CardContent className="p-5">
        <p className="eyebrow mb-2">{AA.eyebrow}</p>
        <h2 className="text-lg font-semibold tracking-tight">{AA.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {AA.body}
        </p>
      </CardContent>
    </Card>
  )
}
