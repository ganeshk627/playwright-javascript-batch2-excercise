// const {test, expect} = require('@playwright/test')
import {expect, test} from '@playwright/test'

test('sampleTest1',async ({page})=>{

    await page.goto('https://www.saucedemo.com/')

    await expect(page).toHaveTitle('Swag Labs')

    await expect(page).toHaveURL('https://www.saucedemo.com/')

    await page.close()

})



