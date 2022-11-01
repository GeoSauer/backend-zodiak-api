const { Router } = require('express');
const { zodiacs } = require('../zodiacs-data.js');

module.exports = Router().get('/', (req, res) => {
  const filteredData = [];
  for (const zodiac of zodiacs) {
    filteredData.push({ id: zodiac.id, name: zodiac.name });
  }
  res.json(filteredData);
});
