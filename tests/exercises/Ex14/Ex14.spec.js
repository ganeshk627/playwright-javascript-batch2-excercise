test('Page Object model pattern', async ({ page }) => { // Start of a test case

    test.step('i. Launch the Page', async () => {
        // Code to launch the page
    });

    test.step('ii. Enter the username after checking the field is enabled/not and check whether username entered is correct or not', async () => {
        // Code to check if username field is enabled
        // Code to enter username
        // Code to check if username entered is correct
    });

    test.step('iii. Enter the password after checking the field is enabled/not and check whether password entered is correct or not', async () => {
        // Code to check if password field is enabled
        // Code to enter password
        // Code to check if password entered is correct
    });

    test.step('iv. Press login after checking the field is enabled/not', async () => {
        // Code to check if login button is enabled
        // Code to press login button
    });

    test.step('v. Verify the new Page Url contains https://training.openspan.com/home', async () => {
        // Code to get current page URL and assert if it contains the expected URL
    });

    test.step('vi. Check whether you have logged in with correct username in the navigated page', async () => {
        // Code to verify if the correct username is displayed on the page
    });

    test.step('vii. Check the number of product types and products of each category', async () => {
        // Code to count the number of product types and products in each category
    });

    test.step('viii. Select product type and product name and click on view details after checking the field is enabled/not', async () => {
        // Code to check if product type and product name fields are enabled
        // Code to select product type and product name
        // Code to click on view details button
    });

    test.step('ix. Select the Quantity and make an order and repeat the process of ordering based on requirements', async () => {
        // Code to select quantity and make an order
        // Code to repeat the process based on requirements
    });

    test.step('x. Click on cart menu and place your order by clicking next button after checking the field is enabled/not', async () => {
        // Code to check if cart menu button is enabled
        // Code to click on cart menu
        // Code to check if next button is enabled
        // Code to click on next button
    });

});
