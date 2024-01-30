import {test, expect} from '@playwright/test'

test('Alerts with Ok',async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")
   
   //We have to write dialog window handler- to get the control
   //Enabling alert handling - Dialog window handler
  
   page.on('dialog',async dialog=>{
        //check the type of alert- type of dialog
        expect(dialog.type()).toContain('alert')
        //check the alert message
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept() // will close the dialog box
   })



   //After this we have to click on dialog-before this we have to trigger the event by dialog handle
   await page.click("//button[normalize-space()='Alert']")
   await page.waitForTimeout(3000)


})

test('Confirmation Alert- OK and Cancel',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //We have to write dialog window handler- to get the control
    //Enabling alert handling - Dialog window handle
    page.on('dialog',async dialog=>{
         //check the type of alert- type of dialog
         expect(dialog.type()).toContain('confirm')
         //check the alert message
         expect(dialog.message()).toContain('Press a button!')
         await dialog.accept() // will close by Ok button
         //await dialog.dismiss() //will close by cancell button
    })
 
    //After this we have to click on dialog-before this we have to trigger the event by dialog handle
    await page.click("button[onclick='myFunctionConfirm()']")
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000)
 })

 test('Prompt Alert- OK and Cancel',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //Enabling alert handling - Dialog window handle
    page.on('dialog',async dialog=>{
         //check the type of alert- type of dialog
         expect(dialog.type()).toContain('prompt')
         //check the alert message
         expect(dialog.message()).toContain('Please enter your name:')
         expect(dialog.defaultValue()).toContain('Harry Potter')
         //In order to pass some value to input box use below syntax
         //we cant inspect directly by can handle it
         await dialog.accept('Sukumar') // will close by Ok button by fill value in input box
    })
 
    //After this we have to click on dialog-before this we have to trigger the event by dialog handle
    await page.click("button[onclick='myFunctionPrompt()']")
    await expect(page.locator('#demo')).toHaveText('Hello Sukumar! How are you today?')
    
    await page.waitForTimeout(5000)
 
 
 })




