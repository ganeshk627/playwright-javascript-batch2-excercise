
import {expect, test} from '@playwright/test'

test('Radio Button demo',async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html")

    //To handle Radio button
    await page.locator("input[value='Male']").check()
    // await page.check("input[value='Male']")




    //Possible aseertions on Radio buttton
    await expect(page.locator("input[value='Male']")).toBeChecked()


    expect(await page.locator("input[value='Male']").isChecked()).toBeTruthy()

    expect(await page.locator("input[value='FeMale']").isChecked()).toBeFalsy()
    



    await page.close()
    
})

