// app/layout.tsx
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/globals.scss';
import styles from '@/styles/layout.module.scss';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "CLCK's Site",
    description: 'My personal page.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <div className={styles.pageWrapper}>
            {children}
        </div>
        </body>
        </html>
    );
}