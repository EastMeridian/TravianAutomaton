const puppeteer = require('puppeteer');
const account = require('../account.js');
const createPageController = require('./page/createPageController');
const createStrategyManager = require('./strategy/createStrategyManager');
const createProvidersManager = require('./provider/createProvidersManager');
const createActionController = require('./action/createActionController');
const loadProviders = require('./provider/loadProviders');
const loadStrategies = require('./strategy/loadStrategies');
const loadActions = require('./action/loadActions');

(async () => {
  const browser = await puppeteer.launch();
  const providers = loadProviders();
  const strategies = loadStrategies();
  const actions = loadActions();

  const pageController = await createPageController({ browser, account }).initialize();
  const providersManager = createProvidersManager({ providers, pageController });
  const strategyManager = createStrategyManager({ strategies, providersManager });
  const actionController = createActionController({ actions, pageController });

  const order = await strategyManager.run();
  if (order) await actionController.consume(order.getOrder());
  const adventures = await providersManager.request('adventures');

  console.log('adventures', adventures);
  // console.log('FUCKING PROVIDERS', providers);
})();
