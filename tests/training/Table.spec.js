import {expect, test} from '@playwright/test'

test('Tables Demo',async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

    const table=await page.locator('#productTable')

    // 1) Total no of rows and columns
    const columns=await table.locator('thead tr th')
    console.log("The no of columns",await columns.count())

    const rows=await table.locator('tbody tr')
    console.log("The no of rows",await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)   



    // 2) Select the check box based on product name
    // const matchedRow =rows.filter({
    //     has: page.locator('td'),  // It will filter amoung all rows filter rows having product2 table data
    //     hasText: 'Product 2'
    // })

    // await matchedRow.locator('input').check() //From that row we are inspecting specific element and perform action







//    3) Checking multiple products - Re usable function
//    await selectProduct(rows,page,'Product 1')
//    await selectProduct(rows,page,'Product 3')
//    await selectProduct(rows,page,'Product 5')

   // 4) Reading/Printing the data from first page
//    for(let i=0;i< await rows.count();i++){ // for repeat the row 
//     //Capture the particular row
//     const row=rows.nth(i)
//     const tds=row.locator('td') // To capture all table data in a particular row
//     for(let j=0;j< await tds.count()-1;j++){ //For repeat the column in each row
//             console.log(await tds.nth(j).textContent()) 
//         }
//    }



   // 5) Reading/Printing the data from all pages-Pagination
   const pages=await page.locator('.pagination li a')  // This will return all pages not count
   console.log("The no of pages",await pages.count())

   for(let p=0;p< await pages.count();p++){

    if(p>0){
        await pages.nth(p).click() //It will click page button

    }
    for(let i=0;i< await rows.count();i++){ // for repeat the row 
        //Capture the particular row
        const row=rows.nth(i)
        const tds=row.locator('td') // To capture all table data in a particular row
        for(let j=0;j< await tds.count()-1;j++){ //For repeat the column in each row
                console.log(await tds.nth(j).textContent()) 
            }
       }
       await page.waitForTimeout(2000) 
   }

   await page.waitForTimeout(7000)
   await page.close()
})

async function selectProduct(rows,page, name){
    const matchedRow =rows.filter({
        has: page.locator('td'),  // It will filter amoung all rows filter rows having product2 table data
        hasText: name
    })
    await matchedRow.locator('input').check()
}