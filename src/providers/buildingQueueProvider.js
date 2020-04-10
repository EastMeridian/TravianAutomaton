module.exports = {
  selector: '.buildingList > .boxes-contents > ul > li',
  adapter: (elements) => elements.map((element) => ({
    building: element.children[1].innerText,
    remainingTime: element.children[2].innerText,
  })),
  name: 'buildingList',
  toArray: true,
  pageId: 'village_1',
};
