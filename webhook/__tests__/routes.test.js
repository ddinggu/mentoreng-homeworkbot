const request = require('supertest');
const server = require('../app.js');

beforeAll(async () => {
    console.log('Jest starting!!');
});

afterAll(() => {
    server.close();
    console.log('server closed!');
})

describe('route tests', () => {
    test('get home route GET /', async () => {
        const response = await request(server).get('/');
        expect(response.status).toEqual(200);
    });
});

describe('dog tests', () => {
    test('get all dogs  GET /dogs', async () => {
        const response = await request(server).get('/dogs');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('affenpinscher');
    });
});
