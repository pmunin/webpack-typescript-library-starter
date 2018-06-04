/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync recursive .+\\.test\\.(js|jsx|ts|tsx)?$":
/*!**********************************************!*\
  !*** ./src sync .+\.test\.(js|jsx|ts|tsx)?$ ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calculate.test.ts": "./src/calculate.test.ts",
	"./index.test.js": "./src/index.test.js",
	"./shape.square.test.js": "./src/shape.square.test.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive .+\\.test\\.(js|jsx|ts|tsx)?$";

/***/ }),

/***/ "./src/calc-js-util.js":
/*!*****************************!*\
  !*** ./src/calc-js-util.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mult = mult;
function mult(a, b) {
    //This is my util method! Make sure it's included in the build
    return a * b;
}

/***/ }),

/***/ "./src/calc-ts-util.ts":
/*!*****************************!*\
  !*** ./src/calc-ts-util.ts ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
function add(a, b) {
    //This is my util method! Make sure it's included in the build 
    return a + b;
}

/***/ }),

/***/ "./src/calculate.test.ts":
/*!*******************************!*\
  !*** ./src/calculate.test.ts ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _calculate = __webpack_require__(/*! ./calculate */ "./src/calculate.ts");

var _chai = __webpack_require__(/*! chai */ "chai");

//Hallo world
describe("calculate tests", function () {
    it("should work", function () {
        var res = (0, _calculate.add)(1, 2);
        (0, _chai.expect)(res).to.be.eq(3);
    });
    it("should throw error", function () {
        throw new Error("Error is thrown"); //
    });
    it("should throw error 2", function () {
        throw new Error("Error is thrown"); //
    });
    it("should throw error 3", function () {
        throw new Error("Error is thrown"); //
    });
});

/***/ }),

/***/ "./src/calculate.ts":
/*!**************************!*\
  !*** ./src/calculate.ts ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
exports.mult = mult;
exports.div = div;

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _calcTsUtil = __webpack_require__(/*! ./calc-ts-util */ "./src/calc-ts-util.ts");

var tsutils = _interopRequireWildcard(_calcTsUtil);

var _calcJsUtil = __webpack_require__(/*! ./calc-js-util */ "./src/calc-js-util.js");

var jsutils = _interopRequireWildcard(_calcJsUtil);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//importing Javascript module from Typescript
//importing Js node_module's module from Typescript with synthetic default import
function add(a, b) {
    return tsutils.add(a, b);
} //importing Typescript module from Typescript
function mult(a, b) {
    return jsutils.mult(a, b);
}
function div(a, b) {
    var divide = _lodash2.default.divide;
    var res = divide(a, b);
    return res;
}

/***/ }),

/***/ "./src/index.test.js":
/*!***************************!*\
  !*** ./src/index.test.js ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var _sourceMapSupport = __webpack_require__(/*! source-map-support */ "source-map-support");

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _chai = __webpack_require__(/*! chai */ "chai");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install({ handleUncaughtExceptions: true });

//making chai.expect global

//making chai's expect global
var _global = typeof window !== 'undefined' ? window : global;
_global.expect = _chai.expect;

//finding all *test.js files and add them to list of dependencies
var context = __webpack_require__("./src sync recursive .+\\.test\\.(js|jsx|ts|tsx)?$");
context.keys().forEach(context);
console.log("Following test files discovered:\n", context.keys());

module.exports = context;

/***/ }),

/***/ "./src/shape.js":
/*!**********************!*\
  !*** ./src/shape.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = exports.Shape = function () {
    function Shape() {
        _classCallCheck(this, Shape);
    }

    _createClass(Shape, [{
        key: 'area',
        value: function area() {
            throw new Error('Not implemented');
        }
    }]);

    return Shape;
}();

/***/ }),

