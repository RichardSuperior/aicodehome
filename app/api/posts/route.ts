import { NextResponse } from 'next/server';
import { getAllPosts, getAllTags, getPostsByTag } from '../../../lib/post';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag');
  const tech = searchParams.get('tech');

  let posts;
  if (tech && tech !== 'all') {
    posts = getPostsByTag(tech);
  } else if (tag) {
    posts = getPostsByTag(tag);
  } else {
    posts = getAllPosts();
  }

  const allTags = getAllTags();

  return NextResponse.json({ posts, tags: allTags });
}
