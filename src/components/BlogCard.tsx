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
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-500 ease-in-out transform ${
          isHovered ? 'shadow-xl scale-[1.02]' : 'shadow-md scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className={`object-cover transition-transform duration-500 ease-in-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-200">
            <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
            <span>{post.readTime} min read</span>
          </div>
          <h2 className={`text-xl font-semibold mb-3 transition-all duration-500 ease-in-out ${
            isHovered ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
          }`}>
            {post.title}
          </h2>
          <div className="relative overflow-hidden">
            <p 
              className={`text-gray-600 dark:text-gray-300 transition-all duration-500 ease-in-out ${
                isHovered ? 'max-h-96 opacity-100' : 'max-h-12 opacity-90'
              }`}
              style={{
                lineHeight: '1.5',
                display: '-webkit-box',
                WebkitLineClamp: isHovered ? 'unset' : 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {post.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
} 