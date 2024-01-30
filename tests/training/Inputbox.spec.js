import {expect, test} from '@playwright/test'

test('Input Boxes demo',async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html")

    //Possible aseertions on text box
    await expect(await page.getByPlaceholder('First Name')).toBeVisible()
    await expect(await page.getByPlaceholder('First Name')).toBeEmpty()
    await expect(await page.getByPlaceholder('First Name')).toBeEnabled()
    await expect(await page.getByPlaceholder('First Name')).toBeEditable()

    //To handle Input Text box
    await page.getByPlaceholder('First Name').fill('Sukumar')

    //To pause page for some time
    await page.waitForTimeout(2000)

    

})

