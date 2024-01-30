import {expect, test} from '@playwright/test'

test('Soft Assertions Demo',async ({page})=>{

   await page.goto("https://demoblaze.com/index.html")
   
//    await expect(page).toHaveURL('https://demoblaze.com/index.html')
//    await expect(page).toHaveTitle('STORE')
//    await expect(page.locator('.navbar-brand')).toBeVisible()

   await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
   await expect.soft(page).toHaveTitle('STORE')
   await expect.soft(page.locator('.navbar-brand')).toBeVisible()


})

