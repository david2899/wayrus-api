"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = require("supertest");
const baseURL = supertest_1.request("http://localhost:4000");
describe('Send Email', function () {
    describe('POST', function () {
        it('Should return email sent, success', function (done) {
            baseURL.post('/api/send/email')
                .send({ message: 'my test' })
                .expect('Content-Type', /json/)
                .expect('email sent, success')
                .expect(200, done);
        });
    });
});
