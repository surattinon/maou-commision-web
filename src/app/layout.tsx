import type { Metadata } from "next";
import { Montserrat  } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "MAOU COMMISSION",
  description: "MAOU COMMISSION Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
