// @ts-check
const { test, expect } = require('@playwright/test');


let URL = 'https://www.saucedemo.com';


test('has title', async ({ page }) => {
  await page.goto(URL);
  
  
});


