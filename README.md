# Pricefox Playwright Demo

This repository contains example automated tests using [Playwright](https://playwright.dev/) 
for [pricefox.gr](https://www.pricefox.gr).

## Project Structure

- **tests/** — Playwright test files
- **pages/** — Page Object files for reusable logic (POM)
- **data/** — Test data (links, dropdowns, etc.)
- **.gitignore** — Ignores temporary/local files

## How to Run

1. **Clone the repository**
   ```bash
   git clone git@github.com:ThodLaskaris/PF-Automated-Testing-Demo.git
   cd pw-pf-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the tests**
   ```bash
   npx playwright test
   ```

4. **View the report**
   ```bash
   npx playwright show-report
   ```

## Notes

- The tests are read-only and do not modify any data on the site.
- No credentials or `.env` files are required.
- Tests include checks for the homepage logo and all navbar dropdown links.
- The Page Object Model (POM) is used for the homepage logo test (`Page01` class). Navbar dropdown tests use direct Playwright locators.

---

**For any questions or feedback, feel free to contact me via [GitHub](https://github.com/ThodLaskaris)