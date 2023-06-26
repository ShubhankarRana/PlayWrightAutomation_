const { When, Then, Given } = require('@cucumber/cucumber')
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('Visit booking.com homepage',{timeout: 100 * 1000}, async function () {
    const homePage = this.poManager.getHomePage();
    await homePage.navigateTo();
  });

  When('login using {string} and {string}', {timeout: 100 * 1000}, async function (username,password) {
    const homePage = this.poManager.getHomePage();
    await homePage.signIn(username,password);
  });

  Then('landed on dashboard', async function () {
    const homePage = this.poManager.getHomePage();
    await homePage.confirm();
  });