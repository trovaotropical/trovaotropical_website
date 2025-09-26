import type { Metadata } from 'next';
import {
  Gantari,
  Geist,
  Geist_Mono,
  Literata,
  Nokora,
  Pathway_Extreme,
  Rubik,
  Sora,
  Montserrat
} from 'next/font/google';
import './globals.css';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const display = Sora({
  variable: '--font-display',
  subsets: ['latin']
});
const geistSans = Montserrat({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Trovão Tropical',
  description: 'sintropia no campo e na cidade'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.className} ${geistMono.variable} ${display.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Cursor />
        <Footer />
      </body>
    </html>
  );
}
