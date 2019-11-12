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
/* harmony import */ var _components_AddExplanation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AddExplanation */ "./components/AddExplanation.js");








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
                _context.next = 4;
                return this.props.parentHandleVote();

              case 4:
                if (vote == -1) {
                  this.props.incrementExplanation();
                } else if (vote == 1) {
                  this.props.handleSubmitAnswer({
                    celebration: true
                  });
                }

                _context.next = 7;
                return this.props.handleUdatingDisplayedScores();

              case 7:
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
              lineNumber: 30
            },
            __self: this
          }, "loading...");
        } else {
          return __jsx("div", {
            className: "jsx-3286021658" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, __jsx("div", {
            key: "explanation-".concat(this.props.currentExplanation.id),
            className: "jsx-3286021658" + " " + "explanation",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, this.props.profilepage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            href: "/explainthis/".concat(this.props.currentExplanation.concept),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-3286021658" + " " + "link conceptName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, "".concat(this.props.currentExplanation.author, " explains ").concat(this.props.currentExplanation.concept))), !this.props.profilepage && __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            href: "/explainer/".concat(this.props.currentExplanation.author),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-3286021658" + " " + "attribution link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, __jsx("img", {
            src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
            className: "jsx-3286021658" + " " + "attributionAvatar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }), __jsx("p", {
            className: "jsx-3286021658" + " " + "attributionUsername",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, this.props.currentExplanation.author))), __jsx("div", {
            className: "jsx-3286021658" + " " + "explanationMeat",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, html_react_parser__WEBPACK_IMPORTED_MODULE_10___default()(this.props.currentExplanation.explanation)), __jsx("div", {
            className: "jsx-3286021658" + " " + "explanationActionBar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, __jsx("div", {
            onClick: function onClick() {
              return _this2.handleVote(1, _this2.props.currentExplanation.id);
            },
            className: "jsx-3286021658" + " " + "get-it-button explanationActionButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, __jsx("img", {
            src: "/images/get-it-cat.png",
            className: "jsx-3286021658",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }), __jsx("p", {
            className: "jsx-3286021658",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "AHA! WOW! YIPPEE! I get it now.")), __jsx("div", {
            onClick: function onClick() {
              return _this2.handleVote(-1, _this2.props.currentExplanation.id);
            },
            className: "jsx-3286021658" + " " + "dont-get-it-button explanationActionButton",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-3286021658",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, "Nah, explain it to me a different way."), __jsx("img", {
            src: "/images/dont-get-it-cat.png",
            className: "jsx-3286021658",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "3286021658",
            __self: this
          }, ".explanationsSection.jsx-3286021658{position:relative;height:100%;}.explanation.jsx-3286021658{border-bottom:1px solid #ddd;margin-bottom:20px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.explanation.jsx-3286021658:last-child{border:none;}.attributionAvatar.jsx-3286021658{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-3286021658{display:inline-block;margin-left:10px;}.explanationMeat.jsx-3286021658{padding-bottom:5px;font-size:30px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.explanationActionBar.jsx-3286021658{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:20px;text-align:center;color:white;}.explanationActionButton.jsx-3286021658{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationActionButton.jsx-3286021658:nth-of-type(2){margin-left:35px;}.explanationActionButton.jsx-3286021658 img.jsx-3286021658{display:inline-block;width:75px;position:relative;top:25px;z-index:1;}.explanationActionButton.jsx-3286021658 p.jsx-3286021658{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;}.get-it-button.jsx-3286021658 p.jsx-3286021658{background-color:#A3D066;}.get-it-button.jsx-3286021658 img.jsx-3286021658{position:relative;left:26px;}.dont-get-it-button.jsx-3286021658 p.jsx-3286021658{background-color:#6EC3E9;}.dont-get-it-button.jsx-3286021658 img.jsx-3286021658{position:relative;right:26px;}.explanationActionButton.jsx-3286021658:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.score.jsx-3286021658{margin-right:10px;color:#bbb;}.conceptName.jsx-3286021658{font-weight:bold;font-size:24px;}.link.jsx-3286021658{cursor:pointer;}.link.jsx-3286021658:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-3286021658:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFd0IsQUFHbUMsQUFJVyxBQVFqQixBQUdELEFBT1UsQUFJRixBQUtELEFBTUcsQUFJSixBQUdJLEFBT0EsQUFNSSxBQUdQLEFBSU8sQUFHUCxBQUlHLEFBTUgsQUFJRCxBQUlILEFBR1UsQUFHQSxXQTNFTCxDQUhyQixHQXlFQSxFQTVDQSxBQXdDaUIsQ0FqRkgsQUE0REYsQUFPQyxBQVVBLENBbkRJLEVBSkUsQUFlRixBQU9KLEFBT2lCLElBTTlCLEFBT0EsR0FIQSxDQXpEcUIsQUFnRXJCLEFBVUEsQ0E3RUEsQUFldUIsRUE2QkgsQUFxQ3BCLEVBdkRjLElBSmQsVUFsQmMsQ0ErQ08sQ0FOVixDQTdCUyxLQXVFcEIsQUFHQSxHQTVDWSxDQXpDRyxDQWdDZixPQWVXLENBbkNELEFBOEJWLEVBakJpQixJQXdDUyxFQXBEMUIsQUFtQ0EsU0F0Qm9CLGtCQUNOLENBTGQsV0FNQSxrQkEzQlMseUJBaUVpQixRQWhFRixnREFpRVAsZUFDakIsZUFqRUEiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL0V4cGxhbmF0aW9uc1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xuaW1wb3J0IHsgYWRkVm90ZSB9IGZyb20gJy4vRmlyZWJhc2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnXG5pbXBvcnQgQWRkRXhwbGFuYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9BZGRFeHBsYW5hdGlvbidcblxuY2xhc3MgRXhwbGFuYXRpb25zU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvZ2dlZEluVXNlcjogJ0BiYXJhY2tvYmFtYSdcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVWb3RlID0gdGhpcy5oYW5kbGVWb3RlLmJpbmQodGhpcylcbiAgfVxuICBhc3luYyBoYW5kbGVWb3RlKHZvdGUsIGV4cGxhbmF0aW9uSUQpIHtcbiAgICBhd2FpdCBhZGRWb3RlKHZvdGUsIHRoaXMuc3RhdGUubG9nZ2VkSW5Vc2VyLCBleHBsYW5hdGlvbklEKVxuICAgIGF3YWl0IHRoaXMucHJvcHMucGFyZW50SGFuZGxlVm90ZSgpXG4gICAgaWYgKHZvdGUgPT0gLTEpIHtcbiAgICAgIHRoaXMucHJvcHMuaW5jcmVtZW50RXhwbGFuYXRpb24oKVxuICAgIH0gZWxzZSBpZiAodm90ZSA9PSAxKSB7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdEFuc3dlcih7Y2VsZWJyYXRpb246IHRydWV9KVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnByb3BzLmhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXMoKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbnNTZWN0aW9uXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvblwiIGtleT17YGV4cGxhbmF0aW9uLSR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uaWR9YH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByb2ZpbGVwYWdlICYmXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9leHBsYWludGhpcy8ke3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmNvbmNlcHR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmsgY29uY2VwdE5hbWVcIj57YCR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uYXV0aG9yfSBleHBsYWlucyAke3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmNvbmNlcHR9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLnByb2ZpbGVwYWdlICYmXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9leHBsYWluZXIvJHt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5hdXRob3J9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uIGxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25Vc2VybmFtZVwiPnt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5hdXRob3J9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uTWVhdFwiPlxuICAgICAgICAgICAgICAgICB7cGFyc2UodGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uZXhwbGFuYXRpb24pfVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uQWN0aW9uQmFyXCI+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2V0LWl0LWJ1dHRvbiBleHBsYW5hdGlvbkFjdGlvbkJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVm90ZSgxLCB0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5pZCl9PlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9nZXQtaXQtY2F0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgPHA+QUhBISBXT1chIFlJUFBFRSEgSSBnZXQgaXQgbm93LjwvcD5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9udC1nZXQtaXQtYnV0dG9uIGV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVWb3RlKC0xLCB0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5pZCl9ID5cbiAgICAgICAgICAgICAgICAgICA8cD5OYWgsIGV4cGxhaW4gaXQgdG8gbWUgYSBkaWZmZXJlbnQgd2F5LjwvcD5cbiAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZG9udC1nZXQtaXQtY2F0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbnNTZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbk1lYXQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CYXIge1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuM3M7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEMDY2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5nZXQtaXQtYnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRvbnQtZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDM0U5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kb250LWdldC1pdC1idXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNiYmI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbmNlcHROYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTE1JSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxpbms6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTI1JSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsYW5hdGlvbnNTZWN0aW9uXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ExplanationsSection.js */"));
        }
      }
    }
  }]);

  return ExplanationsSection;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ })

})
//# sourceMappingURL=[id].js.29f248a942f436ffde8e.hot-update.js.map