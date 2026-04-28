import fs from "fs";
import path from "path";
import matter from "gray-matter";
//import { Marked } from "marked";  
import { micromark } from "micromark";


// 1.定义Markdown文章存储文件夹路径
const postsDirectory = path.join(process.cwd(), "content");

// 2.定义单篇的文章类型
export type Post = {
  id: string; // 文章ID，通常是文件名
  title: string; // 文章标题
  date: string; // 文章发布日期
  content: string; // 文章内容（Markdown格式）
  excerpt: string; // 文章简介（从内容中提取的前几行文本）
  tags?: string[]; // 文章标签（可选）
};



// 3. 获取所有文章的列表，读取content文件夹中的所有Markdown文件，解析它们的内容和元数据，并返回一个包含所有文章信息的数组
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory); // 读取content文件夹中的所有文件名
  const posts: Post[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // 从文件名中提取文章ID（去掉.md后缀）
    const fullPath = path.join(postsDirectory, fileName); // 获取文章的完整路径
    const fileContents = fs.readFileSync(fullPath, "utf8"); // 读取文章内容
    const { data, content } = matter(fileContents); // 使用gray-matter解析Markdown文件，提取元数据和内容
    const dateStr = String(data.date ?? "未知日期"); // 将日期转换为字符串
    

    // 从内容中提取前200个字符作为简介
    const excerpt = content.substring(0, 200) + (content.length > 200 ? "..." : "");

    return {
      id,
      title: data.title || "无标题", // 如果没有标题，使用默认值
      date: dateStr, // 如果没有日期，使用默认值
      content,
      excerpt,
      tags: data.tags || [], // 从元数据中提取标签，如果没有则使用空数组
    };
  });
  
  // 按照日期降序排序文章列表
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return posts;
}

// 4. 根据文章ID获取单篇文章的详情，读取对应的Markdown文件，解析内容和元数据，并返回文章信息
export function getPostById(id: string): Post | null {
  const fullPath = path.join(postsDirectory, `${id}.md`); // 获取文章的完整路径
  if (!fs.existsSync(fullPath)) {
    return null; // 如果文件不存在，返回null
  }
  const fileContents = fs.readFileSync(fullPath, "utf8"); // 读取文章内容
  const { data, content } = matter(fileContents); // 使用gray-matter解析Markdown文件，提取元数据和内容
  const dateStr = String(data.date ?? "未知日期"); // 将日期转换为字符串
  const contentHTML = markdownToHtml(content); // 将Markdown内容转换为HTML格式
  const tags = data.tags || []; // 从元数据中提取标签，如果没有则使用空数组

  return {
    id,
    title: data.title || "无标题", // 如果没有标题，使用默认值
    date: dateStr, // 如果没有日期，使用默认值
    content: contentHTML, // 返回HTML格式的内容
    excerpt: content.substring(0, 200) + (content.length > 200 ? "..." : ""), // 从内容中提取前200个字符作为简介
    tags: tags || [], // 返回标签信息
  };
}

// 5.将Markdown格式转出HTML格式
function markdownToHtml(mdText: string): string {
  return micromark(mdText); // 使用marked库将Markdown转换为HTML
}
