webpackHotUpdate("static/development/pages/explainthis/[id].js",{

/***/ "./components/ExplanationsSection.js":
/*!*******************************************!*\
  !*** ./components/ExplanationsSection.js ***!
  \*******************************************/
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
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Firebase */ "./components/Firebase.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Firebase__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





var ExplanationsSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ExplanationsSection, _React$Component);

  function ExplanationsSection(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ExplanationsSection);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ExplanationsSection).call(this, props));
    _this.state = {
      loggedInUser: '@barackobama'
    };
    _this.handleVote = _this.handleVote.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ExplanationsSection, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "handleVote",
    value: function () {
      var _handleVote = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(vote, explanationID) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_Firebase__WEBPACK_IMPORTED_MODULE_11__["addVote"])(vote, this.state.loggedInUser, explanationID);

              case 2:
                this.props.parentHandleVote();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleVote(_x, _x2) {
        return _handleVote.apply(this, arguments);
      }

      return handleVote;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-441326734" + " " + "explanationsSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.explanations.map(function (e) {
        return __jsx("div", {
          id: "explanation-".concat(e.id),
          className: "jsx-441326734" + " " + "explanation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, _this2.props.profilepage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/explainthis/".concat(e.concept),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-441326734" + " " + "link conceptName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "".concat(e.author, " explains ").concat(e.concept))), !_this2.props.profilepage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/explainer/".concat(e.author),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-441326734" + " " + "attribution link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, __jsx("img", {
          src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
          className: "jsx-441326734" + " " + "attributionAvatar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-441326734" + " " + "attributionUsername",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, e.author))), __jsx("div", {
          className: "jsx-441326734" + " " + "explanationMeat",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, html_react_parser__WEBPACK_IMPORTED_MODULE_10___default()(e.explanation)), __jsx("div", {
          className: "jsx-441326734" + " " + "explanationActionBar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx("div", {
          onClick: function onClick() {
            return _this2.handleVote(1, e.id);
          },
          className: "jsx-441326734" + " " + "explanationAction",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, __jsx("img", {
          src: "/images/get-it-face.png",
          className: "jsx-441326734",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), e.score > 0 && __jsx("p", {
          className: "jsx-441326734" + " " + "score",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, "+ ", e.score)), __jsx("div", {
          onClick: function onClick() {
            return _this2.handleVote(-1, e.id);
          },
          className: "jsx-441326734" + " " + "explanationAction",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx("img", {
          src: "/images/dont-get-it-face.png",
          className: "jsx-441326734",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "441326734",
        __self: this
      }, ".explanation.jsx-441326734{border-bottom:1px solid #ddd;margin-bottom:20px;}.explanation.jsx-441326734:last-child{border:none;}.attributionAvatar.jsx-441326734{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-441326734{display:inline-block;margin-left:10px;}.explanationMeat.jsx-441326734{padding-bottom:5px;}.explanationActionBar.jsx-441326734{padding-bottom:20px;}.explanationAction.jsx-441326734{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationAction.jsx-441326734:nth-of-type(2){margin-left:35px;}.explanationAction.jsx-441326734 img.jsx-441326734{display:inline-block;width:24px;position:relative;top:5px;margin-right:5px;}.explanationAction.jsx-441326734 p.jsx-441326734{display:inline-block;}explanationAction.jsx-441326734:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.explanationAction.jsx-441326734:active.jsx-441326734:first-child{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.score.jsx-441326734{margin-right:10px;color:#bbb;}.conceptName.jsx-441326734{font-weight:bold;font-size:24px;}.link.jsx-441326734{cursor:pointer;}.link.jsx-441326734:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-441326734:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEb0IsQUFHMEMsQUFJakIsQUFHRCxBQU9VLEFBSUYsQUFHQyxBQUdDLEFBSUosQUFHSSxBQU9BLEFBR0EsQUFPeEIsQUFFcUIsQUFJRCxBQUlILEFBR1UsQUFHQSxXQXhETCxDQUhyQixHQXNEQSxFQTlCQSxBQTBCaUIsQ0FKSixDQWhDYixDQUdBLENBUG1CLEFBVUYsQUFPSixBQU9iLFFBdENxQixBQW1EckIsQ0EzQ3VCLEVBd0JILEFBdUJwQixNQXhDQSxVQWRBLEVBZ0NVLENBeEJVLEtBb0RwQixBQUdBLEVBOUJtQixHQVRuQixRQWZVLE1BeUJWLEFBTTBCLEVBOUIxQixVQW9DQSx3RUFMMEIsd0RBQ1QsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL0V4cGxhbmF0aW9uc1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xuaW1wb3J0IHsgYWRkVm90ZSB9IGZyb20gJy4vRmlyZWJhc2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIEV4cGxhbmF0aW9uc1NlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2dnZWRJblVzZXI6ICdAYmFyYWNrb2JhbWEnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVm90ZSA9IHRoaXMuaGFuZGxlVm90ZS5iaW5kKHRoaXMpXG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gIH1cbiAgYXN5bmMgaGFuZGxlVm90ZSh2b3RlLCBleHBsYW5hdGlvbklEKSB7XG4gICAgYXdhaXQgYWRkVm90ZSh2b3RlLCB0aGlzLnN0YXRlLmxvZ2dlZEluVXNlciwgZXhwbGFuYXRpb25JRClcbiAgICB0aGlzLnByb3BzLnBhcmVudEhhbmRsZVZvdGUoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbnNTZWN0aW9uXCI+XG4gICAgICAge1xuICAgICAgICAgdGhpcy5wcm9wcy5leHBsYW5hdGlvbnMubWFwKChlKSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvblwiIGlkPXtgZXhwbGFuYXRpb24tJHtlLmlkfWB9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcm9maWxlcGFnZSAmJlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXhwbGFpbnRoaXMvJHtlLmNvbmNlcHR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmsgY29uY2VwdE5hbWVcIj57YCR7ZS5hdXRob3J9IGV4cGxhaW5zICR7ZS5jb25jZXB0fWB9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5wcm9maWxlcGFnZSAmJlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXhwbGFpbmVyLyR7ZS5hdXRob3J9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uIGxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25Vc2VybmFtZVwiPntlLmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25NZWF0XCI+XG4gICAgICAgICAgICAgICAgIHtwYXJzZShlLmV4cGxhbmF0aW9uKX1cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkFjdGlvbkJhclwiPlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVWb3RlKDEsIGUuaWQpfT5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ2V0LWl0LWZhY2UucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICB7ZS5zY29yZSA+IDAgJiYgPHAgY2xhc3NOYW1lPVwic2NvcmVcIj4rIHtlLnNjb3JlfTwvcD59XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVWb3RlKC0xLCBlLmlkKX0gPlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kb250LWdldC1pdC1mYWNlLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgKVxuICAgICAgICAgfSlcbiAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZXhwbGFuYXRpb24ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXhwbGFuYXRpb246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leHBsYW5hdGlvbk1lYXQge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQmFyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjowLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb246bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbiBpbWcge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb24gcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4cGxhbmF0aW9uQWN0aW9uOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uOmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2JiYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbmNlcHROYW1lIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGluazphY3RpdmUge1xuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhbmF0aW9uc1NlY3Rpb25cbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
    }
  }]);

  return ExplanationsSection;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=[id].js.253b607b6cca57485500.hot-update.js.map