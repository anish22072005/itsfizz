# ITSFIZZ Deployment Guide

This guide will help you deploy the ITSFIZZ scroll-driven hero section animation project to GitHub Pages or Vercel.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and provides the easiest deployment experience.

### Steps:

1. **Push your code to GitHub**
   ```bash
   # If not already on GitHub, create a new repo
   # Then add and push:
   git remote add origin https://github.com/yourusername/itsfizz.git
   git branch -M main
   git push -u origin main
   ```

2. **Go to Vercel.com**
   - Visit https://vercel.com
   - Click "Sign Up" (you can use your GitHub account)

3. **Create a New Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your GitHub account and the `itsfizz` repository
   - Click "Import"

4. **Configure Project Settings**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./ (default)
   - Environment Variables: None needed for this project
   - Click "Deploy"

5. **Done!**
   Your site will be live at: `https://itsfizz-username.vercel.app`

## Option 2: Deploy to GitHub Pages

GitHub Pages provides free hosting directly from your repository.

### Steps:

1. **Update next.config.ts**
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     basePath: '/itsfizz', // Replace 'itsfizz' with your repo name
   };
   
   export default nextConfig;
   ```

2. **Create GitHub Workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       permissions:
         contents: read
         pages: write
         id-token: write

       steps:
         - uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: './out'

         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" (left sidebar)
   - Under "Source", select "GitHub Actions"
   - Your site will be published to: `https://yourusername.github.io/itsfizz`

4. **Push Changes**
   ```bash
   git add .
   git commit -m "Configure Next.js for GitHub Pages deployment"
   git push origin main
   ```

## Option 3: Deploy to Netlify

Netlify also provides excellent support for Next.js.

### Steps:

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**
   - Visit https://netlify.com
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Click "Deploy"

3. **That's it!**
   Your site will be live at: `https://your-site-name.netlify.app`

## Custom Domain Setup

After deploying, you can add a custom domain:

### For Vercel:
1. Go to Settings → Domains
2. Add your custom domain
3. Follow the DNS instructions
4. Done!

### For GitHub Pages:
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Go to repository Settings → Pages
3. Add custom domain
4. Update DNS records at your domain provider
5. Verify ownership

### For Netlify:
1. Go to Domain settings
2. Add custom domain
3. Follow DNS instructions

## Troubleshooting

### Site not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check that deployment succeeded
- Verify GitHub/Vercel/Netlify logs

### Images not loading
- Ensure `basePath` in next.config.ts matches your deployment URL
- Check public folder exists and contains assets

### Styles not applied
- Clear `.next` folder and rebuild
- Check CSS imports in globals.css
- Verify Tailwind configuration

### Animations stuttering
- Check browser performance tab
- Reduce animation complexity
- Enable GPU acceleration in CSS

## Environment Variables

This project doesn't require environment variables. If needed in the future:

1. Create a `.env.local` file locally
2. Add variables:
   ```
   NEXT_PUBLIC_API_URL=https://api.example.com
   SECRET_KEY=your_secret_key
   ```
3. In deployment platform settings, add the same variables

## Build Optimization

To optimize build size:

1. **Analyze bundle size**
   ```bash
   npm install -D @next/bundle-analyzer
   ```

2. **Update next.config.ts**
   ```typescript
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   });

   module.exports = withBundleAnalyzer(nextConfig);
   ```

3. **Analyze**
   ```bash
   ANALYZE=true npm run build
   ```

## Performance Monitoring

After deployment:

1. **Check Lighthouse Score**
   - Open DevTools → Lighthouse
   - Run performance audit
   - Target: 90+ score

2. **Monitor with Vercel Analytics**
   - Available on Vercel dashboard
   - Shows real user metrics
   - Core Web Vitals data

3. **Use WebPageTest**
   - Visit https://webpagetest.org
   - Test your deployed URL
   - Get detailed performance breakdown

## Further Help

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
