import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const SITE_URL = "https://thedetailclinic.com"
const SITE_NAME = "The Detail Clinic"
const DEFAULT_DESCRIPTION = "Professional paint protection film (PPF), ceramic window tinting, ceramic coating, and auto detailing in Fullerton, CA. Luxury and exotic vehicle specialists. Yelp Award Winner."

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premium Auto Protection & Detailing | Fullerton, CA`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "auto detailing Fullerton",
    "paint protection film",
    "PPF installation",
    "ceramic coating Fullerton CA",
    "window tinting Fullerton",
    "ceramic window tint",
    "car detailing near me",
    "luxury car detailing",
    "exotic car detailing",
    "XPEL PPF",
    "3M paint protection",
    "ceramic coating near me",
    "paint correction",
    "vinyl wrap Fullerton",
    "auto detail shop Orange County",
    "The Detail Clinic",
    "detail clinic Fullerton",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium Auto Protection & Detailing`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/IMG_3560.jpg",
        width: 1200,
        height: 630,
        alt: "The Detail Clinic — Exotic cars including Porsche, Ferrari, and Lamborghini",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Premium Auto Protection & Detailing`,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/IMG_3560.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Automotive",
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Fullerton",
    "geo.position": "33.8703;-117.9253",
    ICBM: "33.8703, -117.9253",
  },
}

// JSON-LD Structured Data — LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE_NAME,
  image: `${SITE_URL}/images/IMG_3560.jpg`,
  url: SITE_URL,
  telephone: "+15626328290",
  email: "TheDetailClinic@gmail.com",
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "634 S State College Blvd",
    addressLocality: "Fullerton",
    addressRegion: "CA",
    postalCode: "92831",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.8703,
    longitude: -117.9253,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Protection & Detailing Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Paint Protection Film",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Total Body Armor PPF", description: "Complete exterior PPF wrap covering all painted panels" }, price: "5250.00", priceCurrency: "USD" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Front End PPF Procedure", description: "PPF for hood, fenders, bumper, headlights & mirrors" }, price: "2250.00", priceCurrency: "USD" },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Window Tinting",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Complete Window Tinting", description: "Full 360° ceramic tint with 95-99% IR rejection" }, price: "700.00", priceCurrency: "USD" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Perimeter Window Tinting", description: "All side windows and rear windshield ceramic tint" }, price: "550.00", priceCurrency: "USD" },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Ceramic Coating",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "5-Year Ceramic Coating", description: "9H hardness ceramic coating with 5-year preservation therapy" }, price: "650.00", priceCurrency: "USD" },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Auto Detailing",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basic Detail", description: "Hand wash, wheel detail, vacuum, sanitize" }, price: "120.00", priceCurrency: "USD" },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Detail", description: "Complete interior and exterior restoration" }, price: "650.00", priceCurrency: "USD" },
        ],
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
