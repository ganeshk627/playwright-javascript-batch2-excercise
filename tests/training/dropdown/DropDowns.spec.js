import {expect, test} from '@playwright/test'

test('Drop Down Demo',async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

    

   //Multiple way to select options from the drop down

    await page.locator('#country').selectOption({label:'India'}) //By using label/Visible Text
    await page.locator('#country').selectOption('India')  //Directly pass the Visible text
    await page.locator('#country').selectOption({value:'uk'})
    await page.locator('#country').selectOption({index:1})

    

    await page.selectOption('#country',{label:'India'})


    //Assertions
    //1) Check the number of options in the drop down - 
    
    // Approach 1
    const options=await page.locator('#country option')
    await expect(options).toHaveCount(10)

    //Approach 2
    const optionNew=await page.$$('#country option')
    await expect(optionNew.length).toBe(10)


    //2)Check presence of value in the dropdown - 
    
    // Approach 1
    const content=await page.locator('#country').textContent() // to get text content from the dropdown in the form of string
    console.log(content)
    await expect(content.includes('Japan')).toBeTruthy()

    //Aproach 2 -using looping statement
    const textContent=await page.$$('#country')
    let status=false
    for(const option of textContent){
        let value=await option.textContent()
        if(value.includes('France')){
            status=true
            break
        }
    }
    expect(status).toBeTruthy()

    

    
    //How to select options by writing looping statements
    //Situations like dynamic drop down, auto suggested and bootstrap dropdowns we cant use direct method
    const optionsNew=await page.$$('#country option')
    

    for(const option of optionsNew){
        let value=await option.textContent()
        if(value.includes('France')){
            await page.selectOption('#country',value)
            break
        }
    }

    await page.waitForTimeout(2000)
    

})

