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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/block.png":
/*!***************************!*\
  !*** ./src/img/block.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fac88169424b827f4bbca82bd7a01a9f.png");

/***/ }),

/***/ "./src/img/blockTri.png":
/*!******************************!*\
  !*** ./src/img/blockTri.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f732b622c2a2a256940ec159c5a7941.png");

/***/ }),

/***/ "./src/img/blocks.png":
/*!****************************!*\
  !*** ./src/img/blocks.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "de79d2254470fe6520b40c4a4a152075.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/lgPlatform.png":
/*!********************************!*\
  !*** ./src/img/lgPlatform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "08b228664ecabddb2b575dd45bde1899.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/spriteFireFlower.png":
/*!**************************************!*\
  !*** ./src/img/spriteFireFlower.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "434554c25d0262d9ae16c700febfa462.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerJumpLeft.png":
/*!**********************************************!*\
  !*** ./src/img/spriteFireFlowerJumpLeft.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fe7f83abbc33795c55d5bbab3ab117f3.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerJumpRight.png":
/*!***********************************************!*\
  !*** ./src/img/spriteFireFlowerJumpRight.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b5b7bdebff9886acfe07b077e9357d84.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerRunLeft.png":
/*!*********************************************!*\
  !*** ./src/img/spriteFireFlowerRunLeft.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dac857eaeda937793a54db5301b14e46.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerRunRight.png":
/*!**********************************************!*\
  !*** ./src/img/spriteFireFlowerRunRight.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c957f14ac99dfa4f90a424a042a43e7b.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerStandLeft.png":
/*!***********************************************!*\
  !*** ./src/img/spriteFireFlowerStandLeft.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0d2de9eb02bbc291f7d436447db7fe30.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerStandRight.png":
/*!************************************************!*\
  !*** ./src/img/spriteFireFlowerStandRight.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6b3fe854152c472eecf59c9dbe571eba.png");

/***/ }),

/***/ "./src/img/spriteGoomba.png":
/*!**********************************!*\
  !*** ./src/img/spriteGoomba.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a1de12fbeda5f4cadc1c0cec27c01014.png");

/***/ }),

/***/ "./src/img/spriteMarioJumpLeft.png":
/*!*****************************************!*\
  !*** ./src/img/spriteMarioJumpLeft.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79a87181aec94b5e1d21942963ebe634.png");

/***/ }),

/***/ "./src/img/spriteMarioJumpRight.png":
/*!******************************************!*\
  !*** ./src/img/spriteMarioJumpRight.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffdd5958ac8fc0192de1a8855d128203.png");

/***/ }),

/***/ "./src/img/spriteMarioRunLeft.png":
/*!****************************************!*\
  !*** ./src/img/spriteMarioRunLeft.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bd67564ba49a9b4944f1ac5c812adc9d.png");

/***/ }),

/***/ "./src/img/spriteMarioRunRight.png":
/*!*****************************************!*\
  !*** ./src/img/spriteMarioRunRight.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0a0b6df309febe5e8b6c74c066c6a08e.png");

/***/ }),

/***/ "./src/img/spriteMarioStandLeft.png":
/*!******************************************!*\
  !*** ./src/img/spriteMarioStandLeft.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2872668f52970b728cf95b2631d20911.png");

/***/ }),

/***/ "./src/img/spriteMarioStandRight.png":
/*!*******************************************!*\
  !*** ./src/img/spriteMarioStandRight.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0c6fecf727c918f37db411c979a9bf05.png");

/***/ }),

/***/ "./src/img/tPlatform.png":
/*!*******************************!*\
  !*** ./src/img/tPlatform.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d119235cfb5fe1e6bcc3010e83e9968e.png");

/***/ }),

/***/ "./src/img/xtPlatform.png":
/*!********************************!*\
  !*** ./src/img/xtPlatform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1e48f47873af05232d20d003b68fdecd.png");

/***/ }),

