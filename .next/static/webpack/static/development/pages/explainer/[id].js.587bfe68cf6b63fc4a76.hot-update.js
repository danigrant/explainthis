webpackHotUpdate("static/development/pages/explainer/[id].js",{

/***/ "./components/ExplanationsSection.js":
false,

/***/ "./components/ProfileExplanationsSection.js":
/*!**************************************************!*\
  !*** ./components/ProfileExplanationsSection.js ***!
  \**************************************************/
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








var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/ProfileExplanationsSection.js";

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
          }, ".explanationsSection.jsx-694307654{position:relative;height:560px;}.explanation.jsx-694307654{border-bottom:1px solid #ddd;margin-bottom:20px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.explanation.jsx-694307654:last-child{border:none;}.attributionAvatar.jsx-694307654{width:30px;border-radius:50px;display:inline-block;position:relative;top:5px;}.attributionUsername.jsx-694307654{display:inline-block;margin-left:10px;}.explanationMeat.jsx-694307654{padding-bottom:5px;font-size:30px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.explanationActionBar.jsx-694307654{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-size:20px;text-align:center;color:white;}.explanationActionButton.jsx-694307654{display:inline-block;-webkit-transition:0.3s;transition:0.3s;}.explanationActionButton.jsx-694307654:nth-of-type(2){margin-left:35px;}.explanationActionButton.jsx-694307654 img.jsx-694307654{display:inline-block;width:45px;position:relative;top:15px;z-index:1;}.explanationActionButton.jsx-694307654 p.jsx-694307654{display:inline-block;padding:10px 30px 10px 30px;border-radius:20px;margin:0;}.get-it-button.jsx-694307654 p.jsx-694307654{background-color:#A3D066;}.get-it-button.jsx-694307654 img.jsx-694307654{position:relative;left:26px;}.dont-get-it-button.jsx-694307654 p.jsx-694307654{background-color:#6EC3E9;}.dont-get-it-button.jsx-694307654 img.jsx-694307654{position:relative;right:26px;}.explanationActionButton.jsx-694307654:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-filter:brightness(115%);filter:brightness(115%);cursor:pointer;}.explanationActionButton.jsx-694307654:active.jsx-694307654:first-child{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.score.jsx-694307654{margin-right:10px;color:#bbb;}.conceptName.jsx-694307654{font-weight:bold;font-size:24px;}.link.jsx-694307654{cursor:pointer;}.link.jsx-694307654:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-694307654:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9Qcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHdCLEFBR21DLEFBSVcsQUFRakIsQUFHRCxBQU9VLEFBSUYsQUFLRCxBQU1HLEFBSUosQUFHSSxBQU9BLEFBTUksQUFHUCxBQUlPLEFBR1AsQUFJRyxBQU94QixBQUVxQixBQUlELEFBSUgsQUFHVSxBQUdBLFdBOUVMLENBSHJCLEdBNEVBLEVBL0NBLEFBMkNpQixDQXBGRixBQTRESCxBQU9DLEFBYUEsQ0F0REksRUFKRSxBQWVGLEFBT0osQUFPaUIsSUFNOUIsQUFPQSxHQUhBLENBekRxQixBQWdFckIsQUFhQSxDQWpFdUIsQ0FmdkIsQ0E0Q29CLEFBd0NwQixFQTFEYyxJQUpkLFVBbEJjLENBK0NPLENBTlYsQ0E3QlMsS0EwRXBCLEFBR0EsR0EvQ1ksQ0F6Q0csQ0FnQ2YsT0FlVyxDQW5DRCxBQThCVixFQWpCaUIsSUF3Q1MsRUFwRDFCLEFBbUNBLFNBdEJvQixDQTZDcEIsaUJBNUNjLENBTGQsV0FNQSxrQkEzQlMseUJBaUVpQixRQWhFRixnREFpRVAsZUFDakIsZUFqRUEiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9jb21wb25lbnRzL1Byb2ZpbGVFeHBsYW5hdGlvbnNTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcbmltcG9ydCB7IGFkZFZvdGUgfSBmcm9tICcuL0ZpcmViYXNlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuXG5jbGFzcyBFeHBsYW5hdGlvbnNTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9nZ2VkSW5Vc2VyOiAnQGJhcmFja29iYW1hJ1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZVZvdGUgPSB0aGlzLmhhbmRsZVZvdGUuYmluZCh0aGlzKVxuICB9XG4gIGFzeW5jIGhhbmRsZVZvdGUodm90ZSwgZXhwbGFuYXRpb25JRCkge1xuICAgIGF3YWl0IGFkZFZvdGUodm90ZSwgdGhpcy5zdGF0ZS5sb2dnZWRJblVzZXIsIGV4cGxhbmF0aW9uSUQpXG4gICAgYXdhaXQgdGhpcy5wcm9wcy5wYXJlbnRIYW5kbGVWb3RlKClcbiAgICBpZiAodm90ZSA9PSAtMSkge1xuICAgICAgdGhpcy5wcm9wcy5pbmNyZW1lbnRFeHBsYW5hdGlvbigpXG4gICAgfVxuICAgIGF3YWl0IHRoaXMucHJvcHMuaGFuZGxlVWRhdGluZ0Rpc3BsYXllZFNjb3JlcygpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uc1NlY3Rpb25cIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uXCIga2V5PXtgZXhwbGFuYXRpb24tJHt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5pZH1gfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJvZmlsZXBhZ2UgJiZcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2V4cGxhaW50aGlzLyR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uY29uY2VwdH1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluayBjb25jZXB0TmFtZVwiPntgJHt0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5hdXRob3J9IGV4cGxhaW5zICR7dGhpcy5wcm9wcy5jdXJyZW50RXhwbGFuYXRpb24uY29uY2VwdH1gfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIXRoaXMucHJvcHMucHJvZmlsZXBhZ2UgJiZcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2V4cGxhaW5lci8ke3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmF1dGhvcn1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb24gbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uQXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+e3RoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25NZWF0XCI+XG4gICAgICAgICAgICAgICAgIHtwYXJzZSh0aGlzLnByb3BzLmN1cnJlbnRFeHBsYW5hdGlvbi5leHBsYW5hdGlvbil9XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25BY3Rpb25CYXJcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZXQtaXQtYnV0dG9uIGV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVWb3RlKDEsIHRoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dldC1pdC1jYXQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICA8cD5BSEEhIFdPVyEgWUlQUEVFISBJIGdldCBpdCBub3cuPC9wPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb250LWdldC1pdC1idXR0b24gZXhwbGFuYXRpb25BY3Rpb25CdXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVZvdGUoLTEsIHRoaXMucHJvcHMuY3VycmVudEV4cGxhbmF0aW9uLmlkKX0gPlxuICAgICAgICAgICAgICAgICAgIDxwPk5haCwgZXhwbGFpbiBpdCB0byBtZSBhIGRpZmZlcmVudCB3YXkuPC9wPlxuICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kb250LWdldC1pdC1jYXQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uc1NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbk1lYXQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CYXIge1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuM3M7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25BY3Rpb25CdXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbkFjdGlvbkJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNEMDY2O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5nZXQtaXQtYnV0dG9uIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRvbnQtZ2V0LWl0LWJ1dHRvbiBwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkVDM0U5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kb250LWdldC1pdC1idXR0b24gaW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uQWN0aW9uQnV0dG9uOmFjdGl2ZTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zY29yZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmJiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb25jZXB0TmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbGFuYXRpb25zU2VjdGlvblxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/ProfileExplanationsSection.js */"));
        }
      }
    }
  }]);

  return ExplanationsSection;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplanationsSection);

