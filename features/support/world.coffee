zombie = require("zombie")
World = World = (callback) ->
  @assert = require 'assert'
  @browser = new zombie.Browser() # this.browser will be available in step definitions
  @visit = (url, callback) ->
    @browser.visit url, callback

  callback() # tell Cucumber we're finished and to use 'this' as the world instance

exports.World = World
