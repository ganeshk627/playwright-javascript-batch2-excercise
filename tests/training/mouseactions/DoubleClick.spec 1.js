import{test,expect} from '@playwright/test'

test('Mouse Double Click',async function({page}){

    await page.goto("https://www.plus2net.com/javascript_tutorial/ondblclick-demo.php")

    await page.locator("//input[@value='Double Click']").dblclick();

    await console.log(await page.locator("//div[@id='box']").textContent());


    await expect(page.locator("//div[@id='box']")).toHaveText("This is double click");

    await page.waitForTimeout(3000);
    

    //await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.locator("//button[normalize-space()='Copy Text']").dblclick();
    //await expect(page.locator("//input[@id='field2']")).toHaveValue();

})