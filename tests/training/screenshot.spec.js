const {test,expect} = require("@playwright/test")
test('screenshot of visible page',async({page})=>{
await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
await page.screenshot({path: 'tests/task/screenshot' + Date.now() +'homepage.png'})

})
test('screenshot of full page',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.screenshot({path: 'tests/task/screenshot'+ Date.now() +'homepage.png',fullPage:true})
    
    })
test.only('specific element',async({page})=>{
        await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
        await page.locator('#filesToUpload').screenshot({path: 'tests/task/screenshot'+ Date.now() +'choosebutton.png'})
        
})