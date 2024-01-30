/*
Locators in Playwright
1.Property of DOM(id, name, etc)- should be unique
2.CSS
3. Xpath

To locate element- two approach
Syntax: 
link/button:
await page.locator('locator').click()
await page.click('locator')

input box:
await page.locator('locator').fill('value')
await page.fill('locator','value')
*/

import {test, expect} from '@playwright/test'

test('Locator Demo',async ({page})=>{

   await page.goto("https://demoblaze.com/index.html")
   
   //click on login button - Property
   // await page.locator('id=login2').click()
   await page.locator('#login2').click()

   //Provide username -CSS
   await page.locator('#loginusername').fill('sukumar1991')
   
   //await page.fill('#loginusername','sukumar1991')


   //Provide username -CSS
   await page.locator('#loginpassword').fill('123')

   //click on login button - Xpath
   await page.locator("//button[@onclick='logIn()']").click()

   await page.waitForTimeout(2000)

   //Verify logout link -Xpath
   const logoutlink=await page.locator('//a[@onclick="logOut()"]')


   await expect(logoutlink).toBeVisible();
   await logoutlink.click()



   await page.close()

})


//Locate Multiple Web Elements
//const elements=await page.$$(locator) 
test('Locate Multple Web element',async ({page})=>{

//To capture all the links present in the web page
await page.goto('https://demoblaze.com/index.html')


const links=await page.$$('a')

for(const link of links){
   //return the text of the element
   const linktext=await link.textContent()
   console.log(linktext)
}


// //To capture all the products in the home page

// await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

// const products=await page.$$("//div[@id='tbodyid']//div//h4/a")


// for(const product of products){
//    const prodName=await product.textContent()
//    console.log(prodName)
// }

// await page.close()

// })


(await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")).isVisible();

const products=await page.locator("//div[@id='tbodyid']//div//h4/a")


for(let i=0;i<await products.count();i++){
   const elementText=await products.nth(i).textContent()
   console.log(elementText)
}

await page.close()

})
