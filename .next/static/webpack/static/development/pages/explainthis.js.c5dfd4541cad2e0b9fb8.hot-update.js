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
    className: "jsx-3714954211" + " " + "explanationsSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.explanations.map(function (e, index) {
    return __jsx("div", {
      id: "explanation-".concat(index),
      className: "jsx-3714954211" + " " + "explanation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3714954211" + " " + "attribution",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
      className: "jsx-3714954211" + " " + "attributionAvatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3714954211" + " " + "attributionUsername",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, e.author)), __jsx("div", {
      className: "jsx-3714954211" + " " + "explanationMeat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(e.explanation)), __jsx("div", {
      className: "jsx-3714954211" + " " + "explanationActionBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3714954211" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("img", {
      src: "/images/get-it-face.png",
      className: "jsx-3714954211",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3714954211" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Yay this helps! I get it."), e.score > 0 && __jsx("p", {
      className: "jsx-3714954211" + " " + "score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, e.score)), __jsx("div", {
      className: "jsx-3714954211" + " " + "explanationAction",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "/images/dont-get-it-face.png",
      className: "jsx-3714954211",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3714954211" + " " + "speech-bubble",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Booo, did not help. I do not get it yet."))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3714954211",
    __self: this
  }, ".explanation.jsx-3714954211{border-bottom:1px solid #ddd;margin-bottom:20px;}.explanation.jsx-3714954211:last-child{border:none;}.attributionAvatar.jsx-3714954211{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-3714954211{display:inline-block;margin-left:10px;}.explanationMeat.jsx-3714954211{padding-bottom:10px;}.explanationAction.jsx-3714954211{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationAction.jsx-3714954211:nth-of-type(2){margin-left:35px;}.explanationAction.jsx-3714954211 img.jsx-3714954211{display:inline-block;width:24px;position:relative;top:5px;margin-right:5px;}.explanationAction.jsx-3714954211 p.jsx-3714954211{display:inline-block;}.explanationAction.jsx-3714954211:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.explanationAction.jsx-3714954211:active.jsx-3714954211:first-child{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.speech-bubble.jsx-3714954211{position:relative;background:#e8e8e8;border-radius:.4em;padding:10px;z-index:1;}.speech-bubble.jsx-3714954211:after{content:'';position:absolute;bottom:0;left:50%;width:0;height:0;border:9px solid transparent;border-top-color:#e8e8e8;border-bottom:0;border-left:0;margin-left:-4.5px;margin-bottom:-9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHd0MsQUFJakIsQUFHRCxBQU9VLEFBSUQsQUFHQyxBQUlKLEFBR0ksQUFPQSxBQUdBLEFBT3hCLEFBRXFCLEFBUVAsV0EvQ1EsQUFnREYsQ0FuRG5CLEtBcUJBLENBc0JvQixFQTdCcEIsQ0FKbUIsQUFPRixBQU9KLEFBT2IsUUFuQ3FCLEFBd0RYLENBaERhLEVBcUJILEtBbUJBLENBakNwQixBQTBDVSxTQUNELENBekRULEVBNkJVLENBckJVLElBa0RWLENBVkssRUFsQkksR0FUbkIsR0FzQzhCLEtBbERwQixBQXdDRSxNQWxCWixBQU0wQixFQTNCMUIsRUF3Q0EsUUFQQSxNQWlCMEIseUJBQ1QsZ0JBQ0YsY0FDSyxXQXpCTSxRQTBCTixtQkFDcEIsNkJBMUJpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRXhwbGFuYXRpb25zU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5cbmZ1bmN0aW9uIEV4cGxhbmF0aW9uc1NlY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uc1NlY3Rpb25cIj5cbiAgICAge1xuICAgICAgIHByb3BzLmV4cGxhbmF0aW9ucy5tYXAoKGUsIGluZGV4KSA9PiB7XG4gICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uXCIgaWQ9e2BleHBsYW5hdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+e2UuYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uTWVhdFwiPlxuICAgICAgICAgICAgICAge3BhcnNlKGUuZXhwbGFuYXRpb24pfVxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25CYXJcIj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dldC1pdC1mYWNlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwZWVjaC1idWJibGVcIj5ZYXkgdGhpcyBoZWxwcyEgSSBnZXQgaXQuPC9wPlxuICAgICAgICAgICAgICAgICB7ZS5zY29yZSA+IDAgJiYgPHAgY2xhc3NOYW1lPVwic2NvcmVcIj57ZS5zY29yZX08L3A+fVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kb250LWdldC1pdC1mYWNlLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3BlZWNoLWJ1YmJsZVwiPkJvb28sIGRpZCBub3QgaGVscC4gSSBkbyBub3QgZ2V0IGl0IHlldC48L3A+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICApXG4gICAgICAgfSlcbiAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZXhwbGFuYXRpb24ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbk1lYXQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRyYW5zaXRpb246MC4zcztcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb246bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uIHAge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb246aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb246YWN0aXZlOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXG4gICAgICAgIH1cbiAgICAgICAgLnNwZWVjaC1idWJibGUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXHRiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgICAgICBcdGJvcmRlci1yYWRpdXM6IC40ZW07XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNwZWVjaC1idWJibGU6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgXHRib3R0b206IDA7XG4gICAgICAgIFx0bGVmdDogNTAlO1xuICAgICAgICBcdHdpZHRoOiAwO1xuICAgICAgICBcdGhlaWdodDogMDtcbiAgICAgICAgXHRib3JkZXI6IDlweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgXHRib3JkZXItdG9wLWNvbG9yOiAjZThlOGU4O1xuICAgICAgICBcdGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIFx0Ym9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIFx0bWFyZ2luLWxlZnQ6IC00LjVweDtcbiAgICAgICAgXHRtYXJnaW4tYm90dG9tOiAtOXB4O1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsYW5hdGlvbnNTZWN0aW9uXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=explainthis.js.c5dfd4541cad2e0b9fb8.hot-update.js.map