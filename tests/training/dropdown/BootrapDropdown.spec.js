import {expect, test} from '@playwright/test'

test('Bootstrap Drop down Demo',async ({page})=>{

   await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2")
   
   await page.locator('.multiselect').click()

   const options=await page.locator('ul li label input')
   await expect(options).toHaveCount(11)

   const optionsNew=await page.$$('ul li label input')
   await expect(optionsNew.length).toBe(11)

   //Selecting multiple options from drop down
   const dropdownOptions=await page.$$('ul li label')
   console.log(dropdownOptions.length)
   for(const option of dropdownOptions){

    const value=await option.textContent()
    console.log("value is", value)
    if(value.includes('Angular')||value.includes('Java')){
        await option.click()
    }

   }

   //Deselect the options from the driop downs
   for(const option of dropdownOptions){

    const value=await option.textContent()
    console.log("value is", value)
    if(value?.includes('HTML')||value?.includes('CSS')){
        await option.click()
    }

   }

   



})


