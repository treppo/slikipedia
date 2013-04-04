var World, zombie;

zombie = require("zombie");

World = World = function(callback) {
  this.assert = require('assert');
  this.browser = new zombie.Browser();
  this.visit = function(url, callback) {
    return this.browser.visit(url, callback);
  };
  return callback();
};

exports.World = World;
