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
    }, "+ ", e.score), __jsx("img", {
      src: "/images/get-it-face.png",
      className: "jsx-4244545700",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-4244545700" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: "/images/dont-get-it-face.png",
      className: "jsx-4244545700",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4244545700",
    __self: this
  }, ".explanation.jsx-4244545700{border-bottom:1px solid #ddd;margin-bottom:20px;}.explanation.jsx-4244545700:last-child{border:none;}.attributionAvatar.jsx-4244545700{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-4244545700{display:inline-block;margin-left:10px;}.explanationMeat.jsx-4244545700{padding-bottom:10px;}.explanationActionBar.jsx-4244545700{padding-top:75px;}.explanationAction.jsx-4244545700{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationAction.jsx-4244545700:nth-of-type(2){margin-left:35px;}.explanationAction.jsx-4244545700 img.jsx-4244545700{display:inline-block;width:50px;position:relative;top:5px;margin-right:5px;}.explanationAction.jsx-4244545700 p.jsx-4244545700{display:inline-block;}.speech-bubble.jsx-4244545700{position:relative;background:#e8e8e8;border-radius:.4em;padding:10px;z-index:1;bottom:75px;right:15px;}.speech-bubble.jsx-4244545700:after{content:'';position:absolute;bottom:10px;left:20%;width:0;height:0;border:28px solid transparent;border-top-color:#e8e8e8;border-bottom:0;border-left:0;margin-left:-19px;margin-bottom:-28px;}.score.jsx-4244545700{margin-right:10px;color:#bbb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFHd0MsQUFJakIsQUFHRCxBQU9VLEFBSUQsQUFHSCxBQUdJLEFBSUosQUFHSSxBQU9BLEFBWUgsQUFVUCxBQWNPLFdBbEVDLEFBcURELENBeERwQixLQWlCQSxBQU9BLENBc0JvQixBQXdCUCxFQXhEYixDQUptQixBQVVGLEFBT0osQUFPYixRQXRDcUIsQUE2RFAsQUFjZCxDQW5FdUIsRUF3QkgsS0FtQkEsQ0FwQ3BCLEdBK0NXLE9BN0RYLEVBZ0NVLEFBOEJBLENBdERVLEtBMkNMLEVBbEJJLEFBOEJSLEdBdkNYLE1Bd0NnQyxFQXZEdEIsQUEyQ0UsTUFsQlosRUF4QkEsRUEyQ2MsWUFDRCxNQVdjLEtBVjNCLG9CQVdrQixnQkFDRixjQUNJLGtCQUNFLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRXhwbGFuYXRpb25zU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5cbmZ1bmN0aW9uIEV4cGxhbmF0aW9uc1NlY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uc1NlY3Rpb25cIj5cbiAgICAge1xuICAgICAgIHByb3BzLmV4cGxhbmF0aW9ucy5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uXCIgaWQ9e2BleHBsYW5hdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+e2UuYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uTWVhdFwiPlxuICAgICAgICAgICAgICAge3BhcnNlKGUuZXhwbGFuYXRpb24pfVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25CYXJcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAge2Uuc2NvcmUgPiAwICYmIDxwIGNsYXNzTmFtZT1cInNjb3JlXCI+KyB7ZS5zY29yZX08L3A+fVxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ2V0LWl0LWZhY2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvblwiPlxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZG9udC1nZXQtaXQtZmFjZS5wbmdcIi8+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICApXG4gICAgICAgfSlcbiAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZXhwbGFuYXRpb24ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbk1lYXQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJhciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDc1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdHJhbnNpdGlvbjowLjNzO1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb24gcCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC8qLmV4cGxhbmF0aW9uQWN0aW9uOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uOmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxuICAgICAgICB9Ki9cbiAgICAgICAgLnNwZWVjaC1idWJibGUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXHRiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgICAgICBcdGJvcmRlci1yYWRpdXM6IC40ZW07XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGJvdHRvbTogNzVweDtcbiAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zcGVlY2gtYnViYmxlOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIGxlZnQ6IDIwJTtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgYm9yZGVyOiAyOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNlOGU4ZTg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTI4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICNiYmI7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhbmF0aW9uc1NlY3Rpb25cbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=explainthis.js.62490ccbba3615be9feb.hot-update.js.map