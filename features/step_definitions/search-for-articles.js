var myStepDefinitionsWrapper;

myStepDefinitionsWrapper = function() {
  this.Given(/^I am on the homepage$/, function(callback) {
    return this.visit('http://localhost:9000', callback);
  });
  this.When(/^I enter a term in the search field$/, function(callback) {
    return this.browser.fill('Search', 'MacGyver').pressButton('Search', callback);
  });
  return this.Then(/^I should see a list of articles$/, function(callback) {
    this.assert(this.browser.document.getElementById('search-results'));
    return callback();
  });
};

module.exports = myStepDefinitionsWrapper;
