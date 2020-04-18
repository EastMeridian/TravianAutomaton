const pages = require('./pages');

const createPageController = ({ browser, account }) => {
  const { server, name, password } = account;

  const prefix = `https://${server}.travian.fr/`;

  const reducePages = (acc, next) => ({
    ...acc,
    [next.id]: {
      ...next,
      url: prefix + next.url,
    },
  });

  const pageStore = pages.reduce(reducePages, {});
  let page = null;

  return ({

    login: async () => {
      await page.goto(pageStore.login.url);
      await page.type('[name=name]', name);
      await page.type('[name=password]', password);
      await Promise.all([
        page.waitForNavigation(),
        await page.click('[type=submit]'),
      ]);
      page.screenshot({ path: 'example1.png' });
    },

    async initialize() {
      page = await browser.newPage();
      await this.login();
      return this;
    },

    request: async (pageId) => {
      console.log(pageStore, pageId);

      const currentPage = pageStore[pageId];
      if (page.url() === currentPage.url) return page;
      await page.goto(currentPage.url);
      return page;
    },

  });
};

module.exports = createPageController;
