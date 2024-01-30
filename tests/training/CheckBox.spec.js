import {expect, test} from '@playwright/test'

test('Check Box Demo',async ({page})=>{



    await page.goto("https://demo.automationtesting.in/Register.html")

    //Single Check box
    await page.locator("//input[@type='checkbox' and @value='Cricket']").check()

    //Assertions
    await expect(page.locator("//input[@type='checkbox' and @value='Cricket']")).toBeChecked()
    
    expect(await page.locator("//input[@type='checkbox' and @value='Cricket']").isChecked()).toBeTruthy()

    expect(await page.locator("//input[@type='checkbox' and @value='Movies']").isChecked()).toBeFalsy()

    //To uncheck
    await page.locator("//input[@type='checkbox' and @value='Cricket']").uncheck()











    await page.waitForTimeout(2000)

    //To check all check boxes
    const checkBoxes=await page.$$("//input[@type='checkbox']")

    for(const boxes of checkBoxes){
        await boxes.check()
    }

    for(const boxes of checkBoxes){
        await boxes.uncheck()
    }

    //To check specific set of check boxes
    await page.waitForTimeout(3000)

    const checkBoxLocators=[
        "//input[@type='checkbox' and @value='Cricket']",
        "//input[@type='checkbox' and @value='Hockey']"
    ]

    for(const locator of checkBoxLocators){
        await page.locator(locator).check()
    }



})

