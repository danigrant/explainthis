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
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");








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
                // await this.props.parentHandleVote()
                if (vote == -1) {
                  this.props.incrementExplanation();
                }

                _context.next = 5;
                return this.props.handleUdatingDisplayedScores();

              case 5:
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

      {
        if (!this.props.currentExplanation) {
          return __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }, "loading...");
        } else {
          return __jsx("div", {
            className: "jsx-694307654" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, __jsx("div", {
            key: "explanation-".concat(this.props.currentExplanation.id),
            className: "jsx-694307654" + " " + "explanation",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, this.props.profilepage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            href: "/explainthis/".concat(this.props.currentExplanation.concept),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-694307654" + " " + "link conceptName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, "".concat(this.props.currentExplanation.author, " explains ").concat(this.props.currentExplanation.concept))), !this.props.profilepage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            href: "/explainer/".concat(this.props.currentExplanation.author),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-694307654" + " " + "attribution link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, __jsx("img", {
            src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
            className: "jsx-694307654" + " " + "attributionAvatar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }), __jsx("p", {
            className: "jsx-694307654" + " " + "attributionUsername",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, this.props.currentExplanation.author))), __jsx("div", {
            className: "jsx-694307654" + " " + "explanationMeat",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, html_react_parser__WEBPACK_IMPORTED_MODULE_10___default()(this.props.currentExplanation.explanation)), __jsx("div", {
            className: "jsx-694307654" + " " + "explanationActionBar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, __jsx("div", {
            onClick: function onClick() {
              return _this2.handleVote(1, _this2.props.currentExplanation.id);
            },
            className: "jsx-694307654" + " " + "get-it-button explanationActionButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, __jsx("img", {
            src: "/images/get-it-cat.png",
            className: "jsx-694307654",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }), __jsx("p", {
            className: "jsx-694307654",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "AHA! WOW! YIPPEE! I get it now.")), __jsx("div", {
            onClick: function onClick() {
              return _this2.handleVote(-1, _this2.props.currentExplanation.id);
            },
            className: "jsx-694307654" + " " + "dont-get-it-button explanationActionButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-694307654",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "Nah, explain it to me a different way."), __jsx("img", {
            src: "/images/dont-get-it-cat.png",
            className: "jsx-694307654",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "694307654",
            __self: this
          }, ".explanationsSection.jsx-694307654{position:relative;height:560px;}.explanation.jsx-694307654{border-bottom:1px solid #ddd;margin-bottom:20px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.explanation.jsx-694307654:last-child{border:none;}.attributionAvatar.jsx-694307654{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-694307654{display:inline-block;margin-left:10px;}.explanationMeat.jsx-694307654{padding-bottom:5px;font-size:30px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.explanationActionBar.jsx-694307654{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:20px;text-align:center;color:white;}.explanationActionButton.jsx-694307654{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationActionButton.jsx-694307654:nth-of-type(2){margin-left:35px;}.explanationActionButton.jsx-694307654 img.jsx-694307654{display:inline-block;width:45px;position:relative;top:15px;z-index:1;}.explanationActionButton.jsx-694307654 p.jsx-694307654{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;}.get-it-button.jsx-694307654 p.jsx-694307654{background-color:#A3D066;}.get-it-button.jsx-694307654 img.jsx-694307654{position:relative;left:26px;}.dont-get-it-button.jsx-694307654 p.jsx-694307654{background-color:#6EC3E9;}.dont-get-it-button.jsx-694307654 img.jsx-694307654{position:relative;right:26px;}.explanationActionButton.jsx-694307654:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.explanationActionButton.jsx-694307654:active.jsx-694307654:first-child{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.score.jsx-694307654{margin-right:10px;color:#bbb;}.conceptName.jsx-694307654{font-weight:bold;font-size:24px;}.link.jsx-694307654{cursor:pointer;}.link.jsx-694307654:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-694307654:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEd0IsQUFHbUMsQUFJVyxBQVFqQixBQUdELEFBT1UsQUFJRixBQUtELEFBTUcsQUFJSixBQUdJLEFBT0EsQUFNSSxBQUdQLEFBSU8sQUFHUCxBQUlHLEFBT3hCLEFBRXFCLEFBSUQsQUFJSCxBQUdVLEFBR0EsV0E5RUwsQ0FIckIsR0E0RUEsRUEvQ0EsQUEyQ2lCLENBcEZGLEFBNERILEFBT0MsQUFhQSxDQXRESSxFQUpFLEFBZUYsQUFPSixBQU9pQixJQU05QixBQU9BLEdBSEEsQ0F6RHFCLEFBZ0VyQixBQWFBLENBakV1QixDQWZ2QixDQTRDb0IsQUF3Q3BCLEVBMURjLElBSmQsVUFsQmMsQ0ErQ08sQ0FOVixDQTdCUyxLQTBFcEIsQUFHQSxHQS9DWSxDQXpDRyxDQWdDZixPQWVXLENBbkNELEFBOEJWLEVBakJpQixJQXdDUyxFQXBEMUIsQUFtQ0EsU0F0Qm9CLENBNkNwQixpQkE1Q2MsQ0FMZCxXQU1BLGtCQTNCUyx5QkFpRWlCLFFBaEVGLGdEQWlFUCxlQUNqQixlQWpFQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRXhwbGFuYXRpb25zU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5pbXBvcnQgeyBhZGRWb3RlIH0gZnJvbSAnLi9GaXJlYmFzZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcblxuY2xhc3MgRXhwbGFuYXRpb25zU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvZ2dlZEluVXNlcjogJ0BiYXJhY2tvYmFtYSdcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVWb3RlID0gdGhpcy5oYW5kbGVWb3RlLmJpbmQodGhpcylcbiAgfVxuICBhc3luYyBoYW5kbGVWb3RlKHZvdGUsIGV4cGxhbmF0aW9uSUQpIHtcbiAgICBhd2FpdCBhZGRWb3RlKHZvdGUsIHRoaXMuc3RhdGUubG9nZ2VkSW5Vc2VyLCBleHBsYW5hdGlvbklEKVxuICAgIC8vIGF3YWl0IHRoaXMucHJvcHMucGFyZW50SGFuZGxlVm90ZSgpXG4gICAgaWYgKHZvdGUgPT0gLTEpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5jcmVtZW50RXhwbGFuYXRpb24oKVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnByb3BzLmhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXMoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbnNTZWN0aW9uXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvblwiIGtleT17YGV4cGxhbmF0aW9uLSR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uaWR9YH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByb2ZpbGVwYWdlICYmXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9leHBsYWludGhpcy8ke3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmNvbmNlcHR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmsgY29uY2VwdE5hbWVcIj57YCR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uYXV0aG9yfSBleHBsYWlucyAke3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmNvbmNlcHR9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLnByb2ZpbGVwYWdlICYmXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9leHBsYWluZXIvJHt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5hdXRob3J9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uIGxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25Vc2VybmFtZVwiPnt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5hdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uTWVhdFwiPlxuICAgICAgICAgICAgICAgICB7cGFyc2UodGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uZXhwbGFuYXRpb24pfVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uQmFyXCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2V0LWl0LWJ1dHRvbiBleHBsYW5hdGlvbkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVm90ZSgxLCB0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5pZCl9PlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9nZXQtaXQtY2F0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgPHA+QUhBISBXT1chIFlJUFBFRSEgSSBnZXQgaXQgbm93LjwvcD5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9udC1nZXQtaXQtYnV0dG9uIGV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVWb3RlKC0xLCB0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5pZCl9ID5cbiAgICAgICAgICAgICAgICAgICA8cD5OYWgsIGV4cGxhaW4gaXQgdG8gbWUgYSBkaWZmZXJlbnQgd2F5LjwvcD5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZG9udC1nZXQtaXQtY2F0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbnNTZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25NZWF0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQmFyIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjowLjNzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmdldC1pdC1idXR0b24gcCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EzRDA2NjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ2V0LWl0LWJ1dHRvbiBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kb250LWdldC1pdC1idXR0b24gcCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZFQzNFOTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZG9udC1nZXQtaXQtYnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbjphY3RpdmU6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2NvcmUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2JiYjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29uY2VwdE5hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGluazphY3RpdmUge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhbmF0aW9uc1NlY3Rpb25cbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
        }
      }
    }
  }]);

  return ExplanationsSection;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=[id].js.d56163bb8509806ebd6f.hot-update.js.map