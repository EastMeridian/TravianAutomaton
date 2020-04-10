const { makeNameResult } = require('./utils');

const createProvider = ({
  selector,
  adapter,
  toArray = false,
  name,
  page,
}) => ({
  run: () => page[toArray ? '$$eval' : '$eval'](selector, adapter).then(makeNameResult(name)),
  getName: () => name,
});
module.exports = createProvider;
