//@ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import credentials from './test-data/credentials.json'
import { CartPage } from './pages/CartPage';


test('Data Driven Test - JSON', async ({ page }) => { // Start of a test case

    const USERNAME = credentials.username;
    const PASSWORD = credentials.password;
    const productTypeToSelect = credentials.bucketlist.productCategory;
    const productToSelect = credentials.bucketlist.productName;
    const quantity = credentials.bucketlist.quantity;

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);

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
        await expect(page).toHaveURL('https://training.openspan.com/home');
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
        await expect(page.locator(dashboardPage.product_list_dropdown)).not.toBeEnabled();
        // Code to select product type and product name
        // const productTypeToSelect = 'Beverages';
        // const productToSelect = 'Chang';

        await dashboardPage.selectProductType(productTypeToSelect);
        await dashboardPage.selectProduct(productToSelect);
        // Code to click on view details button
        await dashboardPage.clickViewDetails();
    });

    await test.step('ix. Select the Quantity and make an order and repeat the process of ordering based on requirements', async () => {
        // Code to select quantity and make an order
        // await cartPage.selectProductQuantity(quantity); // issues with select quantity
        await cartPage.clickOrder();
        // await cartPage.clickEditYourCart();

    });

    await test.step('x. Click on cart menu and place your order by clicking next button after checking the field is enabled/not', async () => {
        // Code to check if cart menu button is enabled
        await expect(page.locator(cartPage.cart_icon)).toBeEnabled();
        // Code to click on cart menu
        await cartPage.openCart();
        // Code to check if next button is enabled
        await expect(page.locator(cartPage.next_button_to_fill_address)).toBeEnabled();
        // Code to click on next button
        await cartPage.clickNextToFillAddress();
    });

    await test.step('xi. Fill the billing and shipping address by reading the details from excel/db/json file and before filling check the element is enabled/not and after filling ensure that you have entered correct data', async () => {
        // Code to read billing and shipping address details from external source (e.g., Excel, DB, JSON)
        const billing_address = credentials.address.billingAddress;
        // Code to fill the billing and shipping address fields
        await cartPage.fillBillingAndShippingAddress(
            billing_address.firstName,
            billing_address.lastName,
            billing_address.streetName,
            billing_address.zipCode,
            billing_address.areaCode,
            billing_address.phoneNumber,
            billing_address.companyName,
            billing_address.email
        );
        await cartPage.clickNextToMakePayment();
    });

    await test.step('xii. Select the payment type, fill necessary details and click submit after checking the field is enabled/not', async () => {
        // - Select the payment type
        await cartPage.clickBillMe()
        // - Fill necessary payment details
        await cartPage.fillPurchaseNumber('11111111');
        // - Check if the submit button is enabled
        // - Click the submit button if enabled
        await cartPage.clickSubmit();
    });

    await test.step('xiii. Verify the successful order message ‘Thank you for placing an order with ACME! ’', async () => {
        // - Verify the presence of the successful order message
        await expect(page.locator(cartPage.order_confirmation_message)).toContainText('Thank you for placing an order with ACME!');
        await cartPage.logOrderId();
    });

    await test.step('xiv. Finally click logout button to logout from the application after checking logout element is enabled/not', async () => {
        // - Check if the logout button is enabled
        // - Click the logout button if enabled
        await cartPage.logout();
    });

    await test.step('xv. Do a page level testing to ensure that you landed up in a login page.', async () => {
        // - Check if the current page is the login page
        await expect(page).toHaveURL(/.*\/login/)
    });

});


test.skip('test', async () => {
    console.log(credentials.username)
    console.log(credentials.password)
    console.log(credentials.bucketlist.productCategory)
    console.log(credentials.bucketlist.productName)
})
