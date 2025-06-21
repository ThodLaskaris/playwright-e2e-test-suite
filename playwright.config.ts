import { defineConfig } from "playwright/test";

export default defineConfig({
    use: {
        baseURL: 'https://www.pricefox.gr',
        browserName: 'chromium',
        headless: true,
    },
    testDir: './tests',
})