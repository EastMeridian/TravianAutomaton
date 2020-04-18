const createProvider = ({
  name,
  pageId,
  selector,
  adapter,
  toArray,
  endProcessing = (result) => result,
}) => ({
  name,
  pageId,
  selector,
  adapter,
  endProcessing,
  evalFunction: toArray ? '$$eval' : '$eval',
  map(fn) {
    console.log('MAP', fn);
    return this.childrens.map(fn);
  },
});

module.exports = createProvider;
