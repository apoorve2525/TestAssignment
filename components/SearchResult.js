var utils = require('../utils/commonUtils');
var SearchResult = function () {
    const locator = {
        Search: by.xpath("//input[@type='search']"),
        safescript: by.xpath("//a[@href='api/platform-browser/SafeScript']"),
        safescripttext: by.id("safescript")
    };

    this.typesearch = function () {
        utils.waitAndClick(locator.Search);
        element(locator.Search).sendKeys('javascript');
        utils.waitAndClick(locator.safescript);
        return utils.iconanme(locator.safescripttext).then((data) => {
            return data;
        })


    };
};
module.exports = new SearchResult();