/***/ "./src/js/Flower.js":
/*!**************************!*\
  !*** ./src/js/Flower.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/js/images.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Flower = /*#__PURE__*/function () {
  function Flower(_ref) {
    var position = _ref.position,
        velocity = _ref.velocity;

    _classCallCheck(this, Flower);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 43;
    this.height = 50;
    this.image = _images__WEBPACK_IMPORTED_MODULE_1__["default"].flower;
    this.frames = 0;
  }

  _createClass(Flower, [{
    key: "draw",
    value: function draw(_ref2) {
      var c = _ref2.c;
      c.drawImage(this.image, 56 * this.frames, 0, 56, 60, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(_ref3) {
      var c = _ref3.c;
      this.frames++;

      if (this.frames >= 75) {
        this.frames = 0;
      }

      this.draw({
        c: c
      });
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y; // gravity

      if (this.isAboveTheBottom()) {
        this.velocity.y += _canvas__WEBPACK_IMPORTED_MODULE_0__["gravity"];
      }
    }
  }, {
    key: "isAboveTheBottom",
    value: function isAboveTheBottom() {
      return this.getBaseY() <= canvas.height;
    }
  }, {
    key: "getBaseY",
    value: function getBaseY() {
      return this.position.y + this.height + this.velocity.y;
    }
  }]);

  return Flower;
}();

/* harmony default export */ __webpack_exports__["default"] = (Flower);

/***/ }),

/***/ "./src/js/GenericObject.js":
/*!*********************************!*\
  !*** ./src/js/GenericObject.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        block = _ref.block,
        text = _ref.text;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
    this.block = block;
    this.text = text;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw(_ref2) {
      var c = _ref2.c;
      c.drawImage(this.image, this.position.x, this.position.y);

      if (this.text) {
        c.font = "20px Arial";
        c.fillStyle = 'red';
        c.fillText(this.text, this.position.x, this.position.y);
      }
    }
  }, {
    key: "update",
    value: function update(_ref3) {
      var c = _ref3.c;
      this.draw({
        c: c
      });
      this.position.x += this.velocity.x;
    }
  }]);

  return GenericObject;
}();

/* harmony default export */ __webpack_exports__["default"] = (GenericObject);

/***/ }),

/***/ "./src/js/Goomba.js":
/*!**************************!*\
  !*** ./src/js/Goomba.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/js/images.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Goomba = /*#__PURE__*/function () {
  function Goomba(_ref) {
    var position = _ref.position,
        velocity = _ref.velocity,
        _ref$distanceLimit = _ref.distanceLimit,
        distanceLimit = _ref$distanceLimit === void 0 ? 50 : _ref$distanceLimit;

    _classCallCheck(this, Goomba);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 43;
    this.height = 50;
    this.image = _images__WEBPACK_IMPORTED_MODULE_1__["default"].goomba;
    this.frames = 0;
    this.distanceLimit = distanceLimit;
    this.distanceTraveled = 0;
  }

  _createClass(Goomba, [{
    key: "draw",
    value: function draw(_ref2) {
      var c = _ref2.c;
      c.drawImage(this.image, 130 * this.frames, 0, 130, 150, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(_ref3) {
      var c = _ref3.c;
      this.frames++;

      if (this.frames >= 58) {
        this.frames = 0;
      }

      this.draw({
        c: c
      });
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y; // gravity

      if (this.isAboveTheBottom()) {
        this.velocity.y += _canvas__WEBPACK_IMPORTED_MODULE_0__["gravity"];
      } // walk the goomba back and forth


      this.distanceTraveled += Math.abs(this.velocity.x);

      if (this.distanceTraveled > this.distanceLimit) {
        this.distanceTraveled = 0;
        this.velocity.x = -this.velocity.x;
      }
    }
  }, {
    key: "isAboveTheBottom",
    value: function isAboveTheBottom() {
      return this.getBaseY() <= canvas.height;
    }
  }, {
    key: "getBaseY",
    value: function getBaseY() {
      return this.position.y + this.height + this.velocity.y;
    }
  }]);

  return Goomba;
}();

/* harmony default export */ __webpack_exports__["default"] = (Goomba);

/***/ }),