/***/ }),

/***/ "./pages/explainer/[id].js":
/*!*********************************!*\
  !*** ./pages/explainer/[id].js ***!
  \*********************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_TopWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/TopWrapper */ "./components/TopWrapper.js");
/* harmony import */ var _components_MenuContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/MenuContainer */ "./components/MenuContainer.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ProfileExplanationsSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ProfileExplanationsSection */ "./components/ProfileExplanationsSection.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainer/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









var Explainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Explainer, _React$Component);

  function Explainer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Explainer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Explainer).call(this, props));
    _this.state = {
      data: [],
      userPoints: {}
    };
    var router = _this.props.router;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Explainer, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                router = this.props.router;
                _context.t0 = this;
                _context.next = 4;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_13__["getUsersExplanations"])(router.query.id);

              case 4:
                _context.t1 = _context.sent;
                _context.next = 7;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_13__["getUserPoints"])(router.query.id);

              case 7:
                _context.t2 = _context.sent;
                _context.t3 = {
                  data: _context.t1,
                  userPoints: _context.t2
                };

                _context.t0.setState.call(_context.t0, _context.t3);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "parentHandleVote",
    value: function () {
      var _parentHandleVote = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                router = this.props.router;
                _context2.t0 = this;
                _context2.next = 4;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_13__["getUsersExplanations"])(router.query.id);

              case 4:
                _context2.t1 = _context2.sent;
                _context2.next = 7;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_13__["getUserPoints"])(router.query.id);

              case 7:
                _context2.t2 = _context2.sent;
                _context2.t3 = {
                  data: _context2.t1,
                  userPoints: _context2.t2
                };

                _context2.t0.setState.call(_context2.t0, _context2.t3);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function parentHandleVote() {
        return _parentHandleVote.apply(this, arguments);
      }

      return parentHandleVote;
    }()
  }, {
    key: "render",
    value: function render() {
      {
        var router = this.props.router;

        if (!this.state.data.explanations || !this.state.userPoints.points) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-1441866253" + " " + "header",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-1441866253" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, __jsx("img", {
            src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
            className: "jsx-1441866253" + " " + "avatar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          })), __jsx("div", {
            className: "jsx-1441866253" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-1441866253" + " " + "username",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, router.query.id), __jsx("div", {
            className: "jsx-1441866253" + " " + "header-stats",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-1441866253" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-1441866253" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, "emoji_events_rounded"), __jsx("p", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "Leaderboard Place \u2022 #15")), __jsx("div", {
            className: "jsx-1441866253" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-1441866253" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, "emoji_people_rounded"), __jsx("p", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "Contributed Explanations \u2022 ", this.state.userPoints.numContributedExplanations)), __jsx("div", {
            className: "jsx-1441866253" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-1441866253" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, "emoji_flags_rounded"), __jsx("p", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, "Points \u2022 ", this.state.userPoints.points))))), __jsx("div", {
            className: "jsx-1441866253" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }, "All of ".concat(router.query.id, "'s explanations:")), __jsx(_components_ProfileExplanationsSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
            profilepage: true,
            handleUdatingDisplayedScores: this.handleUdatingDisplayedScores,
            incrementExplanation: this.incrementExplanation,
            currentExplanation: this.state.data.explanations[this.state.explanationIndex],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
            id: "1441866253",
            __self: this
          }, ".avatar.jsx-1441866253{border-radius:100px;width:100px;}.column.jsx-1441866253{-webkit-flex:50%;-ms-flex:50%;flex:50%;display:inline-block;}.header-stat-item.jsx-1441866253{display:inline-block;}.header-stat-item.jsx-1441866253 p.jsx-1441866253{display:inline-block;margin-left:5px;}.header-stat-item.jsx-1441866253 i.jsx-1441866253{width:24px;position:relative;top:5px;}.header-stat-item.jsx-1441866253:not(:first-of-type){margin-left:35px;}.header.jsx-1441866253{border-bottom:2px solid #ddd;}.username.jsx-1441866253{margin-bottom:5px;margin-top:0px;}.column.jsx-1441866253:not(:first-of-type){margin-left:15px;position:relative;bottom:5px;}.explanationsSection.jsx-1441866253 p.jsx-1441866253{padding-bottom:10px;border-bottom:1px solid #ddd;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUV3QixBQUdxQyxBQUlYLEFBSVksQUFHQSxBQUlWLEFBS00sQUFHWSxBQUdYLEFBSUQsQUFLRyxXQW5CRixNQUtwQixBQVVvQixDQUpILEVBMUJILEFBbUNpQixDQTNCL0IsQUFHa0IsUUFLUixBQU9WLEdBdEJBLENBMEJBLEVBSWEsRUFuQmIsQUFLQSxFQWJ1QixPQTRCdkIsR0FJbUIsV0EvQm5CLE1BZ0NBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVG9wV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RvcFdyYXBwZXInXG5pbXBvcnQgTWVudUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lbnVDb250YWluZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBQcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVFeHBsYW5hdGlvbnNTZWN0aW9uJ1xuaW1wb3J0IHsgZ2V0VXNlcnNFeHBsYW5hdGlvbnMsIGdldFVzZXJQb2ludHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBFeHBsYWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIHVzZXJQb2ludHM6IHt9XG4gICAgfVxuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXJzRXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZCksXG4gICAgICB1c2VyUG9pbnRzOiBhd2FpdCBnZXRVc2VyUG9pbnRzKHJvdXRlci5xdWVyeS5pZClcbiAgICB9KVxuICB9XG4gIGFzeW5jIHBhcmVudEhhbmRsZVZvdGUoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXJzRXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZCksXG4gICAgICB1c2VyUG9pbnRzOiBhd2FpdCBnZXRVc2VyUG9pbnRzKHJvdXRlci5xdWVyeS5pZClcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB7XG4gICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmRhdGEuZXhwbGFuYXRpb25zIHx8ICF0aGlzLnN0YXRlLnVzZXJQb2ludHMucG9pbnRzKSB7XG4gICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRvcFdyYXBwZXI+XG4gICAgICAgICAgICA8TWVudUNvbnRhaW5lciAvPlxuICAgICAgICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPntyb3V0ZXIucXVlcnkuaWR9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfZXZlbnRzX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+TGVhZGVyYm9hcmQgUGxhY2Ug4oCiICMxNTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfcGVvcGxlX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+Q29udHJpYnV0ZWQgRXhwbGFuYXRpb25zIOKAoiB7dGhpcy5zdGF0ZS51c2VyUG9pbnRzLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfZmxhZ3Nfcm91bmRlZDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5Qb2ludHMg4oCiIHt0aGlzLnN0YXRlLnVzZXJQb2ludHMucG9pbnRzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25zU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwPntgQWxsIG9mICR7cm91dGVyLnF1ZXJ5LmlkfSdzIGV4cGxhbmF0aW9uczpgfTwvcD5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUV4cGxhbmF0aW9uc1NlY3Rpb24gIHByb2ZpbGVwYWdlPXt0cnVlfSBoYW5kbGVVZGF0aW5nRGlzcGxheWVkU2NvcmVzPXt0aGlzLmhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXN9IGluY3JlbWVudEV4cGxhbmF0aW9uPXt0aGlzLmluY3JlbWVudEV4cGxhbmF0aW9ufSBjdXJyZW50RXhwbGFuYXRpb249e3RoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnNbdGhpcy5zdGF0ZS5leHBsYW5hdGlvbkluZGV4XX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvVG9wV3JhcHBlcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW06bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW46bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbnNTZWN0aW9uIHAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihFeHBsYWluZXIpXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainer/[id].js */"));
        }
      }
    }
  }]);

  return Explainer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(Explainer));

/***/ })

})
//# sourceMappingURL=[id].js.587bfe68cf6b63fc4a76.hot-update.js.map