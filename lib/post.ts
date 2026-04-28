import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const postsDirectory = path.join(process.cwd(), "content");

export type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  tags?: string[];
  views?: number;
  likes?: number;
  isRecommended?: boolean;
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return dateStr;
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts: Post[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const rawDate = String(data.date ?? new Date().toISOString());

    const excerpt = content.substring(0, 200) + (content.length > 200 ? "..." : "");

    return {
      id,
      title: data.title || "无标题",
      date: formatDate(rawDate),
      rawDate: rawDate,
      content,
      excerpt,
      tags: data.tags || [],
      views: data.views || Math.floor(Math.random() * 5000) + 500,
      likes: data.likes || Math.floor(Math.random() * 500) + 50,
      isRecommended: data.isRecommended || false,
    };
  });

  posts.sort((a, b) => new Date((b as Post & { rawDate: string }).rawDate).getTime() - new Date((a as Post & { rawDate: string }).rawDate).getTime());
  return posts;
}

export function getPostById(id: string): Post | null {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const rawDate = String(data.date ?? new Date().toISOString());
  const contentHTML = markdownToHtml(content);
  const tags = data.tags || [];

  return {
    id,
    title: data.title || "无标题",
    date: formatDate(rawDate),
    content: contentHTML,
    excerpt: content.substring(0, 200) + (content.length > 200 ? "..." : ""),
    tags: tags || [],
    views: data.views || Math.floor(Math.random() * 5000) + 500,
    likes: data.likes || Math.floor(Math.random() * 500) + 50,
    isRecommended: data.isRecommended || false,
  };
}

export function getLatestPosts(): Post[] {
  return getAllPosts();
}

export function getHotPosts(): Post[] {
  const posts = getAllPosts();
  return posts.sort((a, b) => (b.views || 0) - (a.views || 0));
}

export function getRecommendedPosts(): Post[] {
  const posts = getAllPosts();
  const recommended = posts.filter(post => post.isRecommended);
  if (recommended.length === 0) {
    return posts.slice(0, 3);
  }
  return recommended;
}

export function getAllTags(): { name: string; count: number }[] {
  const posts = getAllPosts();
  const tagCount: Record<string, number> = {};

  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts();
  return posts.filter(post => {
    if (!post.tags || post.tags.length === 0) return false;
    // 精确匹配
    if (post.tags.includes(tag)) return true;
    // 模糊匹配：检查标签是否包含搜索词
    return post.tags.some(t => t.includes(tag));
  });
}

export function getRelatedPosts(currentPostId: string, currentTags: string[], limit: number = 4): Post[] {
  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter(post => post.id !== currentPostId);

  if (currentTags.length === 0) {
    const shuffled = [...otherPosts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, limit);
  }

  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    if (post.tags) {
      currentTags.forEach(tag => {
        if (post.tags?.includes(tag)) {
          score += 1;
        }
      });
    }
    return { post, score };
  });

  scoredPosts.sort((a, b) => b.score - a.score);

  const matchedPosts = scoredPosts.filter(item => item.score > 0).map(item => item.post);
  const unmatchedPosts = scoredPosts.filter(item => item.score === 0).map(item => item.post);

  const shuffledUnmatched = [...unmatchedPosts].sort(() => Math.random() - 0.5);
  const result = [...matchedPosts, ...shuffledUnmatched].slice(0, limit);

  return result;
}

export function getDailyRecommendedPosts(limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  const shuffled = [...allPosts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, limit);
}

export function getRelatedTags(currentTags: string[], limit: number = 12): { name: string; count: number }[] {
  const allTags = getAllTags();

  const relatedTags = allTags
    .map(tag => ({
      ...tag,
      isRelated: currentTags.includes(tag.name)
    }))
    .sort((a, b) => {
      if (a.isRelated !== b.isRelated) {
        return a.isRelated ? -1 : 1;
      }
      return b.count - a.count;
    })
    .slice(0, limit);

  return relatedTags.map(tag => ({ name: tag.name, count: tag.count }));
}

function markdownToHtml(mdText: string): string {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
  });

  md.set({
    highlight: function (str: string, lang: string) {
      return `<pre class="code-block"><code class="language-${lang}">${md.utils.escapeHtml(str)}</code></pre>`;
    },
  });

  md.renderer.rules.heading_open = function (tokens: any[], idx: number) {
    const level = tokens[idx].tag;
    return `<${level} class="md-heading md-${level}">`;
  };

  md.renderer.rules.paragraph_open = function () {
    return `<p class="md-paragraph">`;
  };

  md.renderer.rules.blockquote_open = function () {
    return `<blockquote class="md-blockquote">`;
  };

  md.renderer.rules.code_inline = function (tokens: any[], idx: number) {
    return `<code class="md-code-inline">${tokens[idx].content}</code>`;
  };

  const result = md.render(mdText);
  return result;
}