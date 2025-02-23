const request = require('supertest');
const app = require('../app');

describe('Notification API', () => {
    test('Should forward warning notification', async () => {
        const response = await request(app).post('/notify').send({
            type: "Warning",
            name: "Backup Failure",
            description: "The backup failed due to a database problem"
        });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: "forwarded" });
    });

    test('Should ignore info notification', async () => {
        const response = await request(app).post('/notify').send({
            type: "Info",
            name: "Quota Exceeded",
            description: "Compute Quota exceeded"
        });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: "ignored" });
    });

    test('Should return error for invalid request data', async () => {
        const response = await request(app).post('/notify').send({});
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid request data' });
    });
});
