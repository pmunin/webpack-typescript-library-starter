import 'source-map-support/register'
import sms from 'source-map-support';
sms.install({handleUncaughtExceptions: true});

//making chai.expect global
import {expect} from 'chai'
//making chai's expect global
var _global = typeof window!=='undefined'?window:global;
_global.expect = expect;

//finding all *test.js files and add them to list of dependencies
var context = require.context('./', true, /.+\.test\.(js|jsx)?$/);
context.keys().forEach(context);
console.log("Following test files discovered:\n", context.keys())

module.exports = context;