describe('saucelabs.com home page', () => {
    it('should have Sauce Labs in the title', () => {
        browser.url('https://saucelabs.com')
        const title = browser.getTitle()
        if (title.indexOf("Sauce Labs") < 0) {
            throw new Error(`Invalid title '${title}'`);
        }
    })
})