import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/admin/', '/_next/'],
      },
    ],
    sitemap: 'https://www.procleancorp.com.au/sitemap.xml',
    host: 'https://www.procleancorp.com.au',
  }
}