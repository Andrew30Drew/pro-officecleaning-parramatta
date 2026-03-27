import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW - Professional Office & Commercial Cleaners',
    template: '%s | Pro Clean Corp Commercial Cleaning Sydney NSW',
  },
  description:
    'Premier commercial cleaning services in Sydney NSW. Pro Clean Corp provides professional office cleaning, industrial cleaning, and commercial property maintenance. Trusted local cleaners serving Sydney NSW businesses with reliable, eco-friendly solutions.',
  keywords: [
    'commercial cleaning services Sydney NSW',
    'office cleaning Sydney NSW',
    'professional cleaners Sydney NSW',
    'commercial cleaners Sydney NSW',
    'industrial cleaning Sydney NSW',
    'business cleaning services Sydney NSW',
    'Pro Clean Corp Sydney NSW',
    'cleaning company Sydney NSW',
    'commercial property cleaning Sydney NSW',
    'office maintenance Sydney NSW',
    'workplace cleaning Sydney NSW',
    'commercial janitorial services Sydney NSW',
    'retail cleaning Sydney NSW',
    'warehouse cleaning Sydney NSW',
    'medical facility cleaning Sydney NSW',
    'strata cleaning Sydney NSW',
    'factory cleaning Sydney NSW',
    'shopping centre cleaning Sydney NSW',
    'gym cleaning services Sydney NSW',
    'restaurant cleaning Sydney NSW',
    'carpet cleaning commercial Sydney NSW',
    'window cleaning commercial Sydney NSW',
    'deep cleaning services Sydney NSW',
    'sanitisation services Sydney NSW',
    'COVID cleaning Sydney NSW',
    'end of lease cleaning commercial Sydney NSW',
    'construction cleanup Sydney NSW',
    'pressure washing Sydney NSW',
    'floor cleaning services Sydney NSW',
    'bathroom cleaning commercial Sydney NSW',
  ],
  authors: [{ name: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW' }],
  creator: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  publisher: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
  category: 'Commercial Cleaning Services',
  metadataBase: new URL('https://www.procleancorp.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    title: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW - Professional Office Cleaners',
    description:
      'Premier commercial cleaning services in Sydney NSW. Pro Clean Corp provides professional office cleaning, industrial cleaning, and commercial property maintenance for Sydney NSW businesses.',
    siteName: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    images: [
      {
        url: 'https://www.procleancorp.com.au/meta.png',
        width: 1200,
        height: 630,
        alt: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW - Professional Office Cleaners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Clean Corp Commercial Cleaning Services Sydney NSW',
    description:
      'Premier commercial cleaning services in Sydney NSW. Professional office cleaning, industrial cleaning, and commercial property maintenance.',
    images: ['https://www.procleancorp.com.au/meta.png'],
    creator: '@procleancompany',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />


        <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/fav/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link rel="manifest" href="/fav/manifest.json" />
        <meta name="msapplication-TileColor" content="#01be48" />
        <meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png" />
        <meta name="theme-color" content="#01be48" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N62C9W59ER"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N62C9W59ER');
            `,
          }}
        />
        {/* Phone call + form conversion tracking — fires dataLayer events for GTM */}
        <Script
          id="conversion-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  // Phone call click tracking
  document.addEventListener('click', function(e) {
    var el = e.target.closest('a[href^="tel:"]');
    if (el) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'phone_call_click',
        event_category: 'Contact',
        event_label: el.getAttribute('href'),
        value: 1
      });
    }
  });

  // Contact form submission tracking
  document.addEventListener('submit', function(e) {
    var form = e.target;
    if (form && (form.id === 'contact-form' || form.closest('[data-form="contact"]'))) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submission',
        event_category: 'Lead',
        event_label: 'Contact Form',
        value: 1
      });
    }
  });
})();
            `,
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
