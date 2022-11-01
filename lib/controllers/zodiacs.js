const { Router } = require('express');
const { signs } = require('../zodiacs-data.js');

module.exports = Router().get('/', (req, res) => {
  const filteredData = [];
  for (const sign of signs) {
    filteredData.push({ id: sign.id, name: sign.name });
  }
  res.json(filteredData);
});
