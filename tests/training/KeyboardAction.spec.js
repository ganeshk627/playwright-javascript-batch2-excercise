import {test} from '@playwright/test'

test('Keyboard Actions Demo',async ({page})=>{

   await page.goto("https://gotranscript.com/text-compare")

   await page.locator('[name="text1"]').fill("Welcome to playwright automation")


   


   //Ctrl + A
   await page.keyboard.press('Control+A')      //use press method to use combination of keys like ctrl + A

   //Ctrl + C
   await page.keyboard.press('Control+C')
   
   //Tab - SIngle key
   await page.keyboard.down('Tab')  //To press
   await page.keyboard.up('Tab')    //To release- even without this it will work

   //Ctrl + v
   await page.keyboard.press('Control+V')


   

})

