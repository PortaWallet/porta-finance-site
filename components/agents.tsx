import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'
import { MotionItem, MotionSection, MotionStagger } from '@/components/motion-section'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AGENTS } from '@/content/agents'

export function Rich({ text }: { text: string }) {
  const blocks = text.split('\n')
  return blocks.map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 ? <br /> : null}
      {line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, partIndex) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={partIndex}>{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code
              key={partIndex}
              className="rounded bg-muted px-1 py-0.5 font-mono text-[0.8125em]"
            >
              {part.slice(1, -1)}
            </code>
          )
        }
        return <Fragment key={partIndex}>{part}</Fragment>
      })}
    </Fragment>
  ))
}

export function Paragraphs({ lines }: { lines: readonly string[] }) {
  const nodes: ReactNode[] = []
  let buffer: string[] = []

  const flush = () => {
    if (!buffer.length) return
    nodes.push(
      <p key={nodes.length} className="text-base leading-relaxed text-muted-foreground">
        {buffer.map((line, i) => (
          <Fragment key={i}>
            {i > 0 ? <br /> : null}
            <Rich text={line} />
          </Fragment>
        ))}
      </p>,
    )
    buffer = []
  }

  for (const line of lines) {
    if (line === '') {
      flush()
      continue
    }
    buffer.push(line)
  }
  flush()
  return nodes
}

/** Home: one short block + links. Full copy is /agents. */
export function AgentsTeaser() {
  return (
    <MotionSection id="agents" className="section-y section-band">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-2">{AGENTS.eyebrow}</p>
        <h2 className="section-title max-w-2xl">{AGENTS.teaserTitle}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {AGENTS.teaser}
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed">
          <strong>{AGENTS.oneLiner}</strong>
        </p>
        <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          <Link href="/agents" className="underline-offset-4 hover:text-primary hover:underline">
            {AGENTS.teaserCta}
          </Link>
          <Link href="/guides" className="underline-offset-4 hover:text-primary hover:underline">
            {AGENTS.stuckCta}
          </Link>
          <Link href="/subscriptions" className="underline-offset-4 hover:text-primary hover:underline">
            Subscriptions guide
          </Link>
        </p>
      </div>
    </MotionSection>
  )
}

export function AgentsGuide() {
  return (
    <MotionSection className="section-y">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-2">{AGENTS.eyebrow}</p>
        <h1 className="section-title max-w-2xl">{AGENTS.title}</h1>
        <div className="mt-4 max-w-2xl space-y-3">
          <Paragraphs lines={AGENTS.intro} />
        </div>

        <h2 className="mt-10 text-lg font-semibold tracking-tight">{AGENTS.whyTitle}</h2>
        <MotionStagger className="mt-4 grid gap-4 sm:grid-cols-2">
          {AGENTS.why.map((item) => (
            <MotionItem key={item.title} className="h-full">
              <Card className="app-card h-full">
                <CardHeader className="p-5">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription className="mt-1.5 leading-relaxed">
                    <Rich text={item.body} />
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionItem>
          ))}
        </MotionStagger>

        <h2 className="mt-10 text-lg font-semibold tracking-tight">{AGENTS.howTitle}</h2>
        <ol className="mt-4 grid gap-3">
          {AGENTS.how.map((step, index) => (
            <li key={step} className="rounded-xl border border-border bg-card px-4 py-3">
              <div className="flex gap-3 text-sm leading-relaxed">
                <span className="w-6 shrink-0 text-[11px] font-semibold tabular-nums tracking-wider text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-muted-foreground">
                  <Rich text={step} />
                </p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-10 text-lg font-semibold tracking-tight">{AGENTS.dontTitle}</h2>
        <ul className="mt-4 grid gap-2">
          {AGENTS.dont.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm leading-relaxed text-muted-foreground"
            >
              <Rich text={item} />
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-base leading-relaxed">
          <span className="text-muted-foreground">{AGENTS.oneLineLabel} </span>
          <strong>{AGENTS.oneLiner}</strong>
        </p>
        <p className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          <Link href="/" className="underline-offset-4 hover:text-primary hover:underline">
            Back to Porta
          </Link>
          <Link href="/subscriptions" className="underline-offset-4 hover:text-primary hover:underline">
            Subscriptions
          </Link>
          <Link href="/guides" className="underline-offset-4 hover:text-primary hover:underline">
            All guides
          </Link>
        </p>
      </div>
    </MotionSection>
  )
}
