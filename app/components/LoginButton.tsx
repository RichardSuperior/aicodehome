'use client'

import { useAuth } from './AuthContext'
import Link from 'next/link'

export default function LoginButton() {
  const { user, loading, isConfigured, signOut } = useAuth()

  if (loading) {
    return (
      <button 
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary)] text-[var(--muted-foreground)] text-sm font-medium rounded-lg opacity-50 cursor-not-allowed"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01" />
        </svg>
        <span className="hidden sm:inline">加载中...</span>
      </button>
    )
  }

  if (!isConfigured || !user) {
    return (
      <Link href="/login" className="flex items-center gap-2 px-4 py-2 bg-gradient-juejin text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01" />
        </svg>
        <span className="hidden sm:inline">登录</span>
      </Link>
    )
  }

  return (
    <button
      onClick={() => signOut()}
      className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary)] text-[var(--foreground)] text-sm font-medium rounded-lg hover:bg-[var(--border)] transition-colors"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <path d="M16 17l5-5-5-5" />
        <path d="M21 12H7" />
      </svg>
      <span className="hidden sm:inline">退出</span>
    </button>
  )
}
