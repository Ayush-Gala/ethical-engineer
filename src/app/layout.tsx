import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientThemeProvider from "@/components/ClientThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ethical Engineer",
  description: "Personal portfolio and blog of The Ethical Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <ClientThemeProvider>
          <div className="min-h-screen transition-colors duration-200" style={{
            backgroundColor: 'var(--bg-secondary)'
          }}>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
