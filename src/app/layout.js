import "./globals.css";
import { Inter, Cinzel } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", display: "swap" });

<link rel="icon" href="/im1.png" sizes="any" />
export const metadata = {
  metadataBase: new URL('https://vividandvision.com'), // Replace with your actual domain
  title: {
    default: "Vivid & Vision Photography Studio | Professional Photography Services in Kolkata",
    template: "%s | Vivid & Vision Photography"
  },
  description: "Kolkata's premier photography and videography studio specializing in wedding photography, pre-wedding shoots, corporate events, and commercial photography. Capturing your precious moments with artistic excellence since 2020.",
  keywords: [
    "photography studio kolkata",
    "wedding photographer kolkata",
    "professional photography services",
    "pre-wedding shoot",
    "commercial photography",
    "event photography",
    "portrait photography",
    "corporate photography",
    "photo studio near me",
    "best photographer in kolkata",
    "photography",
    "videography",
  ],
  authors: [{ name: "Vivid & Vision Studio" }],
  creator: "Vivid & Vision",
  publisher: "Vivid & Vision Photography",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code', // Add your verification code
  // },
  openGraph: {
    title: 'Vivid & Vision Photography Studio | Professional Photography Services in Kolkata',
    description: 'Kolkata\'s premier photography and videography studio specializing in wedding photography, pre-wedding shoots, corporate events, and commercial photography.',
    url: 'https://vividandvision.com',
    siteName: 'Vivid & Vision Photography',
    images: [
      {
        url: 'https://vividandvision.com/og-image.jpg', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Vivid & Vision Photography Studio',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivid & Vision Photography Studio | Professional Photography Services in Kolkata',
    description: 'Kolkata\'s premier photography and videography studio specializing in wedding photography, pre-wedding shoots, corporate events, and commercial photography.',
    images: ['https://vividandvision.com/twitter-image.jpg'], // Replace with your actual Twitter image
    creator: '@VividVision',
    site: '@VividVision',
  },
  alternates: {
    canonical: 'https://vividandvision.com',
    languages: {
      'en-US': 'https://vividandvision.com/en-us',
      'bn-IN': 'https://vividandvision.com/bn',
    },
  },
  icons: {
    icon: '/im1.png',
    apple: [
      { url: '/apple-icon.png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${cinzel.variable}`}
      dir="ltr"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://vividandvision.com" />
        <link rel="icon" href="/im1.png" sizes="any" />
        <link
          rel="icon"
          href="./im1.png"
        />
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org markup for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vivid & Vision Photography Studio",
              "image": "https://vividandvision.com/studio-image.jpg",
              "@id": "https://vividandvision.com",
              "url": "https://vividandvision.com",
              "telephone": "+91-XXXXXXXXXX",
              "priceRange": "₹₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Kolkata",
                "postalCode": "700074",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 83.0000,
                "longitude": 83.0000
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.facebook.com/vividandvision",
                "https://www.instagram.com/vividandvision",
                // Add other social media URLs
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Google Analytics */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script> */}
      </body>
    </html>
  );
}