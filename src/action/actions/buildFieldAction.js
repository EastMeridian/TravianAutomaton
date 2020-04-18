const { BUILD_FIELD } = require('../../orders');

const childrens = [];

for (let i = 1; i <= 18; i += 1) {
  childrens.push({
    selector: '.section1 > .textButtonV1',
    pageId: `build_${i}`,
    type: BUILD_FIELD,
    name: `field_${i}`,
    async run(page) {
      await Promise.all([
        page.waitForNavigation(),
        await page.click(this.selector),
      ]);
      await page.goBack();
    },
  });
}

module.exports = {
  childrens,
  type: BUILD_FIELD,
  async run(pageManager, payload) {
    return this.childrens.find(
      (children) => children.name === payload,
    ).run(pageManager);
  },
};
