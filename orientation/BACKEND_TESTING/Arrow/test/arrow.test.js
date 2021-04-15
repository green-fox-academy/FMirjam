import request from 'supertest';
import chai from 'chai';
import { app } from '../server.js';

let expect = chai.expect;

describe('yondu endpoint with data', () => {
  it('should return data', (done) => {
    const distance = 100.0;
    const time = 10.0;
    const speed = distance / time;
    request(app)
      .get(`/yondu?distance=${distance}&time=${time}`)
      .expect(200)
      .end((err, res) => {
        expect(err).to.be.null;

        expect(res.body).to.deep.equal({
          distance: `${distance}`,
          time: `${time}`,
          speed: `${speed}`,
        });
        done();
      });
  });
});

