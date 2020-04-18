/* eslint-disable no-underscore-dangle */
const parseTooltip = (elements) => elements.map((element, index) => {
  const result = element._travianTooltip.text.match(
    /<span class="value ">(\d+)<\/span>/g,
  ).flatMap((s) => parseInt(s.match(
    /\d+/g,
  ), 10));
  return ({
    name: `field_${index}`,
    result: {
      wood: result[0],
      clay: result[1],
      iron: result[2],
      food: result[3],
    },
  });
});

module.exports = {
  selector: '#resourceFieldContainer > div',
  adapter: parseTooltip,
  name: 'fields',
  toArray: true,
  pageId: 'village_1',
};
