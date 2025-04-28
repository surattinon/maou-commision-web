import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-montserrat'
})

const notoSansThai = Noto_Sans_Thai({
  variable: '--font-noto-thai'
})

export async function generateMetadata({ }: {
  params: { lang: string }
}): Promise<Metadata> {

  return {
    title: {
      template: '%s | MAOU Commission Service',
      default: 'MAOU Commission Service',
    },
    description: 'Digital art commission service',
  }
}


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  console.log(lang)
  return (
    <html
      lang={lang}
      className={`${montserrat.className} ${notoSansThai.className}`}
    >
      <body
        className={`${lang === 'th' ? 'font-thai' : 'font-thai'} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'th' }]
}
