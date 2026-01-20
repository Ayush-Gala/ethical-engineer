# Deployment Guide - ethical-engineering Blog

This guide will walk you through deploying your blog to Vercel.

## Prerequisites

1. A GitHub account (free)
2. A Vercel account (free tier available)

## Step 1: Prepare Your Repository

1. Make sure your code is committed to a GitHub repository
2. Ensure all files are pushed to the main branch

## Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account

## Step 3: Deploy Your Project

1. In Vercel dashboard, click "New Project"
2. Import your GitHub repository
3. Vercel will automatically detect it's a Next.js project
4. Configure your project settings:
   - **Project Name**: `ethical-engineer` (or your preferred name)
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should be auto-detected)
   - **Output Directory**: `.next` (should be auto-detected)
   - **Install Command**: `npm install` (should be auto-detected)

## Step 4: Environment Variables (Optional)

If you need environment variables later, add them in:
1. Go to your project dashboard in Vercel
2. Navigate to Settings → Environment Variables
3. Add any variables from `env.example`

## Step 5: Deploy

1. Click "Deploy"
2. Vercel will build and deploy your site
3. You'll get a URL like: `https://your-project-name.vercel.app`

## Step 6: Custom Domain (Optional)

1. In your Vercel project dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

## Automatic Deployments

- Every push to your main branch will trigger a new deployment
- Pull requests will create preview deployments
- You can configure branch protection rules in GitHub

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation locally with `npm run build`

### Environment Variables
- Make sure to add any required environment variables in Vercel dashboard
- Use `NEXT_PUBLIC_` prefix for client-side variables

### Performance
- Vercel automatically optimizes Next.js applications
- Images are automatically optimized
- Static pages are pre-rendered

## Next Steps

1. Set up a custom domain (recommended)
2. Configure analytics (Google Analytics, etc.)
3. Set up monitoring and error tracking
4. Consider adding a contact form or newsletter signup

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions) 