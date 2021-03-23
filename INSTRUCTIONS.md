# CYPRESS ON SAUCE LABS

This page is an example project that demonstrates how to run Cypress tests and how to run Cypress tests on the Sauce cloud. This project automates https://www.saucedemo.com/

## Installation
1. Install dependencies with `npm install`
1. Run Cypress tests: `npx cypress run` (to see the browser run `npx cypress run --headed`)
  1. To run tests on a different browser run `npx cypress run --browser <chrome|firefox|edge>`

## Register and set up your Sauce Labs account
1. Navigate to https://saucelabs.com/sign-up to register a free trial account (no credit card required)
1. Log in and navigate to https://app.saucelabs.com/user-settings to retrieve your Access Key
  1. Keep this secret! Do not commit this or share this over any insecure channels
1. Export your access key to your environment (`export SAUCE_ACCESS_KEY=<Access Key>`)
1. Export your user name to your environment (`export SAUCE_USERNAME=<User Name>`)

## Set up SauceCtl
1. Install [saucectl](https://www.npmjs.com/package/saucectl) globally (`npm install -g saucectl`)
1. Verify that you have the latest installation by running `saucectl --version`
1. Run `saucectl new` and follow the interactive prompts to set it up for Cypress
1. Run `sauectl run`. Your tests will run on our Sauce VM's
1. Edit the ".sauce/config.yml" file to add different browsers, platforms and configurations
  1. Try adding Firefox and Microsoft Edge (note that Safari not supported by Cypress)

## Links
1. SauceCtl configuration https://docs.staging.saucelabs.net/web-apps/automated-testing/cypress/index.html#configure-saucectl
1. Cypress specific configuration https://docs.staging.saucelabs.net/testrunner-toolkit/configuration/cypress/index.html