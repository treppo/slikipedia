var myHooks;

myHooks = function() {
  this.Before(function(callback) {
    return callback();
  });
  return this.After(function(callback) {
    console.log("After hook");
    return callback();
  });
};

module.exports = myHooks;
