import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/mdx-components";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const { content } = getPostBySlug(slug);

  return (
    <article className="prose dark:prose-invert mx-auto">
      <MDXRemote source={content} components={MDXComponents} />
    </article>
  );
}
