import {test, expect} from "@playwright/test";

test("Dynamic drop downs Demo",async ({page})=>{

    await page.goto("https://www.spicejet.com/")

    await page.locator('[data-testid="to-testID-origin"] .css-1cwyjr8').fill("Mu")
    
    
    await page.locator(".r-knv0ih",{hasText:'Mumbai'}).click()

    // await page.locator(".r-knv0ih",{has:page.locator("//div[text()='Mumbai']")}).click()

    

})