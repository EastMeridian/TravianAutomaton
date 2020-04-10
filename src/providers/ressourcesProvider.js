const adapter = require('../adapters');

const wood = {
  selector: '[id=l1]',
  adapter: adapter.innerText,
  name: 'wood',
  pageId: 'village_1',
};

const clay = {
  selector: '[id=l2]',
  adapter: adapter.innerText,
  name: 'clay',
  pageId: 'village_1',
};

const iron = {
  selector: '[id=l3]',
  adapter: adapter.innerText,
  name: 'iron',
};

const food = {
  selector: '[id=l4]',
  adapter: adapter.innerText,
  name: 'food',
};

const granaryCapacity = {
  selector: '.granary > .capacity > .value',
  adapter: (element) => parseInt(element.innerText.replace(/[^a-z0-9]/gi, ''), 10),
  name: 'granaryCapacity',
};

const warehouseCapacity = {
  selector: '.warehouse > .capacity > .value',
  adapter: (element) => parseInt(element.innerText.replace(/[^a-z0-9]/gi, ''), 10),
  name: 'warehouseCapacity',
};

module.exports = {
  name: 'ressources',
  type: 'group',
  pageId: 'village_1',
  childrens: [
    wood,
    clay,
    iron,
    food,
    granaryCapacity,
    warehouseCapacity,
  ],
};
