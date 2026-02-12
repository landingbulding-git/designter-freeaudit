import { cpSync, rmSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Clean and create dist directory
const distDir = join(rootDir, 'dist');
if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}
mkdirSync(distDir, { recursive: true });

// Copy main website build
const mainWebsiteSrc = join(rootDir, 'apps', 'main-website', 'dist');
const mainWebsiteDest = join(distDir, 'main-website');
if (existsSync(mainWebsiteSrc)) {
  cpSync(mainWebsiteSrc, mainWebsiteDest, { recursive: true });
  console.log('✓ Main website copied to dist/main-website');
} else {
  console.error('✗ Main website dist not found');
  process.exit(1);
}

// Copy landing page build
const landingPageSrc = join(rootDir, 'apps', 'landing-pages', 'landing-ingyenes-audit', 'dist');
const landingPageDest = join(distDir, 'landing-pages', 'ingyenes-audit');
if (existsSync(landingPageSrc)) {
  mkdirSync(join(distDir, 'landing-pages'), { recursive: true });
  cpSync(landingPageSrc, landingPageDest, { recursive: true });
  console.log('✓ Landing page copied to dist/landing-pages/ingyenes-audit');
} else {
  console.error('✗ Landing page dist not found');
  process.exit(1);
}

console.log('\n✓ Build outputs merged successfully!');
