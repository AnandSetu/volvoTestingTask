const { Given, When, Then } = require('@wdio/cucumber-framework');

const { environment } = require('../../config/environment.js');
const common = require('../utility/common.js');
const { locators } = require('../locatore/volvoHomePage.js');
const { commonCopy } = require('../copy/volvoHomePage.js');
const volvoHomePage = require('../page/volvoHomePage.js');

Given(/^I launch volvo web portal$/, async () => {
    let url = environment.local.localUrl;
    console.log("App url :", url);
    await common.launchApp(url);
});

Then(/^I click on accept cookie button in home page$/, async () => {
    await common.click(locators.acceptCookie);
});

When(/^I verify volvo logo in home page$/, async () => {
    await common.isDisplay(locators.volvoLogo);
});

Then(/^I verify Safety label in home page$/, async () => {
    await common.verifyAndValidateElementCopy(locators.safety_label , commonCopy.safety_label);
});

Then(/^I verify Volvo Cars has been a leader text under overview tab$/, async () => {
    await common.verifyAndValidateElementCopy(locators.text_note , commonCopy.text_note);
});
