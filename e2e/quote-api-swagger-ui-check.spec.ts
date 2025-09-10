import { test, expect } from '@playwright/test';

test('Check Quote API Swagger UI title', async ({ page }) => {
  console.log('Navigating to Quote API Swagger UI...');
  
  try {
    // Navigate to the URL
    await page.goto('https://quoteapi-uat.ipipeline.com/swagger/index.html');
    
    // Get the title of the page
    const title = await page.title();
    console.log(`Page title: "${title}"`);
    
    // Check if the title starts with "Quote API Swagger UI "
    const expectedPrefix = 'Quote API Swagger UI ';
    const isSuccess = title.startsWith(expectedPrefix);
    
    if (isSuccess) {
      console.log('✅ SUCCESS: Title starts with "Quote API Swagger UI "');
      console.log(`Status: SUCCESS - Site is working correctly`);
    } else {
      console.log('❌ FAILED: Title does not start with "Quote API Swagger UI "');
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
