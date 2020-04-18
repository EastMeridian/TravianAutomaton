const createLoader = require('../factories/createLoader');
const createStrategy = require('./createStrategy');

const loadProviders = createLoader({
  location: [__dirname, 'strategies'],
  onRequireModule: createStrategy,
});

module.exports = loadProviders;
