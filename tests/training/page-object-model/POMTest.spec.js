import {expect, test} from '@playwright/test'
// import { LoginPage } from '../Pages/LoginPage'
const LoginPage=require('../Pages/LoginPage')
import { CartPage } from '../Pages/CartPage';
import { HomePage } from '../Pages/HomePage';

let status;

test('POM test demo',async ({page})=>{

  test.slow()

  
  //Login
  const loginPage=new LoginPage(page);
  await loginPage.gotoLoginPage()
  await loginPage.login('sukumar1991','123')
  await page.waitForTimeout(3000)

  //Home
  const homePage=new HomePage(page)
  await homePage.addProductToCart('Samsung galaxy s7')
  await page.waitForTimeout(3000)
  await homePage.gotoCart()


  //Cart
  
  const cartPage=new CartPage(page)
  await page.waitForTimeout(3000)
  const status=await cartPage.checkProductInCart('Samsung galaxy s7')
  expect(await status).toBe(true)


})

