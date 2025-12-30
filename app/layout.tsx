import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://price-ping.com'),
  title: 'Price Ping - Never Miss a Deal | Automated Deal Discovery',
  description: 'Automated deal discovery across top retailers. Real price drops, real savings, delivered instantly to Discord. Track Amazon, Walmart, Best Buy & more.',
  keywords: 'price tracking, deal alerts, discount finder, Amazon deals, Walmart deals, Best Buy deals, price drops, shopping alerts, Discord bot',
  authors: [{ name: 'Price Ping' }],
  openGraph: {
    title: 'Price Ping - Never Miss a Deal',
    description: 'Automated deal discovery across top retailers. Real price drops, real savings, delivered instantly.',
    url: '/',
    siteName: 'Price Ping',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Price Ping - Never Miss a Deal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Price Ping - Never Miss a Deal',
    description: 'Automated deal discovery across top retailers. Real price drops, real savings, delivered instantly.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
