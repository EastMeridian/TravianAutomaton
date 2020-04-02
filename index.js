import puppeteer from 'puppeteer';
import account from './account.json'
(async () => {

  // initialisation
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // login
  await page.goto('https://ts1.travian.fr/login.php');
  await page.screenshot({path: 'view0.png'});
  await page.type('[name=name]', account.name);
  await page.type('[name=password]', account.password);
  await Promise.all([
    page.waitForNavigation(),
    await page.click('[type=submit]'),
  ]);

  // navigate to dorf1
  await page.goto('https://ts1.travian.fr/dorf1.php');

  await page.screenshot({path: 'view1.png'});

  const [wood, clay, iron, food, list] = await Promise.all([
    await page.$eval('#l1', (element) => element.innerText),
    await page.$eval('#l2', (element) => element.innerText),
    await page.$eval('#l3', (element) => element.innerText),
    await page.$eval('#l4', (element) => element.innerText),
    await page.$eval('#l4', (element) => ({
      building: 
    })),
  ]);

  console.log('wood: ', wood, ' | clay ', clay, ' | iron ', iron, ' | food ', food);
  // navigate to dorf2
  await page.goto('https://ts1.travian.fr/dorf2.php');
  await page.screenshot({path: 'view2.png'});
  await browser.close();
})();