/***/ "./src/js/Particle.js":
/*!****************************!*\
  !*** ./src/js/Particle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Particle = /*#__PURE__*/function () {
  function Particle(_ref) {
    var position = _ref.position,
        velocity = _ref.velocity,
        radius = _ref.radius,
        fireball = _ref.fireball,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? "#654428" : _ref$color;

    _classCallCheck(this, Particle);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.radius = radius;
    this.ttl = 300;
    this.color = color;
    this.fireball = fireball;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw(_ref2) {
      var c = _ref2.c;
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update(_ref3) {
      var c = _ref3.c;
      this.draw({
        c: c
      });
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y; // gravity

      if (this.isAboveTheBottom()) {
        this.velocity.y += _canvas__WEBPACK_IMPORTED_MODULE_0__["gravity"] * 0.1;
      }

      this.ttl--;
    }
  }, {
    key: "isAboveTheBottom",
    value: function isAboveTheBottom() {
      return this.getBaseY() <= canvas.height;
    }
  }, {
    key: "getBaseY",
    value: function getBaseY() {
      return this.position.y + this.radius + this.velocity.y;
    }
  }]);

  return Particle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Particle);

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/js/images.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: canvas.height - 700
    };
    this.velocity = {
      x: 0,
      y: 20
    };
    this.frameWidth = 398;
    this.frameHeight = 353;
    this.scale = 0.3;
    this.width = this.frameWidth * this.scale;
    this.height = this.frameHeight * this.scale;
    this.jumpVelocity = 30;
    this.speed = 10;
    this.powerUps = {
      fireFlower: false
    };
    this.image = _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteMarioStandRight;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteMarioStandRight,
        left: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteMarioStandLeft,
        fireFlower: {
          right: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteFireFlowerStandRight,
          left: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteFireFlowerStandLeft
        }
      },
      run: {
        right: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteMarioRunRight,
        left: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteMarioRunLeft,
        fireFlower: {
          right: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteFireFlowerRunRight,
          left: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteFireFlowerRunLeft
        }
      },
      jump: {
        right: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteMarioJumpRight,
        left: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteMarioJumpLeft,
        fireFlower: {
          right: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteFireFlowerJumpRight,
          left: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteFireFlowerJumpLeft
        }
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.frameWidth;
    this.invincible = false;
    this.opacity = 1;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(_ref) {
      var c = _ref.c;
      c.save();
      c.globalAlpha = this.opacity;
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, this.frameHeight, this.position.x, this.position.y, this.width, this.height);
      c.restore();
    }
  }, {
    key: "update",
    value: function update(_ref2) {
      var c = _ref2.c;
      this.frames++;

      if (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left || this.currentSprite === this.sprites.stand.fireFlower.right || this.currentSprite === this.sprites.stand.fireFlower.left) {
        this.frames = 0;
      } else if (this.frames > 28 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left || this.currentSprite === this.sprites.run.fireFlower.right || this.currentSprite === this.sprites.run.fireFlower.left)) {
        this.frames = 0;
      } else if (this.currentSprite === this.sprites.jump.right || this.currentSprite === this.sprites.jump.left || this.currentSprite === this.sprites.jump.fireFlower.right || this.currentSprite === this.sprites.jump.fireFlower.left) {
        this.frames = 0;
      }

      this.draw({
        c: c
      });
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y; // gravity

      if (this.isAboveTheBottom()) {
        this.velocity.y += _canvas__WEBPACK_IMPORTED_MODULE_0__["gravity"];
      }

      if (this.invincible) {
        if (this.opacity === 1) {
          this.opacity = 0;
        } else {
          this.opacity = 1;
        }
      } else {
        this.opacity = 1;
      }
    }
  }, {
    key: "isAboveTheBottom",
    value: function isAboveTheBottom() {
      return this.getBaseY() <= canvas.height;
    }
  }, {
    key: "getBaseY",
    value: function getBaseY() {
      return this.position.y + this.height + this.velocity.y;
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: gravity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gravity", function() { return gravity; });
/* harmony import */ var _getGoombas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getGoombas */ "./src/js/getGoombas.js");
/* harmony import */ var _GenericObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenericObject */ "./src/js/GenericObject.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ "./src/js/images.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _getFlowers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getFlowers */ "./src/js/getFlowers.js");
/* harmony import */ var _getPlatforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getPlatforms */ "./src/js/getPlatforms.js");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Particle */ "./src/js/Particle.js");








var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 1.4;
var backgroundSpeed = 5;
var lastKey;
var player = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"]();
var platforms = [];
var background;
var background2;
var hills;
var genericObjects = [background, background2, hills];
var goombas = [];
var flowers = [];
var particles = [];
var scrollOffset = 0;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

