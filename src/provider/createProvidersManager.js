const isArray = require('lodash/isArray');

const reduceProviders = (acc, next) => ({
  ...acc,
  [next.name]: {
    ...next,
    result: null,
  },
});

const createProvidersManager = ({ providers, pageController }) => {
  const providerStore = providers.reduce(reduceProviders, {});
  console.log('createProvidersManager', providerStore);
  return ({
    reset: () => {

    },
    load: async (requestedName) => {
      const {
        evalFunction,
        selector,
        adapter,
        pageId,
        endProcessing,
      } = providerStore[requestedName];
      const page = await pageController.request(pageId);
      const result = await page[evalFunction](selector, adapter);
      return endProcessing(result);
    },
    async request(requestedNames) {
      if (isArray(requestedNames)) {
        return Promise.all(requestedNames.map((name) => this.load(name)));
      }
      return this.load(requestedNames);
    },
  });
};

module.exports = createProvidersManager;
