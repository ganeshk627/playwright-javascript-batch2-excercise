//@ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import credentials from './test-data/credentials.json'


test('Data Driven Test - JSON', async ({ page }) => { // Start of a test case
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    const USERNAME = credentials.username;
    const PASSWORD = credentials.password;

    await test.step('i. Launch the Page', async () => {
        // Code to launch the page
        await loginPage.openLoginPage();
    });

    await test.step('ii. Enter the username after checking the field is enabled/not and check whether username entered is correct or not', async () => {
        // Code to check if username field is enabled
        await expect(page.locator(loginPage.usernameInput)).toBeEnabled();
        // Code to enter username
        await loginPage.enterUsername(USERNAME);
        // Code to check if username entered is correct
        await expect(page.locator(loginPage.usernameInput)).toHaveValue(USERNAME);
    });

    await test.step('iii. Enter the password after checking the field is enabled/not and check whether password entered is correct or not', async () => {
        // Code to check if password field is enabled
        await expect(page.locator(loginPage.passwordInput)).toBeEnabled();
        // Code to enter password
        await loginPage.enterPassword(PASSWORD);
        // Code to check if password entered is correct
        await expect(page.locator(loginPage.passwordInput)).toHaveValue(PASSWORD);
    });

    await test.step('iv. Press login after checking the field is enabled/not', async () => {
        // Code to check if login button is enabled
        await expect(page.locator(loginPage.loginButton)).toBeEnabled();
        // Code to press login button
        await loginPage.clickLoginButton();
    });

    await test.step('v. Verify the new Page Url contains https://training.openspan.com/home', async () => {
        // Code to get current page URL and assert if it contains the expected URL
        await expect(page).toHaveURL('https://training.openspan.com/home')
    });

    await test.step('vi. Check whether you have logged in with correct username in the navigated page', async () => {
        // Code to verify if the correct username is displayed on the page
        await expect(page.locator(dashboardPage.welcome_message)).toContainText(USERNAME);
    });

    await test.step('vii. Check the number of product types and products of each category', async () => {
        // Code to count the number of product types and products in each category
        const productTypeCount = 2;
        const productListCount = 24;
        await expect(page.locator(dashboardPage.product_types)).toHaveCount(productTypeCount + 1);
        await expect(page.locator(dashboardPage.product_lists)).toHaveCount(productListCount + 1);
    });

    await test.step('viii. Select product type and product name and click on view details after checking the field is enabled/not', async () => {
        // Code to check if product type and product name fields are enabled
        await expect(page.locator(dashboardPage.product_type_dropdown)).toBeEnabled();
        await expect(page.locator(dashboardPage.product_list_dropdown)).toBeEnabled();
        // Code to select product type and product name
        const productTypeToSelect = 'Beverages';
        const productToSelect = 'Chang';
        await dashboardPage.selectProductType(productTypeToSelect);
        await dashboardPage.selectProduct(productToSelect);
        // Code to click on view details button
        await dashboardPage.clickViewDetails();
    });

    await test.step('ix. Select the Quantity and make an order and repeat the process of ordering based on requirements', async () => {
        // Code to select quantity and make an order
        let quantity = Math.floor(Math.random() * (20 - 1) + 1);
        console.log(`Quantity: ${quantity}`)
        // Code to repeat the process based on requirements

    });

    await test.step('x. Click on cart menu and place your order by clicking next button after checking the field is enabled/not', async () => {
        // Code to check if cart menu button is enabled
        // Code to click on cart menu
        // Code to check if next button is enabled
        // Code to click on next button
    });

});
