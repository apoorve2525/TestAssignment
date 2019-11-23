var utils = require('../utils/commonUtils');
var Homepage = function () {

    const locator = {
        Features: by.xpath("//a[@title='Features']"),
        Docs: by.xpath("//a[@title='Docs']"),

        Resource: by.xpath("//a[@title='Resources']"),
        Events: by.xpath("//a[@title='Events']")


    };

    this.clickfeatureicon = function () {

        utils.waitAndClick(locator.Features);

    };

    this.GetFeatureText = function () {
        return utils.iconanme(locator.Features).then((data) => {
            return data;
        })
    };

    this.GetResourceText = function () {
        return utils.iconanme(locator.Resource).then((data) => {
            return data;
        })
    };

    this.clickResourceicon = function () {
        utils.waitAndClick(locator.Resource);
    };

    this.GetResourceText = function () {
        return utils.iconanme(locator.Resource).then((data) => {
            return data;
        })
    };

    this.clickDocsicon = function () {
        utils.waitAndClick(locator.Docs);
    };

    this.GetDocsText = function () {
        return utils.iconanme(locator.Docs).then((data) => {
            return data;
        })
    };

    this.clickEventicon = function () {
        return utils.iconanme(locator.Docs).then((data) => {
            return data;
        })
    };

    this.GetEventText = function () {
        return utils.iconanme(locator.Events).then((data) => {
            return data;
        })
    };
};
module.exports = new Homepage();
