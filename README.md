# CYPRESS ON SAUCE LABS

To get setup, follow the [Instructions](./instructions) page.


<!-- [START badges] -->
![Build](https://github.com/saucelabs/testrunner-toolkit/workflows/Sauce%20Pipeline%20Browser%20Tests/badge.svg?branch=master)
[![CircleCI Status](https://circleci.com/gh/saucelabs/saucectl.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/saucelabs/saucectl)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Chromium version](https://img.shields.io/badge/chromium-84.0.4131.0-blue.svg?logo=google-chrome)](https://www.chromium.org/Home)
<!-- [END badges] -->

Sauce Labs Testrunner Toolkit is a containerized testing solution that simplifies user setup, speeds up test execution time and supports native Javascript frameworks like Puppeteer and Playwright for running end-to-end web tests with Sauce Labs.

<!-- [START gettingstarted] -->

## Requirements

- [Docker](https://docs.docker.com/get-docker/) installed
- Make sure the Docker daemon is running (e.g. `docker info` works in your terminal)
- A [Sauce Labs](https://saucelabs.com/) account; if you don't have one, start a [free trial](https://saucelabs.com/sign-up)


## Install

Using NPM:

```sh
npm install -g saucectl
```

## Connect to Sauce Labs

A Sauce Labs user name and access key are needed to post the test results. You can get your `SAUCE_ACCESS_KEY` from
Account > User Settings in [Sauce Labs](https://app.saucelabs.com/).

To authenticate yourself, the following environment variables need to be set:

- `SAUCE_USERNAME`
- `SAUCE_ACCESS_KEY`

You can export them as follows:

```sh
export SAUCE_USERNAME=<your-username>
export SAUCE_ACCESS_KEY=<your-access-key>
```

If you are using a cloud CI/CD tool, we strongly suggest protecting these values
through secrets or context variables. 

## Getting started

```sh
npx saucectl new
```

This command will ask you to choose one of the frameworks: 
- [Puppeteer](https://github.com/puppeteer/puppeteer)
- [Playwright](https://github.com/microsoft/playwright)
- [TestCafe](https://github.com/DevExpress/testcafe) 
- [Cypress](https://github.com/cypress-io/cypress) 

After that, a `./sauce/config.yml` file and an example test under
the `tests` directory will be created, where you can start working from.

### Run your first test

```sh
npx saucectl run
```

This command will run the example test based on the `./.sauce/config.yml` file.


### Using saucectl
To learn more about `saucectl` and its commands and flags,
please visit the [saucectl repository](https://github.com/saucelabs/saucectl).

### Quick demo

![Demo](https://gist.githubusercontent.com/diemol/f24bb230a0e3b41a052a1d9c1ff41f9e/raw/a325b6c1da77d4d4a804842da7307b055e7b50d2/saucectl-demo.gif)

## Configuration
`saucectl` requires a configuration file to know what tests to run and what
framework to use. By default, `.sauce/config.yml` will be the place where
`saucectl` will look for its configuration.

> **NOTE:** Test files need to match `(spec|test)` in their file name so they will be automatically detected as testfiles.

<!-- [END gettingstarted] -->

<!-- [START examples] -->

### Run a single file

```yaml
files:
  - ./tests/file.spec.js
```

### Run multiple files

```yaml
files:
  - ./tests/*.spec.js
```

### Run an entire directory

```yaml
files:
  - ./tests/cypress/
```

## Images

Image is hosted in Docker Hub

[Base image + Cypress](https://hub.docker.com/r/saucelabs/stt-cypress-mocha-node/tags)
contains saucectl with different versions of Cypress.

## Examples

#### Cypress Snippet
```js
context('Actions', () => {
	beforeEach(() => {
		cy.visit('https://example.cypress.io/commands/actions')
	})
	it('.type() - type into a DOM element', () => {
		// https://on.cypress.io/type
		cy.get('.action-email')
			.type('fake@email.com').should('have.value', 'fake@email.com')
	})
})
```
<!-- [END examples] -->