module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/explainthis/[id].js": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ActionBar.js":
/*!*********************************!*\
  !*** ./components/ActionBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/ActionBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ActionBar(props) {
  return __jsx("div", {
    className: "jsx-3356444652" + " " + "actionBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    onClick: props.handleAnswerClick,
    className: "jsx-3356444652" + " " + "actionBarItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3356444652" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "edit_rounded"), __jsx("a", {
    title: "Home",
    className: "jsx-3356444652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Add Your Own")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3356444652",
    __self: this
  }, ".actionBarItem.jsx-3356444652{display:inline-block;color:white;background-color:#A3D066;border-radius:20px;padding:5px;padding-right:15px;padding-left:15px;margin-top:10px;}.actionBarItem.jsx-3356444652:nth-of-type(2){margin-left:35px;}i.jsx-3356444652{width:24px;position:relative;top:5px;}a.jsx-3356444652{-webkit-text-decoration:none;text-decoration:none;color:inherit;margin-left:5px;position:relative;bottom:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BY3Rpb25CYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCLEFBR2dDLEFBVUosQUFHTixBQUtVLFdBSkgsTUFIcEIsSUFWYyxRQWNKLElBYmlCLElBYzNCLGFBR2dCLFFBaEJLLE1BaUJILGFBaEJKLEdBaUJNLFNBaEJDLFNBaUJSLFVBaEJPLENBaUJwQixpQkFoQmtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvQWN0aW9uQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZnVuY3Rpb24gQWN0aW9uQmFyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25CYXJcIj5cbiAgICAgIDxkaXYgb25DbGljaz17cHJvcHMuaGFuZGxlQW5zd2VyQ2xpY2t9IGNsYXNzTmFtZT1cImFjdGlvbkJhckl0ZW1cIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lZGl0X3JvdW5kZWQ8L2k+XG4gICAgICAgIDxhIHRpdGxlPVwiSG9tZVwiPkFkZCBZb3VyIE93bjwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYWN0aW9uQmFySXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEMDY2O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbkJhckl0ZW06bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CYXJcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ActionBar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ActionBar);

/***/ }),

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
  className: "jsx-2746069266" + " " + "appContainerStyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "534834455",
  __self: undefined
}, ".appContainerStyle.jsx-2746069266{height:-webkit-fill-available;padding:20px;padding-left:40px;border-radius:30px;background-color:white;height:700px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex:1;-ms-flex:1;flex:1;margin-top:20px;width:130%;background-color:white;}@media (max-width:600px){.appContainerStyle.jsx-2746069266{width:90%;margin:0 auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BcHBDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR2MsQUFHcUMsQUFnQmxCLFVBQ0ksY0FDaEIsTUFqQmEsYUFDSyxrQkFDQyxtQkFDSSx1QkFDVixhQUNBLDBFQUNTLDhFQUNOLHFFQUNULGlDQUNTLGdCQUNMLFdBQ1ksdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BcHBDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcHBDb250YWluZXIgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXBwQ29udGFpbmVyU3R5bGVcIj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAuYXBwQ29udGFpbmVyU3R5bGUge1xuICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICBmbGV4OiAxO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiAxMzAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgLmFwcENvbnRhaW5lclN0eWxlIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgYm9keSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ2MkVGO1xuICAgIH1cbiAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRhaW5lcjtcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/AppContainer.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1550220300",
  __self: undefined
}, "body{background-color:#6462EF;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BcHBDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJxQixBQUdnQyx5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL0FwcENvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFwcENvbnRhaW5lciA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhcHBDb250YWluZXJTdHlsZVwiPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5hcHBDb250YWluZXJTdHlsZSB7XG4gICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiA3MDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgd2lkdGg6IDEzMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAuYXBwQ29udGFpbmVyU3R5bGUge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICBib2R5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDYyRUY7XG4gICAgfVxuICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGFpbmVyO1xuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/AppContainer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./components/Editor.js":
/*!******************************!*\
  !*** ./components/Editor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Firebase */ "./components/Firebase.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Firebase__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-quill */ "react-quill", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-quill */ "react-quill")],
    modules: ['react-quill']
  }
});

