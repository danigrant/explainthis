webpackHotUpdate("static/development/pages/explainthis.js",{

/***/ "./mockconceptdata.js":
/*!****************************!*\
  !*** ./mockconceptdata.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var mockdata = [{
  "concept": "emergence",
  "explanations": [{
    "author": "@barackobama",
    "explanation": "whatever the explanation is plus video or something maybe this is html?",
    "datetime": 1573234579251,
    "voteCount": 12,
    "voteLog": [{
      "user": "@barackobama",
      "vote": -1,
      "datetime": 1573234579262
    }]
  }, {
    "author": "@barackobama",
    "explanation": "whatever the explanation is plus video or something maybe this is html?",
    "datetime": 1573234579251,
    "voteCount": 12,
    "voteLog": [{
      "user": "@barackobama",
      "vote": -1,
      "datetime": 1573234579262
    }]
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (mockData);

/***/ }),

/***/ "./pages/explainthis.js":
/*!******************************!*\
  !*** ./pages/explainthis.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ActionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ActionBar */ "./components/ActionBar.js");
/* harmony import */ var _components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ExplanationsSection */ "./components/ExplanationsSection.js");
/* harmony import */ var _mockconceptdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mockconceptdata */ "./mockconceptdata.js");
var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainthis.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function ExplainThis() {
  return __jsx("div", {
    className: "jsx-1519644420",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1519644420" + " " + "explanationHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1519644420",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "What are all the different ways to explain Emergence?"), __jsx("h2", {
    className: "jsx-1519644420",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _mockconceptdata__WEBPACK_IMPORTED_MODULE_6__["default"][0]), __jsx(_components_ActionBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-1519644420",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "2 Explanations")), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1519644420",
    __self: this
  }, ".explanationHeader.jsx-1519644420{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUd3Qyw2QkFDL0IiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9wYWdlcy9leHBsYWludGhpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9BY3Rpb25CYXInXG5pbXBvcnQgRXhwbGFuYXRpb25zU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0V4cGxhbmF0aW9uc1NlY3Rpb24nXG5pbXBvcnQgbW9ja0RhdGEgZnJvbSAnLi4vbW9ja2NvbmNlcHRkYXRhJ1xuXG5mdW5jdGlvbiBFeHBsYWluVGhpcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkhlYWRlclwiPlxuICAgICAgICAgIDxoMT5XaGF0IGFyZSBhbGwgdGhlIGRpZmZlcmVudCB3YXlzIHRvIGV4cGxhaW4gRW1lcmdlbmNlPzwvaDE+XG4gICAgICAgICAgPGgyPnttb2NrRGF0YVswXX08L2gyPlxuICAgICAgICAgIDxBY3Rpb25CYXIgLz5cbiAgICAgICAgICA8cD4yIEV4cGxhbmF0aW9uczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFeHBsYW5hdGlvbnNTZWN0aW9uIC8+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmV4cGxhbmF0aW9uSGVhZGVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgfVxuICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbGFpblRoaXNcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplainThis);

/***/ })

})
//# sourceMappingURL=explainthis.js.a2cf9c14f5e6e4c18a10.hot-update.js.map