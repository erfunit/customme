import type { Metadata } from 'next';
import './globals.css';
import type React from 'react'; // Import React
import { iranYekanX } from '@/utils/fonts';
import MainLayout from '@/components/layout/main-layout';

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="en" className={iranYekanX.variable}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