class Editor extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {// this.quillRef.getModule('toolbar').addHandler('image', imageHandler);
    // , handlers: { 'image': this.imageHandler }
  }

  handleChange(value) {
    this.setState({
      text: value
    });
  }

  async handleSave() {
    await Object(_Firebase__WEBPACK_IMPORTED_MODULE_3__["saveExplanationToDB"])("emergence", "@barackobama", this.state.text);
    this.setState({
      text: ''
    });
    this.props.handleSubmitAnswer();
  }

  async imageHandler(image) {
    console.log('in image handler');
    let res = await fetch('https://api.imgur.com/3/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}`
      },
      body: `image=${image}`
    });
    let json = await res.json();
    console.log(json);
  }

  render() {
    return __jsx("div", {
      className: "jsx-3774856067" + " " + "wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3774856067" + " " + "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3774856067" + " " + "attribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("img", {
      src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
      className: "jsx-3774856067" + " " + "attributionAvatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3774856067" + " " + "attributionUsername",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "@barackobama")), __jsx("div", {
      onClick: this.handleSave,
      className: "jsx-3774856067" + " " + "submit-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "submit!")), __jsx(ReactQuill, {
      ref: el => this.quillRef = el,
      className: "editor",
      modules: {
        toolbar: ['link', 'image', 'video']
      },
      value: this.state.text,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "533467791",
      __self: this
    }, ".wrapper.jsx-3774856067{border:1px solid #ddd;border-radius:5px;width:550px;margin-top:10px;}.header.jsx-3774856067{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-3774856067{position:relative;top:5px;left:5px;display:inline-block;}.attributionAvatar.jsx-3774856067{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-3774856067{display:inline-block;margin-left:10px;position:relative;bottom:15px;}.editor.jsx-3774856067{padding:5px 20px 5px 20px;border-radius:0 0 5px 5px;}.submit-button.jsx-3774856067{display:inline-block;padding:0.7em 1.4em;margin:0 0.3em 0.3em 0;border-radius:0.15em;box-sizing:border-box;-webkit-text-decoration:none;text-decoration:none;font-family:'Roboto',sans-serif;text-transform:uppercase;font-weight:400;color:#FFFFFF;background-color:#3369ff;box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);text-align:center;position:relative;float:right;top:15px;}.submit-button.jsx-3774856067:active{-webkit-filter:brightness(90%);filter:brightness(90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUdtQyxBQU1ILEFBT0QsQUFNUCxBQUtVLEFBTUssQUFJTixBQWtCRyxXQWhDSixPQU5YLENBUFEsRUFrQkMsQUFVRSxDQWxDRCxJQWNULEFBZ0JpQixJQVZMLEtBYkwsQUFRSyxHQVVILEVBeEJOLENBa0NVLFVBM0JJLEFBYTVCLENBbkJrQixBQTZCbEIsRUFxQkEsRUFwQ0EsQUFVYyxRQVVRLElBakN0QixBQXdCQSxTQWxCK0IsUUE0QlAscUJBM0J4QixDQTRCc0Isa0RBQ1csZ0NBQ1AseUJBQ1QsZ0JBQ0YsY0FDVyx5QkFDNEIscURBQ25DLGtCQUNBLGtCQUNMLFlBQ0gsU0FDWCIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgc2F2ZUV4cGxhbmF0aW9uVG9EQiB9IGZyb20gJy4vRmlyZWJhc2UnXG5cbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2F2ZSA9IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnF1aWxsUmVmLmdldE1vZHVsZSgndG9vbGJhcicpLmFkZEhhbmRsZXIoJ2ltYWdlJywgaW1hZ2VIYW5kbGVyKTtcbiAgICAvLyAsIGhhbmRsZXJzOiB7ICdpbWFnZSc6IHRoaXMuaW1hZ2VIYW5kbGVyIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9KVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlU2F2ZSgpIHtcbiAgICBhd2FpdCBzYXZlRXhwbGFuYXRpb25Ub0RCKFwiZW1lcmdlbmNlXCIsIFwiQGJhcmFja29iYW1hXCIsIHRoaXMuc3RhdGUudGV4dClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdEFuc3dlcigpXG4gIH1cblxuICBhc3luYyBpbWFnZUhhbmRsZXIoaW1hZ2UpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gaW1hZ2UgaGFuZGxlcicpO1xuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvdXBsb2FkJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYENsaWVudC1JRCAke3Byb2Nlc3MuZW52LklNR1VSX0NMSUVOVF9JRH1gXG4gICAgICB9LFxuICAgICAgYm9keTogYGltYWdlPSR7aW1hZ2V9YFxuICAgIH0pXG4gICAgbGV0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfT5zdWJtaXQhPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UmVhY3RRdWlsbCByZWY9eyhlbCkgPT4gdGhpcy5xdWlsbFJlZiA9IGVsfSBjbGFzc05hbWU9XCJlZGl0b3JcIiBtb2R1bGVzPXt7IHRvb2xiYXI6IFsnbGluaycsICdpbWFnZScsICd2aWRlbyddIH19IHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0b3Ige1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOjAuN2VtIDEuNGVtO1xuICAgICAgICAgICAgbWFyZ2luOjAgMC4zZW0gMC4zZW0gMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MC4xNWVtO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzY5ZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93Omluc2V0IDAgLTAuNmVtIDAgLTAuMzVlbSByZ2JhKDAsMCwwLDAuMTcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5xbC10b29sYmFyLnFsLXNub3csIC5xbC1jb250YWluZXIucWwtc25vdyB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xbC10b29sYmFyLnFsLXNub3cge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "233154949",
      __self: this
    }, ".ql-toolbar.ql-snow,.ql-container.ql-snow{border:none;}.ql-toolbar.ql-snow{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0gyQixBQUd5QixBQUdpQixZQUYvQixpQkFHQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgc2F2ZUV4cGxhbmF0aW9uVG9EQiB9IGZyb20gJy4vRmlyZWJhc2UnXG5cbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2F2ZSA9IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnF1aWxsUmVmLmdldE1vZHVsZSgndG9vbGJhcicpLmFkZEhhbmRsZXIoJ2ltYWdlJywgaW1hZ2VIYW5kbGVyKTtcbiAgICAvLyAsIGhhbmRsZXJzOiB7ICdpbWFnZSc6IHRoaXMuaW1hZ2VIYW5kbGVyIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9KVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlU2F2ZSgpIHtcbiAgICBhd2FpdCBzYXZlRXhwbGFuYXRpb25Ub0RCKFwiZW1lcmdlbmNlXCIsIFwiQGJhcmFja29iYW1hXCIsIHRoaXMuc3RhdGUudGV4dClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdEFuc3dlcigpXG4gIH1cblxuICBhc3luYyBpbWFnZUhhbmRsZXIoaW1hZ2UpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gaW1hZ2UgaGFuZGxlcicpO1xuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvdXBsb2FkJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYENsaWVudC1JRCAke3Byb2Nlc3MuZW52LklNR1VSX0NMSUVOVF9JRH1gXG4gICAgICB9LFxuICAgICAgYm9keTogYGltYWdlPSR7aW1hZ2V9YFxuICAgIH0pXG4gICAgbGV0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfT5zdWJtaXQhPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UmVhY3RRdWlsbCByZWY9eyhlbCkgPT4gdGhpcy5xdWlsbFJlZiA9IGVsfSBjbGFzc05hbWU9XCJlZGl0b3JcIiBtb2R1bGVzPXt7IHRvb2xiYXI6IFsnbGluaycsICdpbWFnZScsICd2aWRlbyddIH19IHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0b3Ige1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOjAuN2VtIDEuNGVtO1xuICAgICAgICAgICAgbWFyZ2luOjAgMC4zZW0gMC4zZW0gMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MC4xNWVtO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzY5ZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93Omluc2V0IDAgLTAuNmVtIDAgLTAuMzVlbSByZ2JhKDAsMCwwLDAuMTcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5xbC10b29sYmFyLnFsLXNub3csIC5xbC1jb250YWluZXIucWwtc25vdyB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xbC10b29sYmFyLnFsLXNub3cge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./components/ExplanationsSection.js":
/*!*******************************************!*\
  !*** ./components/ExplanationsSection.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "html-react-parser");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Firebase */ "./components/Firebase.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class ExplanationsSection extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: '@barackobama'
    };
    this.handleVote = this.handleVote.bind(this);
  }

  async handleVote(vote, explanationID) {
    await Object(_Firebase__WEBPACK_IMPORTED_MODULE_3__["addVote"])(vote, this.state.loggedInUser, explanationID);
    await this.props.parentHandleVote();

    if (vote == -1) {
      this.props.incrementExplanation();
    }

    await this.props.handleUdatingDisplayedScores();
  }

  render() {
    {
      if (!this.props.currentExplanation) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, "loading...");
      } else {
        return __jsx("div", {
          className: "jsx-3849444678" + " " + "explanationsSection",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, __jsx("div", {
          key: `explanation-${this.props.currentExplanation.id}`,
          className: "jsx-3849444678" + " " + "explanation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, this.props.profilepage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `/explainthis/${this.props.currentExplanation.concept}`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3849444678" + " " + "link conceptName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, `${this.props.currentExplanation.author} explains ${this.props.currentExplanation.concept}`)), !this.props.profilepage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `/explainer/${this.props.currentExplanation.author}`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3849444678" + " " + "attribution link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, __jsx("img", {
          src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
          className: "jsx-3849444678" + " " + "attributionAvatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-3849444678" + " " + "attributionUsername",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, this.props.currentExplanation.author))), __jsx("div", {
          className: "jsx-3849444678" + " " + "explanationMeat",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(this.props.currentExplanation.explanation)), __jsx("div", {
          className: "jsx-3849444678" + " " + "explanationActionBar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx("div", {
          onClick: () => this.handleVote(1, this.props.currentExplanation.id),
          className: "jsx-3849444678" + " " + "get-it-button explanationActionButton",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, __jsx("img", {
          src: "/images/get-it-cat.png",
          className: "jsx-3849444678",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-3849444678",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "AHA! WOW! YIPPEE! I get it now.")), __jsx("div", {
          onClick: () => this.handleVote(-1, this.props.currentExplanation.id),
          className: "jsx-3849444678" + " " + "dont-get-it-button explanationActionButton",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, __jsx("p", {
          className: "jsx-3849444678",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Nah, explain it to me a different way."), __jsx("img", {
          src: "/images/dont-get-it-cat.png",
          className: "jsx-3849444678",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "3849444678",
          __self: this
        }, ".explanationsSection.jsx-3849444678{position:relative;height:560px;}.explanation.jsx-3849444678{border-bottom:1px solid #ddd;margin-bottom:20px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.explanation.jsx-3849444678:last-child{border:none;}.attributionAvatar.jsx-3849444678{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-3849444678{display:inline-block;margin-left:10px;}.explanationMeat.jsx-3849444678{padding-bottom:5px;font-size:30px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.explanationActionBar.jsx-3849444678{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:20px;text-align:center;color:white;}.explanationActionButton.jsx-3849444678{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationActionButton.jsx-3849444678:nth-of-type(2){margin-left:35px;}.explanationActionButton.jsx-3849444678 img.jsx-3849444678{display:inline-block;width:75px;position:relative;top:25px;z-index:1;}.explanationActionButton.jsx-3849444678 p.jsx-3849444678{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;}.get-it-button.jsx-3849444678 p.jsx-3849444678{background-color:#A3D066;}.get-it-button.jsx-3849444678 img.jsx-3849444678{position:relative;left:26px;}.dont-get-it-button.jsx-3849444678 p.jsx-3849444678{background-color:#6EC3E9;}.dont-get-it-button.jsx-3849444678 img.jsx-3849444678{position:relative;right:26px;}.explanationActionButton.jsx-3849444678:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.score.jsx-3849444678{margin-right:10px;color:#bbb;}.conceptName.jsx-3849444678{font-weight:bold;font-size:24px;}.link.jsx-3849444678{cursor:pointer;}.link.jsx-3849444678:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-3849444678:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEd0IsQUFHbUMsQUFJVyxBQVFqQixBQUdELEFBT1UsQUFJRixBQUtELEFBTUcsQUFJSixBQUdJLEFBT0EsQUFNSSxBQUdQLEFBSU8sQUFHUCxBQUlHLEFBTUgsQUFJRCxBQUlILEFBR1UsQUFHQSxXQTNFTCxDQUhyQixHQXlFQSxFQTVDQSxBQXdDaUIsQ0FqRkYsQUE0REgsQUFPQyxBQVVBLENBbkRJLEVBSkUsQUFlRixBQU9KLEFBT2lCLElBTTlCLEFBT0EsR0FIQSxDQXpEcUIsQUFnRXJCLEFBVUEsQ0E5RHVCLENBZnZCLENBNENvQixBQXFDcEIsRUF2RGMsSUFKZCxVQWxCYyxDQStDTyxDQU5WLENBN0JTLEtBdUVwQixBQUdBLEdBNUNZLENBekNHLENBZ0NmLE9BZVcsQ0FuQ0QsQUE4QlYsRUFqQmlCLElBd0NTLEVBcEQxQixBQW1DQSxTQXRCb0Isa0JBQ04sQ0FMZCxXQU1BLGtCQTNCUyx5QkFpRWlCLFFBaEVGLGdEQWlFUCxlQUNqQixlQWpFQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRXhwbGFuYXRpb25zU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5pbXBvcnQgeyBhZGRWb3RlIH0gZnJvbSAnLi9GaXJlYmFzZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcblxuY2xhc3MgRXhwbGFuYXRpb25zU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvZ2dlZEluVXNlcjogJ0BiYXJhY2tvYmFtYSdcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVWb3RlID0gdGhpcy5oYW5kbGVWb3RlLmJpbmQodGhpcylcbiAgfVxuICBhc3luYyBoYW5kbGVWb3RlKHZvdGUsIGV4cGxhbmF0aW9uSUQpIHtcbiAgICBhd2FpdCBhZGRWb3RlKHZvdGUsIHRoaXMuc3RhdGUubG9nZ2VkSW5Vc2VyLCBleHBsYW5hdGlvbklEKVxuICAgIGF3YWl0IHRoaXMucHJvcHMucGFyZW50SGFuZGxlVm90ZSgpXG4gICAgaWYgKHZvdGUgPT0gLTEpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5jcmVtZW50RXhwbGFuYXRpb24oKVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnByb3BzLmhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXMoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbnNTZWN0aW9uXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvblwiIGtleT17YGV4cGxhbmF0aW9uLSR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uaWR9YH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByb2ZpbGVwYWdlICYmXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9leHBsYWludGhpcy8ke3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmNvbmNlcHR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmsgY29uY2VwdE5hbWVcIj57YCR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uYXV0aG9yfSBleHBsYWlucyAke3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmNvbmNlcHR9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLnByb2ZpbGVwYWdlICYmXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9leHBsYWluZXIvJHt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5hdXRob3J9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uIGxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25Vc2VybmFtZVwiPnt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5hdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uTWVhdFwiPlxuICAgICAgICAgICAgICAgICB7cGFyc2UodGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uZXhwbGFuYXRpb24pfVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uQmFyXCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2V0LWl0LWJ1dHRvbiBleHBsYW5hdGlvbkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVm90ZSgxLCB0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5pZCl9PlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9nZXQtaXQtY2F0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgPHA+QUhBISBXT1chIFlJUFBFRSEgSSBnZXQgaXQgbm93LjwvcD5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9udC1nZXQtaXQtYnV0dG9uIGV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVWb3RlKC0xLCB0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5pZCl9ID5cbiAgICAgICAgICAgICAgICAgICA8cD5OYWgsIGV4cGxhaW4gaXQgdG8gbWUgYSBkaWZmZXJlbnQgd2F5LjwvcD5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZG9udC1nZXQtaXQtY2F0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbnNTZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25NZWF0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQmFyIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjowLjNzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmdldC1pdC1idXR0b24gcCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EzRDA2NjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ2V0LWl0LWJ1dHRvbiBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kb250LWdldC1pdC1idXR0b24gcCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZFQzNFOTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZG9udC1nZXQtaXQtYnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmJiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb25jZXB0TmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbGFuYXRpb25zU2VjdGlvblxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ }),

/***/ "./components/Firebase.js":
/*!********************************!*\
  !*** ./components/Firebase.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var firebase = _interopRequireWildcard(__webpack_require__(/*! firebase */ "firebase"));

const firebaseConfig = {
  apiKey: "AIzaSyBmeHPOy2Uvargw51ygM30ye9-lrpWoEOU",
  authDomain: "explain-this.firebaseapp.com",
  databaseURL: "https://explain-this.firebaseio.com",
  projectId: "explain-this",
  storageBucket: "explain-this.appspot.com",
  messagingSenderId: "145315125752",
  appId: "1:145315125752:web:4e7c3fe717a051b0471e0d",
  measurementId: "G-2HP7D44T1F"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const conceptsRef = db.collection('concepts');
const explanationsRef = db.collection('explanations');
const usersRef = db.collection('users');
const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1); // returns obj with all explanations for one topic, ordered by voteCount

async function getConceptExplanations(concept) {
  let snapshot = await explanationsRef.where('concept', '==', concept).orderBy('score', 'desc').get();
  let data = {
    "concept": concept,
    "explanations": []
  };
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.explanations.push({
      "author": docData.author,
      "datetime": docData.datetime,
      "explanation": docData.explanation,
      "score": docData.score,
      "id": doc.id
    });
  });
  return data;
} // saves explanation to db


async function saveExplanationToDB(concept, author, explanation) {
  let newExplanation = {
    "concept": concept,
    "author": author,
    "datetime": firebase.firestore.Timestamp.now(),
    "explanation": explanation,
    "score": 0,
    "voteLog": []
  };
  explanationsRef.add(newExplanation);
  incrementUserExplanationCount(author);
} // up or down votes an explanation


async function addVote(vote, user, explanationID) {
  let explanationRef = explanationsRef.doc(explanationID);
  let newVote = {
    "datetime": firebase.firestore.Timestamp.now(),
    "user": user,
    "vote": vote
  };
  explanationRef.update({
    voteLog: firebase.firestore.FieldValue.arrayUnion(newVote)
  });

  if (vote > 0) {
    explanationRef.update({
      score: increment
    });
  } else {
    explanationRef.update({
      score: decrement
    });
  }

  updateUserScore(vote, user);
}

async function getAllConcepts() {
  let snapshot = await conceptsRef.get();
  let data = [];
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.push({
      "concept": {
        "id": doc.id,
        "concept": docData.concept
      }
    });
  });
  return data;
}

async function getUsersExplanations(username) {
  let snapshot = await explanationsRef.where('author', '==', username).orderBy('score', 'desc').get();
  let data = {
    "explanations": []
  };
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.explanations.push({
      "concept": docData.concept,
      "datetime": docData.datetime,
      "explanation": docData.explanation,
      "score": docData.score,
      "author": username,
      "id": doc.id
    });
  });
  return data;
} // get specific user id


