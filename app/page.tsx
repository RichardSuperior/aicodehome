import Link from "next/link";
import { getAllPosts } from "../lib/post";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 5);

  const trendingTopics = [
    { name: "AI编程", count: "12.5k", hot: true },
    { name: "Python", count: "8.3k", hot: true },
    { name: "前端", count: "6.7k", new: true },
    { name: "DeepSeek", count: "5.2k", hot: true },
    { name: "Cursor", count: "4.8k", new: true },
    { name: "LLM", count: "3.9k" },
  ];

  const hotArticles = [
    { id: "1", title: "别再裸用 Claude Code 了！32 个亲测Skills", views: "45k", author: "蝎子莱莱" },
    { id: "2", title: "体验完阿里「悟空」，我想把电脑里的龙虾换掉", views: "26k", author: "AI袋鼠帝" },
    { id: "3", title: "全网最简单的 OpenClaw 部署教程", views: "22k", author: "AI编程之家" },
    { id: "4", title: "搞懂 Cursor 后，我一行代码都不敲了", views: "3.4k", author: "清汤饺子" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden mb-6">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <span className="font-semibold text-[var(--foreground)]">沸点</span>
              </div>
              <Link href="#" className="text-sm text-[#58a6ff] hover:text-[#79c0ff] transition-colors">
                查看全部
              </Link>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex gap-3 p-3 bg-[var(--secondary)]/50 rounded-lg hover:bg-[var(--secondary)] transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gradient-juejin flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">AI</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[var(--foreground)] text-sm leading-relaxed">
                    <span className="text-[#58a6ff] font-medium">AI编程之家</span>
                    爆料称：快手研发线发布通知，收紧了对第三方编程软件的使用权限，只要在办公电脑上点开 Cursor，就直接闪退！
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-[var(--muted-foreground)]">
                    <span>151k 沸点</span>
                    <span>544 评论</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      12.5k
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 p-3 bg-[var(--secondary)]/50 rounded-lg hover:bg-[var(--secondary)] transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a371f7] to-[#db61a2] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">AI</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[var(--foreground)] text-sm leading-relaxed">
                    <span className="text-[#db61a2] font-medium">AI袋鼠帝</span>
                    豆包也开始抢程序员饭碗了，一个月只要9块9。Doubao-Seed-Code编程能力确实没有达到全球顶尖水平，但它是国内首个支持视觉理解的编程模型！
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-[var(--muted-foreground)]">
                    <span>78k 沸点</span>
                    <span>301 评论</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-semibold text-[var(--foreground)]">最新文章</span>
              </div>
              <Link href="/blog" className="text-sm text-[#58a6ff] hover:text-[#79c0ff] transition-colors">
                查看更多
              </Link>
            </div>

            <div className="divide-y divide-[var(--border)]">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="flex gap-4 p-4 hover:bg-[var(--secondary)]/50 transition-colors"
                >
                  <div className="w-20 h-14 bg-gradient-to-br from-[var(--secondary)] to-[var(--border)] rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <svg className="w-10 h-10 text-[#ff7d00]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[var(--foreground)] font-medium mb-1 line-clamp-1 group-hover:text-[#ff7d00] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] text-sm line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01" />
                        </svg>
                        AI编程之家
                      </span>
                      <span>{post.date}</span>
                      {post.tags && post.tags.length > 0 && (
                        <span className="px-2 py-0.5 text-xs tag-tech">
                          {post.tags[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">热门话题</span>
            </div>
            <div className="p-2">
              {trendingTopics.map((topic, index) => (
                <Link
                  key={topic.name}
                  href={`/blog?tag=${topic.name}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--secondary)] transition-colors"
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    index < 3 ? "bg-gradient-juejin text-white" : "bg-[var(--secondary)] text-[var(--muted-foreground)]"
                  }`}>
                    {index + 1}
                  </span>
                  <span className="flex-1 text-left text-sm text-[var(--foreground)]">{topic.name}</span>
                  {topic.hot && (
                    <span className="text-xs px-1.5 py-0.5 bg-[#f85149]/20 text-[#f85149] rounded">HOT</span>
                  )}
                  {topic.new && (
                    <span className="text-xs px-1.5 py-0.5 bg-[#3fb950]/20 text-[#3fb950] rounded">NEW</span>
                  )}
                  <span className="text-xs text-[var(--muted-foreground)] flex-shrink-0">{topic.count}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">热门文章</span>
            </div>
            <div className="p-2">
              {hotArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="flex items-start gap-2 px-3 py-2 rounded-lg hover:bg-[var(--secondary)] transition-colors"
                >
                  <span className={`text-xs font-bold flex-shrink-0 mt-1 ${
                    index === 0 ? "text-[#ff7d00]" : index === 1 ? "text-[#58a6ff]" : index === 2 ? "text-[#a371f7]" : "text-[var(--muted-foreground)]"
                  }`}>
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[var(--foreground)] line-clamp-2 mb-1">{article.title}</p>
                    <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                      <span>{article.author}</span>
                      <span>·</span>
                      <span>{article.views}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#ff7d00]/10 to-[#ff9500]/5 border border-[#ff7d00]/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">加入开发者社区</span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              与 12.5k+ 开发者一起探索 AI 编程的无限可能
            </p>
            <button className="w-full px-4 py-2 bg-gradient-juejin text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
              立即加入
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
