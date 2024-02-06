import {test} from '@playwright/test'

test('Handling Frame demo',async ({page})=>{

   await page.goto("https://ui.vision/demo/webtest/frames/")

   //Total frames
   const allFrames=await page.frames()
   console.log("Total no of frames inside a page",allFrames.length)

   
   //Approach 1 - Using name and url of the frame
   // const varname=await page.frame('name') //If name exists for frame
   const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
   await frame1.fill("input[name='mytext1']",'Hello')

   

   //Aproach 2 - Using frame locator
   const element=await page.frameLocator("frame[src='frame_2.html']").locator("input[name='mytext2']")
   await element.fill('Hello')

})






















test("Example2-iframe",async ({page})=>{

   await page.goto("https://the-internet.herokuapp.com/iframe")

   const element=await page.frameLocator("#mce_0_ifr").locator("#tinymce")
   await element.fill("Welcome")

})
