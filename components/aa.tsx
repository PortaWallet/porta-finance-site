import { AA } from '@/content/copy'

export function AccountAbstraction() {
  return (
    <div id="aa">
      <p className="eyebrow mb-3">{AA.eyebrow}</p>
      <h2 className="text-lg font-semibold tracking-tight">{AA.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {AA.body}
      </p>
    </div>
  )
}