async function getUserDocID(username) {
  let id = "";
  let snapshot = await usersRef.where('username', '==', username).get();
  await snapshot.forEach(doc => {
    id = doc.id;
  });
  return id;
} // increment/decrement users score by -1 or 1


async function updateUserScore(value, username) {
  let userRef = usersRef.doc((await getUserDocID(username)));

  if (value > 0) {
    userRef.update({
      score: increment
    });
  } else {
    userRef.update({
      score: decrement
    });
  }
} // increment users explanations


async function incrementUserExplanationCount(username) {
  let userRef = usersRef.doc((await getUserDocID(username)));
  userRef.update({
    contributedExplanations: increment
  });
} // get user data aka score and num contributed explanations


async function getUserPoints(username) {
  let data = {};
  let snapshot = await usersRef.where('username', '==', username).get();
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data = {
      "points": docData.score,
      "numContributedExplanations": docData.contributedExplanations
    };
  });
  console.log(data);
  return data;
} // get top 10 users by points


async function getPointsLeaderboard() {
  let data = [];
  let snapshot = await usersRef.orderBy('score', 'desc').orderBy('contributedExplanations', 'desc').limit(10).get();
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.push({
      "username": docData.username,
      "points": docData.score,
      "numContributedExplanations": docData.contributedExplanations,
      "id": doc.id
    });
  });
  return data;
} // get top 10 users by contributed explanations


