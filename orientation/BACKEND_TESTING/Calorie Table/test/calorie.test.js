import request from 'supertest';
import chai from 'chai';
import { app } from '../server.js';

let expect = chai.expect;

describe('insert new item into the table', () => {
  it('should return successfully posted message', (done) => {
    request(app)
      .post('/drax')
      .send({ food_name: 'Lasagne', amount: 2, calorie: 680 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.equal({
          result: 'New food item has been registered',
        });

        done();
      });
  });
});

describe('get all data', () => {
  it('should return successfully the data', (done) => {
    request(app)
      .get(`/drax`)
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.deep.equal({result: 'Successfully retrieved data'});
        done();
      });
  });
});

