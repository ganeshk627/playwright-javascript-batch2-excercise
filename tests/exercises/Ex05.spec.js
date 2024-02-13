// @ts-check
import { expect, test } from '@playwright/test'


test('i. Single Select Dropdown', async ({ page }) => {
    const SINGLE_SELECT = '#carselect';

    await page.goto('https://www.letskodeit.com/practice');

    // Assert options count as 3 in the dropdown list
    await expect(page.locator(SINGLE_SELECT).locator('option')).toHaveCount(3);
    expect(await page.locator(SINGLE_SELECT).locator('option').count()).toEqual(3);
    expect((await page.$$('#carselect option')).length).toBe(3);

    // Check dropdown to be single select
    await expect(page.locator(SINGLE_SELECT)).not.toHaveAttribute('multiple');

    // Selecting dropdown options
    await page.locator(SINGLE_SELECT).selectOption({ value: 'honda' });
    await page.locator(SINGLE_SELECT).selectOption({ label: 'BMW' });
    await page.locator(SINGLE_SELECT).selectOption({ index: 1 }); // index starts with 0
    await page.locator(SINGLE_SELECT).selectOption('Honda');
    await page.locator(SINGLE_SELECT).selectOption(['BMW', 'Benz']); // Trying to select with multiple values
});

test('i. Multi Select Dropdown', async ({ page }) => {
    const MULTI_SELECT = '#multiple-select-example';

    await page.goto('https://www.letskodeit.com/practice');

    // Assert options count as 3 in the dropdown list
    await expect(page.locator(MULTI_SELECT).locator('option')).toHaveCount(3);
    expect(await page.locator(MULTI_SELECT).locator('option').count()).toEqual(3);
    expect((await page.$$('#multiple-select-example option')).length).toBe(3);

    // Check dropdown to be multiple select
    await expect(page.locator(MULTI_SELECT)).toHaveAttribute('multiple');

    // Selecting dropdown options
    await page.locator(MULTI_SELECT).selectOption({ value: 'apple' });
    await page.locator(MULTI_SELECT).selectOption({ label: 'Orange' });
    await page.locator(MULTI_SELECT).selectOption({ index: 2 }); // index starts with 0
    await page.locator(MULTI_SELECT).selectOption('Orange');
    await page.locator(MULTI_SELECT).selectOption('Orange'); // selecting Orange twice
    await page.locator(MULTI_SELECT).selectOption(['Apple', 'Peach']); // Trying to select with multiple values
});

test('ii. Bootstrap and Search Dropdown1', async ({ page }) => {

    let COUNTRY_SELECT = '#billing_country';

    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

    // Scroll into country dropdown
    await page.locator(COUNTRY_SELECT).scrollIntoViewIfNeeded();

    // Approach 1 - Select using selectOption()
    await page.locator(COUNTRY_SELECT).selectOption({ index: 12 });
    await page.locator(COUNTRY_SELECT).selectOption({ label: 'Denmark' });
    await page.locator(COUNTRY_SELECT).selectOption({ value: 'CY' });

    // Approach 2 - Search and select
    await page.locator('#billing_country_field .selection').click();
    await page.locator('input[role="combobox"]').pressSequentially('Mal'); // search for 'Mal'
    await page.locator('//li[@role="option" and text()="Maldives"]').click(); // select 'Maldives' from results
    await page.waitForTimeout(3000);
});

test('ii. Bootstrap and Search Dropdown2', async ({ page }) => {

    await page.goto('https://www.wikipedia.org/');
    await page.locator('#searchInput').pressSequentially('Harry');
    await page.locator('//h3[.="Harry Potter"]').click();
    await page.waitForTimeout(3000);


});

test('iii. Hidden Drop downs', async ({ page }) => {

    // login and navigate to dropdown page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();

    // Handling Hidden Dropdown
    await page.getByPlaceholder('Type for hints...').fill('a'); // Typing keys to search
    await expect(page.locator('//div[@role="option" and text()="Searching...."]')).not.toBeAttached({timeout: 5000}); // Wait for Searching to be detached
    await page.locator('[role="listbox"] [role="option"]').first().click(); // Selecting first option
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);

});