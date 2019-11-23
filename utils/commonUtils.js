var commonUtils = function () {
	this.waitAndClick = function (locator) {

		var EC = protractor.ExpectedConditions;
		let expectedElement = element(locator);
		browser.wait(EC.presenceOf(expectedElement), 20000);
		expectedElement.click();
	};
	this.iconanme = function (locator) {
		var EC = protractor.ExpectedConditions;
		let expectedElement = element(locator);
		browser.wait(EC.presenceOf(expectedElement), 20000);
		return expectedElement.getText().then((data) => {
			return data;
		});
	};
};

module.exports = new commonUtils();