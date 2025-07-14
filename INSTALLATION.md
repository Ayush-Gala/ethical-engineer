# 🚀 Installation Guide - The Ethical Engineer

A comprehensive guide to set up and run "The Ethical Engineer" portfolio blog website locally from scratch.

## 📋 Prerequisites

Before you begin, ensure you have the following software installed on your system:

### Required Software

#### 1. Node.js (v18.0.0 or higher)
- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Recommended Version**: v18.17.0 or higher (LTS)
- **Verify Installation**: 
  ```bash
  node --version
  # Should output: v18.x.x or higher
  ```

#### 2. npm (Node Package Manager)
- **Comes with Node.js**: Automatically installed with Node.js
- **Recommended Version**: v9.0.0 or higher
- **Verify Installation**:
  ```bash
  npm --version
  # Should output: v9.x.x or higher
  ```

#### 3. Git
- **Download**: [https://git-scm.com/](https://git-scm.com/)
- **Verify Installation**:
  ```bash
  git --version
  # Should output: git version 2.x.x or higher
  ```

### Optional but Recommended

#### 4. Code Editor
- **VS Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Recommended Extensions**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

#### 5. Terminal/Command Line Tool
- **macOS/Linux**: Built-in terminal
- **Windows**: Windows Terminal, Git Bash, or PowerShell

## 🛠️ Installation Steps

### Step 1: Clone the Repository

```bash
# Clone the repository to your local machine
git clone <repository-url>
cd ethical-engineer

# Verify you're in the correct directory
ls
# Should show: package.json, README.md, src/, public/, etc.
```

### Step 2: Install Dependencies

```bash
# Install all required dependencies
npm install

# This will install the following packages:
# - Next.js 15.3.5 (React framework)
# - React 19.0.0 (UI library)
# - Tailwind CSS 4 (Styling framework)
# - TypeScript 5 (Type safety)
# - react-markdown 10.1.0 (Markdown rendering)
# - date-fns 4.1.0 (Date formatting)
# - gray-matter 4.0.3 (Frontmatter parsing)
# - And other development dependencies
```

**Expected Output**: You should see a progress bar and eventually a success message. The installation may take 1-3 minutes depending on your internet connection.

### Step 3: Verify Installation

```bash
# Check if all dependencies are properly installed
npm list --depth=0

# You should see all packages listed without any errors
```

### Step 4: Build the Project (Optional but Recommended)

```bash
# Build the project to check for any compilation errors
npm run build

# Expected output: Build completed successfully
```

## 🚀 Running the Application

### Development Mode

```bash
# Start the development server
npm run dev

# Expected output:
# - ready - started server on 0.0.0.0:3000, url: http://localhost:3000
# - event - compiled client and server successfully in Xms
```

### Access the Application

1. **Open your web browser**
2. **Navigate to**: [http://localhost:3000](http://localhost:3000)
3. **You should see**: The Ethical Engineer homepage with blog posts

### Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 🎨 Features to Test

Once the application is running, test these features:

### 1. Navigation
- Click "About" to view the about page
- Click "Resume" to download the PDF
- Click on blog post cards to view individual posts

### 2. Dark Mode Toggle
- Look for the toggle slider in the top-right corner of the navbar
- Click to switch between light and dark themes
- Refresh the page to verify theme persistence

### 3. Responsive Design
- Resize your browser window to test mobile responsiveness
- Test on different screen sizes

### 4. Blog Functionality
- Navigate to individual blog posts
- Test the "Back to Blogs" button
- Verify markdown content renders correctly

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. Port 3000 Already in Use
```bash
# Error: listen EADDRINUSE: address already in use :::3000

# Solution: Use a different port
npm run dev -- -p 3001
# Then access: http://localhost:3001
```

#### 2. Node.js Version Issues
```bash
# Error: Unsupported engine

# Solution: Update Node.js to v18+ or use nvm
nvm install 18
nvm use 18
npm install
```

#### 3. Dependency Installation Fails
```bash
# Clear npm cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### 4. TypeScript Errors
```bash
# Run TypeScript compiler to check for errors
npx tsc --noEmit

# Fix any type errors before proceeding
```

#### 5. Build Failures
```bash
# Check for linting errors
npm run lint

# Fix any ESLint errors
npm run lint -- --fix
```

### Performance Issues

#### 1. Slow Development Server
- Ensure you have sufficient RAM (4GB+ recommended)
- Close unnecessary applications
- Consider using a faster package manager like `pnpm` or `yarn`

#### 2. Large Bundle Size
- The project is optimized for production
- Development builds are larger for debugging purposes
- Run `npm run build` to see production bundle size

## 📁 Project Structure Overview

```
ethical-engineer/
├── content/
│   └── blog/                 # Markdown blog posts
│       ├── ethical-ai-development.md
│       └── sustainable-software.md
├── public/
│   ├── images/              # Static images and thumbnails
│   ├── resume.pdf           # Resume file
│   └── favicon.ico          # Site favicon
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/           # About page
│   │   ├── blog/[slug]/     # Dynamic blog post pages
│   │   ├── globals.css      # Global styles and dark mode
│   │   ├── layout.tsx       # Root layout with theme provider
│   │   └── page.tsx         # Homepage
│   ├── components/          # Reusable React components
│   │   ├── BlogCard.tsx     # Blog post card component
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── ThemeToggle.tsx  # Dark mode toggle
│   │   └── ClientThemeProvider.tsx
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.tsx # Theme state management
│   └── lib/                 # Utility functions
│       └── blog.ts          # Blog post parsing utilities
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── README.md               # Project documentation
```

## 🎯 Next Steps

### For Development
1. **Explore the codebase**: Start with `src/app/page.tsx` and `src/components/`
2. **Add new blog posts**: Create markdown files in `content/blog/`
3. **Customize styling**: Modify `src/app/globals.css` and Tailwind classes
4. **Update content**: Edit `src/app/about/page.tsx` for personal information

### For Production Deployment
1. **Build the project**: `npm run build`
2. **Test production build**: `npm run start`
3. **Deploy to your preferred platform** (Vercel, Netlify, etc.)

## 📞 Getting Help

If you encounter issues not covered in this guide:

1. **Check the console**: Look for error messages in your terminal
2. **Review logs**: Check browser developer tools for JavaScript errors
3. **Verify versions**: Ensure all prerequisites meet the minimum requirements
4. **Search issues**: Check the repository's issue tracker
5. **Create an issue**: Provide detailed error messages and system information

## 🎉 Success!

You've successfully set up "The Ethical Engineer" portfolio blog! The application should now be running at [http://localhost:3000](http://localhost:3000) with full dark mode support, responsive design, and all features working correctly.

---

**Happy coding! 🚀** 