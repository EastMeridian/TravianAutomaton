const { isArray } = require('lodash');
const createProvider = require('./createProvider');
const { makeNameResult } = require('./utils');

const createProvidersGroup = ({
  name,
  childrens,
  page,
}) => {
  const providers = childrens.map((children, index) => createProvider({
    ...children,
    page: isArray(page) ? page[index] : page,
  }));

  return ({
    run: async () => {
      const result = await Promise.all(providers.map((children) => children.run()));
      console.log('before named', result);
      const namedResult = makeNameResult(name)(result);
      console.log('after named', result);
      return namedResult;
    },
    getName: () => name,
  });
};

module.exports = createProvidersGroup;
