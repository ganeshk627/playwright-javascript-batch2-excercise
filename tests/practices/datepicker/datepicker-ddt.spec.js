// @ts-check
const { test, expect } = require('@playwright/test');

const dates = [
    '05061999',
    '05-06-1999',
    '05/06/1999',
    '1999-06-05',
    '19990605',
    '1999-06-05 T18:37:46.152Z',
]



for(let date of dates) {
    test(`Date Picker - fill ${date}`, async ({ page }) => {

        await page.goto('https://selectorshub.com/xpath-practice-page/');
        await page.locator('//input[@name="the_date"]').fill(date);
        // await page.locator('//input[@name="the_date"]').pressSequentially(date);
        await expect(page.locator('//input[@name="the_date"]')).toHaveValue('1999-06-05');

    });
}


for(let date of dates) {
    test(`Date Picker - press sequentially ${date}`, async ({ page }) => {

        await page.goto('https://selectorshub.com/xpath-practice-page/');
        // await page.locator('//input[@name="the_date"]').fill(date);
        await page.locator('//input[@name="the_date"]').pressSequentially(date);
        await expect(page.locator('//input[@name="the_date"]')).toHaveValue('1999-06-05');
    
    });
}
