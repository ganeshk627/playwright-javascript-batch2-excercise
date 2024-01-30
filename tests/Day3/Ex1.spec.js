// @ts-check
const { test, expect } = require('@playwright/test');

let URL = 'https://practicetestautomation.com/practice-test-login/';

let usernameInput = '#username';
let passwordInput = '#password';
let loginButton = '#submit';
let errorMessage = '#error';
let logoutButton = 'text="Log out"';

test('Positive LogIn test', async ({ page }) => {
  
  const username = 'student';
  const password = 'Password123';
  await page.goto(URL);

  await page.locator(usernameInput).fill(username);
  await page.locator(passwordInput).fill(password);
  await page.locator(loginButton).click();

  await expect(page).toHaveURL(/practicetestautomation.com\/logged-in-successfully\//);
  await expect(page.locator('strong')).toHaveText('Congratulations student. You successfully logged in!')
  await page.locator(logoutButton).click()
  
});

test('Negative username test', async ({ page }) => {
  
  const username = 'incorrectUser';
  const password = 'Password123';
  await page.goto(URL);

  await page.locator(usernameInput).fill(username);
  await page.locator(passwordInput).fill(password);
  await page.locator(loginButton).click();

  await expect(page.locator(errorMessage)).toHaveText('Your username is invalid!');
  
});

test('Negative password test', async ({ page }) => {
  
  const username = 'student';
  const password = 'incorrectPassword';
  await page.goto(URL);

  await page.locator(usernameInput).fill(username);
  await page.locator(passwordInput).fill(password);
  await page.locator(loginButton).click();

  await expect(page.locator(errorMessage)).toHaveText('Your password is invalid!');

  
});




