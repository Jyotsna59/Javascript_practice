const { test, expect } = require('@playwright/test');

test('First Playwright Test', async ({ page }) => {
    // page is now properly typed from Playwright's fixtures
    // const context = await browser.newContext();
    // const page = await context.newPage();
    console.log("This is my first Playwright Test");
    
    //const browser = await chromium.launch();
    await page.goto("https://www.google.com");
    // Your test logic here
});