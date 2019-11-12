webpackHotUpdate("static/development/pages/explainthis/[id].js",{

/***/ "./components/AddExplanation.js":
/*!**************************************!*\
  !*** ./components/AddExplanation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Editor */ "./components/Editor.js");





var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/AddExplanation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var AddExplanation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AddExplanation, _React$Component);

  function AddExplanation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddExplanation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddExplanation).call(this, props));
    _this.state = {
      loggedInUser: '@barackobama',
      concept: 'emergence'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddExplanation, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-388674061",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        onClick: this.props.handleAnswerClick,
        className: "jsx-388674061" + " " + "closeSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-388674061" + " " + "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "close_rounded")), __jsx("h1", {
        className: "jsx-388674061",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Hi ", this.state.loggedInUser), __jsx("p", {
        className: "jsx-388674061",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "What do you think is the most fun and delightful way to explain ", __jsx("span", {
        className: "jsx-388674061" + " " + "concept-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.state.concept), "?"), __jsx(_Editor__WEBPACK_IMPORTED_MODULE_7__["default"], {
        placeholder: "Write something short, sweet and wonderfully wacky that explains ".concat(this.state.concept, "."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-388674061" + " " + "buttonBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-388674061" + " " + "submit-button button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Submit"), __jsx("div", {
        className: "jsx-388674061" + " " + "submit-and-tweet-button button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "This is my best work. Submit and tweet.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "388674061",
        __self: this
      }, ".closeSection.jsx-388674061{position:relative;float:right;width:30px;}h1.jsx-388674061{margin-bottom:0;}p.jsx-388674061{margin-top:10px;margin-bottom:5px;color:#a9a9a9;}.button.jsx-388674061{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;color:white;}.submit-button.jsx-388674061{background:#A3D066;margin-right:35px;}.submit-and-tweet-button.jsx-388674061{background:#6EC3E9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BZGRFeHBsYW5hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBRzZCLEFBS0YsQUFHQSxBQUtLLEFBT0YsQUFJQSxnQkFsQnJCLEFBR29CLEVBUk4sQ0FvQk0sQUFJcEIsRUFYOEIsU0FaakIsSUFRRyxHQVloQixJQW5CQSxPQVFBLENBSXFCLG1CQUNWLFNBQ0csWUFDZCIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvQWRkRXhwbGFuYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yJ1xuXG5jbGFzcyBBZGRFeHBsYW5hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvZ2dlZEluVXNlcjogJ0BiYXJhY2tvYmFtYScsXG4gICAgICBjb25jZXB0OiAnZW1lcmdlbmNlJ1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVBbnN3ZXJDbGlja30gY2xhc3NOYW1lPVwiY2xvc2VTZWN0aW9uXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZV9yb3VuZGVkPC9pPjwvZGl2PlxuICAgICAgICA8aDE+SGkge3RoaXMuc3RhdGUubG9nZ2VkSW5Vc2VyfTwvaDE+XG4gICAgICAgIDxwPldoYXQgZG8geW91IHRoaW5rIGlzIHRoZSBtb3N0IGZ1biBhbmQgZGVsaWdodGZ1bCB3YXkgdG8gZXhwbGFpbiA8c3BhbiBjbGFzc05hbWU9XCJjb25jZXB0LW5hbWVcIj57dGhpcy5zdGF0ZS5jb25jZXB0fTwvc3Bhbj4/PC9wPlxuICAgICAgICA8RWRpdG9yIHBsYWNlaG9sZGVyPXtgV3JpdGUgc29tZXRoaW5nIHNob3J0LCBzd2VldCBhbmQgd29uZGVyZnVsbHkgd2Fja3kgdGhhdCBleHBsYWlucyAke3RoaXMuc3RhdGUuY29uY2VwdH0uYH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25CYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b24gYnV0dG9uXCI+U3VibWl0PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYW5kLXR3ZWV0LWJ1dHRvbiBidXR0b25cIj5UaGlzIGlzIG15IGJlc3Qgd29yay4gU3VibWl0IGFuZCB0d2VldC48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jbG9zZVNlY3Rpb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICNhOWE5YTk7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjQTNEMDY2O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzVweDtcbiAgICAgICAgfVxuICAgICAgICAuc3VibWl0LWFuZC10d2VldC1idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM2RUMzRTk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRFeHBsYW5hdGlvblxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/AddExplanation.js */"));
    }
  }]);

  return AddExplanation;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddExplanation);

/***/ })

})
//# sourceMappingURL=[id].js.09bdf70946f3b378c474.hot-update.js.map