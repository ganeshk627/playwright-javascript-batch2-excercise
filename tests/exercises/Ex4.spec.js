// @ts-check
import { expect, test } from '@playwright/test'

let URL = 'https://the-internet.herokuapp.com/javascript_alerts';
let SIMPLE_ALERT = '//button[normalize-space()="Click for JS Alert"]';
let CONFIRM_ALERT = '//button[normalize-space()="Click for JS Confirm"]';
let PROMPT_ALERT = '//button[normalize-space()="Click for JS Prompt"]';
let RESULT = '#result';

test('Alerts with Ok', async ({ page }) => {

    await page.goto(URL);

    //We have to write dialog window handler- to get the control
    //Enabling alert handling - Dialog window handler    

    page.on('dialog', async dialog => {
        //check the type of alert- type of dialog
        console.log(dialog.type());
        expect(dialog.type()).toContain('alert')
        //check the alert message
        expect(dialog.message()).toContain('I am a JS Alert')
        await dialog.accept(); // will close the dialog box
    });

    //After this we have to click on dialog-before this we have to trigger the event by dialog handle
    await page.click(SIMPLE_ALERT);
    await expect(page.locator(RESULT)).toHaveText('You successfully clicked an alert');
    await page.waitForTimeout(1000);


})

test('Confirmation Alert- OK and Cancel', async ({ page }) => {
    // Counter to differentiate between alerts
    let counter = 1;

    await page.goto(URL);

    //We have to write dialog window handler- to get the control
    //Enabling alert handling - Dialog window handle
    page.on('dialog', async dialog => {
        //check the type of alert- type of dialog
        console.log(dialog.type());
        expect(dialog.type()).toContain('confirm');
        //check the alert message
        expect(dialog.message()).toContain('I am a JS Confirm');
        // console.log(counter);
        switch (counter) {
            case 1:
                await dialog.accept(); // will close by Ok button
                await expect(page.locator(RESULT)).toHaveText('You clicked: Ok');
                break;

            case 2:
                await dialog.dismiss() //will close by cancel button
                await expect(page.locator(RESULT)).toHaveText('You clicked: Cancel');
                break;

            default:
                throw new Error('Unexpected dialog event!');
        };
        counter++;
    });


    //After this we have to click on dialog-before this we have to trigger the event by dialog handle
    await page.click(CONFIRM_ALERT); // accept
    await page.waitForTimeout(2000);

    await page.click(CONFIRM_ALERT); // dismiss
    await page.waitForTimeout(2000);
});

test('Prompt Alert - OK and Cancel', async ({ page }) => {
    // Counter to differentiate between alerts
    let counter = 1;

    await page.goto(URL);

    //Enabling alert handling - Dialog window handle
    page.on('dialog', async dialog => {
        //check the type of alert- type of dialog
        console.log(dialog.type());
        expect(dialog.type()).toContain('prompt')
        //check the alert message
        expect(dialog.message()).toContain('I am a JS prompt')
        expect(dialog.defaultValue()).toContain('')

        // console.log(counter);
        switch (counter) {
            case 1:
                await dialog.dismiss();
                await expect(page.locator(RESULT)).toHaveText('You entered: null');
                break;
            case 2:
                await dialog.accept();
                await expect(page.locator(RESULT)).toHaveText('You entered:');
                break;
            case 3:
                await dialog.accept('Hello Harry!');
                await expect(page.locator(RESULT)).toHaveText('You entered: Hello Harry!');
                break;
            default:
                throw new Error('Unexpected dialog event!');
        };
        counter++;

    });

    //After this we have to click on dialog-before this we have to trigger the event by dialog handle
    await page.locator(PROMPT_ALERT).click(); // Cancel
    await page.waitForTimeout(1000);
    await page.locator(PROMPT_ALERT).click(); // ok - without prompt
    await page.waitForTimeout(1000);
    await page.locator(PROMPT_ALERT).click(); // ok - with prompt 'Hello Harry!'
    await page.waitForTimeout(3000);
});




