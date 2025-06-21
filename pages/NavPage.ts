// import { Page, expect } from '@playwright/test'

// export class NavPage {
//     readonly page: Page;
//     constructor(page: Page) {
//         this.page = page;
//     }

//     async goto() {
//         await this.page.goto('/')
//     }
//     async hoverOnMainNav(name: string) {
//         const navItem = this.page.locator('.header-main-nav-desktop > li.header-main-nav-desktop-item', {
//             hasText: name,
//         })
//             .first();
//         await expect(navItem).toBeVisible()
//         await navItem.hover()

//         const dropDown = navItem.locator('nav.header-sub-nav-desktop')
//         await expect(dropDown)
//             .toBeVisible({
//                 timeout: 3000
//             })
//         return dropDown.locator('a');
//     }

//     async checkDropDownLinks(name: string, expectedLinks: string[]) {
//         const linksLocator = await this.hoverOnMainNav(name);
//         const linksText = await linksLocator.allTextContents();

//         for (const expectedLink of expectedLinks) {
//             expect(linksText).toContain(expectedLink)
//         }
//     }

// }