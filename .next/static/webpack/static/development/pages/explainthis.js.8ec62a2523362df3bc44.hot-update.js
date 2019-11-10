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
    className: "jsx-3212919695" + " " + "explanationsSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.explanations.map(function (e, index) {
    return __jsx("div", {
      id: "explanation-".concat(index),
      className: "jsx-3212919695" + " " + "explanation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3212919695" + " " + "attribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
      className: "jsx-3212919695" + " " + "attributionAvatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3212919695" + " " + "attributionUsername",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.author)), __jsx("div", {
      className: "jsx-3212919695" + " " + "explanationMeat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(e.explanation)), __jsx("div", {
      className: "jsx-3212919695" + " " + "explanationActionBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3212919695" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, e.score > 0 && __jsx("p", {
      className: "jsx-3212919695" + " " + "score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, e.score), __jsx("img", {
      src: "/images/get-it-face.png",
      className: "jsx-3212919695",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3212919695" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Yay this helps! I get it.")), __jsx("div", {
      className: "jsx-3212919695" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "/images/dont-get-it-face.png",
      className: "jsx-3212919695",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3212919695" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Lol. Makes no sense."))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3212919695",
    __self: this
  }, ".explanation.jsx-3212919695{border-bottom:1px solid #ddd;margin-bottom:20px;}.explanation.jsx-3212919695:last-child{border:none;}.attributionAvatar.jsx-3212919695{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-3212919695{display:inline-block;margin-left:10px;}.explanationMeat.jsx-3212919695{padding-bottom:10px;}.explanationActionBar.jsx-3212919695{padding-top:75px;border-top:1px solid #ddd;}.explanationAction.jsx-3212919695{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationAction.jsx-3212919695:nth-of-type(2){margin-left:35px;}.explanationAction.jsx-3212919695 img.jsx-3212919695{display:inline-block;width:50px;position:relative;top:5px;margin-right:5px;}.explanationAction.jsx-3212919695 p.jsx-3212919695{display:inline-block;}.speech-bubble.jsx-3212919695{position:relative;background:#e8e8e8;border-radius:.4em;padding:10px;z-index:1;bottom:75px;right:15px;}.speech-bubble.jsx-3212919695:after{content:'';position:absolute;bottom:10px;left:20%;width:0;height:0;border:28px solid transparent;border-top-color:#e8e8e8;border-bottom:0;border-left:0;margin-left:-19px;margin-bottom:-28px;}.score.jsx-3212919695{margin-right:10px;color:#bbb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHd0MsQUFJakIsQUFHRCxBQU9VLEFBSUQsQUFHSCxBQUlJLEFBSUosQUFHSSxBQU9BLEFBWUgsQUFVUCxBQWNPLFdBbkVDLEFBc0RELENBekRwQixLQWlCNEIsQUFRNUIsQ0FzQm9CLEFBd0JQLEVBekRiLENBSm1CLEFBV0YsQUFPSixBQU9iLFFBdkNxQixBQThEUCxBQWNkLENBcEV1QixFQXlCSCxLQW1CQSxDQXJDcEIsR0FnRFcsRUF6Q1gsS0FyQkEsRUFpQ1UsQUE4QkEsQ0F2RFUsS0E0Q0wsRUFsQkksQUE4QlIsR0F2Q1gsTUF3Q2dDLEVBeER0QixBQTRDRSxNQWxCWixFQXpCQSxFQTRDYyxZQUNELE1BV2MsS0FWM0Isb0JBV2tCLGdCQUNGLGNBQ0ksa0JBQ0Usb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcblxuZnVuY3Rpb24gRXhwbGFuYXRpb25zU2VjdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25zU2VjdGlvblwiPlxuICAgICB7XG4gICAgICAgcHJvcHMuZXhwbGFuYXRpb25zLm1hcCgoZSwgaW5kZXgpID0+IHtcbiAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25cIiBpZD17YGV4cGxhbmF0aW9uLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj57ZS5hdXRob3J9PC9wPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25NZWF0XCI+XG4gICAgICAgICAgICAgICB7cGFyc2UoZS5leHBsYW5hdGlvbil9XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvbkJhclwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvblwiPlxuICAgICAgICAgICAgICAgICB7ZS5zY29yZSA+IDAgJiYgPHAgY2xhc3NOYW1lPVwic2NvcmVcIj57ZS5zY29yZX08L3A+fVxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ2V0LWl0LWZhY2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3BlZWNoLWJ1YmJsZVwiPllheSB0aGlzIGhlbHBzISBJIGdldCBpdC48L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2RvbnQtZ2V0LWl0LWZhY2UucG5nXCIvPlxuICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcGVlY2gtYnViYmxlXCI+TG9sLiBNYWtlcyBubyBzZW5zZS48L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICApXG4gICAgICAgfSlcbiAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZXhwbGFuYXRpb24ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbk1lYXQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJhciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDc1cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdHJhbnNpdGlvbjowLjNzO1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb24gcCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC8qLmV4cGxhbmF0aW9uQWN0aW9uOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uOmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxuICAgICAgICB9Ki9cbiAgICAgICAgLnNwZWVjaC1idWJibGUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXHRiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgICAgICBcdGJvcmRlci1yYWRpdXM6IC40ZW07XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGJvdHRvbTogNzVweDtcbiAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zcGVlY2gtYnViYmxlOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIGxlZnQ6IDIwJTtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgYm9yZGVyOiAyOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNlOGU4ZTg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTI4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICNiYmI7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhbmF0aW9uc1NlY3Rpb25cbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=explainthis.js.8ec62a2523362df3bc44.hot-update.js.map