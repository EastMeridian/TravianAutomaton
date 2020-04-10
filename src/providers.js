/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const normalizedPath = require('path').join(__dirname, 'providers');

const { createProvider, createProviderGroup } = require('./factories/providers/index');

const makeProvidersAsync = async ({ pageManager }) => {
  const createModule = async (file) => {
    const module = require(`./providers/${file}`);
    const page = await pageManager.requestAsync(module.pageId);
    const provider = module.type === 'group'
      ? createProviderGroup({ ...module, page })
      : createProvider({ ...module, page });

    return provider;
  };

  const modules = require('fs').readdirSync(normalizedPath).map(createModule);
  return Promise.all(modules);
};

module.exports = { makeProvidersAsync };
