import {expect, test} from '@playwright/test'

//Most commonly used assertions

test('Assertions Demo',async ({page})=>{

   await page.goto("https://demo.nopcommerce.com/register")


    // 1) expect(page).toHaveURL()   Page has URL
    await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register")

    // 2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // 3) expect(locator).toBeVisible()  Element is visible
    const logo=page.locator('.header-logo')
    await expect(logo).toBeVisible()

    // 4) expect(locator).toBeEnabled()/tobeDisabled()  Control is enabled/disabled
    const searchBox=page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
    //Radio Button
    const maleRadioBtn=page.locator('#gender-male')
    await maleRadioBtn.click()
    await expect(maleRadioBtn).toBeChecked()

    //Check box
    const newsletterCheckBox=page.locator('#Newsletter')
    await expect(newsletterCheckBox).toBeChecked()

    // 6) expect(locator).toHaveAttribute() Element has attribute
    const buttonElement=page.locator('#register-button')
    await expect(buttonElement).toHaveAttribute('type','submit')







    // 7) expect(locator).toHaveText()  Element matches text --> Exact match
    await expect(page.locator('.page-title h1')).toHaveText('Register')




    // 8) expect(locator).toContainText()  Element contains text --> Partial match
    await expect(page.locator('.page-title h1')).toContainText('Reg')




    // 9) expect(locator).toHaveValue(value) Input has a value
    const email=page.locator('#Email')
    await email.fill('test@gmail.com')
    await expect(email).toHaveValue('test@gmail.com')



    // 10) expect(locator).toHaveCount()  List of elements has given length
    const dateofBirthday=page.locator('select[name="DateOfBirthDay"] option')
    await expect(dateofBirthday).toHaveCount(32)



    await page.close()
   
})

