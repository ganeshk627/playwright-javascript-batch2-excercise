// @ts-check
const { test, expect } = require('@playwright/test');

const dob1 = '05061999';
const dob2 = '05-06-1999';
const dob3 = '05/06/1999';
const dob4 = '1999-06-05';
const dob5 = '19990605';
const dob6 = '1999-06-05 T18:37:46.152Z';

let URL = 'https://selectorshub.com/xpath-practice-page/';

test('Date picker using fill method', async ({ page }) => {
    await page.goto(URL);
    await page.locator('//input[@name="the_date"]').fill(dob4);
    await expect(page.locator('//input[@name="the_date"]')).toHaveValue('1999-06-05');
});

test('Date picker using press Sequentially method', async ({ page }) => {
    await page.goto(URL);
    await page.locator('//input[@name="the_date"]').pressSequentially(dob1, {delay: 100});
    await expect(page.locator('//input[@name="the_date"]')).toHaveValue('1999-06-05');
});
