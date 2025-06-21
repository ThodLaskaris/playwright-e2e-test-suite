import { expect, test } from '@playwright/test';
import { Page01 } from '../pages/page01'
import { navDropDownLinks, dropdownCategories } from "../data/navDropDownLinks"
test.describe('Homepage Logo Test', () => {
  let homePage: Page01;

  test.beforeEach(async ({ page }) => {
    homePage = new Page01(page);
    await homePage.goto();
  })

  test('should display the Pricefox Logo', async () => {
    await homePage.isLogoVisible();
  })
})

test.describe('Navbar test "Αυτοκίνητο"', () => {
  test('Find first nav element "Αυτοκίνητο"', async ({ page }) => {
    await page.goto('https://www.pricefox.gr');
    const navItem = page.locator('nav[role="navigation"] ul.header-main-nav-desktop > li.header-main-nav-desktop-item')
      .filter({ hasText: 'Αυτοκίνητο' })
      .first();
    await expect(navItem).toBeVisible();
    await navItem.hover()

    const dropDown = navItem.locator('nav.header-sub-nav-desktop');
    await expect(dropDown).toBeVisible()

    for (const linkText of navDropDownLinks['Αυτοκίνητο']) {
      const links = dropDown.locator(`a:has-text("${linkText}")`);
      const count = await links.count();
      console.log(`Checking "${linkText}" - found: ${count}`);
      expect(count).toBeGreaterThan(0);
      for (let i = 0; i < count; i++) {
        await expect(links.nth(i)).toBeVisible();
      }
    }
  });
});

test.describe('Navbar dropdown all links', () => {
  for (const category of dropdownCategories) {
    test(`Dropdown links of "${category}" are visible`, async ({ page }) => {
      await page.goto('https://www.pricefox.gr');
      const navItem = page.locator('nav[role="navigation"] ul.header-main-nav-desktop > li.header-main-nav-desktop-item')
        .filter({ hasText: category })
        .first();
      await expect(navItem).toBeVisible();
      await navItem.hover();

      const dropDown = navItem.locator('nav.header-sub-nav-desktop');

      await expect(dropDown)
        .toBeVisible();

      for (const linkText of navDropDownLinks[category]) {
        const locator = dropDown.locator(`a:has-text("${linkText}")`);
        const count = await locator.count();
        console.log(`Checking link: "${linkText}" in "${category}" - found: ${count}`);
        expect(count).toBeGreaterThan(0);
        for (let i = 0; i < count; i++) {
          await expect(locator.nth(i)).toBeVisible();
        }
      }
    });
  }
});

