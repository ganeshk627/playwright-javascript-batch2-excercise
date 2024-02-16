//@ts-check
import { test, expect } from '@playwright/test';

import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';



test('Page Object model pattern', async ({ page }) => { // Start of a test case

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await test.step('Launch the Page', async () => {
        await loginPage.gotoLoginPage();  // Navigate to the login page using the goto method defined in the LoginPage class
    });

    await test.step('Enter the username after checking the field is enabled/not and check whether username entered is correct or not', async () => {
        const usernameInput = loginPage.usernameInput;
        await page.waitForSelector(usernameInput);
        await expect(page.locator(usernameInput)).toBeVisible();
        await expect(page.locator(usernameInput)).toBeEditable();
        await expect(page.locator(usernameInput)).toBeEnabled();
        await expect(page.locator(usernameInput)).toBeInViewport();
        await loginPage.enterUsername('standard_user');
    });

    await test.step('Enter the password after checking the field is enabled/not and check whether password entered is correct or not', async () => {
        const passwordInput = loginPage.passwordInput;
        await page.waitForSelector(passwordInput);
        await expect(page.locator(passwordInput)).toBeVisible();
        await expect(page.locator(passwordInput)).toBeEditable();
        await expect(page.locator(passwordInput)).toBeEnabled();
        await expect(page.locator(passwordInput)).toBeInViewport();
        await loginPage.enterPassword('secret_sauce');
    });

    await test.step('Press login after checking the field is enabled/not', async () => {
       const loginButton =  loginPage.loginButton;
       await expect(page.locator(loginButton)).toBeVisible();
       await expect(page.locator(loginButton)).toBeEnabled();
       await expect(page.locator(loginButton)).toBeInViewport();
       await loginPage.clickLoginButton();
    });

    await test.step('Verify the new Page Url contains https://www.saucedemo.com/inventory.html', async () => {
        await expect(page, `URL should have https://www.saucedemo.com/inventory.html`).toHaveURL('https://www.saucedemo.com/inventory.html')
    });

    await test.step('Check whether you have element name Products in the navigated page', async () => {
        await expect(page.locator(inventoryPage.inventory_title)).toHaveText("Products");
    });

    await test.step('Check the number products in the pages is equivalent to 6.', async () => {
        await expect(page.locator(inventoryPage.inventory_item)).toHaveCount(6);
    });

    await test.step('Add few products into the cart and goto cart menu', async () => {
        await 
    });

    await test.step('Checkout the details by filling the details in the form, before filling check the element is enabled/not and after filling ensure that you have entered correct data.', async () => {
        
    });

    await test.step('Click on Finish button and Back Home button after checking the field is enabled/not', async () => {
        // Code to check if Finish button is enabled
        // Code to click on Finish button
        // Code to check if Back Home button is enabled
        // Code to click on Back Home button
    });

    await test.step('Do a page level testing to ensure that you landed up in a Product Home page.', async () => {
        // Code to verify if the current page is the Product Home page
    });

    await test.step('Finally click logout button to logout from the application after checking logout element is enabled/not', async () => {
        // Code to check if logout button is enabled
        // Code to click on logout button
    });

});
