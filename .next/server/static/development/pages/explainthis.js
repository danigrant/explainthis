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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/AppContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const AppContainer = props => __jsx("div", {
  className: "jsx-2132939897" + " " + "appContainerStyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2132939897",
  __self: undefined
}, ".appContainerStyle.jsx-2132939897{margin:20;padding:20;width:600px;}@media (max-width:600px){.appContainerStyle.jsx-2132939897{width:90%;margin:0 auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BcHBDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2MsQUFHaUIsQUFNRSxVQUxELEFBTUssV0FMSixHQU1aLFNBTEYiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL0FwcENvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFwcENvbnRhaW5lciA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhcHBDb250YWluZXJTdHlsZVwiPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5hcHBDb250YWluZXJTdHlsZSB7XG4gICAgICBtYXJnaW46IDIwO1xuICAgICAgcGFkZGluZzogMjA7XG4gICAgICB3aWR0aDogNjAwcHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgLmFwcENvbnRhaW5lclN0eWxlIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/AppContainer.js */"));

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

function Button(props) {
  return __jsx("div", {
    className: "jsx-266728752" + " " + "buttonOuter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-266728752" + " " + "internalButtonContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-266728752",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "266728752",
    __self: this
  }, ".buttonOuter.jsx-266728752{padding:5px;width:328px;height:58px;background-color:#5EECC1;box-shadow:0px 4px 0px #3CC795;border-radius:10px;display:inline-block;color:#000000;font-size:20px;font-weight:600;text-align:center;line-height:23px;font-size:18px;}.buttonOuter.jsx-266728752:hover{-webkit-filter:brightness(103%);filter:brightness(103%);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}.buttonOuter.jsx-266728752:active{-webkit-filter:brightness(105%);filter:brightness(105%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBR3VCLEFBZVksQUFLQSxZQW5CWixZQUNBLFlBQ2Esb0JBYUosQUFLdkIsS0FqQmlDLCtCQUNaLG1CQUNFLG9CQVdHLENBVlYsY0FDQyxlQUNDLGdCQUNFLGtCQUNELGlCQUNGLEdBTWpCLFlBTEEiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uT3V0ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJuYWxCdXR0b25Db250ZW50XCI+XG4gICAgICAgIDxwPntwcm9wcy50ZXh0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYnV0dG9uT3V0ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB3aWR0aDogMzI4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1RUVDQzE7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAwcHggIzNDQzc5NTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25PdXRlcjpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMyUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbk91dGVyOmFjdGl2ZSB7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwNSUpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Button.js */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IndividualExplanationContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndividualExplanationContainer */ "./components/IndividualExplanationContainer.js");
/* harmony import */ var _RatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RatingButton */ "./components/RatingButton.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/ExplanationOuterContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function ExplanationOuterContainer() {
  return __jsx("div", {
    className: "jsx-1154330126",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1154330126" + " " + "flexWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_IndividualExplanationContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1154330126" + " " + "ratingButtonContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_RatingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mainColor: "#AB96FF",
    bottomColor: "#A20DE8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("img", {
    src: "/images/dont-get-it-face.png",
    className: "jsx-1154330126" + " " + "internalButtonContentImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1154330126" + " " + "internalButtonContentP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Explain it to me a new way.")), __jsx(_RatingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mainColor: "#B775E0",
    bottomColor: "#9F0B37",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: "/images/get-it-face.png",
    className: "jsx-1154330126" + " " + "internalButtonContentImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1154330126" + " " + "internalButtonContentP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Aha! Yippeee!", __jsx("br", {
    className: "jsx-1154330126",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), "I get it now!"))), __jsx("div", {
    className: "jsx-1154330126" + " " + "ratingButtonContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1154330126" + " " + "contributeButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Contribute Your Own Explanation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1154330126",
    __self: this
  }, ".flexWrapper.jsx-1154330126{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.ratingButtonContainer.jsx-1154330126{margin:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.internalButtonContentImg.jsx-1154330126{width:65px;height:65px;}.internalButtonContentP.jsx-1154330126{margin:0;}.contributeButton.jsx-1154330126{margin-top:20px;text-align:center;}@media (max-width:600px){.flexWrapper.jsx-1154330126{display:inherit;}.ratingButtonContainer.jsx-1154330126{margin:0;margin-top:20px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.contributeButton.jsx-1154330126{margin-top:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbk91dGVyQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHMkIsQUFNSixBQU9ELEFBSUYsQUFHTyxBQUtFLEFBR1AsQUFNTSxTQWhCbkIsQUFXb0IsRUFmTixDQVBDLEdBNEJiLENBbENhLEFBb0JLLEFBS2xCLE9BWEYsRUFla0MsU0FSbEMsb0RBZFMsSUFOQSw2QkFPZSxJQU5PLGlCQTRCUix5REFyQlEsWUFzQjdCLHFDQTVCRiwwRUFPQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRXhwbGFuYXRpb25PdXRlckNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmRpdmlkdWFsRXhwbGFuYXRpb25Db250YWluZXIgZnJvbSAnLi9JbmRpdmlkdWFsRXhwbGFuYXRpb25Db250YWluZXInXG5pbXBvcnQgUmF0aW5nQnV0dG9uIGZyb20gJy4vUmF0aW5nQnV0dG9uJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcblxuZnVuY3Rpb24gRXhwbGFuYXRpb25PdXRlckNvbnRhaW5lcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4V3JhcHBlclwiPlxuICAgICAgICA8SW5kaXZpZHVhbEV4cGxhbmF0aW9uQ29udGFpbmVyPlxuICAgICAgICA8L0luZGl2aWR1YWxFeHBsYW5hdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdCdXR0b25Db250YWluZXJcIj5cbiAgICAgICAgICA8UmF0aW5nQnV0dG9uIG1haW5Db2xvcj1cIiNBQjk2RkZcIiBib3R0b21Db2xvcj1cIiNBMjBERThcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW50ZXJuYWxCdXR0b25Db250ZW50SW1nXCIgc3JjPVwiL2ltYWdlcy9kb250LWdldC1pdC1mYWNlLnBuZ1wiLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImludGVybmFsQnV0dG9uQ29udGVudFBcIj5FeHBsYWluIGl0IHRvIG1lIGEgbmV3IHdheS48L3A+XG4gICAgICAgICAgPC9SYXRpbmdCdXR0b24+XG4gICAgICAgICAgPFJhdGluZ0J1dHRvbiBtYWluQ29sb3I9XCIjQjc3NUUwXCIgYm90dG9tQ29sb3I9XCIjOUYwQjM3XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImludGVybmFsQnV0dG9uQ29udGVudEltZ1wiIHNyYz1cIi9pbWFnZXMvZ2V0LWl0LWZhY2UucG5nXCIvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW50ZXJuYWxCdXR0b25Db250ZW50UFwiPkFoYSEgWWlwcGVlZSE8YnIgLz5JIGdldCBpdCBub3chPC9wPlxuICAgICAgICAgIDwvUmF0aW5nQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdCdXR0b25Db250YWluZXJcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJpYnV0ZUJ1dHRvblwiPlxuICAgICAgICA8QnV0dG9uIHRleHQ9XCJDb250cmlidXRlIFlvdXIgT3duIEV4cGxhbmF0aW9uXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5mbGV4V3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgLnJhdGluZ0J1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIC5pbnRlcm5hbEJ1dHRvbkNvbnRlbnRJbWcge1xuICAgICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgfVxuICAgICAgICAuaW50ZXJuYWxCdXR0b25Db250ZW50UCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cmlidXRlQnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuZmxleFdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJhdGluZ0J1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRyaWJ1dGVCdXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhbmF0aW9uT3V0ZXJDb250YWluZXI7XG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationOuterContainer.js */"));
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
    className: "jsx-4040637390" + " " + "explanationContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4040637390" + " " + "explanation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "System behavior that results from the interplay of components and does not depend on the internals of those components."), __jsx("div", {
    className: "jsx-4040637390" + " " + "explanationAttribution",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("img", {
    src: "https://diversityavatars.com/assets/images/avatars-gallery/freebie-v3/batman.png",
    className: "jsx-4040637390" + " " + "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("a", {
    href: "https://twitter.com/thedanigrant",
    target: "_blank",
    className: "jsx-4040637390" + " " + "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "@albert")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4040637390",
    __self: this
  }, ".explanationContainer.jsx-4040637390{border-radius:10px;background-color:#F6F6F6;font-size:30px;font-weight:600;box-shadow:0px 4px 4px rgba(0,0,0,0.25);max-width:500px;padding:20px;position:relative;height:300px;}p.jsx-4040637390{margin:0;}a.jsx-4040637390{margin:0;color:inherit;-webkit-text-decoration:underline;text-decoration:underline;}.explanationAttribution.jsx-4040637390{position:absolute;bottom:10px;}.avatar.jsx-4040637390{border-radius:50px;width:25px;height:25px;display:inline-block;position:relative;top:5px;}.username.jsx-4040637390{margin-left:10px;font-size:15px;display:inline-block;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9JbmRpdmlkdWFsRXhwbGFuYXRpb25Db250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLEFBRzhCLEFBV1YsQUFHQSxBQUtTLEFBSUMsQUFRRixTQW5CbkIsQUFHZ0IsUUFpQkMsQ0FaSCxDQW5CYSxBQXVCZCxJQVJlLE9BSzVCLEFBSWMsRUFRUyxVQVBBLEVBeEJOLFNBZ0NDLE1BL0JBLElBd0JFLE1BUXBCLE1BL0I2QyxNQXdCbkMsRUFYVixNQVlBLDBCQXhCa0IsZ0JBQ0gsYUFDSyxrQkFDTCxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9JbmRpdmlkdWFsRXhwbGFuYXRpb25Db250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBJbmRpdmlkdWFsRXhwbGFuYXRpb25Db250YWluZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkNvbnRhaW5lclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25cIj5TeXN0ZW0gYmVoYXZpb3IgdGhhdCByZXN1bHRzIGZyb20gdGhlIGludGVycGxheSBvZiBjb21wb25lbnRzIGFuZCBkb2VzIG5vdCBkZXBlbmQgb24gdGhlIGludGVybmFscyBvZiB0aG9zZSBjb21wb25lbnRzLjwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BdHRyaWJ1dGlvblwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz1cImh0dHBzOi8vZGl2ZXJzaXR5YXZhdGFycy5jb20vYXNzZXRzL2ltYWdlcy9hdmF0YXJzLWdhbGxlcnkvZnJlZWJpZS12My9iYXRtYW4ucG5nXCIgLz5cbiAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVzZXJuYW1lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdGhlZGFuaWdyYW50XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgQGFsYmVydFxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmV4cGxhbmF0aW9uQ29udGFpbmVyIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC51c2VybmFtZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kaXZpZHVhbEV4cGxhbmF0aW9uQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/IndividualExplanationContainer.js */"));
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

