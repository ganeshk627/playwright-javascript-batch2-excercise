import {test,expect} from '@playwright/test'

test('MultiSelect Drop down Demo',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    //select multiple options from drop down
    
    // await page.selectOption('#colors',['Blue','Red','Yellow'])
    
    await page.locator('#colors').selectOption(['Blue','Red','Yellow'])

    await page.waitForTimeout(2000)

    

    //Assertions
    //1) Check no of options in drop down - approach1
    const options=await page.locator('#colors option')
    await expect(options).toHaveCount(5)

    //Approach 2
    const optionNew=await page.$$('#colors option')
    await expect(optionNew.length).toBe(5)


    //2)Check presence of value in the dropdown - Approach 1
    const content=await page.locator('#colors').textContent() // to get text content from the dropdown in the form of string
    await expect(content.includes('Red')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()

    //Aproach 2 -using looping statement
    const textContent=await page.$$('#colors')
    let status=false
    for(const option of textContent){
        let value=await option.textContent()
        if(value.includes('Yellow')){
            status=true
            break
        }
    }
    expect(status).toBeTruthy()

    
   

})

