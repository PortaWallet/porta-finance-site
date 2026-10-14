import { CopyCodeButton } from '@/components/help/copy-code-button'
import type { Block, Inline } from '@/content-help/parse'

function RenderInlines({ nodes }: { nodes: Inline[] }) {
  return nodes.map((node, index) => {
    const key = index
    if (node.t === 'text') return <span key={key}>{node.v}</span>
    if (node.t === 'code') {
      return (
        <code
          key={key}
          className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em] text-foreground"
        >
          {node.v}
        </code>
      )
    }
    if (node.t === 'soon') {
      return (
        <span
          key={key}
          role="link"
          aria-disabled="true"
          className="cursor-not-allowed text-muted-foreground underline decoration-dotted underline-offset-4"
        >
          Coming soon
        </span>
      )
    }
    if (node.t === 'bold') {
      return (
        <strong key={key} className="font-semibold text-foreground">
          <RenderInlines nodes={node.c} />
        </strong>
      )
    }
    if (node.t === 'italic') {
      return (
        <em key={key}>
          <RenderInlines nodes={node.c} />
        </em>
      )
    }
    const external = /^https?:\/\//.test(node.href)
    return (
      <a
        key={key}
        href={node.href}
        className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <RenderInlines nodes={node.c} />
      </a>
    )
  })
}

function RenderBlock({ block }: { block: Block }) {
  if (block.t === 'heading') {
    const Tag = block.level === 4 ? 'h3' : 'h2'
    return (
      <Tag
        id={block.id}
        className={
          block.level === 4
            ? 'scroll-mt-32 text-sm font-semibold tracking-tight text-foreground'
            : 'scroll-mt-32 pt-4 text-lg font-semibold tracking-tight text-foreground'
        }
      >
        <RenderInlines nodes={block.c} />
      </Tag>
    )
  }

  if (block.t === 'quote') {
    return (
      <blockquote
        id={block.id}
        className="scroll-mt-32 border-l-2 border-primary/40 pl-4 text-foreground"
      >
        <RenderInlines nodes={block.c} />
      </blockquote>
    )
  }

  if (block.t === 'code') {
    return (
      <div id={block.id} className="scroll-mt-32 overflow-hidden rounded-xl border border-border bg-muted/40">
        <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-1.5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {block.lang || 'code'}
          </span>
          <CopyCodeButton code={block.code} />
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-foreground">
          <code>{block.code}</code>
        </pre>
      </div>
    )
  }

  if (block.t === 'ul' || block.t === 'ol') {
    const Tag = block.t
    return (
      <Tag
        id={block.id}
        className={
          block.t === 'ol'
            ? 'list-decimal space-y-2 pl-5'
            : 'list-disc space-y-2 pl-5'
        }
      >
        {block.items.map((item, index) => (
          <li key={index} className="leading-relaxed marker:text-muted-foreground">
            <RenderInlines nodes={item.c} />
            {item.children.length > 0 ? (
              <div className="mt-2 space-y-2">
                {item.children.map((child, childIndex) => (
                  <RenderBlock key={childIndex} block={child} />
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </Tag>
    )
  }

  if (block.t === 'table') {
    return (
      <div id={block.id} className="scroll-mt-32 overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-muted/60">
            <tr>
              {block.header.map((cell, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-3 py-2 align-top font-semibold text-foreground"
                >
                  <RenderInlines nodes={cell} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-border">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 align-top">
                    <RenderInlines nodes={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <p id={block.id} className={block.id ? 'scroll-mt-32' : undefined}>
      <RenderInlines nodes={block.c} />
    </p>
  )
}

export function HelpBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
      {blocks.map((block, index) => (
        <RenderBlock key={block.id ?? index} block={block} />
      ))}
    </div>
  )
}
