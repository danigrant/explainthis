webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./pages/leaderboard.js":
/*!******************************!*\
  !*** ./pages/leaderboard.js ***!
  \******************************/
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
/* harmony import */ var _components_TopWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TopWrapper */ "./components/TopWrapper.js");
/* harmony import */ var _components_MenuContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MenuContainer */ "./components/MenuContainer.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");








var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/leaderboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;







var Leaderboard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Leaderboard, _React$Component);

  function Leaderboard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Leaderboard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Leaderboard).call(this, props));
    _this.state = {
      leaderboard: []
    };
    _this.handleRankByPoints = _this.handleRankByPoints.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleRankByNumExplanations = _this.handleRankByNumExplanations.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Leaderboard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var futureLeaderboard;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_13__["getPointsLeaderboard"])();

              case 2:
                futureLeaderboard = _context.sent;
                console.log(futureLeaderboard); // this is the full array

                this.setState({
                  leaderboard: futureLeaderboard
                });
                console.log(this.state.leaderboard); // this is an empty array

              case 6:
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
    key: "handleRankByPoints",
    value: function () {
      var _handleRankByPoints = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = this;
                _context2.next = 3;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_13__["getPointsLeaderboard"])();

              case 3:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  leaderboard: _context2.t1
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleRankByPoints() {
        return _handleRankByPoints.apply(this, arguments);
      }

      return handleRankByPoints;
    }()
  }, {
    key: "handleRankByNumExplanations",
    value: function () {
      var _handleRankByNumExplanations = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = this;
                _context3.next = 3;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_13__["getNumExplanationsLeaderboard"])();

              case 3:
                _context3.t1 = _context3.sent;
                _context3.t2 = {
                  leaderboard: _context3.t1
                };

                _context3.t0.setState.call(_context3.t0, _context3.t2);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleRankByNumExplanations() {
        return _handleRankByNumExplanations.apply(this, arguments);
      }

      return handleRankByNumExplanations;
    }()
  }, {
    key: "render",
    value: function render() {
      {
        if (this.state.leaderboard.length == 0) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            className: "jsx-781318462" + " " + "wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-781318462" + " " + "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, "Leaderboard"), __jsx("table", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, __jsx("th", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, "Rank"), __jsx("th", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, "Name"), __jsx("th", {
            onClick: this.handleRankByPoints,
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "Points"), __jsx("th", {
            onClick: this.handleRankByNumExplanations,
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "Contributed")), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "1"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, this.state.leaderboard[0].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, this.state.leaderboard[0].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, this.state.leaderboard[0].numContributedExplanations)), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, "2"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, this.state.leaderboard[1].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, this.state.leaderboard[1].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, this.state.leaderboard[1].numContributedExplanations)), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, "3"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, this.state.leaderboard[2].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, this.state.leaderboard[2].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, this.state.leaderboard[2].numContributedExplanations)), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }, "4"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, this.state.leaderboard[3].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, this.state.leaderboard[3].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }, this.state.leaderboard[3].numContributedExplanations)), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, "5"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, this.state.leaderboard[4].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, this.state.leaderboard[4].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, this.state.leaderboard[4].numContributedExplanations)), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, "6"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, this.state.leaderboard[5].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, this.state.leaderboard[5].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, this.state.leaderboard[5].numContributedExplanations)), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, "7"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, this.state.leaderboard[6].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, this.state.leaderboard[6].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, this.state.leaderboard[6].numContributedExplanations)), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, "8"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, this.state.leaderboard[7].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }, this.state.leaderboard[7].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }, this.state.leaderboard[7].numContributedExplanations)), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, "9"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, this.state.leaderboard[8].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, this.state.leaderboard[8].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, this.state.leaderboard[8].numContributedExplanations)), __jsx("tr", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, "10"), __jsx("td", {
            className: "jsx-781318462",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, this.state.leaderboard[9].username), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, this.state.leaderboard[9].points), __jsx("td", {
            className: "jsx-781318462" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, this.state.leaderboard[9].numContributedExplanations))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "781318462",
            __self: this
          }, ".wrapper.jsx-781318462{width:100%;}.title.jsx-781318462{text-align:center;padding:10px;font-weight:900;width:750px;font-size:28px;border-radius:4px 4px 0 0;margin:0 auto;margin-top:20px;margin-bottom:20px;}table.jsx-781318462{background-color:white;width:750px;text-align:left;border-collapse:collapse;font-size:24px;border-radius:0 0 2px 2px;margin:0 auto;}tr.jsx-781318462{border:none;}td.jsx-781318462{border-top:solid 1px #ddd;border-bottom:solid 1px #ddd;padding:8px;}th.jsx-781318462{padding:8px;}.centered-table-row.jsx-781318462{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvbGVhZGVyYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0h3QixBQUc0QixBQUdPLEFBV0ssQUFTWCxBQUdjLEFBS2QsQUFJZixXQWxDQyxDQXVCQSxBQVFBLE1BNUJlLEFBK0JmLEtBcEJjLEdBWWlCLEtBdEJiLElBV0EsWUFWSixJQVdhLElBV2IsSUFyQkcsUUFzQmpCLE9BckI0QixFQVVYLGVBQ1csU0FWWixjQUNFLEdBVUYsYUFUSyxDQVVyQixrQkFUQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL3BhZ2VzL2xlYWRlcmJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvcFdyYXBwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ub3BXcmFwcGVyJ1xuaW1wb3J0IE1lbnVDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51Q29udGFpbmVyJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgeyBnZXRQb2ludHNMZWFkZXJib2FyZCwgZ2V0TnVtRXhwbGFuYXRpb25zTGVhZGVyYm9hcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuXG5cbmNsYXNzIExlYWRlcmJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGVhZGVyYm9hcmQ6IFtdXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlUmFua0J5UG9pbnRzID0gdGhpcy5oYW5kbGVSYW5rQnlQb2ludHMuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUmFua0J5TnVtRXhwbGFuYXRpb25zID0gdGhpcy5oYW5kbGVSYW5rQnlOdW1FeHBsYW5hdGlvbnMuYmluZCh0aGlzKVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCBmdXR1cmVMZWFkZXJib2FyZCA9IGF3YWl0IGdldFBvaW50c0xlYWRlcmJvYXJkKClcbiAgICBjb25zb2xlLmxvZyhmdXR1cmVMZWFkZXJib2FyZCk7IC8vIHRoaXMgaXMgdGhlIGZ1bGwgYXJyYXlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxlYWRlcmJvYXJkOiBmdXR1cmVMZWFkZXJib2FyZFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5sZWFkZXJib2FyZCk7IC8vIHRoaXMgaXMgYW4gZW1wdHkgYXJyYXlcbiAgfVxuICBhc3luYyBoYW5kbGVSYW5rQnlQb2ludHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFkZXJib2FyZDogYXdhaXQgZ2V0UG9pbnRzTGVhZGVyYm9hcmQoKVxuICAgIH0pXG4gIH1cbiAgYXN5bmMgaGFuZGxlUmFua0J5TnVtRXhwbGFuYXRpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGVhZGVyYm9hcmQ6IGF3YWl0IGdldE51bUV4cGxhbmF0aW9uc0xlYWRlcmJvYXJkKClcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5sZWFkZXJib2FyZC5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8VG9wV3JhcHBlcj5cbiAgICAgICAgICAgIDxNZW51Q29udGFpbmVyIC8+XG4gICAgICAgICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgTGVhZGVyYm9hcmRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5SYW5rPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCIgb25DbGljaz17dGhpcy5oYW5kbGVSYW5rQnlQb2ludHN9PlBvaW50czwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJhbmtCeU51bUV4cGxhbmF0aW9uc30+Q29udHJpYnV0ZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbMF0udXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzBdLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbMF0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4yPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzFdLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFsxXS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzFdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFsyXS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbMl0ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFsyXS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbM10udXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzNdLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbM10ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD41PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzRdLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs0XS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzRdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+NjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs1XS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbNV0ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs1XS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjc8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbNl0udXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzZdLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbNl0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD44PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzddLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs3XS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzddLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+OTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs4XS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbOF0ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs4XS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjEwPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzldLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs5XS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzldLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Ub3BXcmFwcGVyPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2RkZDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RkZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2VudGVyZWQtdGFibGUtcm93IHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/leaderboard.js */"));
        }
      }
    }
  }]);

  return Leaderboard;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard);

/***/ })

})
//# sourceMappingURL=leaderboard.js.78ff886a2dfbfaa7881e.hot-update.js.map