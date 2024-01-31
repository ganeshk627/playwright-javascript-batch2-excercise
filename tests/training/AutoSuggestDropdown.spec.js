import {test} from '@playwright/test'

test('Auto Suggest drop down Demo',async ({page})=>{

   await page.goto("https://www.redbus.in/")

   await page.locator('#src').fill('Delhi')

   await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

   const fromCityOptions=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

   for(const option of fromCityOptions){
    const value=await option.textContent()
    // console.log(value)
    if(value.includes('Uttam Nagar')){
        await option.click()
        break
    }
    
   }

})


