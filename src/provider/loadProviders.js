const createLoader = require('../factories/createLoader');
const createProvider = require('./createProvider');

const loadProviders = createLoader({
  location: [__dirname, 'providers'],
  onRequireModule: createProvider,
});

module.exports = loadProviders;
