const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ts1.travian.fr/dorf1.php');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();