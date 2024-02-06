import{test,expect} from '@playwright/test'

test('Drag and drop-approach 1', async function({page}){

    await page.goto("https://testautomationpractice.blogspot.com/");
    const source=await page.locator("div[id='draggable'] p");
    const target=await page.locator("//div[@id='droppable']");

    //actions that we perform while dragging and dropping
    //1. Mouse hovering over the source element
    //2. Mouse down over the source element
    //3.Mouse hovering over the target element
    //4. Mouse up over the target element

    await source.hover()
    await page.mouse.down()

    await target.hover()
    await page.mouse.up()

    await page.pause();

   

})

test('Drag and drop-approach 2', async function({page}){

    await page.goto("https://testautomationpractice.blogspot.com/");
    const source=await page.locator("div[id='draggable'] p");
    const target=await page.locator("//div[@id='droppable']")

    await source.dragTo(target);

    


})