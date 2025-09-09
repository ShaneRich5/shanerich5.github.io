import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMetaData {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export interface Post extends PostMetaData {
  content: string;
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
}
