module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppContainer.js":
/*!************************************!*\
  !*** ./components/AppContainer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/AppContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const AppContainerStyle = {
  margin: 20,
  padding: 20,
  maxWidth: 700
};

const AppContainer = props => __jsx("div", {
  style: AppContainerStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Button.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Button() {
  return __jsx("div", {
    className: "jsx-3714603422" + " " + "buttonOuter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3714603422" + " " + "internalButtonContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3714603422",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Contribute Your Own Explanation")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3714603422",
    __self: this
  }, ".buttonOuter.jsx-3714603422{padding:5px;width:328px;height:58px;background-color:#5EECC1;box-shadow:0px 4px 0px #3CC795;border-radius:10px;display:inline-block;color:#000000;font-size:20px;font-weight:600;text-align:center;vertical-align:center;line-height:23px;font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBR3VCLFlBQ0EsWUFDQSxZQUNhLHlCQUNNLCtCQUNaLG1CQUNFLHFCQUNQLGNBQ0MsZUFDQyxnQkFDRSxrQkFDSSxzQkFDTCxpQkFDRixlQUNqQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQnV0dG9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uT3V0ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJuYWxCdXR0b25Db250ZW50XCI+XG4gICAgICAgIDxwPkNvbnRyaWJ1dGUgWW91ciBPd24gRXhwbGFuYXRpb248L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJ1dHRvbk91dGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDMyOHB4O1xuICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUVFQ0MxO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMHB4ICMzQ0M3OTU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Button.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/ExplanationOuterContainer.js":
/*!*************************************************!*\
  !*** ./components/ExplanationOuterContainer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IndividualExplanationContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndividualExplanationContainer */ "./components/IndividualExplanationContainer.js");
/* harmony import */ var _RatingButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingButton */ "./components/RatingButton.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/ExplanationOuterContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ExplanationOuterContainer() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_IndividualExplanationContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_RatingButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "I got it."), __jsx(_RatingButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "I didn't get it."), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Add my own"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationOuterContainer);

/***/ }),

/***/ "./components/IndividualExplanationContainer.js":
/*!******************************************************!*\
  !*** ./components/IndividualExplanationContainer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/IndividualExplanationContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function IndividualExplanationContainer() {
  return __jsx("div", {
    className: "jsx-3283265643" + " " + "explanationContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3283265643" + " " + "explanation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "System behavior that results from the interplay of components and does not depend on the internals of those components."), __jsx("div", {
    className: "jsx-3283265643" + " " + "explanationAttribution",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("img", {
    src: "https://diversityavatars.com/assets/images/avatars-gallery/freebie-v3/batman.png",
    className: "jsx-3283265643" + " " + "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("a", {
    href: "https://twitter.com/thedanigrant",
    target: "_blank",
    className: "jsx-3283265643" + " " + "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "@albert")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3283265643",
    __self: this
  }, ".explanationContainer.jsx-3283265643{border-radius:10;background-color:#F6F6F6;font-size:30px;font-weight:600;box-shadow:0px 4px 4px rgba(0,0,0,0.25);max-width:500px;padding:20px;}p.jsx-3283265643{margin:0;}a.jsx-3283265643{margin:0;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;}.avatar.jsx-3283265643{border-radius:50px;width:25px;height:25px;display:inline-block;position:relative;top:5px;}.username.jsx-3283265643{margin-left:10px;font-size:15px;display:inline-block;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9JbmRpdmlkdWFsRXhwbGFuYXRpb25Db250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLEFBRzRCLEFBU1IsQUFHQSxBQUtVLEFBUUYsU0FmbkIsQUFHZ0IsUUFaVyxBQXlCVixFQVJKLElBSmUsT0FLZCxFQVFTLFVBekJOLEFBa0JNLFdBUUwsSUF6QkEsTUFrQkUsTUFRcEIsSUF6QjZDLFFBa0JuQyxFQVBWLE1BUUEsd0JBbEJrQixnQkFDSCxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9JbmRpdmlkdWFsRXhwbGFuYXRpb25Db250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBJbmRpdmlkdWFsRXhwbGFuYXRpb25Db250YWluZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkNvbnRhaW5lclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25cIj5TeXN0ZW0gYmVoYXZpb3IgdGhhdCByZXN1bHRzIGZyb20gdGhlIGludGVycGxheSBvZiBjb21wb25lbnRzIGFuZCBkb2VzIG5vdCBkZXBlbmQgb24gdGhlIGludGVybmFscyBvZiB0aG9zZSBjb21wb25lbnRzLjwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BdHRyaWJ1dGlvblwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz1cImh0dHBzOi8vZGl2ZXJzaXR5YXZhdGFycy5jb20vYXNzZXRzL2ltYWdlcy9hdmF0YXJzLWdhbGxlcnkvZnJlZWJpZS12My9iYXRtYW4ucG5nXCIgLz5cbiAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVzZXJuYW1lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdGhlZGFuaWdyYW50XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgQGFsYmVydFxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmV4cGxhbmF0aW9uQ29udGFpbmVyIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAudXNlcm5hbWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGl2aWR1YWxFeHBsYW5hdGlvbkNvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/IndividualExplanationContainer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (IndividualExplanationContainer);

/***/ }),