function init() {
  player = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"]();
  goombas = Object(_getGoombas__WEBPACK_IMPORTED_MODULE_0__["default"])();
  particles = [];
  flowers = Object(_getFlowers__WEBPACK_IMPORTED_MODULE_5__["default"])();
  background = new _GenericObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
    x: -1,
    y: -1,
    image: _images__WEBPACK_IMPORTED_MODULE_3__["default"].background
  });
  background2 = new _GenericObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
    x: -1,
    y: _images__WEBPACK_IMPORTED_MODULE_3__["default"].background.height - 3,
    image: _images__WEBPACK_IMPORTED_MODULE_3__["default"].background
  });
  hills = new _GenericObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
    x: -1,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_3__["default"].hills.height + 10,
    image: _images__WEBPACK_IMPORTED_MODULE_3__["default"].hills
  });
  genericObjects = [background, background2, hills];
  scrollOffset = 0;
  lastKey = "right";
  platforms = Object(_getPlatforms__WEBPACK_IMPORTED_MODULE_6__["default"])({
    canvas: canvas
  });
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (object) {
    object.update({
      c: c
    });
    object.velocity.x = 0;
  });
  flowers.forEach(function (flower, index) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["objectsTouch"])({
      object1: player,
      object2: flower
    })) {
      player.powerUps.fireFlower = true;
      setTimeout(function () {
        flowers.splice(index, 1);
      }, 0);
    } else {
      flower.update({
        c: c
      });
    }
  });
  platforms.forEach(function (platform) {
    platform.update({
      c: c
    });
    platform.velocity.x = 0;
  });
  goombas.forEach(function (goomba, index) {
    goomba.update({
      c: c
    }); // remove goomba on fireball hit

    particles.filter(function (particle) {
      return particle.fireball;
    }).forEach(function (particle, particleIndex) {
      if (particle.position.x + particle.radius >= goomba.position.x && particle.position.x - particle.radius <= goomba.position.x + goomba.width && particle.position.y + particle.radius >= goomba.position.y && particle.position.y - particle.radius <= goomba.position.y + goomba.height) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["generateExplosion"])({
          particles: particles,
          object: goomba
        });
        setTimeout(function () {
          goombas.splice(index, 1);
          particles.splice(particleIndex, 1);
        }, 0);
      }
    });

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["collisitionTop"])({
      object1: player,
      object2: goomba
    })) {
      player.velocity.y = -20;
      setTimeout(function () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_4__["generateExplosion"])({
          particles: particles,
          object: goomba
        });
        goombas.splice(index, 1);
      }, 0);
    } else if (player.position.x + player.width >= goomba.position.x && player.position.y + player.height >= goomba.position.y && player.position.x <= goomba.position.x + goomba.width && player.position.y <= goomba.position.y + goomba.height) {
      // player hits goomba
      if (player.powerUps.fireFlower) {
        player.invincible = true;
        player.powerUps.fireFlower = false;
        setTimeout(function () {
          player.invincible = false;
        }, 1000);
      }

      if (!player.invincible) {
        init();
      }
    }
  });
  particles.forEach(function (particle, index) {
    particle.update({
      c: c
    });

    if (particle.fireball && (particle.position.x + particle.radius >= canvas.width || particle.position.x - particle.radius <= 0)) {
      setTimeout(function () {
        particles.splice(index, 1);
      }, 0);
    }
  });
  player.update({
    c: c
  });
  var hitSide = false;

  if (keys.right.pressed && player.position.x + player.width < canvas.width / 2) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 200 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0; // scrolling code

    if (keys.right.pressed) {
      for (var i = 0; i < platforms.length; i++) {
        var platform = platforms[i];
        platform.velocity.x = -player.speed;

        if (platform.block && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: platform
        })) {
          platforms.forEach(function (el) {
            el.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset += player.speed;
        genericObjects.forEach(function (object) {
          object.velocity.x = -backgroundSpeed;
        });
        goombas.forEach(function (goomba) {
          goomba.position.x -= player.speed;
        });
        flowers.forEach(function (flower) {
          flower.position.x -= player.speed;
        });
        particles.forEach(function (particle) {
          particle.position.x -= player.speed;
        });
      }
    } else if (keys.left.pressed && scrollOffset > 0) {
      for (var _i = 0; _i < platforms.length; _i++) {
        var _platform = platforms[_i];
        _platform.velocity.x = player.speed;

        if (_platform.block && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: _platform
        })) {
          platforms.forEach(function (el) {
            el.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset -= player.speed;
        genericObjects.forEach(function (object) {
          object.velocity.x = backgroundSpeed;
        });
        goombas.forEach(function (goomba) {
          goomba.position.x += player.speed;
        });
        flowers.forEach(function (flower) {
          flower.position.x += player.speed;
        });
        particles.forEach(function (particle) {
          particle.position.x += player.speed;
        });
      }
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = 0;
    }

    if (platform.block && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hitBottomOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = -player.velocity.y;
    }

    if (platform.block && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.x = 0;
    }

    particles.forEach(function (particle, index) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isCircleOnTopOfPlatform"])({
        object: particle,
        platform: platform
      })) {
        particle.velocity.y = -particle.velocity.y * 0.9;

        if (particle.radius - 0.8 < 0) {
          particles.splice(index, 1);
        } else {
          particle.radius -= 0.8;
        }
      }

      if (particle.ttl < 0) particles.splice(index, 1);
    });
    goombas.forEach(function (goomba) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: goomba,
        platform: platform
      })) {
        goomba.velocity.y = 0;
      }
    });
    flowers.forEach(function (flower) {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: flower,
        platform: platform
      })) {
        flower.velocity.y = 0;
      }
    });
  }); // win condition

  if (_images__WEBPACK_IMPORTED_MODULE_3__["default"].platform && scrollOffset + 100 + player.width > 6968 + 300) {
    console.log('you win');
  }

  if (player.position.y > canvas.height) {
    console.log("You lose");
    init();
  }

  if (player.velocity.y !== 0) return; // sprite switching

  var spriteRunRight;
  var spriteRunLeft;
  var spriteStandRight;
  var spriteStandLeft;

  if (player.powerUps.fireFlower) {
    spriteRunRight = player.sprites.run.fireFlower.right;
    spriteRunLeft = player.sprites.run.fireFlower.left;
    spriteStandRight = player.sprites.stand.fireFlower.right;
    spriteStandLeft = player.sprites.stand.fireFlower.left;
  } else {
    spriteRunRight = player.sprites.run.right;
    spriteRunLeft = player.sprites.run.left;
    spriteStandRight = player.sprites.stand.right;
    spriteStandLeft = player.sprites.stand.left;
  }

  if (keys.right.pressed && lastKey === "right" && player.currentSprite !== spriteRunRight) {
    player.frames = 1;
    player.currentSprite = spriteRunRight;
  } else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== spriteRunLeft) {
    player.currentSprite = spriteRunLeft;
  } else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== spriteStandLeft) {
    player.currentSprite = spriteStandLeft;
  } else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== spriteStandRight) {
    player.currentSprite = spriteStandRight;
  }
}

