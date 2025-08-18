'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { BlogPost } from '@/lib/blog';
import { useState } from 'react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-200">
            <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
            <span>{post.readTime} min read</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {post.title}
          </h2>
          <p 
            className={`text-gray-600 dark:text-gray-300 overflow-hidden transition-all duration-300 ${
              isHovered ? 'line-clamp-none' : 'line-clamp-2'
            }`}
            style={{
              display: isHovered ? 'block' : '-webkit-box',
              WebkitLineClamp: isHovered ? 'unset' : 2,
              WebkitBoxOrient: isHovered ? 'unset' : 'vertical'
            }}
          >
            {post.description}
          </p>
        </div>
      </article>
    </Link>
  );
} 