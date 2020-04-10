
const reduceNamedPromise = (acc, next) => {
  console.log('acc', acc, 'next', next);
  acc[next.name] = next.result;
  return acc;
};

const createProvidersManager = ({ providers }) => ({
  run: () => Promise.all([
    ...providers.flatMap((provider) => provider.run()),
  ]).then((result) => result.reduce(reduceNamedPromise, {})),
});


module.exports = createProvidersManager;
