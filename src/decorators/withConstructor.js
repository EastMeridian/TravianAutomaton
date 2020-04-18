const withConstructor = (constructor) => (o) => ({
  __proto__: {
    constructor,
  },
  ...o,
});

module.exports = withConstructor;
