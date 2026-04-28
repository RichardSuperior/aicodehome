import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Nav from "./components/Nav";
import ThemeToggle from "./components/ThemeToggle";
import { AuthProvider } from "./components/AuthContext";
import LoginButton from "./components/LoginButton";

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
      className="h-full antialiased"
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">
        <AuthProvider>
          <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--card)]/95 backdrop-blur-md border-b border-[var(--border)]">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="flex items-center gap-10">
                <Link href="/" className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-juejin flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-gradient-juejin">AI编程之家</span>
                </Link>
                <Nav />
              </div>

              <div className="flex items-center gap-4">
                <ThemeToggle />
                <LoginButton />
              </div>
            </div>
          </header>

          <div className="flex pt-16">
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
        </AuthProvider>
      </body>
    </html>
  );
}