async function getNumExplanationsLeaderboard() {
  let data = [];
  let snapshot = await usersRef.orderBy('contributedExplanations', 'desc').orderBy('score', 'desc').limit(10).get();
  await snapshot.forEach(doc => {
    let docData = doc.data();
    data.push({
      "username": docData.username,
      "points": docData.score,
      "numContributedExplanations": docData.contributedExplanations,
      "id": doc.id
    });
  });
  return data;
}

const provider = new firebase.auth.TwitterAuthProvider();

async function loginWithTwitter() {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    let token = result.credential.accessToken;
    let secret = result.credential.secret;
    let user = result.user;
  });
}

void async function main() {}();
module.exports = {
  getConceptExplanations,
  saveExplanationToDB,
  addVote,
  getAllConcepts,
  getUsersExplanations,
  getUserPoints,
  getPointsLeaderboard,
  getNumExplanationsLeaderboard,
  loginWithTwitter
};

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MenuContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MenuContainer */ "./components/MenuContainer.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Loading() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "loading...")));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/MenuContainer.js":
/*!*************************************!*\
  !*** ./components/MenuContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/MenuContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MenuContainer() {
  return __jsx("div", {
    className: "jsx-1363016480" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1363016480" + " " + "sizeContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1363016480" + " " + "logo link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: "/images/logo.png",
    className: "jsx-1363016480",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1363016480" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/leaderboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1363016480" + " " + "link menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1363016480" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "emoji_events_rounded"), __jsx("a", {
    title: "Leaderboard",
    className: "jsx-1363016480",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Leaderboard"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/explainer/@barackobama",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1363016480" + " " + "link menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1363016480" + " " + "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "account_circle_rounded"), __jsx("a", {
    title: "Leaderboard",
    className: "jsx-1363016480",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Profile"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1363016480",
    __self: this
  }, ".wrapper.jsx-1363016480{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex:0.2;-ms-flex:0.2;flex:0.2;color:white;margin-top:20px;}i.jsx-1363016480{width:24px;position:relative;top:5px;color:white;margin-right:5px;}a.jsx-1363016480{-webkit-text-decoration:none;text-decoration:none;color:inherit;}a.jsx-1363016480{margin-left:5px;}.logo.jsx-1363016480{display:inline-block;position:relative;margin-top:20px;margin-left:20px;}.logo.jsx-1363016480 img.jsx-1363016480{width:150px;}.menu.jsx-1363016480{display:inline-block;}.menu-item.jsx-1363016480:first-child{margin-top:50px;}.menu-item.jsx-1363016480{margin-left:20px;margin-top:30px;}.avatar.jsx-1363016480{display:inline-block;}.avatar.jsx-1363016480 img.jsx-1363016480{display:inline-block;width:30px;border-radius:50px;position:relative;top:10px;}.link.jsx-1363016480{cursor:pointer;}.link.jsx-1363016480:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-1363016480:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9NZW51Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHd0IsQUFRRixBQU9VLEFBSUwsQUFHSyxBQU1ULEFBR1MsQUFHTCxBQUdDLEFBSUksQUFHQSxBQU9QLEFBR1UsQUFHQSxXQWhETixDQW9CcEIsR0F1QkEsQ0FoQ0EsQUFlQSxDQUdrQixJQWZFLEFBU3BCLEFBVUEsQUFHYSxRQW5DSCxHQW9DVyxDQVByQixJQTVCYyxFQWFJLFVBWkMsQ0FJSCxDQStCSSxJQXRCRCxDQThCbkIsQUFHQSxRQXpDQSxFQUpBLEdBbUNXLEdBdEJYLEVBekJ3QixJQWdEeEIsMEVBL0NrQixxRUFDUCx1Q0FDRyxZQUNJLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvTWVudUNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIE1lbnVDb250YWluZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpemVDb250YWluZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gbGlua1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2xlYWRlcmJvYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmsgbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfZXZlbnRzX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJMZWFkZXJib2FyZFwiPkxlYWRlcmJvYXJkPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwbGFpbmVyL0BiYXJhY2tvYmFtYVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rIG1lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFjY291bnRfY2lyY2xlX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJMZWFkZXJib2FyZFwiPlByb2ZpbGU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICBmbGV4OiAwLjI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaSB7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tZW51IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAubWVudS1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuYXZhdGFyIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAubGluayB7XG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgfVxuICAgICAgICAubGluazphY3RpdmUge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVDb250YWluZXJcblxuLy8gPExpbmsgaHJlZj1cIi9leHBsYWluZXIvQGJhcmFja29iYW1hXCI+XG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyIGxpbmtcIj5cbi8vICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbi8vICAgPC9kaXY+XG4vLyA8L0xpbms+XG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/MenuContainer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MenuContainer); // <Link href="/explainer/@barackobama">
//   <div className="avatar link">
//     <img src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
//   </div>
// </Link>

/***/ }),

