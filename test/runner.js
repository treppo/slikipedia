/*global define mocha */
var should;

require.config({
  // baseUrl: '../',
  paths: {
    // components: 'components',
    // aura: 'lib',
    // widgets: 'spec/widgets',
    chai: 'chai/chai',
    sinonChai:'sinon-chai/lib/sinon-chai'
  }
});

define(['chai', 'sinonChai'], function (chai, sinonChai) {
  window.chai = chai;
  window.expect = chai.expect;
  window.assert = chai.assert;
  window.should = chai.should();
  window.sinonChai = sinonChai;
  window.notrack = true;

  chai.use(sinonChai);
  mocha.setup('bdd');

  require([
    'spec/test',
    'acceptance/test'
    // 'spec/lib/aura.extensions_spec',
    // 'spec/lib/ext/widgets_spec',
    // 'spec/lib/ext/mediator_spec'
  ], function () {
    mocha.run();
  });
});
