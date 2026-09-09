import type { NextConfig } from 'next'

/** Static HTML export for PR preview only. Production `next build` stays server/ISR. */
const previewExport = process.env.PREVIEW_EXPORT === '1'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: previewExport
    ? { unoptimized: true }
    : { formats: ['image/avif', 'image/webp'] },
  ...(previewExport
    ? {
        output: 'export' as const,
        trailingSlash: true,
      }
    : {
        async headers() {
          return [
            {
              source: '/:path*',
              headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                {
                  key: 'Referrer-Policy',
                  value: 'strict-origin-when-cross-origin',
                },
                { key: 'X-Frame-Options', value: 'DENY' },
                {
                  key: 'Permissions-Policy',
                  value: 'camera=(), microphone=(), geolocation=()',
                },
              ],
            },
          ]
        },
      }),
}

export default nextConfig
