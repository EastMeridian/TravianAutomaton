/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path = require('path');
const fs = require('fs');

const createLoader = ({
  location,
  onRequireModule = (module) => module,
  onEndProcessing = (modules) => modules,
}) => () => {
  const normalizedPath = path.join(...location);
  const createModule = (file) => {
    const module = require(`${normalizedPath}\\${file}`);
    return onRequireModule(module);
  };
  const modules = fs.readdirSync(normalizedPath).map(createModule);
  return onEndProcessing(modules);
};

module.exports = createLoader;
