import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import StoreProvider from '@/provider/StoreProvider';
import ToastProvider from '@/provider/ToastProvider';

const yekan = localFont({
  src: [
    {
      path: '../../public/font/YekanBakh-Light.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/font/YekanBakh-Regular.woff2',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../../public/font/YekanBakh-Bold.woff2',
      weight: '700',
      style: 'normal',
    },

    {
      path: '../../public/font/YekanBakh-Fat.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-yekan',
});

export const metadata: Metadata = {
  title: {
    template: ' %s | رکسی',
    default: ' رکسی شاپ',
  },
  description: 'محصولات سگی',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={cn(yekan.variable, 'font-yekan ')}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
