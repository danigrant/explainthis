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
    className: "jsx-2120641282" + " " + "explanationsSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.explanations.map(function (e, index) {
    return __jsx("div", {
      id: "explanation-".concat(index),
      className: "jsx-2120641282" + " " + "explanation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2120641282" + " " + "attribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
      className: "jsx-2120641282" + " " + "attributionAvatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2120641282" + " " + "attributionUsername",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.author)), __jsx("div", {
      className: "jsx-2120641282" + " " + "explanationMeat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(e.explanation)), __jsx("div", {
      className: "jsx-2120641282" + " " + "explanationActionBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2120641282" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("img", {
      src: "/images/get-it-face.png",
      className: "jsx-2120641282",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2120641282" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Yay this helps! I get it."), e.score > 0 && __jsx("p", {
      className: "jsx-2120641282" + " " + "score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, e.score)), __jsx("div", {
      className: "jsx-2120641282" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "/images/dont-get-it-face.png",
      className: "jsx-2120641282",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2120641282" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Booo, did not help. I do not get it yet."))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2120641282",
    __self: this
  }, ".explanation.jsx-2120641282{border-bottom:1px solid #ddd;margin-bottom:20px;}.explanation.jsx-2120641282:last-child{border:none;}.attributionAvatar.jsx-2120641282{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-2120641282{display:inline-block;margin-left:10px;}.explanationMeat.jsx-2120641282{padding-bottom:10px;}.explanationAction.jsx-2120641282{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationAction.jsx-2120641282:nth-of-type(2){margin-left:35px;}.explanationAction.jsx-2120641282 img.jsx-2120641282{display:inline-block;width:24px;position:relative;top:5px;margin-right:5px;}.explanationAction.jsx-2120641282 p.jsx-2120641282{display:inline-block;}.speech-bubble.jsx-2120641282:hover{position:relative;background:#e8e8e8;border-radius:.4em;padding:10px;z-index:1;bottom:30px;}.speech-bubble.jsx-2120641282:hover.jsx-2120641282:after{content:'';position:absolute;bottom:0;left:50%;width:0;height:0;border:9px solid transparent;border-top-color:#e8e8e8;border-bottom:0;border-left:0;margin-left:-4.5px;margin-bottom:-9px;bottom:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHd0MsQUFJakIsQUFHRCxBQU9VLEFBSUQsQUFHQyxBQUlKLEFBR0ksQUFPQSxBQVlILEFBU1AsV0FoRFEsQUFpREYsQ0FwRG5CLEtBcUJBLENBc0JvQixFQTdCcEIsQ0FKbUIsQUFPRixBQU9KLEFBT2IsUUFuQ3FCLEFBeURYLENBakRhLEVBcUJILEtBbUJBLENBakNwQixBQTJDVSxTQUNELENBMURULEVBNkJVLENBckJVLElBbURWLENBWEssRUFsQkksR0FUbkIsR0F1QzhCLEtBbkRwQixBQXdDRSxNQWxCWixFQXJCQSxFQXdDYyxZQUNkLEVBVTBCLHlCQUNULGdCQUNGLGNBQ0ssbUJBQ0EsbUJBQ04sWUFDZCIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRXhwbGFuYXRpb25zU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5cbmZ1bmN0aW9uIEV4cGxhbmF0aW9uc1NlY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uc1NlY3Rpb25cIj5cbiAgICAge1xuICAgICAgIHByb3BzLmV4cGxhbmF0aW9ucy5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uXCIgaWQ9e2BleHBsYW5hdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+e2UuYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uTWVhdFwiPlxuICAgICAgICAgICAgICAge3BhcnNlKGUuZXhwbGFuYXRpb24pfVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25CYXJcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dldC1pdC1mYWNlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwZWVjaC1idWJibGVcIj5ZYXkgdGhpcyBoZWxwcyEgSSBnZXQgaXQuPC9wPlxuICAgICAgICAgICAgICAgICB7ZS5zY29yZSA+IDAgJiYgPHAgY2xhc3NOYW1lPVwic2NvcmVcIj57ZS5zY29yZX08L3A+fVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kb250LWdldC1pdC1mYWNlLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3BlZWNoLWJ1YmJsZVwiPkJvb28sIGRpZCBub3QgaGVscC4gSSBkbyBub3QgZ2V0IGl0IHlldC48L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICApXG4gICAgICAgfSlcbiAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZXhwbGFuYXRpb24ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbk1lYXQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRyYW5zaXRpb246MC4zcztcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb246bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIHAge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAvKi5leHBsYW5hdGlvbkFjdGlvbjpob3ZlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbjphY3RpdmU6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcbiAgICAgICAgfSovXG4gICAgICAgIC5zcGVlY2gtYnViYmxlOmhvdmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFx0YmFja2dyb3VuZDogI2U4ZThlODtcbiAgICAgICAgXHRib3JkZXItcmFkaXVzOiAuNGVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3BlZWNoLWJ1YmJsZTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIFx0cG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBcdGJvdHRvbTogMDtcbiAgICAgICAgXHRsZWZ0OiA1MCU7XG4gICAgICAgIFx0d2lkdGg6IDA7XG4gICAgICAgIFx0aGVpZ2h0OiAwO1xuICAgICAgICBcdGJvcmRlcjogOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBcdGJvcmRlci10b3AtY29sb3I6ICNlOGU4ZTg7XG4gICAgICAgIFx0Ym9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgXHRib3JkZXItbGVmdDogMDtcbiAgICAgICAgXHRtYXJnaW4tbGVmdDogLTQuNXB4O1xuICAgICAgICBcdG1hcmdpbi1ib3R0b206IC05cHg7XG4gICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsYW5hdGlvbnNTZWN0aW9uXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=explainthis.js.ac6c7941c0b348a232c1.hot-update.js.map