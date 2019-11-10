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
    className: "jsx-1947452659" + " " + "explanationsSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.explanations.map(function (e, index) {
    return __jsx("div", {
      id: "explanation-".concat(index),
      className: "jsx-1947452659" + " " + "explanation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1947452659" + " " + "attribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
      className: "jsx-1947452659" + " " + "attributionAvatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-1947452659" + " " + "attributionUsername",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.author)), __jsx("div", {
      className: "jsx-1947452659" + " " + "explanationMeat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(e.explanation)), __jsx("div", {
      className: "jsx-1947452659" + " " + "explanationActionBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1947452659" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("img", {
      src: "/images/get-it-face.png",
      className: "jsx-1947452659",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-1947452659" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Yay this helps! I get it."), e.score > 0 && __jsx("p", {
      className: "jsx-1947452659" + " " + "score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, e.score)), __jsx("div", {
      className: "jsx-1947452659" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "/images/dont-get-it-face.png",
      className: "jsx-1947452659",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-1947452659" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Booo, did not help. I do not get it yet."))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1947452659",
    __self: this
  }, ".explanation.jsx-1947452659{border-bottom:1px solid #ddd;margin-bottom:20px;}.explanation.jsx-1947452659:last-child{border:none;}.attributionAvatar.jsx-1947452659{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-1947452659{display:inline-block;margin-left:10px;}.explanationMeat.jsx-1947452659{padding-bottom:10px;}.explanationAction.jsx-1947452659{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationAction.jsx-1947452659:nth-of-type(2){margin-left:35px;}.explanationAction.jsx-1947452659 img.jsx-1947452659{display:inline-block;width:24px;position:relative;top:5px;margin-right:5px;}.explanationAction.jsx-1947452659 p.jsx-1947452659{display:inline-block;}.explanationAction.jsx-1947452659:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.explanationAction.jsx-1947452659:active.jsx-1947452659:first-child{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.speech-bubble.jsx-1947452659{position:relative;background:#e8e8e8;border-radius:.4em;padding:10px;z-index:1;}.speech-bubble.jsx-1947452659:after{content:'';position:absolute;left:0;top:50%;width:0;height:0;border:36px solid transparent;border-right-color:#e8e8e8;border-left:0;border-bottom:0;margin-top:-7.5px;margin-left:-15px;z-index:0.1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHd0MsQUFJakIsQUFHRCxBQU9VLEFBSUQsQUFHQyxBQUlKLEFBR0ksQUFPQSxBQUdBLEFBT3hCLEFBRXFCLEFBUVIsV0EvQ1MsQUFnREYsQ0FuRG5CLEtBcUJBLENBc0JvQixFQTdCcEIsQ0FKbUIsQUFPRixBQU9KLEFBT2IsUUFuQ3FCLEFBd0RiLENBaERlLEVBcUJILElBNEJYLENBVFcsQ0FqQ3BCLE1BMkNTLElBekRULEVBNkJVLENBckJVLENBa0RWLElBVkssRUFsQkksR0FUbkIsQUFzQytCLFFBbERyQixBQXdDRSxNQWxCWixBQU0wQixFQTNCMUIsRUF3Q0EsUUFQQSxJQWlCNEIsMkJBQ2IsY0FDRSxnQkFDRyxXQXpCTSxPQTBCUCxrQkFDTCxZQUNkLG1CQTNCaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL0V4cGxhbmF0aW9uc1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xuXG5mdW5jdGlvbiBFeHBsYW5hdGlvbnNTZWN0aW9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbnNTZWN0aW9uXCI+XG4gICAgIHtcbiAgICAgICBwcm9wcy5leHBsYW5hdGlvbnMubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvblwiIGlkPXtgZXhwbGFuYXRpb24tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uXCI+XG4gICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uQXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25Vc2VybmFtZVwiPntlLmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbk1lYXRcIj5cbiAgICAgICAgICAgICAgIHtwYXJzZShlLmV4cGxhbmF0aW9uKX1cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uQmFyXCI+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9nZXQtaXQtZmFjZS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcGVlY2gtYnViYmxlXCI+WWF5IHRoaXMgaGVscHMhIEkgZ2V0IGl0LjwvcD5cbiAgICAgICAgICAgICAgICAge2Uuc2NvcmUgPiAwICYmIDxwIGNsYXNzTmFtZT1cInNjb3JlXCI+e2Uuc2NvcmV9PC9wPn1cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvblwiPlxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZG9udC1nZXQtaXQtZmFjZS5wbmdcIi8+XG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwZWVjaC1idWJibGVcIj5Cb29vLCBkaWQgbm90IGhlbHAuIEkgZG8gbm90IGdldCBpdCB5ZXQuPC9wPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgKVxuICAgICAgIH0pXG4gICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmV4cGxhbmF0aW9uIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25NZWF0IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0cmFuc2l0aW9uOjAuM3M7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb24gaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiBwIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uOmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxuICAgICAgICB9XG4gICAgICAgIC5zcGVlY2gtYnViYmxlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFx0YmFja2dyb3VuZDogI2U4ZThlODtcbiAgICAgICAgXHRib3JkZXItcmFkaXVzOiAuNGVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zcGVlY2gtYnViYmxlOmFmdGVyIHtcbiAgICAgICAgXHRjb250ZW50OiAnJztcbiAgICAgICAgXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIFx0bGVmdDogMDtcbiAgICAgICAgXHR0b3A6IDUwJTtcbiAgICAgICAgXHR3aWR0aDogMDtcbiAgICAgICAgXHRoZWlnaHQ6IDA7XG4gICAgICAgIFx0Ym9yZGVyOiAzNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBcdGJvcmRlci1yaWdodC1jb2xvcjogI2U4ZThlODtcbiAgICAgICAgXHRib3JkZXItbGVmdDogMDtcbiAgICAgICAgXHRib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03LjVweDtcbiAgICAgICAgXHRtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICAgICAgei1pbmRleDogMC4xO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsYW5hdGlvbnNTZWN0aW9uXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=explainthis.js.8e344620856a4f635f10.hot-update.js.map