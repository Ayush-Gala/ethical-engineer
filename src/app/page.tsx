import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to The Ethical Engineer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Exploring the intersection of technology, ethics, and engineering through thoughtful writing and practical insights.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">No blog posts yet</h2>
          <p className="text-gray-600">
            Check back soon for new articles about ethical engineering practices and insights.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
