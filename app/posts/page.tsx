import { getAllPosts } from "../../lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/posts/${p.slug}`}>
              <span className="text-lg font-medium">{p.meta.title}</span>
            </Link>
            <div className="text-sm text-gray-500">{p.meta.date}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