/***/ "./components/TopWrapper.js":
/*!**********************************!*\
  !*** ./components/TopWrapper.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/TopWrapper.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const TopWrapper = props => __jsx("div", {
  className: "jsx-1515122273" + " " + "topWrapperStyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1515122273",
  __self: undefined
}, ".topWrapperStyle.jsx-1515122273{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9Ub3BXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdjLEFBR29CLDBFQUNNLHFFQUNKLHlEQUNKLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL1RvcFdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb3BXcmFwcGVyID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRvcFdyYXBwZXJTdHlsZVwiPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPHN0eWxlIGpzeD57YFxuICAgIC50b3BXcmFwcGVyU3R5bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRvcFdyYXBwZXJcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/TopWrapper.js */"));

/* harmony default export */ __webpack_exports__["default"] = (TopWrapper);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/explainthis/[id].js":
/*!***********************************!*\
  !*** ./pages/explainthis/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_TopWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TopWrapper */ "./components/TopWrapper.js");
/* harmony import */ var _components_MenuContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MenuContainer */ "./components/MenuContainer.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ActionBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ActionBar */ "./components/ActionBar.js");
/* harmony import */ var _components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ExplanationsSection */ "./components/ExplanationsSection.js");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Editor */ "./components/Editor.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainthis/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











