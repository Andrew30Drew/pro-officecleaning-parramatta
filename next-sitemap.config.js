/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.procleancorp.com.au',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 10000,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (
      path === '/commercial-cleaning-sydney' ||
      path === '/office-cleaning-sydney'
    ) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/commercial-cleaning') {
      priority = 0.95;
      changefreq = 'weekly';
    } else if (path.startsWith('/commercial-cleaning/')) {
      priority = 0.85;
      changefreq = 'monthly';
    } else if (
      path.startsWith('/commercial-cleaning-') ||
      path.startsWith('/office-cleaning-')
    ) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (
      path.includes('/contact') ||
      path.includes('/about') ||
      path.startsWith('/services')
    ) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (
      path.includes('/terms') ||
      path.includes('/privacy')
    ) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/_next/'],
      },
    ],
  },
};
