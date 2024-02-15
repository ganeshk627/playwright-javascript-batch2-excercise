import { expect, test } from '@playwright/test';
import { Pool } from 'pg';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';
import { LogoutPage } from '../Pages/LogoutPage';

test("DB driven Demo",async ({page})=>{

    test.slow()

    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'cypress',
        password: '123',
        port: 5432, // or your PostgreSQL port
      });
    
      let details;
      try {
        // Acquire a client from the pool
        const client = await pool.connect();
    
        // Perform a database query to get test data
        const result = await client.query('SELECT * FROM demo');
    
        details=result.rows
        console.log(result.rows)
        
    
        // Release the client back to the pool
        client.release();
    
        // Close the pool
        await pool.end();
    
      } catch (error) {
        console.error('Error:', error);
      }

    console.log(details)
    
    for(const data of details){

      //Login
  const loginPage=new LoginPage(page);
  await loginPage.gotoLoginPage()
  await loginPage.login(data.username,data.password1)
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




