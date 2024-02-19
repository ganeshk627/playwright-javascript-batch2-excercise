//@ts-check
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { HeaderPage } from './pages/HeaderPage';
import { CartPage } from './pages/CartPage';
import { SidebarPage } from './pages/SidebarPage';



test('Page Object model pattern', async ({ page }) => { // Start of a test case

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const headerPage = new HeaderPage(page);
    const cartPage = new CartPage(page);
    const sidebarpage = new SidebarPage(page);

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
        const loginButton = loginPage.loginButton;
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
        const products = ['Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'];
        for (const product of products) {
            await inventoryPage.addProductToCart(product);
        }
        await headerPage.openCart();
    });

    await test.step('Checkout the details by filling the details in the form, before filling check the element is enabled/not and after filling ensure that you have entered correct data.', async () => {

        await cartPage.checkout();

        // Assertions before filling data
        await expect(page.locator(cartPage.firstname_input)).toBeVisible();
        await expect(page.locator(cartPage.lastname_input)).toBeVisible();
        await expect(page.locator(cartPage.zipcode_input)).toBeVisible();
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const zipCode = faker.location.zipCode();

        await cartPage.fillCheckoutInformation(firstName, lastName, zipCode);

        // Assertions after filling data
        await expect(page.locator(cartPage.firstname_input)).toHaveValue(firstName);
        await expect(page.locator(cartPage.lastname_input)).toHaveValue(lastName);
        await expect(page.locator(cartPage.zipcode_input)).toHaveValue(zipCode);

        await cartPage.clickContinue();
    });

    await test.step('Click on Finish button and Back Home button after checking the field is enabled/not', async () => {
        await expect(page.locator(cartPage.finish_button), `Finish buton should be enabled!`).toBeEnabled();
        await cartPage.clickFinish();
        await cartPage.clickBackToHome();
    });

    await test.step('Do a page level testing to ensure that you landed up in a Product Home page.', async () => {
        await expect(page, `Page should be landed to https://www.saucedemo.com/inventory.html`).toHaveURL('https://www.saucedemo.com/inventory.html')
    });

    await test.step('Finally click logout button to logout from the application after checking logout element is enabled/not', async () => {
        await headerPage.openMenu();
        await expect(page.locator(sidebarpage.logout_button), `Logout button should be enabled!!!`).toBeEnabled();
        await sidebarpage.clickLogout();
        await expect(page).toHaveURL('https://www.saucedemo.com/')
    });

});
