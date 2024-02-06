const {test,expect} = require('@playwright/test')
test('single fileupload',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    
    await page.locator('#filesToUpload').setInputFiles("C:/Users/siva.kolla/Downloads/playwright")
    await page.waitForTimeout(5000)
})
test.only('multiple fileuploads',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(["C:/Users/siva.kolla/Desktop/Playwright Trianing.txt",'C:/Users/siva.kolla/Desktop/AutoSendmails.txt'])
    await expect(page.locator('//ul[@id="fileList"]//li[1]')).toHaveText('Playwright Trianing.txt')
    await expect(page.locator('//ul[@id="fileList"]//li[2]')).toHaveText('AutoSendmails.txt')
    await page.waitForTimeout(5000)
})