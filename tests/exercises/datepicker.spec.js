// @ts-check
const { test, expect } = require('@playwright/test');

let URL = 'https://selectorshub.com/xpath-practice-page/';

test('Date Picker', async ({ page }) => {

    const dob1 = '05061999';
    const dob2 = '05-06-1999';
    const dob3 = '05/06/1999';
    await page.goto(URL);
    await page.locator('//input[@name="the_date"]').pressSequentially(dob1)

});
