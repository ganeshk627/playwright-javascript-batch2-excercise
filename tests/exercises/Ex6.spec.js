// @ts-check
import { expect, test } from '@playwright/test'


test('Mouse Actions - Hover', async ({ page }) => {

    await page.goto('https://demo.opencart.com/');

    await page.waitForSelector('.nav-item');
    const items = await page.locator('.nav-item').all();

    // console.log(items.length)
    for(const item of items){
        // console.log(await item.locator('.nav-link.dropdown-toggle').textContent())
        
        if(await item.locator('.nav-link.dropdown-toggle').textContent()=='Laptops & Notebooks') {
            await item.hover();
            // await item.locator('div.dropdown-menu a').waitFor()
            const options = await item.locator('div.dropdown-menu a').all()
            for(const option of options) {
                console.log(await option.textContent())
            }
            break
        }
     }
    // await page.locator('//a[normalize-space()="Laptops & Notebooks"]').hover();
    // await page.locator('')


    
});
