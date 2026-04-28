import Link from "next/link";
import { getAllPosts } from "../../lib/post";

export default function BlogListPage() {
  const posts = getAllPosts();

  const tabs = [
    { id: "all", label: "全部" },
    { id: "hot", label: "热门", badge: "HOT" },
    { id: "new", label: "最新", badge: "NEW" },
    { id: "recommend", label: "推荐" },
  ];

  const tags = [
    { name: "Python", count: "128", active: false },
    { name: "AI编程", count: "256", active: true },
    { name: "前端", count: "89", active: false },
    { name: "后端", count: "76", active: false },
    { name: "LLM", count: "45", active: false },
    { name: "Cursor", count: "32", active: false },
    { name: "DeepSeek", count: "28", active: false },
    { name: "更多", count: "", active: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-1">AI编程技术文章</h1>
          <p className="text-sm text-[var(--muted-foreground)]">探索AI编程的最新技术和实战经验</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-juejin text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
            写文章
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-1 px-4 py-3 border-b border-[var(--border)]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    tab.id === "hot"
                      ? "text-[#ff7d00] bg-[#ff7d00]/10"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
                  }`}
                >
                  {tab.label}
                  {tab.badge && (
                    <span className="px-1.5 py-0.5 text-xs font-bold bg-gradient-juejin text-white rounded-full">
                      {tab.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[#ff7d00]/30 hover:shadow-lg hover:shadow-[#ff7d00]/5 transition-all duration-200"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-16 bg-gradient-to-br from-[var(--secondary)] to-[var(--border)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-12 h-12 text-[#ff7d00]/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        {post.tags && post.tags.length > 0 && (
                          <span className="px-2 py-0.5 text-xs tag-tech">
                            {post.tags[0]}
                          </span>
                        )}
                        <span className="text-xs text-[var(--muted-foreground)]">{post.date}</span>
                      </div>
                      <h2 className="text-lg font-semibold text-[var(--foreground)] mb-2 line-clamp-1 group-hover:text-[#ff7d00] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01" />
                            </svg>
                            AI编程之家
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            1.2k
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            32
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#58a6ff] opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>阅读全文</span>
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="px-4 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[#ff7d00]/50 transition-colors">
              <svg className="w-4 h-4 inline mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              上一页
            </button>
            <span className="px-4 py-2 bg-gradient-juejin text-white text-sm font-medium rounded-lg">1</span>
            <button className="px-4 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[#ff7d00]/50 transition-colors">2</button>
            <button className="px-4 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[#ff7d00]/50 transition-colors">3</button>
            <button className="px-4 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[#ff7d00]/50 transition-colors">
              下一页
              <svg className="w-4 h-4 inline ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.317 4.37a19.791 19.791 0 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">标签分类</span>
            </div>
            <div className="p-3">
              {tags.map((tag) => (
                <Link
                  key={tag.name}
                  href={`/blog?tag=${tag.name}`}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                    tag.active
                      ? "bg-[#ff7d00]/10 text-[#ff7d00]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]"
                  }`}
                >
                  <span>{tag.name}</span>
                  {tag.count && <span className="text-xs opacity-70">{tag.count}</span>}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#ff7d00]/10 to-[#ff9500]/5 border border-[#ff7d00]/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">每日推荐</span>
            </div>
            <div className="space-y-3">
              <Link href="#" className="block text-sm text-[var(--foreground)] hover:text-[#ff7d00] transition-colors line-clamp-2">
                如何用AI工具提升10倍开发效率？
              </Link>
              <Link href="#" className="block text-sm text-[var(--foreground)] hover:text-[#ff7d00] transition-colors line-clamp-2">
                2024年最值得学习的AI编程技能
              </Link>
              <Link href="#" className="block text-sm text-[var(--foreground)] hover:text-[#ff7d00] transition-colors line-clamp-2">
                从零开始学习大语言模型开发
              </Link>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-[#58a6ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">推荐关注</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-juejin flex items-center justify-center">
                  <span className="text-white text-sm font-medium">AI</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[var(--foreground)]">AI编程之家</p>
                  <p className="text-xs text-[var(--muted-foreground)]">12.5k 关注者</p>
                </div>
                <button className="px-3 py-1 text-xs bg-[var(--secondary)] border border-[var(--border)] rounded-full text-[var(--muted-foreground)] hover:text-[#ff7d00] hover:border-[#ff7d00]/50 transition-colors">
                  关注
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a371f7] to-[#db61a2] flex items-center justify-center">
                  <span className="text-white text-sm font-medium">PY</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[var(--foreground)]">Python学习</p>
                  <p className="text-xs text-[var(--muted-foreground)]">8.3k 关注者</p>
                </div>
                <button className="px-3 py-1 text-xs bg-[var(--secondary)] border border-[var(--border)] rounded-full text-[var(--muted-foreground)] hover:text-[#ff7d00] hover:border-[#ff7d00]/50 transition-colors">
                  关注
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
