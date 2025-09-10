import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/mdx-components";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: { slug: string } };

export default function PostPage({ params }: Props) {
  const { slug } = params;
  const { content } = getPostBySlug(slug); // Ensure the post exists
  return <MDXRemote source={content} components={MDXComponents} />;
}
