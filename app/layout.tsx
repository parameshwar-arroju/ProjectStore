import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { Providers } from './providers';

export const runtime = 'edge'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Project Store",
    description: "Generated by 2xdevs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <SiteHeader />
                        {children}
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
}