window.onload = function () {
  init();
  animate();
};

addEventListener("keydown", function (_ref) {
  var code = _ref.code;

  switch (code) {
    case "ArrowLeft":
    case "KeyA":
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case "ArrowRight":
    case "KeyD":
      keys.right.pressed = true;
      lastKey = "right";
      break;

    case "ArrowUp":
    case "Space":
    case "KeyW":
      if (player.velocity.y === 0) {
        player.velocity.y = -player.jumpVelocity;
      }

      var spriteJumpRight;
      var spriteJumpLeft;

      if (player.powerUps.fireFlower) {
        spriteJumpRight = player.sprites.jump.fireFlower.right;
        spriteJumpLeft = player.sprites.jump.fireFlower.left;
      } else {
        spriteJumpRight = player.sprites.jump.right;
        spriteJumpLeft = player.sprites.jump.left;
      }

      if (lastKey === "right") {
        player.currentSprite = spriteJumpRight;
      } else {
        player.currentSprite = spriteJumpLeft;
      }

      break;

    case "KeyF":
      if (!player.powerUps.fireFlower) return;
      var velocity = 15;
      if (lastKey === "left") velocity = -velocity;
      particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_7__["default"]({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y + player.height / 2
        },
        velocity: {
          x: velocity,
          y: 0
        },
        radius: 5,
        color: "red",
        fireball: true
      }));
      break;

    default:
  }
});
addEventListener("keyup", function (_ref2) {
  var code = _ref2.code;

  switch (code) {
    case "ArrowLeft":
    case "KeyA":
      keys.left.pressed = false;
      break;

    case "ArrowRight":
    case "KeyD":
      keys.right.pressed = false;
      break;

    case "ArrowUp":
    case "Space":
    case "KeyW":
      break;

    default:
  }
});

