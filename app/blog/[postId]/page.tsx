import Link from "next/link";
import { getPostById, getDailyRecommendedPosts, getRelatedPosts, getRelatedTags } from "../../../lib/post";
import ShareButton from "../../components/ShareButton";

type Props = {
  params: Promise<{
    postId: string;
  }>;
};

const mockComments = [
  { id: 1, name: "全栈开发老王", avatar: "王", color: "from-[#58a6ff] to-[#a371f7]", time: "10分钟前", content: "终于有人把AI编程讲得这么透彻了！之前看了很多教程都是一知半解，这篇文章从原理到实践都有详细讲解，特别是代码示例部分非常实用，已经应用到我现在的项目中了。" },
  { id: 2, name: "Python狂热爱好者", avatar: "Py", color: "from-[#3fb950] to-[#58a6ff]", time: "25分钟前", content: "作为一个有三年Python开发经验的程序员，这篇文章提到的技巧让我眼前一亮。尤其是关于如何利用AI提升开发效率的部分，真的帮了我大忙，太感谢作者了！" },
  { id: 3, name: "计算机专业研究生", avatar: "研", color: "from-[#a371f7] to-[#db61a2]", time: "1小时前", content: "正在做AI相关的研究，这篇文章给了我很多启发。内容深度适中，既有理论讲解也有实战代码，对我的论文写作和实验都有很大帮助，强烈推荐！" },
  { id: 4, name: "前端转行选手", avatar: "前", color: "from-[#db61a2] to-[#ff7d00]", time: "2小时前", content: "从土木工程转行到前端开发不到一年，之前对AI编程完全零基础。这篇文章让我第一次真正理解了AI辅助编程的概念，感谢作者深入浅出的讲解！" },
  { id: 5, name: "十年架构师老李", avatar: "李", color: "from-[#ff7d00] to-[#ff9500]", time: "3小时前", content: "在IT行业摸爬滚打这么多年，见过太多华而不实的技术文章。这篇是真的干货，从架构设计到代码实现都很专业，体现了作者深厚的技术功底，必须点赞！" },
];

export default async function BlogPostPage({ params }: Props) {
  const { postId } = await params;
  const post = getPostById(postId);

  const dailyPosts = getDailyRecommendedPosts(3);
  const relatedPosts = post ? getRelatedPosts(post.id, post.tags || [], 4) : [];
  const relatedTags = post ? getRelatedTags(post.tags || [], 12) : [];

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
                  <div className="flex items-center gap-0.5 px-3 py-1.5 bg-[#ff7d00]/10 border border-[#ff7d00]/30 rounded-full">
                    {[...Array(3)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-[#ff7d00]" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
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

              <article className="markdown-content">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
                <div className="flex items-center gap-0.5 px-4 py-2 bg-[#ff7d00]/10 border border-[#ff7d00]/30 rounded-lg">
                    {[...Array(3)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-[#ff7d00]" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">评论 ({mockComments.length})</span>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {mockComments.map((comment) => (
                  <div key={comment.id} className="flex gap-3 p-3 bg-[var(--secondary)]/50 rounded-lg">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${comment.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-sm font-medium">{comment.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[var(--foreground)] font-medium">{comment.name}</span>
                        <span className="text-xs text-[var(--muted-foreground)]">{comment.time}</span>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <ShareButton />

          <div className="bg-gradient-to-br from-[#ff7d00]/10 to-[#ff9500]/5 border border-[#ff7d00]/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-[#ff7d00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">每日推荐</span>
            </div>
            <div className="space-y-3">
              {dailyPosts.map((dailyPost) => (
                <Link
                  key={dailyPost.id}
                  href={`/blog/${dailyPost.id}`}
                  className="block text-sm text-[var(--foreground)] hover:text-[#ff7d00] transition-colors line-clamp-2"
                >
                  {dailyPost.title}
                </Link>
              ))}
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
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="block px-3 py-2 rounded-lg text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors line-clamp-2"
                >
                  {relatedPost.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <svg className="w-5 h-5 text-[#58a6ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.317 4.37a19.791 19.791 0 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
              </svg>
              <span className="font-semibold text-[var(--foreground)]">标签云</span>
              <span className="ml-auto text-xs text-[var(--muted-foreground)]">相关标签</span>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-3">
                {relatedTags.map((tag, index) => {
                  const isRelated = post.tags?.includes(tag.name);
                  const sizeClass = isRelated ? 'text-sm' : 'text-xs';
                  const paddingClass = isRelated ? 'px-4 py-2' : 'px-3 py-1.5';
                  return (
                    <Link
                      key={tag.name}
                      href={`/blog?tag=${encodeURIComponent(tag.name)}`}
                      className={`${paddingClass} ${sizeClass} rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md ${
                        isRelated
                          ? "bg-gradient-to-r from-[#ff7d00] to-[#ff9500] text-white shadow-lg shadow-[#ff7d00]/20"
                          : "bg-gradient-to-r from-[var(--secondary)] to-[var(--border)] text-[var(--muted-foreground)] hover:from-[var(--border)] hover:to-[var(--secondary)]"
                      }`}
                    >
                      <span className="font-medium">#{tag.name}</span>
                      <span className={`ml-1 ${isRelated ? 'opacity-90' : 'opacity-60'}`}>({tag.count})</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}