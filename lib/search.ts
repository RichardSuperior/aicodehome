// 搜索的工具函数
import MiniSearch from "minisearch";
import { getAllPosts } from "./post";

export function getSearchIndex() {
  const posts = getAllPosts();

  // 创建MiniSearch实例，指定要索引的字段和搜索选项
  const miniSearch = new MiniSearch({
    fields: ["title", "excerpt","tags"], // 要索引的字段
    storeFields: ["id", "title", "date", "excerpt"], // 搜索结果中要返回的字段
    searchOptions: {
      prefix: true, // 支持前缀搜索
      fuzzy: 0.2, // 启用模糊搜索，允许一定程度的拼写错误
    },
  });

  // 将文章数据添加到MiniSearch索引中
  miniSearch.addAll(posts);

  return miniSearch;
}