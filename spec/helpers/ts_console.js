const TSConsoleReporter = require("jasmine-ts-console-reporter");
const jasmineReporters = require("jasmine-reporters");

console.log('in ts_console');

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new TSConsoleReporter());