function RatingButton(props) {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4285190413", [props.mainColor, props.bottomColor]]]) + " " + "buttonOuter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4285190413", [props.mainColor, props.bottomColor]]]) + " " + "internalButtonContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4285190413",
    dynamic: [props.mainColor, props.bottomColor],
    __self: this
  }, `.buttonOuter.__jsx-style-dynamic-selector{padding:10px;width:150px;height:125px;background-color:${props.mainColor};box-shadow:0px 4px 0px ${props.bottomColor};border-radius:20px;display:inline-block;color:white;font-size:20px;font-weight:600;text-align:center;}.buttonOuter.__jsx-style-dynamic-selector:hover{-webkit-filter:brightness(103%);filter:brightness(103%);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;}.buttonOuter.__jsx-style-dynamic-selector:active{-webkit-filter:brightness(105%);filter:brightness(105%);}.internalButtonContent.__jsx-style-dynamic-selector{position:relative;top:5px;}@media (max-width:600px){.buttonOuter.__jsx-style-dynamic-selector{width:130px;height:120px;font-size:18px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9SYXRpbmdCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBR3dCLEFBYVcsQUFLQSxBQUdOLEFBS0osWUFDQyxDQTFCSCxLQXFCSixPQXBCSyxBQTBCSSxDQUxuQixZQXBCZ0QsRUEwQjlDLGdCQWZxQixBQUt2Qiw0QkFmc0QsK0NBVzVCLEtBVkwsbUJBQ0UscUJBQ1QsWUFDRyxlQUNDLFlBT2xCLElBTm9CLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvUmF0aW5nQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gUmF0aW5nQnV0dG9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25PdXRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcm5hbEJ1dHRvbkNvbnRlbnRcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5idXR0b25PdXRlciB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzLm1haW5Db2xvcn07XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAwcHggJHtwcm9wcy5ib3R0b21Db2xvcn07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uT3V0ZXI6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDMlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25PdXRlcjphY3RpdmUge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDUlKTtcbiAgICAgICAgfVxuICAgICAgICAuaW50ZXJuYWxCdXR0b25Db250ZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmJ1dHRvbk91dGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nQnV0dG9uXG4iXX0= */
/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/RatingButton.js */`));
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