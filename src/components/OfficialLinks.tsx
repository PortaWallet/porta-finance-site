import { OFFICIAL_LINKS } from '../lib/site'

type Props = {
  className?: string
}

export default function OfficialLinks({ className = '' }: Props) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {OFFICIAL_LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="link-official"
            {...(link.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
