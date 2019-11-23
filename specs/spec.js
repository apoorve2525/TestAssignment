var Homepage = require('../components/Homepage');
var SearchResult = require('../components/SearchResult');

describe('Get data from column chart in google chart home page', function () {

  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    console.log("in before all");
    browser.get('https://angular.io/');
  });

  it('verify Angularjs page title', function () {
    expect(browser.getTitle()).toContain('Angular');
  });

  it('click and get homepage icon name', function () {
    Homepage.clickfeatureicon();
    Homepage.GetFeatureText().then((data) => {
      expect(data).toContain('FEATURES');
    });
    browser.sleep(5000);
    Homepage.clickDocsicon();
    Homepage.GetDocsText().then((data) => {
      expect(data).toContain('DOCS');
    });
    browser.sleep(3000);
    Homepage.clickResourceicon();
    Homepage.GetResourceText().then((data) => {
      expect(data).toContain('RESOURCES');
    });
    browser.sleep(3000);
    Homepage.clickEventicon();
    Homepage.GetEventText().then((data) => {
      expect(data).toContain('EVENTS');
    });

    SearchResult.typesearch().then((data) => {
      expect(data).toContain('SafeScript');
    });
    browser.sleep(5000);
  });
});