/***/ }),

/***/ "./src/js/getFlowers.js":
/*!******************************!*\
  !*** ./src/js/getFlowers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flower */ "./src/js/Flower.js");


var getFlowers = function getFlowers() {
  return [new _Flower__WEBPACK_IMPORTED_MODULE_0__["default"]({
    position: {
      x: 400,
      y: 100
    },
    velocity: {
      x: 0,
      y: 0
    }
  })];
};

/* harmony default export */ __webpack_exports__["default"] = (getFlowers);

/***/ }),

/***/ "./src/js/getGoombas.js":
/*!******************************!*\
  !*** ./src/js/getGoombas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Goomba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Goomba */ "./src/js/Goomba.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/js/images.js");


var goombaWidth = 43.33;

var getGoombas = function getGoombas() {
  return [new _Goomba__WEBPACK_IMPORTED_MODULE_0__["default"]({
    position: {
      x: 908 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.width - goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }), new _Goomba__WEBPACK_IMPORTED_MODULE_0__["default"]({
    position: {
      x: 3249 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.width - goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }), new _Goomba__WEBPACK_IMPORTED_MODULE_0__["default"]({
    position: {
      x: 3249 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.width - goombaWidth - goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }), new _Goomba__WEBPACK_IMPORTED_MODULE_0__["default"]({
    position: {
      x: 3249 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.width - goombaWidth - goombaWidth - goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }), new _Goomba__WEBPACK_IMPORTED_MODULE_0__["default"]({
    position: {
      x: 3249 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.width - goombaWidth - goombaWidth - goombaWidth - goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 400,
      traveled: 0
    }
  }), new _Goomba__WEBPACK_IMPORTED_MODULE_0__["default"]({
    position: {
      x: 5135 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.width / 2 + goombaWidth,
      y: 100
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 100,
      traveled: 0
    }
  }), new _Goomba__WEBPACK_IMPORTED_MODULE_0__["default"]({
    position: {
      x: 6968,
      y: 0
    },
    velocity: {
      x: -0.3,
      y: 0
    },
    distance: {
      limit: 100,
      traveled: 0
    }
  })];
};

/* harmony default export */ __webpack_exports__["default"] = (getGoombas);

/***/ }),

/***/ "./src/js/getPlatforms.js":
/*!********************************!*\
  !*** ./src/js/getPlatforms.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenericObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObject */ "./src/js/GenericObject.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/js/images.js");



var getPlatforms = function getPlatforms(_ref) {
  var canvas = _ref.canvas;
  var platforms = [new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 908 + 100,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].platform.height - 300,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].blockTri,
    block: true
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 908 + 100 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].block.width,
    y: 100,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].block,
    block: true
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 1991 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.width - _images__WEBPACK_IMPORTED_MODULE_1__["default"].tPlatform.width,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].tPlatform.height,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].tPlatform,
    block: false
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 1991 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.width - _images__WEBPACK_IMPORTED_MODULE_1__["default"].tPlatform.width - 100,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].tPlatform.height + _images__WEBPACK_IMPORTED_MODULE_1__["default"].block.height,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].block,
    block: true
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 5712 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.width + 175,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.height,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].block,
    block: true,
    text: 5712 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.width + 175
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 6116 + 175,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.height,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].block,
    block: true
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 6116 + 175 * 2,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.height,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].block,
    block: true
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 6116 + 175 * 3,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.height - 100,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].block,
    block: true
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 6116 + 175 * 4,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.height - 200,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].blockTri,
    block: true
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 6116 + 175 * 4 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].blockTri.width,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.height - 200,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].blockTri,
    block: true,
    text: 6116 + 175 * 4 + _images__WEBPACK_IMPORTED_MODULE_1__["default"].blockTri.width
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 6968 + 300,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.height,
    image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform,
    block: true,
    text: 6968 + 300
  })];
  var platformsMap = ['lg', 'lg', 'gap', 'lg', 'gap', 'gap', 'lg', 'gap', 't', 'gap', 'xt', 'gap', 'xt', 'gap', 'gap', 'xt'];
  var platformDistance = 0;
  platformsMap.forEach(function (symbol) {
    switch (symbol) {
      case 'lg':
        platforms.push(new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
          x: platformDistance,
          y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.height,
          image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform,
          block: true,
          text: platformDistance
        }));
        platformDistance += _images__WEBPACK_IMPORTED_MODULE_1__["default"].lgPlatform.width - 2;
        break;

      case 'gap':
        platformDistance += 175;
        break;

      case 't':
        platforms.push(new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
          x: platformDistance,
          y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].tPlatform.height,
          image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].tPlatform,
          block: true
        }));
        platformDistance += _images__WEBPACK_IMPORTED_MODULE_1__["default"].tPlatform.width - 2;
        break;

      case 'xt':
        platforms.push(new _GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]({
          x: platformDistance,
          y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.height,
          image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform,
          block: true,
          text: platformDistance
        }));
        platformDistance += _images__WEBPACK_IMPORTED_MODULE_1__["default"].xtPlatform.width - 2;
        break;
    }
  });
  return platforms;
};

