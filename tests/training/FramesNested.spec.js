import {test} from '@playwright/test'

test('Nested Frame demo',async ({page})=>{

   await page.goto("https://ui.vision/demo/webtest/frames/")
   
   const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   await frame3.locator("input[name='mytext3']").fill('Hello')

   //Handle frame inside frame3
   const childFrames = await frame3.childFrames()

   await childFrames[0].locator('//*[@id="i5"]/div[3]/div').check()


})

