import request from 'supertest';
import chai from 'chai';
import { app } from '../routes.js';

let expect = chai.expect;

describe('groot endpoint with message', () => {
  it('should return a message', (done) => {
    const message = 'test';
    request(app)
      .get(`/groot?message=${message}`)
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.deep.equal({ //use deep equal when we compare objects
          received: `${message}`,
          translated: 'I am Groot!',
        });

        done();
      });
  });
});
