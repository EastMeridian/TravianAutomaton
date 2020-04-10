const { isArray } = require('lodash');

const reducePages = (acc, next) => ({
  ...acc,
  [next.id]: {
    instance: null,
    ...next,
  },
});

const pages = [
  {
    id: 'login',
    url: 'login.php',
  },
  {
    id: 'village_1',
    url: 'dorf1.php',
  },
  {
    id: 'build_1',
    url: 'build.php?id=1',
  },
  {
    id: 'build_2',
    url: 'build.php?id=2',
  },
  {
    id: 'build_3',
    url: 'build.php?id=3',
  },
  {
    id: 'build_4',
    url: 'build.php?id=4',
  },
  {
    id: 'build_5',
    url: 'build.php?id=(',
  },
  {
    id: 'build_6',
    url: 'build.php?id=6',
  },
  {
    id: 'build_7',
    url: 'build.php?id=7',
  },
  {
    id: 'build_8',
    url: 'build.php?id=8',
  },
  {
    id: 'build_9',
    url: 'build.php?id=9',
  },
  {
    id: 'build_10',
    url: 'build.php?id=10',
  },
  {
    id: 'build_11',
    url: 'build.php?id=11',
  },
  {
    id: 'build_12',
    url: 'build.php?id=12',
  },
  {
    id: 'build_13',
    url: 'build.php?id=13',
  },
  {
    id: 'build_14',
    url: 'build.php?id=14',
  },
  {
    id: 'build_15',
    url: 'build.php?id=15',
  },
  {
    id: 'build_16',
    url: 'build.php?id=16',
  },
  {
    id: 'build_17',
    url: 'build.php?id=17',
  },
  {
    id: 'build_18',
    url: 'build.php?id=18',
  },
];

const createPageManager = ({ browser, account }) => {
  const { server, name, password } = account;

  const prefix = `https://${server}.travian.fr/`;


  const pageStore = pages.reduce(reducePages, {});

  const loadAsync = async (pageId) => {
    if (!pageStore[pageId].instance) {
      pageStore[pageId].instance = await browser.newPage();
      await pageStore[pageId].instance.goto(prefix + pageStore[pageId].url);
      await pageStore[pageId].instance.screenshot({ path: `${pageId}.png` });
    }
    return pageStore[pageId].instance;
  };

  return ({
    loginAsync: async () => {
      const page = await browser.newPage();
      await page.goto(prefix + pageStore.login.url);

      await page.type('[name=name]', name);
      await page.type('[name=password]', password);
      await Promise.all([
        page.waitForNavigation(),
        await page.click('[type=submit]'),
      ]);
    },
    requestAsync: async (pageId) => {
      if (isArray(pageId)) return Promise.all(pageId.map(loadAsync));
      return loadAsync(pageId);
    },
  });
};

module.exports = createPageManager;
