// @ts-check
import { expect, test } from '@playwright/test'


test('Datepicker', async ({ page }) => {

    await page.goto('https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/');

    // const date = '05/06/1999'; 
    const date = '5/6/1999'; //document.querySelector('#id-textbox-1').value
    await page.locator('#id-textbox-1').scrollIntoViewIfNeeded();
    await page.locator('#id-textbox-1').fill(date).then(async () => {
        await expect(page.locator('#id-textbox-1')).toHaveValue(date)
    });

});
