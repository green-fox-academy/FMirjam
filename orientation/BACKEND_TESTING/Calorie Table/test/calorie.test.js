import request from 'supertest';
import chai from 'chai';
import { app } from '../server.js';

let expect = chai.expect;

describe('insert new item into the table', () => {
  it('shoud return a new list', (done) => {
    request(app)
      .post('/drax')
      .send({ food_name: 'Lasagne', amount: 2, calorie: 680 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body.result).to.deep.equal({
          food_name: 'Lasagne',
          amount: 2,
          calorie: 680,
        });

        done();
      });
  });
});
