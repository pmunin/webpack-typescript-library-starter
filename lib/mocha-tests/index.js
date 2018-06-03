var tests =
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

/***/ "./src sync recursive .+\\.test\\.(js|jsx)?$":
/*!***************************************!*\
  !*** ./src sync .+\.test\.(js|jsx)?$ ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calculate.test.js": "./src/calculate.test.js",
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
webpackContext.id = "./src sync recursive .+\\.test\\.(js|jsx)?$";

/***/ }),

/***/ "./src/calculate.js":
/*!**************************!*\
  !*** ./src/calculate.js ***!
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
exports.div = div;

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function add(a, b) {
    return a + b;
}

function div(a, b) {
    return _lodash2.default.divide(a, b);
}

/***/ }),

/***/ "./src/calculate.test.js":
/*!*******************************!*\
  !*** ./src/calculate.test.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _calculate = __webpack_require__(/*! ./calculate */ "./src/calculate.js");

var _chai = __webpack_require__(/*! chai */ "chai");

//import {expect} from 'expect'

describe("calculate tests", function () {
    it("should work", function () {
        var res = (0, _calculate.add)(1, 2);
        (0, _chai.expect)(res).to.be.eq(3);
    });

    it("should throw error", function () {
        throw new Error("Error is thrown");
    });
});

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
var context = __webpack_require__("./src sync recursive .+\\.test\\.(js|jsx)?$");
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
//# sourceMappingURL=index.js.map