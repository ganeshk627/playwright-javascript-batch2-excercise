// @ts-check
import { expect, test } from '@playwright/test'


test('Mouse Actions - Hover', async ({ page }) => {

    await page.goto('https://demo.opencart.com/');
    await page.locator('//a[normalize-space()="Laptops & Notebooks"]').hover();
    await page.locator('')


    
});
