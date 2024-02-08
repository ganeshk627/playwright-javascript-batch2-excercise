//Refer the images mentioned in the video

import {expect, test} from '@playwright/test'
import { afterEach, beforeEach } from 'node:test'

/*

//Approach 1

test('Home page test',async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")
   
    //Login
   await page.locator('id=login2').click()
   await page.locator('#loginusername').fill('sukumar1991')
   await page.locator('#loginpassword').fill('123')
   await page.locator('//button[@onclick="logIn()"]').click()

   //Home Page
   await page.waitForSelector('.hrefch')
   const products=await page.$$('.hrefch')
   await expect(products).toHaveLength(9)

   //Logout
   const logoutlink=await page.locator('//a[@onclick="logOut()"]')
   await expect(logoutlink).toBeVisible();
   await logoutlink.click()

})


test('Add product to cart test',async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")

    //Login
    await page.locator('id=login2').click()
    await page.locator('#loginusername').fill('sukumar1991')
    await page.locator('#loginpassword').fill('123')
    await page.locator('//button[@onclick="logIn()"]').click()

   //Add product to cart
   await page.locator("//a[text()='Samsung galaxy s6']").click()
   await page.locator("//a[text()='Add to cart']").click()

   page.on('dialog',async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
   })

   //Logout
   const logoutlink=await page.locator('//a[@onclick="logOut()"]')
   await expect(logoutlink).toBeVisible();
   await logoutlink.click()
    
 
 })

 */

 /*
 //Approach 2

 let page;

 test.beforeEach("Before each hook",async ({browser})=>{

    page=await browser.newPage()
    await page.goto("https://demoblaze.com/index.html")
   
    //Login
    await page.locator('id=login2').click()
    await page.locator('#loginusername').fill('sukumar1991')
    await page.locator('#loginpassword').fill('123')
    await page.locator('//button[@onclick="logIn()"]').click()

 })

 test.afterEach("After each hook",async ()=>{  //Here no need pass anything anything since we created already
    //cause we already created page fixtures which will be used everywhere
    //Logout
   const logoutlink=await page.locator('//a[@onclick="logOut()"]')
   await expect(logoutlink).toBeVisible();
   await logoutlink.click()
    
 })

 test('Home page test',async ()=>{

   await page.waitForSelector('.hrefch')
   const products=await page.$$('.hrefch')
   await expect(products).toHaveLength(9)

})


test('Add product to cart test',async ()=>{
   //Add product to cart
   await page.locator("//a[text()='Samsung galaxy s6']").click()
   await page.locator("//a[text()='Add to cart']").click()

   page.on('dialog',async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
   })

 })

*/

//Approach 3

let page;

 test.beforeAll("Before all hook",async ({browser})=>{

    page=await browser.newPage()
    await page.goto("https://demoblaze.com/index.html")
   
    //Login
    await page.locator('id=login2').click()
    await page.locator('#loginusername').fill('sukumar1991')
    await page.locator('#loginpassword').fill('123')
    await page.locator('//button[@onclick="logIn()"]').click()

 })

 test.afterAll("After all hook",async ()=>{  //Here no need pass anything anything since we created already
    //cause we already created page fixtures which will be used everywhere
    //Logout
   const logoutlink=await page.locator('//a[@onclick="logOut()"]')
   await expect(logoutlink).toBeVisible();
   await logoutlink.click()
    
 })

 test('Home page test',async ()=>{

   await page.waitForSelector('.hrefch')
   const products=await page.$$('.hrefch')
   await expect(products).toHaveLength(9)

})


test('Add product to cart test',async ()=>{
   //Add product to cart
   await page.locator("//a[text()='Samsung galaxy s6']").click()
   await page.locator("//a[text()='Add to cart']").click()

   page.on('dialog',async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
   })

 })

