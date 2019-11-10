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
    className: "jsx-4244545700" + " " + "explanationsSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.explanations.map(function (e, index) {
    return __jsx("div", {
      id: "explanation-".concat(index),
      className: "jsx-4244545700" + " " + "explanation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4244545700" + " " + "attribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
      className: "jsx-4244545700" + " " + "attributionAvatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-4244545700" + " " + "attributionUsername",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.author)), __jsx("div", {
      className: "jsx-4244545700" + " " + "explanationMeat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(e.explanation)), __jsx("div", {
      className: "jsx-4244545700" + " " + "explanationActionBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-4244545700" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, e.score > 0 && __jsx("p", {
      className: "jsx-4244545700" + " " + "score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, e.score), __jsx("img", {
      src: "/images/get-it-face.png",
      className: "jsx-4244545700",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-4244545700" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Yay this helps! I get it.")), __jsx("div", {
      className: "jsx-4244545700" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "/images/dont-get-it-face.png",
      className: "jsx-4244545700",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-4244545700" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Lol. Makes no sense."))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4244545700",
    __self: this
  }, ".explanation.jsx-4244545700{border-bottom:1px solid #ddd;margin-bottom:20px;}.explanation.jsx-4244545700:last-child{border:none;}.attributionAvatar.jsx-4244545700{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-4244545700{display:inline-block;margin-left:10px;}.explanationMeat.jsx-4244545700{padding-bottom:10px;}.explanationActionBar.jsx-4244545700{padding-top:75px;}.explanationAction.jsx-4244545700{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationAction.jsx-4244545700:nth-of-type(2){margin-left:35px;}.explanationAction.jsx-4244545700 img.jsx-4244545700{display:inline-block;width:50px;position:relative;top:5px;margin-right:5px;}.explanationAction.jsx-4244545700 p.jsx-4244545700{display:inline-block;}.speech-bubble.jsx-4244545700{position:relative;background:#e8e8e8;border-radius:.4em;padding:10px;z-index:1;bottom:75px;right:15px;}.speech-bubble.jsx-4244545700:after{content:'';position:absolute;bottom:10px;left:20%;width:0;height:0;border:28px solid transparent;border-top-color:#e8e8e8;border-bottom:0;border-left:0;margin-left:-19px;margin-bottom:-28px;}.score.jsx-4244545700{margin-right:10px;color:#bbb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHd0MsQUFJakIsQUFHRCxBQU9VLEFBSUQsQUFHSCxBQUdJLEFBSUosQUFHSSxBQU9BLEFBWUgsQUFVUCxBQWNPLFdBbEVDLEFBcURELENBeERwQixLQWlCQSxBQU9BLENBc0JvQixBQXdCUCxFQXhEYixDQUptQixBQVVGLEFBT0osQUFPYixRQXRDcUIsQUE2RFAsQUFjZCxDQW5FdUIsRUF3QkgsS0FtQkEsQ0FwQ3BCLEdBK0NXLE9BN0RYLEVBZ0NVLEFBOEJBLENBdERVLEtBMkNMLEVBbEJJLEFBOEJSLEdBdkNYLE1Bd0NnQyxFQXZEdEIsQUEyQ0UsTUFsQlosRUF4QkEsRUEyQ2MsWUFDRCxNQVdjLEtBVjNCLG9CQVdrQixnQkFDRixjQUNJLGtCQUNFLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRXhwbGFuYXRpb25zU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5cbmZ1bmN0aW9uIEV4cGxhbmF0aW9uc1NlY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uc1NlY3Rpb25cIj5cbiAgICAge1xuICAgICAgIHByb3BzLmV4cGxhbmF0aW9ucy5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uXCIgaWQ9e2BleHBsYW5hdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+e2UuYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uTWVhdFwiPlxuICAgICAgICAgICAgICAge3BhcnNlKGUuZXhwbGFuYXRpb24pfVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25CYXJcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAge2Uuc2NvcmUgPiAwICYmIDxwIGNsYXNzTmFtZT1cInNjb3JlXCI+e2Uuc2NvcmV9PC9wPn1cbiAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dldC1pdC1mYWNlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwZWVjaC1idWJibGVcIj5ZYXkgdGhpcyBoZWxwcyEgSSBnZXQgaXQuPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kb250LWdldC1pdC1mYWNlLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3BlZWNoLWJ1YmJsZVwiPkxvbC4gTWFrZXMgbm8gc2Vuc2UuPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgKVxuICAgICAgIH0pXG4gICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmV4cGxhbmF0aW9uIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25NZWF0IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CYXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA3NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRyYW5zaXRpb246MC4zcztcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb246bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIHAge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAvKi5leHBsYW5hdGlvbkFjdGlvbjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbjphY3RpdmU6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcbiAgICAgICAgfSovXG4gICAgICAgIC5zcGVlY2gtYnViYmxlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFx0YmFja2dyb3VuZDogI2U4ZThlODtcbiAgICAgICAgXHRib3JkZXItcmFkaXVzOiAuNGVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3R0b206IDc1cHg7XG4gICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3BlZWNoLWJ1YmJsZTphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICBsZWZ0OiAyMCU7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIGJvcmRlcjogMjhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjZThlOGU4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xOXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjYmJiO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsYW5hdGlvbnNTZWN0aW9uXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=explainthis.js.5bcaccf7db8978d71fd8.hot-update.js.map