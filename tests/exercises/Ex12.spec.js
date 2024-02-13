//@ts-check
import { test, expect } from '@playwright/test';


// This is a test file for testing window handling and event listener functionality
test('Window handling - event listener', async ({ page }) => { // Start of a test case
  // Navigate to the URL 'https://the-internet.herokuapp.com/windows'
  await page.goto('https://the-internet.herokuapp.com/windows');  // Set up an event listener for the 'popup' event
  page.on('popup', data => {
    // Log the number of pages in the browser context
    console.log(page.context().pages().length);
    // Check if the new page URL matches the expected pattern
    expect.soft(data).toHaveURL(/.*\/windows\/new/);
    // Check if the new page contains the expected heading text
    expect.soft(data.getByRole('heading')).toContainText('New Window');
  });
  // Click the link with the text 'Click Here' twice
  await page.getByRole('link', { name: 'Click Here' }).click();
  await page.getByRole('link', { name: 'Click Here' }).click();
 });


// This is a test file for testing window handling with promises in a web page
test('Window handling - promise', async({ page }) => { // Begin test case
  // Navigate to the URL 'https://the-internet.herokuapp.com/windows'
  await page.goto('https://the-internet.herokuapp.com/windows');
  // Create a promise that resolves when a popup window is opened
  const page1Promise = page.waitForEvent('popup');
  // Click the link with the text 'Click Here'
  await page.getByRole('link', { name: 'Click Here' }).click();
  // Wait for the popup window and assign it to the variable 'page1'
  const page1 = await page1Promise;
  // Assert that the URL of 'page1' matches the expected pattern
  expect.soft(page1).toHaveURL(/.*\/windows\/new/);
  // Assert that the heading on 'page1' contains the text 'New Window'
  await expect(page1.getByRole('heading')).toContainText('New Window');

  // Click the link with the text 'Click Here' again
  await page.getByRole('link', { name: 'Click Here' }).click();
  // Wait for the new popup window and assign it to the variable 'page2'
  const page2 = await page1Promise;
  // Assert that the URL of 'page2' matches the expected pattern
  expect.soft(page2).toHaveURL(/.*\/windows\/new/);
  // Assert that the heading on 'page1' still contains the text 'New Window'
  await expect(page1.getByRole('heading')).toContainText('New Window');
 }); // End test case