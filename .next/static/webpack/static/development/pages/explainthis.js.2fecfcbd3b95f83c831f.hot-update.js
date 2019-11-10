webpackHotUpdate("static/development/pages/explainthis.js",{

/***/ "./components/ExplanationsSection.js":
/*!*******************************************!*\
  !*** ./components/ExplanationsSection.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ExplanationsSection(props) {
  return __jsx("div", {
    className: "jsx-3199990252" + " " + "explanationsSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.explanations.map(function (e, index) {
    return __jsx("div", {
      id: "explanation-".concat(index),
      className: "jsx-3199990252" + " " + "explanation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3199990252" + " " + "attribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
      className: "jsx-3199990252" + " " + "attributionAvatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3199990252" + " " + "attributionUsername",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.author)), __jsx("div", {
      className: "jsx-3199990252" + " " + "explanationMeat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(e.explanation)), __jsx("div", {
      className: "jsx-3199990252" + " " + "explanationActionBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3199990252" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("img", {
      src: "/images/get-it-face.png",
      className: "jsx-3199990252",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3199990252" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Yay this helps! I get it."), e.score > 0 && __jsx("p", {
      className: "jsx-3199990252" + " " + "score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, e.score)), __jsx("div", {
      className: "jsx-3199990252" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "/images/dont-get-it-face.png",
      className: "jsx-3199990252",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3199990252" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Booo, did not help. I do not get it yet."))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3199990252",
    __self: this
  }, ".explanation.jsx-3199990252{border-bottom:1px solid #ddd;margin-bottom:20px;}.explanation.jsx-3199990252:last-child{border:none;}.attributionAvatar.jsx-3199990252{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-3199990252{display:inline-block;margin-left:10px;}.explanationMeat.jsx-3199990252{padding-bottom:10px;}.explanationActionBar.jsx-3199990252{margin-top:25px;}.explanationAction.jsx-3199990252{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationAction.jsx-3199990252:nth-of-type(2){margin-left:35px;}.explanationAction.jsx-3199990252 img.jsx-3199990252{display:inline-block;width:24px;position:relative;top:5px;margin-right:5px;}.explanationAction.jsx-3199990252 p.jsx-3199990252{display:inline-block;}.speech-bubble.jsx-3199990252{position:relative;background:#e8e8e8;border-radius:.4em;padding:10px;z-index:1;bottom:30px;}.speech-bubble.jsx-3199990252:after{content:'';position:absolute;bottom:10px;left:20%;width:0;height:0;border:28px solid transparent;border-top-color:#e8e8e8;border-bottom:0;border-left:0;margin-left:-19px;margin-bottom:-28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHd0MsQUFJakIsQUFHRCxBQU9VLEFBSUQsQUFHSixBQUdLLEFBSUosQUFHSSxBQU9BLEFBWUgsQUFTUCxXQW5EUSxBQW9ERCxDQXZEcEIsSUFpQkEsQ0FPQSxDQXNCb0IsRUFoQ3BCLENBSm1CLEFBVUYsQUFPSixBQU9iLFFBdENxQixBQTREUCxDQXBEUyxFQXdCSCxLQW1CQSxDQXBDcEIsR0E4Q1csT0E1RFgsRUFnQ1UsQUE2QkEsQ0FyRFUsS0EyQ0wsRUFsQkksQUE2QlIsR0F0Q1gsTUF1Q2dDLEVBdER0QixBQTJDRSxNQWxCWixFQXhCQSxFQTJDYyxZQUNkLE1BVTJCLHlCQUNULGdCQUNGLGNBQ0ksa0JBQ0Usb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcblxuZnVuY3Rpb24gRXhwbGFuYXRpb25zU2VjdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25zU2VjdGlvblwiPlxuICAgICB7XG4gICAgICAgcHJvcHMuZXhwbGFuYXRpb25zLm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25cIiBpZD17YGV4cGxhbmF0aW9uLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj57ZS5hdXRob3J9PC9wPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25NZWF0XCI+XG4gICAgICAgICAgICAgICB7cGFyc2UoZS5leHBsYW5hdGlvbil9XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvbkJhclwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvblwiPlxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ2V0LWl0LWZhY2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3BlZWNoLWJ1YmJsZVwiPllheSB0aGlzIGhlbHBzISBJIGdldCBpdC48L3A+XG4gICAgICAgICAgICAgICAgIHtlLnNjb3JlID4gMCAmJiA8cCBjbGFzc05hbWU9XCJzY29yZVwiPntlLnNjb3JlfTwvcD59XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2RvbnQtZ2V0LWl0LWZhY2UucG5nXCIvPlxuICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcGVlY2gtYnViYmxlXCI+Qm9vbywgZGlkIG5vdCBoZWxwLiBJIGRvIG5vdCBnZXQgaXQgeWV0LjwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIClcbiAgICAgICB9KVxuICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5leHBsYW5hdGlvbiB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGlvblVzZXJuYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uTWVhdCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQmFyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRyYW5zaXRpb246MC4zcztcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb246bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIHAge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAvKi5leHBsYW5hdGlvbkFjdGlvbjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbjphY3RpdmU6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcbiAgICAgICAgfSovXG4gICAgICAgIC5zcGVlY2gtYnViYmxlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFx0YmFja2dyb3VuZDogI2U4ZThlODtcbiAgICAgICAgXHRib3JkZXItcmFkaXVzOiAuNGVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3BlZWNoLWJ1YmJsZTphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICBsZWZ0OiAyMCU7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIGJvcmRlcjogMjhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjZThlOGU4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xOXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yOHB4O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsYW5hdGlvbnNTZWN0aW9uXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=explainthis.js.2fecfcbd3b95f83c831f.hot-update.js.map