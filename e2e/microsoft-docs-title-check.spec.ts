import { test, expect } from '@playwright/test';

test('Check title in Microsoft docs landing page', async ({ page }) => {
  console.log('Navigating to Microsoft docs landing page...');
  
  try {
    // Navigate to the URL
    await page.goto('https://learn.microsoft.com/en-us/docs/');
    
    // Get the title of the page
    const title = await page.title();
    console.log(`Page title: "${title}"`);

    // Check if the title starts with "Technical documentation"
    const expectedPrefix = 'Technical documentation';
    const isSuccess = title.startsWith(expectedPrefix);
    
    if (isSuccess) {
      console.log('✅ SUCCESS: Title starts with "Technical documentation"');
      console.log(`Status: SUCCESS - Site is working correctly`);
    } else {
      console.log('❌ FAILED: Title does not start with "Technical documentation"');
      console.log(`Status: FAILED - Expected title to start with "${expectedPrefix}", but got "${title}"`);
    }
    
    // Assert that the title starts with the expected prefix
    expect(title).toMatch(new RegExp(`^${expectedPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`));
    
  } catch (error) {
    console.log('❌ FAILED: Error occurred while checking the site');
    console.log(`Status: FAILED - Error: ${error.message}`);
    throw error;
  }
});
