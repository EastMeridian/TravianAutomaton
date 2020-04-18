module.exports = {
  name: 'buildingQueue',
  pageId: 'village_1',
  selector: '.buildingList > .boxes-contents > ul > li',
  adapter: (elements) => elements.map((element) => ({
    building: element.children[1].innerText,
    remainingTime: element.children[2].innerText,
  })),
  toArray: true,
};
