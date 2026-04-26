import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "English Map | Navigate Your English, Speak Without Limits",
  description: "Didesain khusus untuk membantu orang Indonesia berani berbicara bahasa Inggris dengan percaya diri melalui kurikulum yang terstruktur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body
        className={`${jakarta.variable} antialiased bg-brand-blue-white dark:bg-slate-950 flex flex-col min-h-full`}
      >
        {children}
        
      </body>
    </html>
  );
}
