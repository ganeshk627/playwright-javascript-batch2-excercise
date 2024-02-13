//@ts-check
import { test, expect } from '@playwright/test';


test('Copy and Paste using keyboards', async ({ page }) => {

    const name = 'Harry Potter';
    const email = 'harry.potter@hogwarts.com';
    const address = 'The CupboaRd under the StaiRs,\n4 PRiVet DRive,\nLittle WhiNgiNg,\nSURREY.';

    await page.goto('https://demoqa.com/text-box');
    await page.waitForLoadState('domcontentloaded');

    await page.locator('#userName').pressSequentially(name);
    await page.locator('#userEmail').pressSequentially(email);
    await page.locator('#currentAddress').pressSequentially(address);
   
    // console.log(`process.platform: ${process.platform}`);

    // Copying the current address
    await page.locator('#currentAddress').click();
    if (process.platform === 'linux' || process.platform === 'win32') {
        await page.keyboard.press('Control+A');
        await page.keyboard.press('Control+C');
    } else if (process.platform === "darwin") {
        await page.keyboard.press('Meta+A');
        await page.keyboard.press('Meta+C');
    }
    // console.log(await page.locator('#currentAddress').inputValue());

    // Pasting the current address
    await page.locator('#permanentAddress').click();
    if (process.platform === 'linux' || process.platform === 'win32') {
        await page.keyboard.press('Control+V');
    } else if (process.platform === "darwin") {
        await page.keyboard.press('Meta+V');

    }
    // console.log(await page.locator('#permanentAddress').inputValue());

    // Assertions on permanent and current address
    await expect(page.locator('#permanentAddress'), `'#permanentAddress' should have value ${address}`).toHaveValue(address);
    await expect(page.locator('#currentAddress'), `'#currentAddress' should have value ${address}`).toHaveValue(address);
    expect(await page.locator('#permanentAddress').inputValue(), `'#currentAddress' should have same value as #permanentAddress`)
        .toBe(await page.locator('#currentAddress').inputValue());

    // Submitting the form
    await page.locator("#submit").click();

    await expect(page.locator('#output')).toContainText(name);
    await expect(page.locator('#output')).toContainText(email);
    await expect(page.locator('#output')).toContainText(address);
});