'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CopyCodeButton({ code }: { code: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setState('copied')
    } catch {
      try {
        const area = document.createElement('textarea')
        area.value = code
        area.setAttribute('readonly', '')
        area.style.position = 'fixed'
        area.style.left = '-9999px'
        document.body.appendChild(area)
        area.select()
        const ok = document.execCommand('copy')
        document.body.removeChild(area)
        setState(ok ? 'copied' : 'failed')
      } catch {
        setState('failed')
      }
    }
    window.setTimeout(() => setState('idle'), 2000)
  }

  const label = state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy'

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={() => {
        void onCopy()
      }}
      aria-label={state === 'idle' ? 'Copy code' : label}
    >
      {state === 'copied' ? (
        <Check className="size-3.5" aria-hidden />
      ) : (
        <Copy className="size-3.5" aria-hidden />
      )}
      {label}
    </Button>
  )
}
