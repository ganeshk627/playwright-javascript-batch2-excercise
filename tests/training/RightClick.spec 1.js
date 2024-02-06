import{test,expect} from "@playwright/test";

test.only('Mouse right click',async function({page}){


    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    

    const rightClick=await page.locator("//span[@class='context-menu-one btn btn-neutral']")

   
    //perfoming the right click 

    await rightClick.click({button:'right'});

    

    await page.waitForTimeout(3000);

})