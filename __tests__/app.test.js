const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../lib/zodiacs-data');

describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiacs', async () => {
    const res = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });
});
