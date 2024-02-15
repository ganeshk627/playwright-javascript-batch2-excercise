//@ts-check
import { test, expect } from '@playwright/test';

import { LoginPage } from './pages/LoginPage';



test('Page Object model pattern', async ({ page }) => { // Start of a test case

    const loginPage = new LoginPage(page);

    test.step('Launch the Page', async () => {
        await loginPage.gotoLoginPage();  // Navigate to the login page using the goto method defined in the LoginPage class
    });

    test.step('Enter the username after checking the field is enabled/not and check whether username entered is correct or not', async () => {
        const usernameInput = loginPage.usernameInput;
        await expect(page.locator(usernameInput)).toBeVisible();
        await expect(page.locator(usernameInput)).toBeEditable();
        await expect(page.locator(usernameInput)).toBeEnabled();
        await expect(page.locator(usernameInput)).toBeInViewport();
        await loginPage.enterUsername('standard_user');
    });

    test.step('Enter the password after checking the field is enabled/not and check whether password entered is correct or not', async () => {
        const passwordInput = loginPage.passwordInput;
        await expect(page.locator(passwordInput)).toBeVisible();
        await expect(page.locator(passwordInput)).toBeEditable();
        await expect(page.locator(passwordInput)).toBeEnabled();
        await expect(page.locator(passwordInput)).toBeInViewport();
        await loginPage.enterPassword('secret_sauce');
    });

    test.step('Press login after checking the field is enabled/not', async () => {
       const loginButton =  loginPage.loginButton;
       await expect(page.locator(loginButton)).toBeVisible();
       await expect(page.locator(loginButton)).toBeEnabled();
       await expect(page.locator(loginButton)).toBeInViewport();
    });

    test.step('Verify the new Page Url contains https://www.saucedemo.com/inventory.html', async () => {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.htm')
    });

    test.step('Check whether you have element name Products in the navigated page', async () => {
        // Code to check if the "Products" element exists on the page
    });

    test.step('Check the number products in the pages is equivalent to 6.', async () => {
        // Code to count the number of products on the page and assert if it's equal to 6
    });

    test.step('Add few products into the cart and goto cart menu', async () => {
        // Code to add products to the cart
        // Code to navigate to the cart menu
    });

    test.step('Checkout the details by filling the details in the form, before filling check the element is enabled/not and after filling ensure that you have entered correct data.', async () => {
        // Code to check if form elements are enabled
        // Code to fill out the form
        // Code to verify the entered data
    });

    test.step('Click on Finish button and Back Home button after checking the field is enabled/not', async () => {
        // Code to check if Finish button is enabled
        // Code to click on Finish button
        // Code to check if Back Home button is enabled
        // Code to click on Back Home button
    });

    test.step('Do a page level testing to ensure that you landed up in a Product Home page.', async () => {
        // Code to verify if the current page is the Product Home page
    });

    test.step('Finally click logout button to logout from the application after checking logout element is enabled/not', async () => {
        // Code to check if logout button is enabled
        // Code to click on logout button
    });

});
