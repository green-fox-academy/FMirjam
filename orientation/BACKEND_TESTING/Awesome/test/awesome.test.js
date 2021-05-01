import request from 'supertest';
import chai from 'chai';
import { app } from '../server.js';

let expect = chai.expect;

describe('insert new item into the table', () => {
  it('should return successfully posted message', (done) => {
    request(app)
      .post('/awesome')
      .send({
        author_name: 'author6',
        title: 'song6',
        genre: 'pop',
        year: 2000,
        rating: 3,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.equal({
          result: 'New song has been registered',
        });

        done();
      });
  });
});
