const reduceResultArray = (acc, next) => ({
  ...acc,
  [next.name]: next.result,
});

const parseToolboxContent = (content) => content.match(
  /<span class="value ">(\d+)<\/span>/g,
).flatMap((s) => parseInt(s.match(
  /\d+/g,
), 10));

module.exports = {
  reduceResultArray,
  parseToolboxContent,
};
