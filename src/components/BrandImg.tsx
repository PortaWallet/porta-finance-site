import { useState, type ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
}

/** Brand-pack image: visible alert on load failure instead of a broken icon. */
export default function BrandImg({ src, alt = '', className, ...rest }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="alert"
        className="rounded-xl border border-red-400/50 bg-red-950/80 px-3 py-2 text-xs font-semibold text-red-100"
      >
        Missing brand asset: {src}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
