let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['scenario1.js'],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
      browserName: 'chrome',
      chromeOptions: { 
        args: [ 'start-maximized'  ] 
      }
    },

    onPrepare: function(){
      jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      }));
    }
  }