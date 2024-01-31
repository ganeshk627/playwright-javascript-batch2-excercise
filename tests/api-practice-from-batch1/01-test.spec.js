// @ts-check
const { test, expect } = require('@playwright/test');

let URL = 'https://my-json-server.typicode.com/ganeshk627/json-server-hogwarts';
let STUDENT_ID = 7;
// let STUDENT_ID = '7';
let STUDENT_NAME = "Ginny Weasley";


test('Get all students in Hogwarts School of Witchcraft and Wizardry', async ({ request }) => {
    const response = await request.get(`${URL}/students`);
    console.log(await response.json()); // await is mandatory otherwise, we dont get any output
    // console.log(response.status())    

    expect(response.status()).toBe(200);
    expect(response.url().includes("/students")).toBeTruthy();
    console.log(response.headers()['content-type'])
    expect(response.headers()['content-type']).toContain("application/json");
});

test(`Get Student by ${STUDENT_ID} with Path param`, async ({ request }) => {
    const response = await request.get(`${URL}/students?id=${STUDENT_ID}`);
    console.log(await response.json()); // await is mandatory otherwise, we dont get any output

    expect(response.status()).toBe(200);
    expect(response.url().includes("/students")).toBeTruthy();
    expect(response.headers()['content-type']).toContain("application/json");
});

test(`Get Student by ${STUDENT_ID} with Query param`, async ({ request }) => {
    const response = await request.get(`${URL}/students/${STUDENT_ID}`);
    console.log(await response.json()); // await is mandatory otherwise, we dont get any output

    expect(response.status()).toBe(200);
    expect(response.url().includes("/students")).toBeTruthy();
    expect(response.headers()['content-type']).toContain("application/json");
});

test(`Get Student by Name: ${STUDENT_NAME}`, async ({ request }) => {
    const response = await request.get(`${URL}/students/`, {
        params: {
            name: STUDENT_NAME
        },
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(await response.json());

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain("application/json");
    let data = await response.json();
    expect(data[0].name).toStrictEqual(STUDENT_NAME);
});


test(`Create New Student`, async ({ request }) => {
    const response = await request.post(`${URL}/students/`, {
        data: {
            id:  "13", 
            name: "James",
        },
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(await response.json());

    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toContain("application/json");
    let data = await response.json();
    expect(data.name).toStrictEqual('James');
    expect(data.id).toStrictEqual('13');
});

test(`Updating New Student`, async ({ request }) => {
    const response = await request.post(`${URL}/students/`, {
        data: {
            id:  "7", 
            name: "James",
        },
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(await response.json());

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain("application/json");
    let data = await response.json();
    expect(data.name).toStrictEqual('James');
    expect(data.id).toStrictEqual('13');
});




