import {test, expect} from '@playwright/test'




test.describe('BuiltIn Locator Demo',()=>{

    test('getByAltText Demo',async ({page})=>{


        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        const logo=await page.getByAltText('company-branding')
        
        await expect(logo).toBeVisible()
    
        await page.close()
    })

    test('getByPlaceholder Demo',async ({page})=>{


        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        const userName=page.getByPlaceholder('Username')
        const password=page.getByPlaceholder('Password')

        await expect(userName).toBeVisible()
        await expect(password).toBeVisible()

        await page.close()
    })


    test('getByRole Demo',async ({page})=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        await page.getByPlaceholder('Username').fill('Admin')
        await page.getByPlaceholder('Password').fill('admin123')

        await page.getByRole('button',{type :'submit'}).click()

        await page.close()
    })


    test('getByText Demo',async ({page})=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        await page.getByPlaceholder('Username').fill('Admin')
        await page.getByPlaceholder('Password').fill('admin123')

        await page.getByRole('button',{type:'submit'}).click()

        const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
        await expect(page.getByText(name)).toBeVisible()

        await page.close()
    })



})