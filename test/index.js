describe("Astro testing with Nightwatch", function () {
	before((browser) => browser.navigateTo("http://localhost:4321/"));

	it("check that the title is correct", function (browser) {
		browser.assert.titleEquals("Astro is awesome!");
	});

	after((browser) => browser.end());
});
