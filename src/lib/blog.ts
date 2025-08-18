import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

// Function to calculate read time in minutes
function calculateReadTime(content: string): number {
  // Average reading speed: 200-250 words per minute
  // Using 225 words per minute as a reasonable average
  const wordsPerMinute = 225;
  
  // Count words in the content
  const wordCount = content.trim().split(/\s+/).length;
  
  // Calculate read time in minutes
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  // Return at least 1 minute
  return Math.max(1, readTimeMinutes);
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  content: string;
  readTime: number;
}

export function getAllBlogPosts(): BlogPost[] {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        description: matterResult.data.description || '',
        date: matterResult.data.date || new Date().toISOString(),
        thumbnail: matterResult.data.thumbnail || '/images/default-thumbnail.png',
        content: matterResult.content,
        readTime: calculateReadTime(matterResult.content),
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || 'Untitled',
      description: matterResult.data.description || '',
      date: matterResult.data.date || new Date().toISOString(),
      thumbnail: matterResult.data.thumbnail || '/images/default-thumbnail.png',
      content: matterResult.content,
      readTime: calculateReadTime(matterResult.content),
    };
  } catch {
    return null;
  }
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
} 