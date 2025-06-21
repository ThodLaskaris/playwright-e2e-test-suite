const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.pricefox.gr');

  // Εξάγει όλα τα links και τους τίτλους/sections από το dropdown
  const items = await page.$$eval(
    '.header-sub-nav-desktop a, .header-sub-nav-desktop p, .header-sub-nav-desktop span, .header-sub-nav-desktop div',
    (elements) =>
      elements
        .map(el => ({
          tag: el.tagName,
          text: el.textContent.trim()
        }))
        .filter(item => item.text.length > 0)
  );

  console.log('Extracted dropdown items:', items);

  const fileContent = `module.exports.navDropdownItems = ${JSON.stringify(items, null, 2)};\n`;

  fs.writeFileSync('./data/navDropdownItems.js', fileContent);

  console.log('navDropdownItems.js created in /data folder.');

  await browser.close();
})();