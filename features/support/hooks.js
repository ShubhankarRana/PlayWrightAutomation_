const playwright = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');
const { Before, After,BeforeStep,AfterStep,Status } = require('@cucumber/cucumber')

Before(async function () {

    const browser = await playwright.chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
    console.log("Inside Hooks!");
});

BeforeStep(function () {
    console.log("next step:");
});

AfterStep(async function ({ result }) {

    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot1.png' });
    }

    console.log("step ended.");
});


After(function () {
    console.log("END!!!");
    this.page.screenshot({ path: 'lastScreenshot.png'});
    this.page.pause();
});