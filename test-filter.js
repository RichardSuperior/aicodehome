const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'content');

function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id,
      title: data.title || '无标题',
      tags: data.tags || [],
    };
  });
  return posts;
}

function getPostsByTag(tag) {
  const posts = getAllPosts();
  return posts.filter(post => post.tags?.includes(tag));
}

console.log('=== 测试筛选功能 ===\n');

const allPosts = getAllPosts();
console.log(`总文章数: ${allPosts.length}`);
console.log('所有文章:');
allPosts.forEach(post => {
  console.log(`  - ${post.title}: ${JSON.stringify(post.tags)}`);
});

console.log('\n=== 测试 AI 筛选 ===');
const aiPosts = getPostsByTag('AI');
console.log(`AI 相关文章数: ${aiPosts.length}`);
aiPosts.forEach(post => {
  console.log(`  - ${post.title}`);
});

console.log('\n=== 测试 Python 筛选 ===');
const pythonPosts = getPostsByTag('Python');
console.log(`Python 相关文章数: ${pythonPosts.length}`);
pythonPosts.forEach(post => {
  console.log(`  - ${post.title}`);
});

console.log('\n=== 测试 前端 筛选 ===');
const frontendPosts = getPostsByTag('前端');
console.log(`前端相关文章数: ${frontendPosts.length}`);
frontendPosts.forEach(post => {
  console.log(`  - ${post.title}`);
});

console.log('\n=== 测试 深度学习 筛选 ===');
const dlPosts = getPostsByTag('深度学习');
console.log(`深度学习相关文章数: ${dlPosts.length}`);
dlPosts.forEach(post => {
  console.log(`  - ${post.title}`);
});
