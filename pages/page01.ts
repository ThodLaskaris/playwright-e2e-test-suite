import { Page, expect } from '@playwright/test';


export class Page01 {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('/')
    }

    async isLogoVisible() {
        const logoLink = this.page.getByRole('link', {
            name: 'pricefox',
            exact: true
        });
        await expect(logoLink).toBeVisible()

        const logoImg = logoLink.locator('img.header-logo');
        await expect(logoImg).toBeVisible();

    }

}