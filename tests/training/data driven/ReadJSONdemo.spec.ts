import {test,expect} from '@playwright/test'
// const mydata=require('../inputdata.json')
import mydata from '../inputdata.json'

import myuserdataarray from '../inputdataarray.json'


import mydataarray from '../inputdataarrayname.json'

import {users} from '../inputdataarrayname.json'

test('Read JSON data',async ({page})=>{

console.log(mydata.username)
console.log(mydata.password)

   
})




test('Read JSON Array data',async ({page})=>{

    for(const data of myuserdataarray){

        console.log(data.username)
        console.log(data.password)
    }


})

test("Read JSON data array with name",()=>{

    console.log("Users Array")
    for(const data of mydataarray.users){
        console.log(data.username)
        console.log(data.password)
    }
    console.log("Products Array")
    for(const data of mydataarray.products){
        console.log(data.productId)
        console.log(data.productName)
    }

})

test("Read JSON array with name & specific",()=>{

    for(const data of users){
        console.log(data.username)
        console.log(data.password)
    }

})