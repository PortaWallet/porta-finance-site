/** Case-insensitive match against a topic title and its article text. */
export function helpTopicMatches(heading: string, body: string, query: string): boolean {
  const needle = query.trim().toLowerCase()
  if (!needle) return true
  return heading.toLowerCase().includes(needle) || body.toLowerCase().includes(needle)
}
