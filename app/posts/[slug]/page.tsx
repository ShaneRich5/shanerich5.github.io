import { getPostSlugs, getAllPosts } from "@/lib/posts";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/mdx-components";

// Pre-generate paths
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: { slug: string } };

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/posts/${slug}.mdx`);

  return (
    <article className="prose mx-auto p-6">
      <MDXProvider components={MDXComponents}>
        {/* <PostContent /> */}
        <Post />
      </MDXProvider>
    </article>
  );
}

export const dynamicParams = false;
