'use client'

import { useAuth } from './AuthContext'
import Link from 'next/link'

export default function UserStatus() {
  const { user, loading, signOut, isConfigured } = useAuth()

  if (!isConfigured) {
    return null
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-lg">
        <svg className="w-4 h-4 animate-spin text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span className="text-sm text-[var(--muted-foreground)]">加载中...</span>
      </div>
    )
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-juejin flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01" />
          </svg>
        </div>
        <span className="text-sm font-medium text-[var(--foreground)]">{user.email?.split('@')[0] || user.id}</span>
        <button
          onClick={signOut}
          className="px-3 py-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] rounded-lg transition-colors"
        >
          退出
        </button>
      </div>
    )
  }

  return (
    <Link href="/login" className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-lg hover:border-[#ff7d00]/50 transition-colors">
      <svg className="w-4 h-4 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01" />
      </svg>
      <span className="text-sm text-[var(--muted-foreground)]">登录</span>
    </Link>
  )
}