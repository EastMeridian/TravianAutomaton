module.exports = {
  name: 'resources',
  selector: '[class="value"]',
  pageId: 'village_1',
  toArray: true,
  adapter: (elements) => ({
    warehouseCapacity: parseInt(elements[0].innerText.replace(/[^a-z0-9]/gi, ''), 10),
    wood: parseInt(elements[1].innerText.replace(/\s/g, ''), 10),
    clay: parseInt(elements[2].innerText.replace(/\s/g, ''), 10),
    iron: parseInt(elements[3].innerText.replace(/\s/g, ''), 10),
    granaryCapacity: parseInt(elements[4].innerText.replace(/[^a-z0-9]/gi, ''), 10),
    food: parseInt(elements[5].innerText.replace(/\s/g, ''), 10),
    cropMedium: parseInt(elements[6].innerText.replace(/[^a-z0-9]/gi, ''), 10),
  }),
};
