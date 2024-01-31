// @ts-check
const { test, expect } = require('@playwright/test');

let URL = 'https://my-json-server.typicode.com/ganeshk627/json-server-hogwarts';
let STUDENT_ID_GET = 7;
// let STUDENT_ID = '7';
let STUDENT_NAME_GET = "Ginny Weasley";
let STUDENT_ID_PUT = 8;
let STUDENT_ID_DELETE = 1;


test('Get all students in Hogwarts School of Witchcraft and Wizardry', async ({ request }) => {
    const response = await request.get(`${URL}/students`);
    console.log(await response.json()); // await is mandatory otherwise, we dont get any output
    // console.log(response.status())    

    expect(response.status()).toBe(200);
    expect(response.url().includes("/students")).toBeTruthy();
    console.log(response.headers()['content-type'])
    expect(response.headers()['content-type']).toContain("application/json");
});

test(`Get Student by ${STUDENT_ID_GET} with Path param`, async ({ request }) => {
    const response = await request.get(`${URL}/students?id=${STUDENT_ID_GET}`);
    console.log(await response.json()); // await is mandatory otherwise, we dont get any output

    expect(response.status()).toBe(200);
    expect(response.url().includes("/students")).toBeTruthy();
    expect(response.headers()['content-type']).toContain("application/json");
});

test(`Get Student by ${STUDENT_ID_GET} with Query param`, async ({ request }) => {
    const response = await request.get(`${URL}/students/${STUDENT_ID_GET}`);
    console.log(await response.json()); // await is mandatory otherwise, we dont get any output

    expect(response.status()).toBe(200);
    expect(response.url().includes("/students")).toBeTruthy();
    expect(response.headers()['content-type']).toContain("application/json");
});

test(`Get Student by Name: ${STUDENT_NAME_GET}`, async ({ request }) => {
    const response = await request.get(`${URL}/students/`, {
        params: {
            name: STUDENT_NAME_GET
        },
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(await response.json());

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain("application/json");
    let data = await response.json();
    expect(data[0].name).toStrictEqual(STUDENT_NAME_GET);
});

test(`Create New Student`, async ({ request }) => {
    const response = await request.post(`${URL}/students/`, {
        data: {
            id: 13,
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
    expect(data.id).toStrictEqual(13);
});

test(`Updating Student`, async ({ request }) => {
    const response = await request.put(`${URL}/students/${STUDENT_ID_PUT}`, {
        data: {
            name: "Luna Lovegood",
            patronus: "Hare",
            pet: "Eastern Screech Owl",
            points: 30
        },
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(await response.json());

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain("application/json");
    let data = await response.json();
    expect(data.id).toStrictEqual(STUDENT_ID_PUT);
    expect(data.name).toStrictEqual('Luna Lovegood');
    expect(data.patronus).toStrictEqual('Hare');
    expect(data.pet).toStrictEqual('Eastern Screech Owl');
    expect(data.points).toStrictEqual(30);
});

test(`Deleting Student`, async ({ request }) => {
    const response = await request.delete(`${URL}/students/${STUDENT_ID_DELETE}`);
    console.log(await response.json());

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain("application/json");
    // expect(await response.json()).toBe({});
    // var summa = {
    // }
    // expect(await response.json()).toBe(summa);
});

