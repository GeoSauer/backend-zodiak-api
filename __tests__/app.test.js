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

  it('/zodiac/:id should return sign detail', async () => {
    const res = await request(app).get('/zodiac/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
      horoscope:
        'Cosmic activity in the career area of your chart is encouraging you to do something out of the ordinary on the work front, something that people in positions of power can’t help but praise you for. Don’t do what has been done already, be a pioneer.',
    };
    expect(res.body).toEqual(aquarius);
  });

  it('/horoscopes/:name should return a horoscope for that sign', async () => {
    const res = await request(app).get('/horoscopes/aquarius');
    const aquarius = {
      name: 'aquarius',
      horoscope:
        'Cosmic activity in the career area of your chart is encouraging you to do something out of the ordinary on the work front, something that people in positions of power can’t help but praise you for. Don’t do what has been done already, be a pioneer.',
    };
    expect(res.body).toEqual(aquarius);
  });
});
