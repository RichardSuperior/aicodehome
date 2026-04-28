import Link from "next/link";

export default function SearchPage() {
  const results = [
    {
      title: "深入理解大语言模型：Transformer架构详解",
      excerpt: "本文深入剖析Transformer架构的核心原理，包括自注意力机制、多头注意力、位置编码等关键概念...",
      tags: ["LLM", "AI"],
      views: "3.2k",
      date: "2025-01-15"
    },
    {
      title: "Cursor高级技巧：让AI帮你写更优质的代码",
      excerpt: "Cursor作为一款AI驱动的代码编辑器，提供了强大的代码补全和理解能力...",
      tags: ["Cursor", "AI编程"],
      views: "2.8k",
      date: "2025-01-14"
    },
    {
      title: "Python机器学习实战：构建你的第一个AI模型",
      excerpt: "从零开始学习Python机器学习，使用scikit-learn构建分类和回归模型...",
      tags: ["Python", "机器学习"],
      views: "4.5k",
      date: "2025-01-13"
    },
    {
      title: "DeepSeek模型入门指南：开源大模型的探索之旅",
      excerpt: "DeepSeek是一款优秀的开源大语言模型，本文带你了解其特点和使用方法...",
      tags: ["DeepSeek", "LLM"],
      views: "1.9k",
      date: "2025-01-12"
    },
    {
      title: "AI编程入门指南：从零开始学习人工智能开发",
      excerpt: "对于想要入门AI编程的开发者来说，本文提供了系统的学习路径和资源推荐...",
      tags: ["AI编程", "入门"],
      views: "6.2k",
      date: "2025-01-11"
    },
  ];

  const hotTags = [
    "AI编程", "Python", "LLM", "Cursor", "机器学习", "DeepSeek", "前端", "后端"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 mb-6">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="搜索文章、标签、用户..."
              className="w-full pl-12 pr-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:border-[#ff7d00] focus:ring-1 focus:ring-[#ff7d00]/50 transition-all"
              defaultValue="AI编程"
            />
          </div>
          <button className="px-6 py-3 bg-gradient-juejin text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
            搜索
          </button>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-[var(--muted-foreground)]">热门搜索:</span>
          {hotTags.slice(0, 5).map((tag) => (
            <Link
              key={tag}
              href={`/search?q=${tag}`}
              className="text-sm text-[#58a6ff] hover:text-[#79c0ff] transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-[var(--muted-foreground)]">找到 <span className="text-[#ff7d00] font-semibold">5</span> 条相关结果</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-[#58a6ff] cursor-pointer">综合</span>
              <span className="text-[var(--muted-foreground)] cursor-pointer hover:text-[var(--foreground)] transition-colors">最新</span>
              <span className="text-[var(--muted-foreground)] cursor-pointer hover:text-[var(--foreground)] transition-colors">最热</span>
            </div>
          </div>

          <div className="space-y-4">
            {results.map((result, index) => (
              <Link
                key={index}
                href="/blog/1"
                className="block bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:border-[#ff7d00]/30 transition-all"
              >
                <h2 className="text-lg font-semibold text-[var(--foreground)] mb-2 line-clamp-1 group-hover:text-[#ff7d00] transition-colors">
                  {result.title}
                </h2>
                <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 mb-3">
                  {result.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {result.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs tag-tech">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                    <span>{result.date}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {result.views}
                    </span>
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
            <button className="px-4 py-2 bg-[var(--secondary)] border border-[var(--border)] rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[#ff7d00]/50 transition-colors">下一页</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.317 4.37a19.791 19.791 0 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">热门标签</span>
            </div>
            <div className="p-3">
              {hotTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
                >
                  <span>#{tag}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#58a6ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12h.01M12 12h.01M15 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">搜索历史</span>
            </div>
            <div className="p-3">
              <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                AI编程
              </Link>
              <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Cursor教程
              </Link>
              <Link href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Python机器学习
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#ff7d00]/10 to-[#ff9500]/5 border border-[#ff7d00]/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">推荐搜索</span>
            </div>
            <div className="space-y-2">
              <Link href="#" className="block px-3 py-2 bg-[var(--secondary)]/50 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors">
                DeepSeek 使用技巧
              </Link>
              <Link href="#" className="block px-3 py-2 bg-[var(--secondary)]/50 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors">
                LLM 大模型入门
              </Link>
              <Link href="#" className="block px-3 py-2 bg-[var(--secondary)]/50 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors">
                前端 AI 工具推荐
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
