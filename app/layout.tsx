import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Nav from "./components/Nav";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI编程之家 ｜ Python技术 ｜ AI编程资源",
  description: "AI编程学习之家,涵盖各类AI编程技术和资源,助力开发者成长，提供实战案例和教程",
  openGraph: {
    title: "AI编程之家 ｜ Python技术 ｜ AI编程资源",
    description: "AI编程学习之家,涵盖各类AI编程技术和资源,助力开发者成长，提供实战案例和教程",
    url: "https://www.aicodehome.cn",
    siteName: "AI编程之家",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--card)]/95 backdrop-blur-md border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-juejin flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gradient-juejin">AI编程之家</span>
              </Link>
              <Nav />
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-lg hover:border-[#ff7d00]/50 transition-colors">
                <svg className="w-4 h-4 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01" />
                </svg>
                <span className="text-sm text-[var(--muted-foreground)]">登录</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-juejin text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span className="hidden sm:inline">写文章</span>
              </button>
            </div>
          </div>
        </header>

        <div className="flex pt-14">
          <main className="flex-1 min-h-[calc(100vh-56px)]">
            {children}
          </main>
        </div>

        <footer className="bg-[var(--card)] border-t border-[var(--border)] py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-juejin flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gradient-juejin">AI编程之家</span>
                </Link>
                <span className="text-[var(--muted-foreground)] text-sm">© 2026 AI编程之家. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/about" className="text-[var(--muted-foreground)] hover:text-[#ff7d00] transition-colors">关于我们</Link>
                <Link href="/blog" className="text-[var(--muted-foreground)] hover:text-[#ff7d00] transition-colors">技术博客</Link>
                <a href="#" className="text-[var(--muted-foreground)] hover:text-[#ff7d00] transition-colors">联系我们</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