/***/ "./components/RatingButton.js":
/*!************************************!*\
  !*** ./components/RatingButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/RatingButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function RatingButton() {
  return __jsx("div", {
    className: "jsx-4194435043" + " " + "buttonOuter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4194435043" + " " + "internalButtonContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("img", {
    src: "/images/get-it-face.png",
    className: "jsx-4194435043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-4194435043",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "I get this")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4194435043",
    __self: this
  }, ".buttonOuter.jsx-4194435043{padding:10px;width:150px;height:125px;background-color:#B775E0;box-shadow:0px 4px 0px #9F0B37;border-radius:20px;display:inline-block;color:white;font-size:20px;font-weight:600;text-align:center;}.buttonOuter.jsx-4194435043:hover{-webkit-filter:brightness(103%);filter:brightness(103%);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}.buttonOuter.jsx-4194435043:active{-webkit-filter:brightness(105%);filter:brightness(105%);}.internalButtonContent.jsx-4194435043{position:relative;top:10px;}img.jsx-4194435043{width:65px;height:65px;}p.jsx-4194435043{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9SYXRpbmdCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCLEFBR3dCLEFBYVcsQUFLQSxBQUdOLEFBSVAsQUFJRixTQUNYLEVBSmMsRUF6QkEsS0FxQkgsS0FLWCxFQXpCZSxFQXFCZixXQXBCMkIsa0JBV0osQUFLdkIsT0FmaUMsK0JBQ1osbUJBQ0Usa0JBU0csR0FSWixZQUNHLGVBQ0MsZ0JBQ0Usa0JBQ3BCLG9CQUtBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9SYXRpbmdCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBSYXRpbmdCdXR0b24oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25PdXRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcm5hbEJ1dHRvbkNvbnRlbnRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dldC1pdC1mYWNlLnBuZ1wiLz5cbiAgICAgICAgPHA+SSBnZXQgdGhpczwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYnV0dG9uT3V0ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0I3NzVFMDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDBweCAjOUYwQjM3O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbk91dGVyOmhvdmVyIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAzJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uT3V0ZXI6YWN0aXZlIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTA1JSk7XG4gICAgICAgIH1cbiAgICAgICAgLmludGVybmFsQnV0dG9uQ29udGVudCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdCdXR0b25cbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/RatingButton.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (RatingButton);

/***/ }),

/***/ "./pages/explainthis.js":
/*!******************************!*\
  !*** ./pages/explainthis.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ExplanationOuterContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExplanationOuterContainer */ "./components/ExplanationOuterContainer.js");
