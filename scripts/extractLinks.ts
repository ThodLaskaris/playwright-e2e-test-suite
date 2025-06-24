import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://www.pricefox.gr');

    const navItems = await page.$$('.header-main-nav-desktop > li.header-main-nav-desktop-item');

    const navLinks = [];

    for (const item of navItems) {
        const name = await item.$eval('.header-main-nav-name-desktop p', el => el.textContent?.trim() || '');
        await item.hover();
        await page.waitForTimeout(500); 

        const dropdownLinks = await item.$$eval('nav.header-sub-nav-desktop a', anchors =>
            anchors.map(a => ({
                text: a.textContent?.trim() || '',
                href: a.getAttribute('href') || ''
            }))
        );

        navLinks.push({
            name,
            dropdown: dropdownLinks
        });
    }

    console.log('Navbar links saved:', JSON.stringify(navLinks, null, 2));

    fs.writeFileSync('./data/navLinks.js', `export const navLinks = ${JSON.stringify(navLinks, null, 2)};\n`);

    await browser.close();
})();
