// @ts-check
const { test, expect } = require('@playwright/test');


let URL = 'https://www.saucedemo.com';
let USERNAME = 'standard_user';
let PASSWORD = 'secret_sauce';


test('Order Products', async ({ page }) => {
  //Launch the Page
  await page.goto(URL);

  //Enter the username after checking the field is enabled/not and check whether username entered is correct or not
  await expect(page.locator('[data-test="username"]')).toBeEnabled();
  await expect(page.locator('[data-test="username"]')).toBeEditable();
  await page.locator('[data-test="username"]').fill(USERNAME);
  await expect(page.locator('[data-test="username"]')).toHaveValue(USERNAME);

  //Enter the password after checking the field is enabled/not and check whether password entered is correct or not
  await expect(page.locator('[data-test="password"]')).toBeEnabled();
  await expect(page.locator('[data-test="password"]')).toBeEditable();
  await page.locator('[data-test="password"]').fill(PASSWORD);
  await expect(page.locator('[data-test="password"]')).toHaveValue(PASSWORD);


  //Press login after checking the field is enabled/not 
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
  await page.locator('[data-test="login-button"]').click();

  //Verify the new Page Url contains https://www.saucedemo.com/inventory.html
  await expect(page).toHaveURL(/.*inventory\.html/);

  //Check whether you have element name Products in the navigated page
  await expect(page.getByText('Products')).toBeVisible();
  await expect(page.locator('#header_container')).toContainText('Products');

  //Check the number products in the pages is equivalent to 6.
  await expect(await page.locator('.inventory_item').count()).toEqual(6);

  //Add few products into the cart and goto cart menu
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();

  //Checkout the details by filling the details in the form, before filling check the element is enabled/not and after filling ensure that you have entered correct data.
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Harry');
  await page.locator('[data-test="lastName"]').fill('Potter');
  await page.locator('[data-test="postalCode"]').fill('605014');
  await page.locator('[data-test="continue"]').click();

  //Click on Finish button and Back Home button after checking the field is enabled/not
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();

  //Do a page level testing to ensure that you landed up in a Product Home page.
  await expect(page).toHaveURL(/.*inventory\.html/);

  //Finally click logout button to logout from the application after checking logout element is enabled/not
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeEnabled();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.waitForTimeout(5);

});