var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainthis.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function ExplainThis() {
  return __jsx("div", {
    className: "jsx-2286444792",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2286444792",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Emergence"), __jsx("h2", {
    className: "jsx-2286444792",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "We all understand things differently. That\u2019s a feature! Not a bug. ExplainThis collects different explanations of  so you can keep clicking through until you stumble upon one that creates that aha! moment for you. "), __jsx(_components_ExplanationOuterContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1576951228",
    __self: this
  }, "h1.jsx-2286444792{font-weight:bolder;font-size:42px;}h2.jsx-2286444792{font-weight:normal;font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWtCLEFBRzhCLEFBSUEsbUJBSEosQUFJQSxlQUhqQixBQUlBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBFeHBsYW5hdGlvbk91dGVyQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvRXhwbGFuYXRpb25PdXRlckNvbnRhaW5lcic7XG5cbmZ1bmN0aW9uIEV4cGxhaW5UaGlzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8aDE+RW1lcmdlbmNlPC9oMT5cbiAgICAgICAgPGgyPldlIGFsbCB1bmRlcnN0YW5kIHRoaW5ncyBkaWZmZXJlbnRseS4gVGhhdOKAmXMgYSBmZWF0dXJlISBOb3QgYSBidWcuIEV4cGxhaW5UaGlzIGNvbGxlY3RzIGRpZmZlcmVudCBleHBsYW5hdGlvbnMgb2YgIHNvIHlvdSBjYW4ga2VlcCBjbGlja2luZyB0aHJvdWdoIHVudGlsIHlvdSBzdHVtYmxlIHVwb24gb25lIHRoYXQgY3JlYXRlcyB0aGF0IGFoYSEgbW9tZW50IGZvciB5b3UuIDwvaDI+XG4gICAgICAgIDxFeHBsYW5hdGlvbk91dGVyQ29udGFpbmVyPlxuICAgICAgICA8L0V4cGxhbmF0aW9uT3V0ZXJDb250YWluZXI+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICBgfTwvc3R5bGU+XG4gICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgYm9keSB7XG4gICAgICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgIH1cbiAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhaW5UaGlzXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3332962381",
    __self: this
  }, "body{font-family:'IBM Plex Sans',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J3QixBQUdrRCx1Q0FDMUMiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9wYWdlcy9leHBsYWludGhpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBDb250YWluZXInO1xuaW1wb3J0IEV4cGxhbmF0aW9uT3V0ZXJDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9FeHBsYW5hdGlvbk91dGVyQ29udGFpbmVyJztcblxuZnVuY3Rpb24gRXhwbGFpblRoaXMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgIDxoMT5FbWVyZ2VuY2U8L2gxPlxuICAgICAgICA8aDI+V2UgYWxsIHVuZGVyc3RhbmQgdGhpbmdzIGRpZmZlcmVudGx5LiBUaGF04oCZcyBhIGZlYXR1cmUhIE5vdCBhIGJ1Zy4gRXhwbGFpblRoaXMgY29sbGVjdHMgZGlmZmVyZW50IGV4cGxhbmF0aW9ucyBvZiAgc28geW91IGNhbiBrZWVwIGNsaWNraW5nIHRocm91Z2ggdW50aWwgeW91IHN0dW1ibGUgdXBvbiBvbmUgdGhhdCBjcmVhdGVzIHRoYXQgYWhhISBtb21lbnQgZm9yIHlvdS4gPC9oMj5cbiAgICAgICAgPEV4cGxhbmF0aW9uT3V0ZXJDb250YWluZXI+XG4gICAgICAgIDwvRXhwbGFuYXRpb25PdXRlckNvbnRhaW5lcj5cbiAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgIGB9PC9zdHlsZT5cbiAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICBib2R5IHtcbiAgICAgICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgfVxuICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbGFpblRoaXNcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplainThis);

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/explainthis.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danigrant/Projects/explainthis/pages/explainthis.js */"./pages/explainthis.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=explainthis.js.map