import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/commercial-cleaning-services-sydney',
        destination: '/commercial-cleaning-sydney',
        permanent: true,
      },
      {
        source: '/office-cleaning-services-sydney',
        destination: '/office-cleaning-sydney',
        permanent: true,
      },
      {
        source: '/industrial-cleaning-services-sydney',
        destination: '/industrial-cleaning-sydney',
        permanent: true,
      },
      // Legacy /services/ subdirectory redirects — 24,000+ impressions trapped (GSC March 2026)
      {
        source: '/services/medicalcentre-cleaning',
        destination: '/medical-office-cleaning-sydney',
        permanent: true,
      },
      {
        source: '/services/gym-cleaning',
        destination: '/gym-cleaning-sydney',
        permanent: true,
      },
      {
        source: '/services/strata-cleaning',
        destination: '/strata-cleaning-sydney',
        permanent: true,
      },
      {
        source: '/services/warehouse-cleaning',
        destination: '/warehouse-cleaning-sydney',
        permanent: true,
      },
      // Note: /office-cleaning and /commercial-cleaning are handled via
      // page-level redirect() in their respective page.tsx files,
      // because next.config.ts redirects do not fire when a page file exists at the path.
    ];
  },
};

export default nextConfig;
