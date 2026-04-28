import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { label: "文章数量", value: "256+" },
    { label: "关注者", value: "12.5k+" },
    { label: "获赞数", value: "128.5k+" },
    { label: "访问量", value: "500k+" },
  ];

  const features = [
    {
      icon: "code",
      title: "AI编程技术",
      description: "分享最新的AI编程技术、大语言模型开发、自动化工具使用经验"
    },
    {
      icon: "lightbulb",
      title: "实战案例",
      description: "提供丰富的实战案例，帮助开发者快速上手AI编程"
    },
    {
      icon: "book-open",
      title: "教程分享",
      description: "从入门到精通，系统的AI编程学习路径"
    },
    {
      icon: "users",
      title: "社区交流",
      description: "与志同道合的开发者一起交流学习，共同进步"
    },
  ];

  const timeline = [
    { year: "2024", title: "开始分享", desc: "创建博客，开始分享AI编程技术" },
    { year: "2024", title: "快速成长", desc: "文章阅读量突破10万，粉丝超过5k" },
    { year: "2025", title: "持续更新", desc: "专注AI编程领域，持续输出优质内容" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-br from-[#ff7d00]/10 to-[#ff9500]/5 border border-[#ff7d00]/20 rounded-xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-gradient-juejin flex items-center justify-center">
            <span className="text-white text-4xl font-bold">AI</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">AI编程之家</h1>
            <p className="text-[var(--muted-foreground)] mb-4">专注AI编程技术分享，助力开发者成长</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-gradient-juejin">{stat.value}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">关于我们</h2>
            <div className="space-y-4 text-[var(--muted-foreground)]">
              <p>
                AI编程之家成立于2024年，致力于为开发者提供最前沿的AI编程技术分享。我们相信，人工智能正在改变软件开发的方式，掌握AI编程技能将成为未来开发者的核心竞争力。
              </p>
              <p>
                我们的内容涵盖大语言模型开发、AI辅助编程工具（如Cursor、GitHub Copilot）、Python机器学习，自然语言处理等多个领域。通过实战案例和系统教程，帮助开发者快速掌握AI编程技能。
              </p>
              <p>
                无论你是编程新手还是资深开发者，都能在这里找到适合自己的学习内容。我们欢迎每一位热爱技术、追求进步的开发者加入我们的社区。
              </p>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">发展历程</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)]"></div>
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12 pb-8 last:pb-0">
                  <div className="absolute left-2 w-5 h-5 rounded-full bg-gradient-juejin flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-[var(--secondary)] rounded-lg p-4">
                    <span className="text-xs px-2 py-1 bg-[#ff7d00]/20 text-[#ff7d00] rounded-full mr-2">{item.year}</span>
                    <span className="text-[var(--foreground)] font-medium">{item.title}</span>
                    <p className="text-sm text-[var(--muted-foreground)] mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">我们的特色</h2>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-juejin/10 flex items-center justify-center flex-shrink-0">
                    {feature.icon === "code" && (
                      <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    )}
                    {feature.icon === "lightbulb" && (
                      <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {feature.icon === "book-open" && (
                      <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {feature.icon === "users" && (
                      <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-[var(--foreground)] font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#ff7d00]/10 to-[#ff9500]/5 border border-[#ff7d00]/20 rounded-xl p-6">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">联系我们</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>zhongchaohui888@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
                <span>微信: AISupportCenter</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                </svg>
                <span>AI编程之家</span>
              </div>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gradient-juejin text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              查看更多文章
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