/* harmony default export */ __webpack_exports__["default"] = (getPlatforms);

/***/ }),

/***/ "./src/js/images.js":
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_spriteMarioRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteMarioRunLeft.png */ "./src/img/spriteMarioRunLeft.png");
/* harmony import */ var _img_spriteMarioRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteMarioRunRight.png */ "./src/img/spriteMarioRunRight.png");
/* harmony import */ var _img_spriteMarioStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteMarioStandLeft.png */ "./src/img/spriteMarioStandLeft.png");
/* harmony import */ var _img_spriteMarioStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteMarioStandRight.png */ "./src/img/spriteMarioStandRight.png");
/* harmony import */ var _img_spriteMarioJumpLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/spriteMarioJumpLeft.png */ "./src/img/spriteMarioJumpLeft.png");
/* harmony import */ var _img_spriteMarioJumpRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/spriteMarioJumpRight.png */ "./src/img/spriteMarioJumpRight.png");
/* harmony import */ var _img_spriteFireFlowerRunRight_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/spriteFireFlowerRunRight.png */ "./src/img/spriteFireFlowerRunRight.png");
/* harmony import */ var _img_spriteFireFlowerRunLeft_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/spriteFireFlowerRunLeft.png */ "./src/img/spriteFireFlowerRunLeft.png");
/* harmony import */ var _img_spriteFireFlowerStandRight_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/spriteFireFlowerStandRight.png */ "./src/img/spriteFireFlowerStandRight.png");
/* harmony import */ var _img_spriteFireFlowerStandLeft_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/spriteFireFlowerStandLeft.png */ "./src/img/spriteFireFlowerStandLeft.png");
/* harmony import */ var _img_spriteFireFlowerJumpRight_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/spriteFireFlowerJumpRight.png */ "./src/img/spriteFireFlowerJumpRight.png");
/* harmony import */ var _img_spriteFireFlowerJumpLeft_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/spriteFireFlowerJumpLeft.png */ "./src/img/spriteFireFlowerJumpLeft.png");
/* harmony import */ var _img_blocks_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/blocks.png */ "./src/img/blocks.png");
/* harmony import */ var _img_spriteGoomba_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/spriteGoomba.png */ "./src/img/spriteGoomba.png");
/* harmony import */ var _img_block_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/block.png */ "./src/img/block.png");
/* harmony import */ var _img_blockTri_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/blockTri.png */ "./src/img/blockTri.png");
/* harmony import */ var _img_spriteFireFlower_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/spriteFireFlower.png */ "./src/img/spriteFireFlower.png");
/* harmony import */ var _img_lgPlatform_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/lgPlatform.png */ "./src/img/lgPlatform.png");
/* harmony import */ var _img_tPlatform_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/tPlatform.png */ "./src/img/tPlatform.png");
/* harmony import */ var _img_xtPlatform_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/xtPlatform.png */ "./src/img/xtPlatform.png");
























