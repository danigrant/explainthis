webpackHotUpdate("static/development/pages/explainthis/[id].js",{

/***/ "./components/AddExplanation.js":
/*!**************************************!*\
  !*** ./components/AddExplanation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Editor */ "./components/Editor.js");
/* harmony import */ var fireworks_lib_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fireworks/lib/react */ "./node_modules/fireworks/lib/react.js");
/* harmony import */ var fireworks_lib_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fireworks_lib_react__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/AddExplanation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var AddExplanation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddExplanation, _React$Component);

  function AddExplanation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddExplanation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AddExplanation).call(this, props));
    _this.state = {
      loggedInUser: '@barackobama',
      concept: 'emergence'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AddExplanation, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-3536747700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.props.celebration && __jsx(fireworks_lib_react__WEBPACK_IMPORTED_MODULE_9__["Fireworks"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fxProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), __jsx("div", {
        onClick: this.props.handleAnswerClick,
        className: "jsx-3536747700" + " " + "closeSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-3536747700" + " " + "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "close_rounded")), __jsx("h1", {
        className: "jsx-3536747700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Hi ", this.state.loggedInUser), __jsx("p", {
        className: "jsx-3536747700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "What do you think is the most fun and delightful way to explain ", __jsx("span", {
        className: "jsx-3536747700" + " " + "concept-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.state.concept), "?"), __jsx(_Editor__WEBPACK_IMPORTED_MODULE_8__["default"], {
        placeholder: "Write something short, sweet and wonderfully wacky that explains ".concat(this.state.concept, "."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3536747700",
        __self: this
      }, ".closeSection.jsx-3536747700{position:relative;float:right;width:30px;}h1.jsx-3536747700{margin-bottom:0;}p.jsx-3536747700{margin-top:10px;margin-bottom:5px;color:#a9a9a9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BZGRFeHBsYW5hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmtCLEFBRzZCLEFBS0YsQUFHQSxnQkFGbEIsQUFHb0IsRUFSTixZQUNELElBUUcsT0FQaEIsT0FRQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvQWRkRXhwbGFuYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yJ1xuaW1wb3J0IHsgRmlyZXdvcmtzIH0gZnJvbSAnZmlyZXdvcmtzL2xpYi9yZWFjdCdcblxuY2xhc3MgQWRkRXhwbGFuYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2dnZWRJblVzZXI6ICdAYmFyYWNrb2JhbWEnLFxuICAgICAgY29uY2VwdDogJ2VtZXJnZW5jZSdcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jZWxlYnJhdGlvbiAmJlxuICAgICAgICAgIDxGaXJld29ya3Mgey4uLmZ4UHJvcHN9IC8+XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUFuc3dlckNsaWNrfSBjbGFzc05hbWU9XCJjbG9zZVNlY3Rpb25cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlX3JvdW5kZWQ8L2k+PC9kaXY+XG4gICAgICAgIDxoMT5IaSB7dGhpcy5zdGF0ZS5sb2dnZWRJblVzZXJ9PC9oMT5cbiAgICAgICAgPHA+V2hhdCBkbyB5b3UgdGhpbmsgaXMgdGhlIG1vc3QgZnVuIGFuZCBkZWxpZ2h0ZnVsIHdheSB0byBleHBsYWluIDxzcGFuIGNsYXNzTmFtZT1cImNvbmNlcHQtbmFtZVwiPnt0aGlzLnN0YXRlLmNvbmNlcHR9PC9zcGFuPj88L3A+XG4gICAgICAgIDxFZGl0b3IgcGxhY2Vob2xkZXI9e2BXcml0ZSBzb21ldGhpbmcgc2hvcnQsIHN3ZWV0IGFuZCB3b25kZXJmdWxseSB3YWNreSB0aGF0IGV4cGxhaW5zICR7dGhpcy5zdGF0ZS5jb25jZXB0fS5gfSAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2xvc2VTZWN0aW9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjYTlhOWE5O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkRXhwbGFuYXRpb25cbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/AddExplanation.js */"));
    }
  }]);

  return AddExplanation;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddExplanation);

/***/ })

})
//# sourceMappingURL=[id].js.f17176a1eab20f89934b.hot-update.js.map