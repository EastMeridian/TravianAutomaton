const field1 = {
  selector: '.resourceWrapper > .resource > .value',
  adapter: (elements) => ({
    wood: parseInt(elements[0].innerText, 10),
    clay: parseInt(elements[1].innerText, 10),
    iron: parseInt(elements[2].innerText, 10),
    food: parseInt(elements[3].innerText, 10),
  }),
  name: 'field1',
  toArray: true,
  pageId: 'build_1',
};


module.exports = {
  name: 'fields',
  type: 'group',
  pageId: [
    'build_1',
  ],
  childrens: [
    field1,
  ],
};
