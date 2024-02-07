// @ts-check
import { expect, test } from '@playwright/test'


test('Iframes', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const frame = page.frameLocator('iframe[title="Rich Text Area"]');
    await expect(frame.locator('body p')).toHaveText('Your content goes here.');

    await frame.locator('body p').click();
    await frame.locator('body p').fill('Harry Potter!').then(async () => {
        await expect(frame.locator('body p')).toHaveText('Harry Potter!');
    });

});



//npx playwright test Ex9.spec.js:23 --headed --project=firefox
// test.use({ storageState: 'demo.opencart.json' });
test('Web Tables', async ({ page }) => {

    // Login with account
    await page.goto('https://demo.opencart.com/admin/index.php?route=common/login');
    
    await page.locator('#input-username').fill('demo');
    await page.locator('#input-password').fill('demo');
    await page.locator('//button[normalize-space()="Login"]').click();
    await page.waitForTimeout(2000)
    await page.locator('.btn-close').hover();
    await page.waitForTimeout(2000)
    await page.locator('.btn-close').click();
    await page.waitForTimeout(2000)


    // Expanding the customers
    // await page.pause();
    const expanded = await page.locator('#menu-customer > a').getAttribute('class');
    if (expanded?.includes("collapsed")) {
        await page.locator('#menu-customer > a').click();
    }
    await page.locator('#menu-customer > ul a[href*="customer&"]').click();
    await page.waitForLoadState();

    // Printing table data for 10 pages
    // for(let page=1;page<=10;page++) {
    //     await page.locator('')
    // }

    let page_count = 1;
    let max_page_count = 10;
    while(page_count<=max_page_count) {
        if(page_count!=1) {await page.locator('//a[normalize-space()=">"]').click();} // clicking next button
        await page.waitForSelector('#customer tbody > tr');
        const rows = await page.locator('#customer tbody > tr').all();
        // console.log(rows.length)
        let data_count=1;
        for (const row of rows) {
            // console.log(`${page_count}:${data_count}: ${await row.locator('td').nth(2).textContent()}`); // printing only the emails
            
            // for(let cell=1; cell<5; cell++){
            //     console.log(`${page_count}:${data_count}:: ${await row.locator('td').nth(cell).textContent()}`);
            // } // printing all the values needed
            
            console.log(`Page count - ${page_count} : Row count - ${data_count}::
            \t${await row.locator('td').nth(1).textContent()}
            \t${await row.locator('td').nth(2).textContent()}
            \t${await row.locator('td').nth(3).textContent()}
            \t${await row.locator('td').nth(4).textContent()}`);

            data_count++;
        }
        await page.waitForTimeout(2000);
        page_count ++;  
    } 

    await page.waitForTimeout(3000);
    // await page.pause();

});