/* harmony default export */ __webpack_exports__["default"] = ({
  platform: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
  hills: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
  background: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
  spriteMarioRunLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteMarioRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
  spriteMarioRunRight: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteMarioRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
  spriteMarioStandLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteMarioStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
  spriteMarioStandRight: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteMarioStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
  spriteMarioJumpLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteMarioJumpLeft_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
  spriteMarioJumpRight: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteMarioJumpRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
  spriteFireFlowerRunLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteFireFlowerRunLeft_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
  spriteFireFlowerRunRight: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteFireFlowerRunRight_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
  spriteFireFlowerStandLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteFireFlowerStandLeft_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
  spriteFireFlowerStandRight: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteFireFlowerStandRight_png__WEBPACK_IMPORTED_MODULE_12__["default"]),
  spriteFireFlowerJumpLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteFireFlowerJumpLeft_png__WEBPACK_IMPORTED_MODULE_15__["default"]),
  spriteFireFlowerJumpRight: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteFireFlowerJumpRight_png__WEBPACK_IMPORTED_MODULE_14__["default"]),
  blocks: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_blocks_png__WEBPACK_IMPORTED_MODULE_16__["default"]),
  goomba: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteGoomba_png__WEBPACK_IMPORTED_MODULE_17__["default"]),
  block: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_block_png__WEBPACK_IMPORTED_MODULE_18__["default"]),
  blockTri: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_blockTri_png__WEBPACK_IMPORTED_MODULE_19__["default"]),
  flower: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteFireFlower_png__WEBPACK_IMPORTED_MODULE_20__["default"]),
  lgPlatform: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_lgPlatform_png__WEBPACK_IMPORTED_MODULE_21__["default"]),
  tPlatform: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_tPlatform_png__WEBPACK_IMPORTED_MODULE_22__["default"]),
  xtPlatform: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_xtPlatform_png__WEBPACK_IMPORTED_MODULE_23__["default"])
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./Particle */ "./src/js/Particle.js"),
    Particle = _require["default"];

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

function isOnTopOfPlatform(_ref) {
  var object = _ref.object,
      platform = _ref.platform;
  return object.position.y + object.height <= platform.position.y && object.position.y + object.height + object.velocity.y >= platform.position.y && object.position.x + object.width > platform.position.x && object.position.x < platform.position.x + platform.width;
}

function isCircleOnTopOfPlatform(_ref2) {
  var object = _ref2.object,
      platform = _ref2.platform;
  return object.position.y + object.radius <= platform.position.y && object.position.y + object.radius + object.velocity.y >= platform.position.y && object.position.x + object.radius > platform.position.x && object.position.x < platform.position.x + platform.width;
}

function collisitionTop(_ref3) {
  var object1 = _ref3.object1,
      object2 = _ref3.object2;
  return object1.position.y + object1.height <= object2.position.y && object1.position.y + object1.height + object1.velocity.y >= object2.position.y && object1.position.x + object1.width > object2.position.x && object1.position.x < object2.position.x + object2.width;
}

function hitBottomOfPlatform(_ref4) {
  var object = _ref4.object,
      platform = _ref4.platform;
  return object.position.y <= platform.position.y + platform.height && object.position.y - object.velocity.y >= platform.position.y + platform.height && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}

function hitSideOfPlatform(_ref5) {
  var object = _ref5.object,
      platform = _ref5.platform;
  return object.position.x + object.width - object.velocity.x - platform.velocity.x >= platform.position.x && object.position.x + object.velocity.x <= platform.position.x + platform.width && object.position.y <= platform.position.y + platform.height && object.position.y + object.height >= platform.position.y;
}

function objectsTouch(_ref6) {
  var object1 = _ref6.object1,
      object2 = _ref6.object2;
  return object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width && object1.position.y + object1.height >= object2.position.y && object1.position.y <= object2.position.y + object2.height;
}

function generateExplosion(_ref7) {
  var particles = _ref7.particles,
      object = _ref7.object;

  for (var i = 0; i < 50; i++) {
    particles.push(new Particle({
      position: {
        x: object.position.x + object.width / 2,
        y: object.position.y + object.height / 2
      },
      velocity: {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 7
      },
      radius: Math.random() * 3
    }));
  }
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  createImage: createImage,
  isOnTopOfPlatform: isOnTopOfPlatform,
  isCircleOnTopOfPlatform: isCircleOnTopOfPlatform,
  collisitionTop: collisitionTop,
  hitBottomOfPlatform: hitBottomOfPlatform,
  hitSideOfPlatform: hitSideOfPlatform,
  objectsTouch: objectsTouch,
  generateExplosion: generateExplosion
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map