class ExplainThis extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props); // first thing you always do, calls the master react constructor

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleAnswerClick", () => {
      this.setState({
        showEditor: !this.state.showEditor
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "incrementExplanation", () => {
      let newIndex = this.state.explanationIndex == this.state.data.explanations.length - 1 ? 0 : this.state.explanationIndex + 1;
      this.setState({
        explanationIndex: newIndex
      });
      console.log('in incrementExplanation, new index is', this.state.explanationIndex, 'out of', this.state.data.explanations.length);
    });

    this.state = {
      showEditor: false,
      data: {},
      explanationIndex: 0
    };
    const {
      router
    } = this.props;
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.handleUdatingDisplayedScores = this.handleUdatingDisplayedScores.bind(this);
    this.parentHandleVote = this.parentHandleVote.bind(this);
  }

  async componentWillMount() {
    const {
      router
    } = this.props;
    this.setState({
      data: await Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_10__["getConceptExplanations"])(router.query.id)
    });
  }

  async parentHandleVote() {
    const {
      router
    } = this.props; // this.setState({
    //   data: await getConceptExplanations(router.query.id)
    // })
  }

  async handleSubmitAnswer() {
    const {
      router
    } = this.props;
    this.setState({
      showEditor: !this.state.showEditor,
      data: await Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_10__["getConceptExplanations"])(router.query.id)
    });
  }

  async handleUdatingDisplayedScores() {
    const {
      router
    } = this.props;
    await new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(cb => setTimeout(cb, 500)); // this is extremely silly: i am waiting 500ms for firebase to update otherwise there is a lag and the score looks like it's 1

    this.setState({
      data: await Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_10__["getConceptExplanations"])(router.query.id)
    });
  }

  render() {
    {
      const {
        router
      } = this.props;

      if (!this.state.data.concept) {
        return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          className: "jsx-3425659081",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3425659081" + " " + "explanationHeader",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, __jsx("h1", {
          className: "jsx-3425659081",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "The short, sweet and wonderfully wacky ways to explain ", __jsx("span", {
          className: "jsx-3425659081" + " " + "concept-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, this.state.data.concept)), __jsx("p", {
          className: "jsx-3425659081",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, this.state.data.explanations.length, " Explanations \u2022 Keep clicking through until you find one that, well, clicks."), __jsx(_components_ActionBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
          handleAnswerClick: this.handleAnswerClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }), this.state.showEditor && __jsx(_components_Editor__WEBPACK_IMPORTED_MODULE_9__["default"], {
          handleSubmitAnswer: this.handleSubmitAnswer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
          parentHandleVote: this.parentHandleVote,
          handleUdatingDisplayedScores: this.handleUdatingDisplayedScores,
          incrementExplanation: this.incrementExplanation,
          currentExplanation: this.state.data.explanations[this.state.explanationIndex],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
          id: "3425659081",
          __self: this
        }, ".explanationHeader.jsx-3425659081 h1.jsx-3425659081{margin-bottom:0;}.explanationHeader.jsx-3425659081 p.jsx-3425659081{margin-top:10px;margin-bottom:5px;color:#a9a9a9;}.concept-name.jsx-3425659081{color:#6462EF;}ActionBar.jsx-3425659081{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRjBCLEFBR21DLEFBR0EsQUFLRixBQUdLLGNBRnJCLEVBUkEsQUFHb0IsR0FRcEIsZUFQZ0IsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9wYWdlcy9leHBsYWludGhpcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvcFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ub3BXcmFwcGVyJ1xuaW1wb3J0IE1lbnVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZW51Q29udGFpbmVyJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWN0aW9uQmFyJ1xuaW1wb3J0IEV4cGxhbmF0aW9uc1NlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uJ1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VkaXRvcidcbmltcG9ydCB7IGdldENvbmNlcHRFeHBsYW5hdGlvbnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBFeHBsYWluVGhpcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpIC8vIGZpcnN0IHRoaW5nIHlvdSBhbHdheXMgZG8sIGNhbGxzIHRoZSBtYXN0ZXIgcmVhY3QgY29uc3RydWN0b3JcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0VkaXRvcjogZmFsc2UsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGV4cGxhbmF0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdEFuc3dlciA9IHRoaXMuaGFuZGxlU3VibWl0QW5zd2VyLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXMgPSB0aGlzLmhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXMuYmluZCh0aGlzKVxuICAgIHRoaXMucGFyZW50SGFuZGxlVm90ZSA9IHRoaXMucGFyZW50SGFuZGxlVm90ZS5iaW5kKHRoaXMpXG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBhd2FpdCBnZXRDb25jZXB0RXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZClcbiAgICB9KVxuICB9XG4gIGhhbmRsZUFuc3dlckNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0VkaXRvcjogIXRoaXMuc3RhdGUuc2hvd0VkaXRvclxuICAgIH0pXG4gIH1cbiAgYXN5bmMgcGFyZW50SGFuZGxlVm90ZSgpIHtcbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgZGF0YTogYXdhaXQgZ2V0Q29uY2VwdEV4cGxhbmF0aW9ucyhyb3V0ZXIucXVlcnkuaWQpXG4gICAgLy8gfSlcbiAgfVxuICBpbmNyZW1lbnRFeHBsYW5hdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgbmV3SW5kZXggPSB0aGlzLnN0YXRlLmV4cGxhbmF0aW9uSW5kZXggPT0gdGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9ucy5sZW5ndGggLSAxID8gMCA6IHRoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleCArIDFcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4cGxhbmF0aW9uSW5kZXg6IG5ld0luZGV4XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnaW4gaW5jcmVtZW50RXhwbGFuYXRpb24sIG5ldyBpbmRleCBpcycsIHRoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleCwgJ291dCBvZicsIHRoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnMubGVuZ3RoKTtcbiAgfVxuICBhc3luYyBoYW5kbGVTdWJtaXRBbnN3ZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dFZGl0b3I6ICF0aGlzLnN0YXRlLnNob3dFZGl0b3IsXG4gICAgICBkYXRhOiBhd2FpdCBnZXRDb25jZXB0RXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZClcbiAgICB9KVxuICB9XG4gIGFzeW5jIGhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXMoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShjYiA9PiBzZXRUaW1lb3V0KGNiLCA1MDApKSAvLyB0aGlzIGlzIGV4dHJlbWVseSBzaWxseTogaSBhbSB3YWl0aW5nIDUwMG1zIGZvciBmaXJlYmFzZSB0byB1cGRhdGUgb3RoZXJ3aXNlIHRoZXJlIGlzIGEgbGFnIGFuZCB0aGUgc2NvcmUgbG9va3MgbGlrZSBpdCdzIDFcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IGF3YWl0IGdldENvbmNlcHRFeHBsYW5hdGlvbnMocm91dGVyLnF1ZXJ5LmlkKVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgICAge1xuICAgICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YS5jb25jZXB0KSB7XG4gICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VG9wV3JhcHBlcj5cbiAgICAgICAgICAgICAgPE1lbnVDb250YWluZXIgLz5cbiAgICAgICAgICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+VGhlIHNob3J0LCBzd2VldCBhbmQgd29uZGVyZnVsbHkgd2Fja3kgd2F5cyB0byBleHBsYWluIDxzcGFuIGNsYXNzTmFtZT1cImNvbmNlcHQtbmFtZVwiPnt0aGlzLnN0YXRlLmRhdGEuY29uY2VwdH08L3NwYW4+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnMubGVuZ3RofSBFeHBsYW5hdGlvbnMg4oCiIEtlZXAgY2xpY2tpbmcgdGhyb3VnaCB1bnRpbCB5b3UgZmluZCBvbmUgdGhhdCwgd2VsbCwgY2xpY2tzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkJhciBoYW5kbGVBbnN3ZXJDbGljaz17dGhpcy5oYW5kbGVBbnN3ZXJDbGlja30gLz5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dFZGl0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIGhhbmRsZVN1Ym1pdEFuc3dlcj17dGhpcy5oYW5kbGVTdWJtaXRBbnN3ZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RXhwbGFuYXRpb25zU2VjdGlvbiBwYXJlbnRIYW5kbGVWb3RlPXt0aGlzLnBhcmVudEhhbmRsZVZvdGV9IGhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXM9e3RoaXMuaGFuZGxlVWRhdGluZ0Rpc3BsYXllZFNjb3Jlc30gaW5jcmVtZW50RXhwbGFuYXRpb249e3RoaXMuaW5jcmVtZW50RXhwbGFuYXRpb259IGN1cnJlbnRFeHBsYW5hdGlvbj17dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9uc1t0aGlzLnN0YXRlLmV4cGxhbmF0aW9uSW5kZXhdfSAvPlxuICAgICAgICAgICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L1RvcFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZXhwbGFuYXRpb25IZWFkZXIgaDEge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uSGVhZGVyIHAge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYTlhOWE5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29uY2VwdC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjQ2MkVGO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBBY3Rpb25CYXIge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihFeHBsYWluVGhpcylcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis/[id].js */"));
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(ExplainThis));

/***/ }),

/***/ 4:
/*!*****************************************!*\
  !*** multi ./pages/explainthis/[id].js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danigrant/Projects/explainthis/pages/explainthis/[id].js */"./pages/explainthis/[id].js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-quill":
/*!******************************!*\
  !*** external "react-quill" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-quill");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map