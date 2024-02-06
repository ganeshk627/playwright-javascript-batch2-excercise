// @ts-check
import { expect, test } from '@playwright/test'


test('Mouse Actions - Hover', async ({ page }) => {

    await page.goto('https://demo.opencart.com/');

    await page.waitForSelector('.nav-item');
    const items = await page.locator('.nav-item').all();
    // console.log(items.length)
    for (const item of items) {
        // console.log(await item.locator('.nav-link.dropdown-toggle').textContent())
        if (await item.locator('.nav-link.dropdown-toggle').textContent() == 'Laptops & Notebooks') {
            await item.hover();
            // await item.locator('div.dropdown-menu a').waitFor()
            const options = await item.locator('div.dropdown-menu a').all()
            for (const option of options) {
                console.log(await option.textContent());// printing the options available in dropdown menu
            }
            break;
        }
    }
});

test('Mouse Actions - Right Click', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.locator('//span[normalize-space()="right click me"]').click({ button: 'right' }).then(
        async () => {
            // Assertions after clicking right
            await expect(page.getByText('EditCutCopyPasteDeleteQuit')).toBeVisible();
            await expect(page.locator('li').filter({ hasText: 'Edit' })).toBeVisible();
            await expect(page.locator('li').filter({ hasText: 'Cut' })).toBeVisible();
            await expect(page.locator('li').filter({ hasText: 'Copy' })).toBeVisible();
            await expect(page.locator('li').filter({ hasText: 'Paste' })).toBeVisible();
            await expect(page.locator('li').filter({ hasText: 'Delete' })).toBeVisible();
            await expect(page.locator('li').filter({ hasText: 'Quit' })).toBeVisible();
        }
    );
});

test('Mouse Actions - Double Click', async ({ page }) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');

    // console.log(page.frames().length)
    const frame = page.frameLocator('#iframeResult');

    // Assertions before clicking twice
    await expect(frame.locator('#field1')).toHaveValue('Hello World!');
    await expect(frame.locator('#field2')).toBeEmpty();
    await frame.locator('//button[normalize-space()="Copy Text"]').dblclick().then(
        async () => {
            // Assertions after clicking twice
            await expect(frame.locator('#field1')).toHaveValue('Hello World!');
            await expect(frame.locator('#field2')).not.toBeEmpty();
            await expect(frame.locator('#field2')).toHaveValue('Hello World!');
        }
    );
});



test('Mouse Actions - Drag N Drop', async ({ page }) => {
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

    const WASHINGTON = page.locator('#box3');
    const UNITEDSTATES = page.locator('#box103');
    await WASHINGTON.dragTo(UNITEDSTATES).then(
        async () => {
            // Assertions after dragndrop
            await expect(UNITEDSTATES).toContainText('Washington');
            // also assert the color green
        }
    );
});

test('Mouse Actions - Scroll', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/List_of_national_birds');

    await page.locator('//a[@title="India"]').scrollIntoViewIfNeeded();
    await page.locator('//a[@title="India"]').highlight()
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'scroll.png' });
});
