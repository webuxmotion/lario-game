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

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/Block.js":
/*!*************************!*\
  !*** ./src/js/Block.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GenericObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenericObject */ "./src/js/GenericObject.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/js/images.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Block = /*#__PURE__*/function (_GenericObject) {
  _inherits(Block, _GenericObject);

  var _super = _createSuper(Block);

  function Block(params) {
    var _this;

    _classCallCheck(this, Block);

    _this = _super.call(this, _objectSpread({
      image: _images__WEBPACK_IMPORTED_MODULE_1__["default"].blocks
    }, params));
    _this.width = 78;
    _this.height = 79;
    return _this;
  }

  _createClass(Block, [{
    key: "draw",
    value: function draw(_ref) {
      var c = _ref.c;
      c.drawImage(this.image, 183, 17, 78, 79, this.position.x, this.position.y, 78, 79);
    }
  }]);

  return Block;
}(_GenericObject__WEBPACK_IMPORTED_MODULE_0__["default"]);

Block.sizes = {
  width: 78,
  height: 79
};
/* harmony default export */ __webpack_exports__["default"] = (Block);

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
        image = _ref.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw(_ref2) {
      var c = _ref2.c;
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

/* harmony default export */ __webpack_exports__["default"] = (GenericObject);

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
    this.width = 66;
    this.height = 150;
    this.jumpVelocity = 30;
    this.xVelocityOnPressed = 10;
    this.image = _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteStandRight;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteStandRight,
        left: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteStandLeft,
        cropWidth: 177,
        width: 66
      },
      run: {
        right: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteRunRight,
        left: _images__WEBPACK_IMPORTED_MODULE_1__["default"].spriteRunLeft,
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(c) {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(_ref) {
      var c = _ref.c;
      this.frames++;

      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) {
        this.frames = 0;
      } else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) {
        this.frames = 0;
      }

      this.draw(c);
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
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block */ "./src/js/Block.js");
/* harmony import */ var _GenericObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenericObject */ "./src/js/GenericObject.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ "./src/js/images.js");




var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 1.4;
var xBackgroundVelocityOnPressed = 5;
var lastKey; // ends before platform creation starts
// https://youtu.be/4q2vvZn5aoo?t=2164

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var player = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"]();
var platforms;
var background;
var background2;
var hills;
var genericObjects = [background, background2, hills];
var scrollOffset = 0;

function init() {
  player = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"]();
  platforms = [new _Block__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 400,
    y: 400
  }), new _Block__WEBPACK_IMPORTED_MODULE_0__["default"]({
    x: 400 + _Block__WEBPACK_IMPORTED_MODULE_0__["default"].sizes.width,
    y: 400
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
    x: 0,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform.height,
    image: _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
    x: _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform.width - 3 + 300,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform.height,
    image: _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform
  }), // the last platform
  new _GenericObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
    x: _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform.width * 2 - 3 * 2 + 300,
    y: canvas.height - _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform.height,
    image: _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
    x: 400,
    y: canvas.height - 300,
    image: _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_1__["default"]({
    x: 600,
    y: canvas.height - 600,
    image: _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform
  })];
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
}

var angle = 0;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (object) {
    return object.draw({
      c: c
    });
  });
  platforms.forEach(function (platform) {
    return platform.draw({
      c: c
    });
  });
  player.update({
    c: c,
    canvas: canvas
  });

  if (keys.right.pressed && player.position.x + player.width < canvas.width / 2) {
    player.velocity.x = player.xVelocityOnPressed;
  } else if (keys.left.pressed && player.position.x > 200 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.xVelocityOnPressed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.xVelocityOnPressed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.xVelocityOnPressed;
      });
      genericObjects.forEach(function (object) {
        object.position.x -= xBackgroundVelocityOnPressed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.xVelocityOnPressed;
      platforms.forEach(function (platform) {
        platform.position.x += player.xVelocityOnPressed;
      });
      genericObjects.forEach(function (object) {
        object.position.x += xBackgroundVelocityOnPressed;
      });
    }
  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width > platform.position.x && player.position.x < platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  var lastPlatformX = _images__WEBPACK_IMPORTED_MODULE_3__["default"].platform.width * 2 - 3 * 2 + 300;

  if (scrollOffset > lastPlatformX - canvas.width / 2 + 200) {
    console.log("You win");
  }

  if (player.position.y > canvas.height) {
    console.log("You lose");
    init();
  }
}

window.onload = function () {
  init();
  animate();
  console.log(_images__WEBPACK_IMPORTED_MODULE_3__["default"]);
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
      player.velocity.y = -player.jumpVelocity;
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
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_blocks_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/blocks.png */ "./src/img/blocks.png");









/* harmony default export */ __webpack_exports__["default"] = ({
  platform: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
  hills: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
  background: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
  spriteRunLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
  spriteRunRight: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
  spriteStandLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
  spriteStandRight: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
  blocks: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createImage"])(_img_blocks_png__WEBPACK_IMPORTED_MODULE_8__["default"])
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  createImage: createImage
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map