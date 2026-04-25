import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asset Recovery Specialists | Secure & Professional Recovery Services",
  description: "Reclaim what belongs to you with our expert asset recovery services. Secure, transparent, and professional recovery for individuals and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col`}
      >
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center font-bold text-slate-900">A</div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">ASSET RECOVERY</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-brand-accent transition-colors">Services</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Process</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Testimonials</a>
              <a href="#" className="px-4 py-2 bg-brand-primary dark:bg-brand-accent text-white dark:text-slate-950 rounded-full hover:opacity-90 transition-opacity">Get Started</a>
            </div>
          </nav>
        </header>
        
        <main className="flex-grow pt-16">
          {children}
        </main>

        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center font-bold text-slate-900">A</div>
                  <span className="font-bold text-xl tracking-tight">ASSET RECOVERY</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                  Professional asset recovery services helping you navigate complex legal and technical landscapes to reclaim your lost assets.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                  <li><a href="#" className="hover:text-brand-accent">About Us</a></li>
                  <li><a href="#" className="hover:text-brand-accent">Success Stories</a></li>
                  <li><a href="#" className="hover:text-brand-accent">FAQ</a></li>
                  <li><a href="#" className="hover:text-brand-accent">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                  <li><a href="#" className="hover:text-brand-accent">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-brand-accent">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-sm">
              © {new Date().getFullYear()} Asset Recovery Specialists. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
