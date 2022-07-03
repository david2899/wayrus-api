import assert from 'assert';
import {request} from 'supertest'

const baseURL = request("http://localhost:4000");

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