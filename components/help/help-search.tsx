'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { helpTopicMatches } from '@/content-help/search'

export type HelpSearchTopic = {
  slug: string
  heading: string
  excerpt: string
  searchText: string
}

function snippet(topic: HelpSearchTopic, query: string): string {
  const needle = query.trim()
  if (!needle) return topic.excerpt
  const haystack = topic.searchText
  const at = haystack.toLowerCase().indexOf(needle.toLowerCase())
  if (at < 0) return topic.excerpt
  const start = Math.max(0, at - 48)
  const end = Math.min(haystack.length, at + needle.length + 96)
  const slice = haystack.slice(start, end).replace(/\s+/g, ' ').trim()
  return `${start > 0 ? '…' : ''}${slice}${end < haystack.length ? '…' : ''}`
}

export function HelpSearch({ topics }: { topics: HelpSearchTopic[] }) {
  const [query, setQuery] = useState('')
  const shown = topics.filter((topic) =>
    helpTopicMatches(topic.heading, topic.searchText, query),
  )

  return (
    <div className="mt-8">
      <label htmlFor="help-search" className="mb-2 block text-sm font-semibold text-foreground">
        Search help
      </label>
      <input
        id="help-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search topics and article text"
        autoComplete="off"
        className="h-11 w-full rounded-full border border-border bg-card px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
      />
      <p className="mt-3 text-sm text-muted-foreground">
        {shown.length === topics.length
          ? `${topics.length} topics`
          : `${shown.length} of ${topics.length} topics`}
      </p>
      {shown.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">No topics match that search.</p>
      ) : (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {shown.map((topic) => (
            <li key={topic.slug} className="h-full">
              <Link href={`/help/${topic.slug}`} className="block h-full">
                <Card className="app-card h-full">
                  <CardHeader className="p-5">
                    <CardTitle className="text-lg">{topic.heading}</CardTitle>
                    <CardDescription className="mt-1.5 line-clamp-3 leading-relaxed">
                      {snippet(topic, query)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
