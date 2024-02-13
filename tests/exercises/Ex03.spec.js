// @ts-check
import { expect, test } from '@playwright/test'

let URL = 'https://www.letskodeit.com/practice';


test('Working with input box', async ({ page }) => {

    // Locators
    const BUTTON_ENABLE = '#enabled-button';
    const BUTTON_DISABLE = '#disabled-button';
    const INPUT_ENABLE_DISBLE = '#enabled-example-input';
    // String literals
    const input_text = 'Hello Harry!';
    
    await page.goto(URL);
    //Possible assertions on text box
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toBeVisible();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toBeEmpty();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toBeEnabled();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toBeEditable();

    //To handle Input Text box
    await page.locator(INPUT_ENABLE_DISBLE).fill(input_text);
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toHaveValue(input_text);

    //Disabling the textbox using button
    await page.locator(BUTTON_DISABLE).click();

    // Assertions  after disabling the textbox
    await expect(page.locator(INPUT_ENABLE_DISBLE)).not.toBeEmpty();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toHaveValue(input_text);
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toBeVisible();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toBeDisabled();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).not.toBeEditable();

    // Enabling back the textbox
    await page.locator(BUTTON_ENABLE).click();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).not.toBeEmpty();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toHaveValue(input_text);
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toBeVisible();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toBeEnabled();
    await expect(page.locator(INPUT_ENABLE_DISBLE)).toBeEditable();

});

test('Working with radio button', async ({ page }) => {
    // Locators
    const BMW = '#bmwradio';
    const BENZ  = '#benzradio';
    const HONDA  ='#hondaradio';

    await page.goto(URL);

    // Check Assertions
    await expect(page.locator(BMW)).toBeVisible();
    await expect(page.locator(BENZ)).toBeVisible();
    await expect(page.locator(HONDA)).toBeVisible();

    await expect(page.locator(BMW)).not.toBeChecked();
    await expect(page.locator(BENZ)).not.toBeChecked();
    await expect(page.locator(HONDA)).not.toBeChecked();

    // Selecting BMW and validating others not to be checked
    await page.locator(BMW).check().then(async ()=> {
        await expect(page.locator(BMW)).toBeChecked();
        await expect(page.locator(BENZ)).not.toBeChecked();
        await expect(page.locator(HONDA)).not.toBeChecked();
    });

    // Selecting BENZ and validating others not to be checked
    await page.locator(BENZ).check().then(async ()=> {
        await expect(page.locator(BENZ)).toBeChecked();
        await expect(page.locator(BMW)).not.toBeChecked();
        await expect(page.locator(HONDA)).not.toBeChecked();
    });

    // Selecting HONDA and validating others not to be checked
    await page.locator(HONDA).check().then(async ()=> {
        await expect(page.locator(HONDA)).toBeChecked();
        await expect(page.locator(BMW)).not.toBeChecked();
        await expect(page.locator(BENZ)).not.toBeChecked();
    });

    // Trying to deselect radio button
    // await page.locator(HONDA).uncheck().then(async ()=> {
    //     await expect(page.locator(HONDA)).not.toBeChecked();
    //     await expect(page.locator(BMW)).not.toBeChecked();
    //     await expect(page.locator(BENZ)).not.toBeChecked();
    // });

});

test('Working with check box', async ({ page }) => {

    // Locators
    const BMW = '#bmwcheck';
    const BENZ  = '#benzcheck';
    const HONDA  ='#hondacheck';

    await page.goto(URL);

    // Check Assertions
    await expect(page.locator(BMW)).toBeVisible();
    await expect(page.locator(BENZ)).toBeVisible();
    await expect(page.locator(HONDA)).toBeVisible();
    await expect(page.locator(BMW)).not.toBeChecked();
    await expect(page.locator(BENZ)).not.toBeChecked();
    await expect(page.locator(HONDA)).not.toBeChecked();

    // Checking and Unchecking BMW checkboxes then validating checkboxes
    await page.locator(BMW).check().then(async ()=> {
        await expect(page.locator(BMW)).toBeChecked();
    });
    await page.locator(BMW).uncheck().then(async ()=> {
        await expect(page.locator(BMW)).not.toBeChecked();
    });

    // Checking and Unchecking BENZ checkboxes then validating checkboxes
    await page.locator(BENZ).check().then(async ()=> {
        await expect(page.locator(BENZ)).toBeChecked();
    });
    await page.locator(BENZ).uncheck().then(async ()=> {
        await expect(page.locator(BENZ)).not.toBeChecked();
    });

    // Checking and Unchecking HONDA checkboxes then validating checkboxes
    await page.locator(HONDA).check().then(async ()=> {
        await expect(page.locator(HONDA)).toBeChecked();
    });
    await page.locator(HONDA).uncheck().then(async ()=> {
        await expect(page.locator(HONDA)).not.toBeChecked();
    });


});
