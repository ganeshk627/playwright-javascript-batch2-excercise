
import {expect, test} from '@playwright/test'
import * as XLSX from 'xlsx'
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';
import { LogoutPage } from '../Pages/LogoutPage';

let testDataList;

test.beforeAll(()=>{

// Replace 'your_file.xlsx' and 'Sheet1' with your actual Excel file and sheet name
const filePath = 'your_file.xlsx';
const sheetName = 'Sheet1';

// Read test data from Excel
testDataList = readTestDataFromExcel(filePath, sheetName);
console.log(testDataList)


})

test("Data driven-Excel ",async ({page})=>{

  test.slow()

  for(const data of testDataList){

  //Login
  const loginPage=new LoginPage(page);
  await loginPage.gotoLoginPage()
  await loginPage.login(data['username'],data['password']+'')
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

  }
  
})

function readTestDataFromExcel(filePath, sheetName) {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    const testData= XLSX.utils.sheet_to_json(sheet);
    console.log(testData)
    return testData;

  }