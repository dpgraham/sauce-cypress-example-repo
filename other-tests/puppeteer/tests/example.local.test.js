const puppeteer = require('puppeteer')

describe('saucectl demo test', () => {
	test('should verify title of the page', async () => {
        const browser = await puppeteer.launch({
            //headless: false,
            slowMo: 250,
        });
		const page = (await browser.pages())[0]
		await page.goto('https://www.saucedemo.com/');
        expect(await page.title()).toBe('Swag Labs');
		await browser.close();
	});
});
