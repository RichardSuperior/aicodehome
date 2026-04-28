import Link from "next/link";
import { getPostById } from "../../../lib/post";

type Props = {
  params: Promise<{
    postId: string;
  }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { postId } = await params;
  const post = getPostById(postId);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="w-20 h-20 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#f85149]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">文章未找到</h2>
          <p className="text-[var(--muted-foreground)] mb-6">该文章可能已被删除或不存在</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-juejin text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            返回博客列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/blog" className="flex items-center gap-1 text-sm text-[#58a6ff] hover:text-[#79c0ff] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                  返回列表
                </Link>
                <span className="text-[var(--border)]">/</span>
                {post.tags && post.tags.length > 0 && (
                  <span className="text-sm text-[var(--muted-foreground)]">{post.tags[0]}</span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-[var(--foreground)] mb-6">{post.title}</h1>

              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[var(--border)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-juejin flex items-center justify-center">
                    <span className="text-white font-semibold">AI</span>
                  </div>
                  <div>
                    <p className="text-[var(--foreground)] font-medium">AI编程之家</p>
                    <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                      <span>{post.date}</span>
                      <span>阅读 5 分钟</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-[var(--secondary)] border border-[var(--border)] rounded-full text-sm text-[var(--muted-foreground)] hover:text-[#ff7d00] hover:border-[#ff7d00]/50 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    关注
                  </button>
                </div>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#ff7d00]/10 border border-[#ff7d00]/30 text-[#ff7d00] text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <article className="prose prose-invert max-w-none">
                <div className="text-[var(--foreground)] leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">作者信息</span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-juejin flex items-center justify-center">
                  <span className="text-white text-lg font-bold">AI</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[var(--foreground)] font-semibold">AI编程之家</p>
                    <span className="px-2 py-0.5 text-xs bg-[#ff7d00]/20 text-[#ff7d00] rounded">原创作者</span>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">专注AI编程技术分享，助力开发者成长</p>
                  <div className="flex items-center gap-6 mt-3 text-xs text-[var(--muted-foreground)]">
                    <span>12.5k 关注者</span>
                    <span>256 篇文章</span>
                    <span>128.5k 获赞</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-juejin text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                  关注
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">评论 (32)</span>
            </div>
            <div className="p-4">
              <div className="flex gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 15s1.5-2 4-2 4 2 4 2M9 9h.01M15 9h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="写下你的评论..."
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:border-[#ff7d00] focus:ring-1 focus:ring-[#ff7d00]/50 resize-none transition-all"
                    rows={3}
                  />
                  <div className="flex items-center justify-end mt-2">
                    <button className="px-4 py-2 bg-gradient-juejin text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                      发表评论
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 p-3 bg-[var(--secondary)]/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#58a6ff] to-[#a371f7] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">PY</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[var(--foreground)] font-medium">Python爱好者</span>
                      <span className="text-xs text-[var(--muted-foreground)]">2小时前</span>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-2">
                      文章写得很好，收获很大！特别是关于AI编程的实战案例部分，非常实用。
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                      <button className="flex items-center gap-1 hover:text-[#ff7d00] transition-colors">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        点赞
                      </button>
                      <button className="flex items-center gap-1 hover:text-[#ff7d00] transition-colors">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        回复
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 p-3 bg-[var(--secondary)]/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a371f7] to-[#db61a2] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">AI</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[var(--foreground)] font-medium">AI学习达人</span>
                      <span className="text-xs text-[var(--muted-foreground)]">5小时前</span>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-2">
                      期待更多关于Cursor的进阶教程，非常感谢分享！
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                      <button className="flex items-center gap-1 hover:text-[#ff7d00] transition-colors">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        点赞
                      </button>
                      <button className="flex items-center gap-1 hover:text-[#ff7d00] transition-colors">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        回复
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden sticky top-20">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
              <span className="font-semibold text-[var(--foreground)]">分享</span>
              <span className="text-xs text-[var(--muted-foreground)]">让更多人看到</span>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-4 gap-2">
                <button className="flex flex-col items-center gap-1 p-3 bg-[var(--secondary)] rounded-lg hover:bg-[var(--border)] transition-colors">
                  <svg className="w-5 h-5 text-[#3fb950]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="text-xs text-[var(--muted-foreground)]">微信</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-3 bg-[var(--secondary)] rounded-lg hover:bg-[var(--border)] transition-colors">
                  <svg className="w-5 h-5 text-[#58a6ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  <span className="text-xs text-[var(--muted-foreground)]">微博</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-3 bg-[var(--secondary)] rounded-lg hover:bg-[var(--border)] transition-colors">
                  <svg className="w-5 h-5 text-[#db61a2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                  </svg>
                  <span className="text-xs text-[var(--muted-foreground)]">LinkedIn</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-3 bg-[var(--secondary)] rounded-lg hover:bg-[var(--border)] transition-colors">
                  <svg className="w-5 h-5 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="text-xs text-[var(--muted-foreground)]">复制</span>
                </button>
              </div>
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

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">相关文章</span>
            </div>
            <div className="p-3">
              <Link href="#" className="block px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors line-clamp-2">
                AI编程入门指南：从零开始学习人工智能开发
              </Link>
              <Link href="#" className="block px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors line-clamp-2">
                深入理解大语言模型：Transformer架构详解
              </Link>
              <Link href="#" className="block px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors line-clamp-2">
                Python机器学习实战：构建你的第一个AI模型
              </Link>
              <Link href="#" className="block px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors line-clamp-2">
                Cursor高级技巧：让AI帮你写更优质的代码
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