/***/ "./src/shape.square.js":
/*!*****************************!*\
  !*** ./src/shape.square.js ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Square = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shape = __webpack_require__(/*! ./shape */ "./src/shape.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Square = exports.Square = function (_Shape) {
    _inherits(Square, _Shape);

    function Square() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Square);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Square.__proto__ || Object.getPrototypeOf(Square)).call.apply(_ref, [this].concat(args))), _this), _this.edge = 10, _this.name = "Square", _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Square, [{
        key: "area",
        value: function area() {
            var c1 = new SquareInternalClass();
            if (squareInternalFunction() == "123") throw "123";
            return this.edge * this.edge;
        }
    }]);

    return Square;
}(_shape.Shape);

var SquareInternalClass = function SquareInternalClass() {
    _classCallCheck(this, SquareInternalClass);
};

function squareInternalFunction() {
    return "hallo world!";
}

/***/ }),

/***/ "./src/shape.square.test.js":
/*!**********************************!*\
  !*** ./src/shape.square.test.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _shape = __webpack_require__(/*! ./shape.square */ "./src/shape.square.js");

describe("Square module ES6 test", function () {
    it("Should create instance", function () {
        var instance = new _shape.Square();
        expect(instance).be.instanceof(_shape.Square);
    });
    it("Should calculate area properly", function () {
        var instance = new _shape.Square();
        instance.edge = 25;
        expect(instance.area()).to.be.eq(625);
    });
    it("Should throw another error", function () {
        expect(false).to.be.true;
    });
});

/***/ }),

