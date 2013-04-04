myStepDefinitionsWrapper = ->
  @Given /^I am on the homepage$/, (callback) ->
    @visit 'http://localhost:9000', callback

  @When /^I enter a term in the search field$/, (callback) ->
    # express the regexp above with the code you wish you had
    @browser.fill('Search', 'MacGyver')
    .pressButton 'Search', callback

  @Then /^I should see a list of articles$/, (callback) ->
    @assert @browser.document.getElementById 'search-results'
    callback()

module.exports = myStepDefinitionsWrapper
