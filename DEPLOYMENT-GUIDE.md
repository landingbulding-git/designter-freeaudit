# Vercel Deployment Guide - DesignTér Monorepo

## Overview
This monorepo contains:
- **Main Website** (`apps/main-website`) → serves at `designter.hu`
- **Landing Page - Ingyenes Audit** (`apps/landing-pages/landing-ingyenes-audit`) → serves at `landing.designter.hu/ingyenes-audit`

## What Was Fixed

### 1. Build Configuration
- Created a unified build process that compiles both apps
- Main website outputs to `dist/main-website/`
- Landing page outputs to `dist/landing-pages/ingyenes-audit/`
- Added build script that merges outputs for Vercel deployment

### 2. Vite Configuration
- **Main website**: Base path set to `/` (root)
- **Landing page**: Base path set to `/ingyenes-audit/` for correct asset loading

### 3. Vercel Configuration (`vercel.json`)
- Set build command to `npm run build:all`
- Set output directory to `dist`
- Configured rewrites to route domains correctly:
  - `landing.designter.hu/ingyenes-audit/*` → landing page
  - `designter.hu/*` → main website

### 4. Cleaned Up
- Removed invalid `/index.css` references from HTML files
- Added `.vercelignore` to exclude unnecessary files from deployment

## Vercel Setup Instructions

### Step 1: Configure Your Vercel Project

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Git**
3. Ensure your GitHub repository is connected

### Step 2: Configure Build Settings

In your Vercel project settings (**Settings** → **General**):

- **Framework Preset**: Other
- **Root Directory**: `./` (leave as root)
- **Build Command**: `npm run build:all` (or leave empty if using vercel.json)
- **Output Directory**: `dist` (or leave empty if using vercel.json)
- **Install Command**: `npm install`

### Step 3: Configure Domains

In **Settings** → **Domains**:

1. **Add Domain**: `designter.hu`
   - Follow Vercel's instructions to configure DNS

2. **Add Domain**: `www.designter.hu` (optional)
   - Will redirect to `designter.hu`

3. **Add Domain**: `landing.designter.hu`
   - Configure as a subdomain
   - Add CNAME record pointing to your Vercel deployment

### Step 4: DNS Configuration

In your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare):

**For designter.hu:**
- Type: `A`
- Name: `@`
- Value: Vercel's IP address (provided in Vercel dashboard)

**For landing.designter.hu:**
- Type: `CNAME`
- Name: `landing`
- Value: `cname.vercel-dns.com` (or your project's Vercel URL)

### Step 5: Deploy

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "fix: Configure Vercel monorepo deployment with proper routing"
   git push
   ```

2. Vercel will automatically deploy on push
3. Monitor the deployment in your Vercel dashboard

### Step 6: Verify Deployment

After deployment completes:

1. Visit `https://designter.hu` → Should show main website
2. Visit `https://landing.designter.hu/ingyenes-audit` → Should show landing page
3. Check browser console for any 404 errors on assets

## Local Development

### Build All Apps
```bash
npm run build:all
```

### Build Individual Apps
```bash
# Main website only
npm run build:main

# Landing page only
npm run build:landing
```

### Development Servers
```bash
# Main website (port 3001)
cd apps/main-website && npm run dev

# Landing page (port 3000)
cd apps/landing-pages/landing-ingyenes-audit && npm run dev
```

## Troubleshooting

### Main website shows 404
- Check that the domain `designter.hu` is properly configured in Vercel
- Verify DNS records are pointing to Vercel
- Check Vercel deployment logs for build errors

### Landing page is blank
- Open browser DevTools console to check for JavaScript errors
- Verify assets are loading from `/ingyenes-audit/assets/`
- Check that the subdomain `landing.designter.hu` is configured in Vercel
- Ensure the path `/ingyenes-audit` is included in the URL

### Assets return 404
- Verify the build completed successfully
- Check that assets exist in `dist/main-website/assets/` and `dist/landing-pages/ingyenes-audit/assets/`
- Ensure base paths in `vite.config.ts` are correct

### Build fails on Vercel
- Check Node.js version compatibility (Vercel uses Node 18+ by default)
- Verify all dependencies are in `package.json`
- Review Vercel build logs for specific error messages

## File Structure

```
.
├── apps/
│   ├── main-website/              # Main website source
│   │   ├── dist/                  # Build output (gitignored)
│   │   ├── vite.config.ts         # Vite config (base: '/')
│   │   └── package.json
│   └── landing-pages/
│       └── landing-ingyenes-audit/  # Landing page source
│           ├── dist/                # Build output (gitignored)
│           ├── vite.config.ts       # Vite config (base: '/ingyenes-audit/')
│           └── package.json
├── dist/                          # Merged build output for Vercel (gitignored)
│   ├── main-website/              # Main website build
│   └── landing-pages/
│       └── ingyenes-audit/        # Landing page build
├── scripts/
│   └── merge-outputs.js           # Build merge script
├── package.json                   # Root package.json with build scripts
├── vercel.json                    # Vercel configuration
└── DEPLOYMENT-GUIDE.md            # This file
```

## Next Steps

1. Commit and push all changes
2. Configure domains in Vercel
3. Update DNS records
4. Wait for deployment to complete (usually 2-5 minutes)
5. Test both domains

If you encounter any issues, check the Vercel deployment logs and this guide's troubleshooting section.
