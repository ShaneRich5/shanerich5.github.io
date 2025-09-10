const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-4xl px-6 py-4 flex justify-between">
          <h1 className="text-lg font-bold text-gray-900">My Blog</h1>
          <nav>
            <a href="/" className="text-gray-600 hover:text-gray-900 ml-6">
              Home
            </a>
            <a href="/posts" className="text-gray-600 hover:text-gray-900 ml-6">
              Posts
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} My Blog. Built with Next.js.
        </div>
      </footer>
    </div>
  );
};

export default PostLayout;
