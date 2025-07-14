# The Ethical Engineer

A modern, responsive portfolio blog website built with Next.js, React, and Tailwind CSS. This platform showcases ethical engineering practices, sustainable software development, and responsible technology insights.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with clean, modern UI
- **Blog System**: Markdown-based blog posts with metadata support
- **File-based Routing**: Next.js App Router for seamless navigation
- **SEO Optimized**: Built-in SEO features and metadata management
- **Fast Performance**: Optimized images and efficient loading
- **Accessible**: WCAG compliant design and navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: react-markdown with gray-matter
- **Date Handling**: date-fns
- **Typography**: @tailwindcss/typography

## 📁 Project Structure

```
ethical-engineer/
├── content/
│   └── blog/                 # Markdown blog posts
├── public/
│   ├── images/              # Static images
│   └── resume.pdf           # Resume file
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── blog/[slug]/     # Dynamic blog post pages
│   │   └── layout.tsx       # Root layout
│   ├── components/          # Reusable React components
│   └── lib/                 # Utility functions
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ethical-engineer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Blog Posts

1. Create a new markdown file in `content/blog/` with the following frontmatter:

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your post"
date: "2024-01-15"
thumbnail: "/images/your-image.jpg"
---

# Your content here...
```

2. The post will automatically appear on the homepage and be accessible at `/blog/your-filename`.

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `src/app/globals.css` for global styles
- Component-specific styles are in their respective files

### Content
- Update the About page content in `src/app/about/page.tsx`
- Modify the homepage description in `src/app/page.tsx`
- Add your resume PDF to `public/resume.pdf`

### Images
- Place blog post thumbnails in `public/images/`
- Update profile picture in `public/images/profile-placeholder.jpg`

## 📱 Pages

- **Homepage (`/`)**: Blog post listing with featured content
- **About (`/about`)**: Personal information and social links
- **Blog Posts (`/blog/[slug]`)**: Individual blog post pages
- **Resume**: External PDF link (opens in new tab)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

- **Navbar**: Responsive navigation with mobile menu
- **BlogCard**: Reusable card component for blog post previews
- **BlogPost**: Individual blog post page with markdown rendering

## 🌟 Features in Detail

### Blog System
- Markdown support with frontmatter
- Automatic date formatting
- Responsive image handling
- SEO-friendly URLs

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly navigation
- Optimized typography

### Performance
- Image optimization with Next.js Image component
- Static generation for blog posts
- Efficient routing with App Router
- Minimal bundle size

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or suggestions, please reach out through the contact information on the About page.

---

Built with ❤️ for ethical engineering practices.
