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
    className: "jsx-2150638855" + " " + "explanationsSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.explanations.map(function (e, index) {
    return __jsx("div", {
      id: "explanation-".concat(index),
      className: "jsx-2150638855" + " " + "explanation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2150638855" + " " + "attribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
      className: "jsx-2150638855" + " " + "attributionAvatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2150638855" + " " + "attributionUsername",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.author)), __jsx("div", {
      className: "jsx-2150638855" + " " + "explanationMeat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(e.explanation)), __jsx("div", {
      className: "jsx-2150638855" + " " + "explanationActionBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2150638855" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("img", {
      src: "/images/get-it-face.png",
      className: "jsx-2150638855",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2150638855" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Yay this helps! I get it."), e.score > 0 && __jsx("p", {
      className: "jsx-2150638855" + " " + "score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, e.score)), __jsx("div", {
      className: "jsx-2150638855" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "/images/dont-get-it-face.png",
      className: "jsx-2150638855",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2150638855" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Booo, did not help. I do not get it yet."))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2150638855",
    __self: this
  }, ".explanation.jsx-2150638855{border-bottom:1px solid #ddd;margin-bottom:20px;}.explanation.jsx-2150638855:last-child{border:none;}.attributionAvatar.jsx-2150638855{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-2150638855{display:inline-block;margin-left:10px;}.explanationMeat.jsx-2150638855{padding-bottom:10px;}.explanationAction.jsx-2150638855{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationAction.jsx-2150638855:nth-of-type(2){margin-left:35px;}.explanationAction.jsx-2150638855 img.jsx-2150638855{display:inline-block;width:24px;position:relative;top:5px;margin-right:5px;}.explanationAction.jsx-2150638855 p.jsx-2150638855{display:inline-block;}.speech-bubble.jsx-2150638855:hover{position:relative;background:#e8e8e8;border-radius:.4em;padding:10px;z-index:1;bottom:30px;}.speech-bubble.jsx-2150638855:after.jsx-2150638855:hover{content:'';position:absolute;bottom:0;left:50%;width:0;height:0;border:38px solid transparent;border-top-color:#e8e8e8;border-bottom:0;border-left:0;margin-left:-4.5px;margin-left:-19px;margin-bottom:-38px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHd0MsQUFJakIsQUFHRCxBQU9VLEFBSUQsQUFHQyxBQUlKLEFBR0ksQUFPQSxBQVlILEFBU1AsV0FoRFEsQUFpREYsQ0FwRG5CLEtBcUJBLENBc0JvQixFQTdCcEIsQ0FKbUIsQUFPRixBQU9KLEFBT2IsUUFuQ3FCLEFBeURYLENBakRhLEVBcUJILEtBbUJBLENBakNwQixBQTJDVSxTQUNELENBMURULEVBNkJVLENBckJVLElBbURWLENBWEssRUFsQkksR0FUbkIsR0F1QytCLEtBbkRyQixBQXdDRSxNQWxCWixFQXJCQSxFQXdDYyxZQUNkLEdBVTBCLHlCQUNULGdCQUNGLGNBQ0ssbUJBQ0Qsa0JBQ0Usb0JBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcblxuZnVuY3Rpb24gRXhwbGFuYXRpb25zU2VjdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25zU2VjdGlvblwiPlxuICAgICB7XG4gICAgICAgcHJvcHMuZXhwbGFuYXRpb25zLm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25cIiBpZD17YGV4cGxhbmF0aW9uLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj57ZS5hdXRob3J9PC9wPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25NZWF0XCI+XG4gICAgICAgICAgICAgICB7cGFyc2UoZS5leHBsYW5hdGlvbil9XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvbkJhclwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvblwiPlxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ2V0LWl0LWZhY2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3BlZWNoLWJ1YmJsZVwiPllheSB0aGlzIGhlbHBzISBJIGdldCBpdC48L3A+XG4gICAgICAgICAgICAgICAgIHtlLnNjb3JlID4gMCAmJiA8cCBjbGFzc05hbWU9XCJzY29yZVwiPntlLnNjb3JlfTwvcD59XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2RvbnQtZ2V0LWl0LWZhY2UucG5nXCIvPlxuICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcGVlY2gtYnViYmxlXCI+Qm9vbywgZGlkIG5vdCBoZWxwLiBJIGRvIG5vdCBnZXQgaXQgeWV0LjwvcD5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIClcbiAgICAgICB9KVxuICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5leHBsYW5hdGlvbiB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGlvblVzZXJuYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uTWVhdCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdHJhbnNpdGlvbjowLjNzO1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb24gcCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC8qLmV4cGxhbmF0aW9uQWN0aW9uOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uOmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxuICAgICAgICB9Ki9cbiAgICAgICAgLnNwZWVjaC1idWJibGU6aG92ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXHRiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgICAgICBcdGJvcmRlci1yYWRpdXM6IC40ZW07XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zcGVlY2gtYnViYmxlOmFmdGVyOmhvdmVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIFx0Ym90dG9tOiAwO1xuICAgICAgICBcdGxlZnQ6IDUwJTtcbiAgICAgICAgXHR3aWR0aDogMDtcbiAgICAgICAgXHRoZWlnaHQ6IDA7XG4gICAgICAgIFx0Ym9yZGVyOiAzOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBcdGJvcmRlci10b3AtY29sb3I6ICNlOGU4ZTg7XG4gICAgICAgIFx0Ym9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgXHRib3JkZXItbGVmdDogMDtcbiAgICAgICAgXHRtYXJnaW4tbGVmdDogLTQuNXB4O1xuICAgICAgICBcdG1hcmdpbi1sZWZ0OiAtMTlweDtcbiAgICAgICAgXHRtYXJnaW4tYm90dG9tOiAtMzhweDtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbGFuYXRpb25zU2VjdGlvblxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=explainthis.js.ad170999e2785af30be0.hot-update.js.map