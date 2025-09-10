import { test, expect } from '@playwright/test';
import { mkdirSync } from 'fs';

// A minimal, stable smoke test that saves screenshots into the "screenshots" folder.
test('Microsoft.com loads and can be screenshotted', async ({ page }) => {
  test.setTimeout(45_000);

  // Ensure output folder exists (relative to repo root)
  const outDir = 'demo-screenshots';
  mkdirSync(outDir, { recursive: true });

  // Navigate and wait for the page to settle
  const response = await page.goto('https://www.microsoft.com', { waitUntil: 'domcontentloaded' });
  expect(response?.ok()).toBeTruthy();
  await page.waitForLoadState('networkidle');

  // Basic assertion and screenshot
  await expect(page).toHaveTitle(/Microsoft/i);
  await page.screenshot({ path: `${outDir}/microsoft-homepage-complete.png`, fullPage: false });
});
