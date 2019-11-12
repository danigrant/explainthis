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
        className: "jsx-1818218891",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("div", {
        onClick: this.props.handleAnswerClick,
        className: "jsx-1818218891" + " " + "closeSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-1818218891" + " " + "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "close_rounded")), __jsx("h1", {
        className: "jsx-1818218891",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Hi ", this.state.loggedInUser), __jsx("p", {
        className: "jsx-1818218891",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "What do you think is the most fun and delightful way to explain ", __jsx("span", {
        className: "jsx-1818218891" + " " + "concept-name",
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
        className: "jsx-1818218891" + " " + "buttonBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1818218891" + " " + "submit-button button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Submit"), __jsx("div", {
        className: "jsx-1818218891" + " " + "submit-and-tweet-button button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "This is my best work. Submit and tweet.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1818218891",
        __self: this
      }, ".closeSection.jsx-1818218891{position:relative;float:right;width:30px;}h1.jsx-1818218891{margin-bottom:0;}p.jsx-1818218891{margin-top:10px;margin-bottom:5px;color:#a9a9a9;}.button.jsx-1818218891{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;color:white;}.submit-button.jsx-1818218891{background:#A3D066;}.submit-and-tweet-button.jsx-1818218891{background:#6EC3E9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BZGRFeHBsYW5hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBRzZCLEFBS0YsQUFHQSxBQUtLLEFBT0YsQUFHQSxnQkFqQnJCLEFBR29CLEVBUk4sQ0FvQmQsQUFHQSxFQVY4QixTQVpqQixJQVFHLE9BUGhCLE9BUUEsQ0FJcUIsbUJBQ1YsU0FDRyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BZGRFeHBsYW5hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9FZGl0b3InXG5cbmNsYXNzIEFkZEV4cGxhbmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9nZ2VkSW5Vc2VyOiAnQGJhcmFja29iYW1hJyxcbiAgICAgIGNvbmNlcHQ6ICdlbWVyZ2VuY2UnXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUFuc3dlckNsaWNrfSBjbGFzc05hbWU9XCJjbG9zZVNlY3Rpb25cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlX3JvdW5kZWQ8L2k+PC9kaXY+XG4gICAgICAgIDxoMT5IaSB7dGhpcy5zdGF0ZS5sb2dnZWRJblVzZXJ9PC9oMT5cbiAgICAgICAgPHA+V2hhdCBkbyB5b3UgdGhpbmsgaXMgdGhlIG1vc3QgZnVuIGFuZCBkZWxpZ2h0ZnVsIHdheSB0byBleHBsYWluIDxzcGFuIGNsYXNzTmFtZT1cImNvbmNlcHQtbmFtZVwiPnt0aGlzLnN0YXRlLmNvbmNlcHR9PC9zcGFuPj88L3A+XG4gICAgICAgIDxFZGl0b3IgcGxhY2Vob2xkZXI9e2BXcml0ZSBzb21ldGhpbmcgc2hvcnQsIHN3ZWV0IGFuZCB3b25kZXJmdWxseSB3YWNreSB0aGF0IGV4cGxhaW5zICR7dGhpcy5zdGF0ZS5jb25jZXB0fS5gfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvbiBidXR0b25cIj5TdWJtaXQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1hbmQtdHdlZXQtYnV0dG9uIGJ1dHRvblwiPlRoaXMgaXMgbXkgYmVzdCB3b3JrLiBTdWJtaXQgYW5kIHR3ZWV0LjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNsb3NlU2VjdGlvbiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICBjb2xvcjogI2E5YTlhOTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNBM0QwNjY7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Ym1pdC1hbmQtdHdlZXQtYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNkVDM0U5O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkRXhwbGFuYXRpb25cbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/AddExplanation.js */"));
    }
  }]);

  return AddExplanation;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddExplanation);

/***/ })

})
//# sourceMappingURL=[id].js.3d63345c781defc689ec.hot-update.js.map