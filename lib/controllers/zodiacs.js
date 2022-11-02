const { Router } = require('express');
const { signs, horoscopes } = require('../zodiacs-data.js');

module.exports = Router()
  .get('/zodiac', (req, res) => {
    const filteredData = [];
    for (const sign of signs) {
      filteredData.push({ id: sign.id, name: sign.name });
    }
    res.json(filteredData);
  })
  .get('/zodiac/:id', (req, res) => {
    let match;
    for (const sign of signs) {
      if (sign.id === req.params.id) {
        match = sign;
      }
    }
    return res.json(match);
  })
  .get('/horoscopes/:name', (req, res) => {
    let match;
    for (const horoscope of horoscopes) {
      if (horoscope.name === req.params.name) {
        match = horoscope;
      }
    }
    return res.json(match);
  });