/***/ "chai":
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjIHN5bmMgLitcXC50ZXN0XFwuKGpzfGpzeHx0c3x0c3gpIiwid2VicGFjazovLy8uL3NyYy9jYWxjLWpzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGMtdHMtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsY3VsYXRlLnRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGN1bGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlLnNxdWFyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcGUuc3F1YXJlLnRlc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hhaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvdXJjZS1tYXAtc3VwcG9ydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiIl0sIm5hbWVzIjpbIm11bHQiLCJhIiwiYiIsInNtcyIsImluc3RhbGwiLCJoYW5kbGVVbmNhdWdodEV4Y2VwdGlvbnMiLCJfZ2xvYmFsIiwid2luZG93IiwiZ2xvYmFsIiwiZXhwZWN0IiwiY29udGV4dCIsImtleXMiLCJmb3JFYWNoIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJTaGFwZSIsIkVycm9yIiwiU3F1YXJlIiwiZWRnZSIsIm5hbWUiLCJjMSIsIlNxdWFyZUludGVybmFsQ2xhc3MiLCJzcXVhcmVJbnRlcm5hbEZ1bmN0aW9uIiwiZGVzY3JpYmUiLCJpdCIsImluc3RhbmNlIiwiYmUiLCJpbnN0YW5jZW9mIiwiYXJlYSIsInRvIiwiZXEiLCJ0cnVlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFF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QUFoQjtBQUNBWCxlQUFPa0IsU0FBU0csSUFBVCxFQUFQLEVBQXdCQyxFQUF4QixDQUEyQkgsRUFBM0IsQ0FBOEJJLEVBQTlCLENBQWlDLEdBQWpDO0FBQ0gsS0FKRDtBQUtBTixPQUFHLDRCQUFILEVBQWdDLFlBQUk7QUFDaENqQixlQUFPLEtBQVAsRUFBY3NCLEVBQWQsQ0FBaUJILEVBQWpCLENBQW9CSyxJQUFwQjtBQUNILEtBRkQ7QUFHSCxDQWJELEU7Ozs7Ozs7Ozs7Ozs7QUNGQSxpQzs7Ozs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7Ozs7QUNBQSx3RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRlc3QuanNcIik7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2FsY3VsYXRlLnRlc3QudHNcIjogXCIuL3NyYy9jYWxjdWxhdGUudGVzdC50c1wiLFxuXHRcIi4vaW5kZXgudGVzdC5qc1wiOiBcIi4vc3JjL2luZGV4LnRlc3QuanNcIixcblx0XCIuL3NoYXBlLnNxdWFyZS50ZXN0LmpzXCI6IFwiLi9zcmMvc2hhcGUuc3F1YXJlLnRlc3QuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSAuK1xcXFwudGVzdFxcXFwuKGpzfGpzeHx0c3x0c3gpPyRcIjsiLCJleHBvcnQgZnVuY3Rpb24gbXVsdChhLCBiKVxyXG57XHJcbiAgICAvL1RoaXMgaXMgbXkgdXRpbCBtZXRob2QhIE1ha2Ugc3VyZSBpdCdzIGluY2x1ZGVkIGluIHRoZSBidWlsZFxyXG4gICAgcmV0dXJuIGEqYjtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBhZGQoYTpudW1iZXIsIGI6bnVtYmVyKTpudW1iZXJcclxue1xyXG4gICAgLy9UaGlzIGlzIG15IHV0aWwgbWV0aG9kISBNYWtlIHN1cmUgaXQncyBpbmNsdWRlZCBpbiB0aGUgYnVpbGQgXHJcbiAgICByZXR1cm4gYStiO1xyXG59IiwiaW1wb3J0IHthZGR9IGZyb20gJy4vY2FsY3VsYXRlJ1xyXG5pbXBvcnQge2V4cGVjdH0gZnJvbSAnY2hhaSdcclxuLy9IYWxsbyB3b3JsZFxyXG5cclxuZGVzY3JpYmUoXCJjYWxjdWxhdGUgdGVzdHNcIiwoKT0+e1xyXG5cclxuICAgIGl0KFwic2hvdWxkIHdvcmtcIiwoKT0+e1xyXG4gICAgICAgIGxldCByZXMgPSBhZGQoMSwyKTtcclxuICAgICAgICBleHBlY3QocmVzKS50by5iZS5lcSgzKVxyXG4gICAgICAgIDtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpdChcInNob3VsZCB0aHJvdyBlcnJvclwiLCgpPT57XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaXMgdGhyb3duXCIpLy9cclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwic2hvdWxkIHRocm93IGVycm9yIDJcIiwoKT0+e1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGlzIHRocm93blwiKS8vXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoXCJzaG91bGQgdGhyb3cgZXJyb3IgM1wiLCgpPT57XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgaXMgdGhyb3duXCIpLy9cclxuICAgIH0pO1xyXG5cclxufSlcclxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJyAgLy9pbXBvcnRpbmcgSnMgbm9kZV9tb2R1bGUncyBtb2R1bGUgZnJvbSBUeXBlc2NyaXB0IHdpdGggc3ludGhldGljIGRlZmF1bHQgaW1wb3J0XHJcbmltcG9ydCAqIGFzIHRzdXRpbHMgZnJvbSAnLi9jYWxjLXRzLXV0aWwnLy9pbXBvcnRpbmcgVHlwZXNjcmlwdCBtb2R1bGUgZnJvbSBUeXBlc2NyaXB0XHJcbmltcG9ydCAqIGFzIGpzdXRpbHMgZnJvbSAnLi9jYWxjLWpzLXV0aWwnLy9pbXBvcnRpbmcgSmF2YXNjcmlwdCBtb2R1bGUgZnJvbSBUeXBlc2NyaXB0XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkKGEsYilcclxue1xyXG4gICAgcmV0dXJuIHRzdXRpbHMuYWRkKGEsYik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0KGEsYilcclxue1xyXG4gICAgcmV0dXJuIGpzdXRpbHMubXVsdChhLGIpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdihhLGIpXHJcbntcclxuICAgIGxldCBkaXZpZGUgPSBfLmRpdmlkZTtcclxuICAgIGxldCByZXMgPSBkaXZpZGUoYSxiKTtcclxuICAgIHJldHVybiByZXM7XHJcbn0iLCJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcclxuaW1wb3J0IHNtcyBmcm9tICdzb3VyY2UtbWFwLXN1cHBvcnQnO1xyXG5zbXMuaW5zdGFsbCh7aGFuZGxlVW5jYXVnaHRFeGNlcHRpb25zOiB0cnVlfSk7XHJcblxyXG4vL21ha2luZyBjaGFpLmV4cGVjdCBnbG9iYWxcclxuaW1wb3J0IHtleHBlY3R9IGZyb20gJ2NoYWknXHJcbi8vbWFraW5nIGNoYWkncyBleHBlY3QgZ2xvYmFsXHJcbnZhciBfZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdzpnbG9iYWw7XHJcbl9nbG9iYWwuZXhwZWN0ID0gZXhwZWN0O1xyXG5cclxuLy9maW5kaW5nIGFsbCAqdGVzdC5qcyBmaWxlcyBhbmQgYWRkIHRoZW0gdG8gbGlzdCBvZiBkZXBlbmRlbmNpZXNcclxudmFyIGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgLy4rXFwudGVzdFxcLihqc3xqc3h8dHN8dHN4KT8kLyk7XHJcbmNvbnRleHQua2V5cygpLmZvckVhY2goY29udGV4dCk7XHJcbmNvbnNvbGUubG9nKFwiRm9sbG93aW5nIHRlc3QgZmlsZXMgZGlzY292ZXJlZDpcXG5cIiwgY29udGV4dC5rZXlzKCkpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRleHQ7IiwiZXhwb3J0IGNsYXNzIFNoYXBlXHJcbntcclxuICAgIG5hbWU7XHJcbiAgICBhcmVhKCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U2hhcGV9IGZyb20gJy4vc2hhcGUnXHJcblxyXG5leHBvcnQgY2xhc3MgU3F1YXJlIGV4dGVuZHMgU2hhcGVcclxue1xyXG4gICAgZWRnZSA9IDEwXHJcbiAgICBuYW1lPVwiU3F1YXJlXCJcclxuICAgIGFyZWEoKXtcclxuICAgICAgICBsZXQgYzEgPSBuZXcgU3F1YXJlSW50ZXJuYWxDbGFzcygpO1xyXG4gICAgICAgIGlmKHNxdWFyZUludGVybmFsRnVuY3Rpb24oKT09XCIxMjNcIikgdGhyb3cgXCIxMjNcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZGdlICogdGhpcy5lZGdlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTcXVhcmVJbnRlcm5hbENsYXNzXHJcbntcclxufVxyXG5cclxuZnVuY3Rpb24gc3F1YXJlSW50ZXJuYWxGdW5jdGlvbigpXHJcbntcclxuICAgIHJldHVybiBcImhhbGxvIHdvcmxkIVwiXHJcbn0iLCJpbXBvcnQge1NxdWFyZX0gZnJvbSAnLi9zaGFwZS5zcXVhcmUnXHJcblxyXG5kZXNjcmliZShcIlNxdWFyZSBtb2R1bGUgRVM2IHRlc3RcIiwoKT0+e1xyXG4gICAgaXQoXCJTaG91bGQgY3JlYXRlIGluc3RhbmNlXCIsKCk9PntcclxuICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgU3F1YXJlKCk7XHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlKS5iZS5pbnN0YW5jZW9mKFNxdWFyZSk7XHJcbiAgICB9KVxyXG4gICAgaXQoXCJTaG91bGQgY2FsY3VsYXRlIGFyZWEgcHJvcGVybHlcIiwoKT0+e1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IG5ldyBTcXVhcmUoKTtcclxuICAgICAgICBpbnN0YW5jZS5lZGdlID0gMjU7XHJcbiAgICAgICAgZXhwZWN0KGluc3RhbmNlLmFyZWEoKSkudG8uYmUuZXEoNjI1KVxyXG4gICAgfSlcclxuICAgIGl0KFwiU2hvdWxkIHRocm93IGFub3RoZXIgZXJyb3JcIiwoKT0+e1xyXG4gICAgICAgIGV4cGVjdChmYWxzZSkudG8uYmUudHJ1ZTtcclxuICAgIH0pXHJcbn0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic291cmNlLW1hcC1zdXBwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9