// @ts-check
const { test, expect } = require('@playwright/test');
var moment = require('moment');

const dob1 = '05061999';
const dob2 = '05-06-1999';
const dob3 = '05/06/1999';
const dob4 = '1999-06-05'; // YYYY-MM-DD only applicable with playwright
const dob5 = '19990605';
const dob6 = '1999-06-05 T18:37:46.152Z';

let URL = 'https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo';

test('Date picker using fill method', async ({ page }) => {
    await page.goto(URL);

    await page.locator('#birthday').fill(dob4);
    await expect(page.locator('#birthday')).toHaveValue('1999-06-05')
});

test('Date picker using press Sequentially method', async ({ page }) => {
    await page.goto(URL);

    await page.locator('#birthday').pressSequentially(dob4, { delay: 100 });
    await expect(page.locator('#birthday')).toHaveValue('1999-06-05');
});

test('Date picker using clicks', async ({ page }) => {

    let monthYear = 'June 2023';
    let day = 5;

    await page.goto(URL);

    // clicking start date to get date picker
    await page.click('//input[@placeholder="Start date"]');
 
    // clicking previous and next button based on the date given
    while (await page.locator('.datepicker-switch').first().textContent() != monthYear) {
        if (moment(monthYear, 'MMMM YYYY').isBefore()) {
            await page.locator('.prev').first().click();
        } else {
            await page.locator('.next').first().click();
        }
    }
    //  selecting specific day from dropdown menu
    await page.click('//td[@class="day"][text()="'+ day +'"]');
    // validating the date
    await expect(page.locator('input[placeholder="Start date"]')).toHaveValue('05/06/2023')
});