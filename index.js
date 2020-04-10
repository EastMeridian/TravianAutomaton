const puppeteer = require('puppeteer');
const account = require('./account.js');
const { createTimer, randomSleep } = require('./src/utils/Time');
const { createProvidersManager } = require('./src/factories/providers/index');
const { makeProvidersAsync } = require('./src/providers.js');
const createAutomate = require('./src/factories/createAutomate');
const createPageManager = require('./src/factories/createPageManager');

const timer = createTimer({ name: 'Main Loop' });

const automate = createAutomate();


console.log('createProviderManager', createProvidersManager);


(async () => {
  // initialisation
  const browser = await puppeteer.launch();
  const pageManager = createPageManager({ browser, account });
  console.log('pageManager', pageManager);

  await pageManager.loginAsync();
  const providers = await makeProvidersAsync({ pageManager });

  const providersManager = createProvidersManager({ providers });

  const run = async () => {
    // console.clear();
    try {
      timer.start('loop');
      const {
        ressources,
        buildingList,
        fields,
      } = await providersManager.run();

      automate.consume({
        ressources,
        buildingList,
        fields,
      });
      automate.display();
      timer.stop('loop');

      await randomSleep(1500, 500);
      console.log('----------------------');
      run();
    } catch (e) {
      console.error('catched', e);
    }
  };

  run();
  // navigate to dorf2
  /*     await page.goto(`https://${account.server}.travian.fr/dorf2.php`);
    await page.screenshot({ path: 'view2.png' });
    await browser.close(); */
})();
