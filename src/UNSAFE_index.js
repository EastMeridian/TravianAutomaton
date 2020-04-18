const puppeteer = require('puppeteer');
const account = require('../account.js');
const loadProvidersAsync = require('../_trash/providers.js');
const loadStrategiesAsync = require('./strategies.js');
const loadActionsAsync = require('../_trash/actions');
const mainLoop = require('../_trash/core/mainLoop');
const { createProvidersManager } = require('../_trash/factories/providers/index');
const createAutomate = require('../_trash/automate/createAutomate');
const createPageManager = require('../_trash/factories/createPageManager');
const createActionController = require('../_trash/factories/createActionController');

(async () => {
  // initialisation
  const browser = await puppeteer.launch();
  const pageManager = createPageManager({ browser, account });
  await pageManager.loginAsync();
  // loading
  const providers = await loadProvidersAsync({ pageManager });
  const strategies = await loadStrategiesAsync();
  const {
    BUILD_FIELD,
  } = await loadActionsAsync();

  const actions = [BUILD_FIELD];
  // create manager
  const providersManager = createProvidersManager({ providers });
  const automate = createAutomate({ strategies });
  const actionController = createActionController({ actions, pageManager });

  // go
  const onRun = async () => {
    const {
      ressources,
      buildingList,
      fields,
    } = await providersManager.run();

    const strategy = automate.consume({
      ressources,
      buildingList,
      fields,
    }).run();
    if (strategy) await actionController.consume(strategy.getOrder());
    // automate.display();
  };

  mainLoop.run(onRun, {
    shouldClearConsole: false,
  });
})();
