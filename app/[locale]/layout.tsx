import type React from "react"
import "../globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next';
const inter = Inter({ subsets: ["latin"] })
import {routing} from '@/i18n/routing';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';

export const metadata = {
  title: "Karan Shingde | AI Engineer & Innovator",
  description: "AI Engineer building intelligent solutions, AI agents, and ML applications.",
  keywords: "AI Engineer, Machine Learning, Generative AI Specialist, AI Consultant, Karan Shingde",
  openGraph: {
    title: "Karan Shingde | AI Engineer & Innovator",
    description: "AI Engineer building intelligent solutions, AI agents, and ML applications.",
    // url: "https://yourdomain.com", // Update this when you deploy
    type: "website",
    images: "/app/assets/karan-front.png", // Local path for development
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Shingde | AI Engineer & Innovator",
    description: "AI Engineer building intelligent solutions, AI agents, and ML applications.",
    images: "/app/assets/karan-front.png", // Local path for development
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}


export default async function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: Promise<{locale: string}>;
}) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
       <NextIntlClientProvider>
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
           <Analytics />
         </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

