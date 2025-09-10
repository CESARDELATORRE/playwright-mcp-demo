import { chromium } from 'playwright';
import { mkdirSync, existsSync } from 'fs';
import { join } from 'path';

async function run() {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const context = await browser.newContext();
  const page = await context.newPage();
  const url = 'https://www.microsoft.com';
  console.log('Navigating to', url);
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  const title = await page.title();
  console.log('Page title:', title);
  const dir = join(process.cwd(), 'demo-screenshots');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const filePath = join(dir, 'microsoft-home-page-screenshot-by-playwright-mcp-server.png');
  await page.screenshot({ path: filePath, fullPage: true });
  console.log('Screenshot saved at', filePath);
  await browser.close();
}

run().catch(err => {
  console.error('Error capturing screenshot:', err);
  process.exit(1);
});
