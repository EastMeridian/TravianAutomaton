const createLoader = require('../factories/createLoader');

const loadProviders = createLoader({
  location: [__dirname, 'actions'],
});

module.exports = loadProviders;
