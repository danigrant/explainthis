webpackHotUpdate("static/development/pages/explainthis/[id].js",{

/***/ "./components/AddExplanation.js":
/*!**************************************!*\
  !*** ./components/AddExplanation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Editor */ "./components/Editor.js");








var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/AddExplanation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var AddExplanation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AddExplanation, _React$Component);

  function AddExplanation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddExplanation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AddExplanation).call(this, props));
    _this.state = {
      loggedInUser: '@barackobama',
      concept: 'emergence'
    };
    _this.saveExplanation = _this.saveExplanation.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddExplanation, [{
    key: "saveExplanation",
    value: function () {
      var _saveExplanation = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(text) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return saveExplanationToDB("emergence", "@barackobama", this.state.text);

              case 2:
                this.setState({
                  text: ''
                });
                this.props.handleSubmitAnswer();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveExplanation(_x) {
        return _saveExplanation.apply(this, arguments);
      }

      return saveExplanation;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-245697967",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("div", {
        onClick: this.props.handleAnswerClick,
        className: "jsx-245697967" + " " + "closeSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("i", {
        className: "jsx-245697967" + " " + "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "close_rounded")), __jsx("h1", {
        className: "jsx-245697967",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Hi ", this.state.loggedInUser), __jsx("p", {
        className: "jsx-245697967",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "What do you think is the most fun and delightful way to explain ", __jsx("span", {
        className: "jsx-245697967" + " " + "concept-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.state.concept), "?"), __jsx(_Editor__WEBPACK_IMPORTED_MODULE_10__["default"], {
        saveExplanation: this.saveExplanation,
        placeholder: "Write something short, sweet and wonderfully wacky that explains ".concat(this.state.concept, "."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-245697967" + " " + "buttonBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-245697967" + " " + "submit-button button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Submit"), __jsx("div", {
        className: "jsx-245697967" + " " + "submit-and-tweet-button button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "This is my best work. Submit and tweet.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "245697967",
        __self: this
      }, ".closeSection.jsx-245697967{position:relative;float:right;width:30px;}h1.jsx-245697967{margin-bottom:0;}p.jsx-245697967{margin-top:10px;margin-bottom:5px;color:#a9a9a9;}.button.jsx-245697967{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;color:white;}.submit-button.jsx-245697967{background:#A3D066;margin-right:25px;}.submit-and-tweet-button.jsx-245697967{background:#6EC3E9;}.button.jsx-245697967:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.button.jsx-245697967:active{-webkit-filter:brightness(120%);filter:brightness(120%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BZGRFeHBsYW5hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCLEFBRzZCLEFBS0YsQUFHQSxBQUtLLEFBT0YsQUFJQSxBQUdFLEFBTUcsZ0JBM0IxQixBQUdvQixFQVJOLENBb0JNLEFBSXBCLEVBWDhCLFNBWmpCLElBUUcsR0FZaEIsSUFuQkEsT0FRQSxDQUlxQixPQW1CckIsWUFsQlcsT0FZZSxFQVhaLFlBQ2Qsc0VBVzBCLHdEQUNULGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9BZGRFeHBsYW5hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9FZGl0b3InXG5cbmNsYXNzIEFkZEV4cGxhbmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9nZ2VkSW5Vc2VyOiAnQGJhcmFja29iYW1hJyxcbiAgICAgIGNvbmNlcHQ6ICdlbWVyZ2VuY2UnXG4gICAgfVxuICAgIHRoaXMuc2F2ZUV4cGxhbmF0aW9uID0gdGhpcy5zYXZlRXhwbGFuYXRpb24uYmluZCh0aGlzKVxuICB9XG4gIGFzeW5jIHNhdmVFeHBsYW5hdGlvbih0ZXh0KSB7XG4gICAgYXdhaXQgc2F2ZUV4cGxhbmF0aW9uVG9EQihcImVtZXJnZW5jZVwiLCBcIkBiYXJhY2tvYmFtYVwiLCB0aGlzLnN0YXRlLnRleHQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZXh0OiAnJ1xuICAgIH0pXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXRBbnN3ZXIoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUFuc3dlckNsaWNrfSBjbGFzc05hbWU9XCJjbG9zZVNlY3Rpb25cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlX3JvdW5kZWQ8L2k+PC9kaXY+XG4gICAgICAgIDxoMT5IaSB7dGhpcy5zdGF0ZS5sb2dnZWRJblVzZXJ9PC9oMT5cbiAgICAgICAgPHA+V2hhdCBkbyB5b3UgdGhpbmsgaXMgdGhlIG1vc3QgZnVuIGFuZCBkZWxpZ2h0ZnVsIHdheSB0byBleHBsYWluIDxzcGFuIGNsYXNzTmFtZT1cImNvbmNlcHQtbmFtZVwiPnt0aGlzLnN0YXRlLmNvbmNlcHR9PC9zcGFuPj88L3A+XG4gICAgICAgIDxFZGl0b3Igc2F2ZUV4cGxhbmF0aW9uPXt0aGlzLnNhdmVFeHBsYW5hdGlvbn0gcGxhY2Vob2xkZXI9e2BXcml0ZSBzb21ldGhpbmcgc2hvcnQsIHN3ZWV0IGFuZCB3b25kZXJmdWxseSB3YWNreSB0aGF0IGV4cGxhaW5zICR7dGhpcy5zdGF0ZS5jb25jZXB0fS5gfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvbiBidXR0b25cIj5TdWJtaXQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1hbmQtdHdlZXQtYnV0dG9uIGJ1dHRvblwiPlRoaXMgaXMgbXkgYmVzdCB3b3JrLiBTdWJtaXQgYW5kIHR3ZWV0LjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNsb3NlU2VjdGlvbiB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICBjb2xvcjogI2E5YTlhOTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNBM0QwNjY7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtaXQtYW5kLXR3ZWV0LWJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzZFQzNFOTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEV4cGxhbmF0aW9uXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/AddExplanation.js */"));
    }
  }]);

  return AddExplanation;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddExplanation);

/***/ })

})
//# sourceMappingURL=[id].js.13cd7c3ca9697f20b7f4.hot-update.js.map