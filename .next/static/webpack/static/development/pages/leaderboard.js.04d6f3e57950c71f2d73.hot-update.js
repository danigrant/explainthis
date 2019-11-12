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
            className: "jsx-4232215405",
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
            className: "jsx-4232215405" + " " + "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, "Leaderboard"), __jsx("table", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, __jsx("th", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, "Rank"), __jsx("th", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, "Name"), __jsx("th", {
            onClick: this.handleRankByPoints,
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "Points"), __jsx("th", {
            onClick: this.handleRankByNumExplanations,
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "Contributed")), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "1"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, this.state.leaderboard[0].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, this.state.leaderboard[0].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, this.state.leaderboard[0].numContributedExplanations)), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, "2"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, this.state.leaderboard[1].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, this.state.leaderboard[1].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, this.state.leaderboard[1].numContributedExplanations)), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, "3"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, this.state.leaderboard[2].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, this.state.leaderboard[2].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, this.state.leaderboard[2].numContributedExplanations)), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }, "4"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, this.state.leaderboard[3].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, this.state.leaderboard[3].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }, this.state.leaderboard[3].numContributedExplanations)), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, "5"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, this.state.leaderboard[4].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, this.state.leaderboard[4].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, this.state.leaderboard[4].numContributedExplanations)), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, "6"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, this.state.leaderboard[5].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, this.state.leaderboard[5].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, this.state.leaderboard[5].numContributedExplanations)), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, "7"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, this.state.leaderboard[6].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, this.state.leaderboard[6].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, this.state.leaderboard[6].numContributedExplanations)), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, "8"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, this.state.leaderboard[7].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }, this.state.leaderboard[7].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          }, this.state.leaderboard[7].numContributedExplanations)), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, "9"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, this.state.leaderboard[8].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, this.state.leaderboard[8].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, this.state.leaderboard[8].numContributedExplanations)), __jsx("tr", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }, __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: this
          }, "10"), __jsx("td", {
            className: "jsx-4232215405",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, this.state.leaderboard[9].username), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, this.state.leaderboard[9].points), __jsx("td", {
            className: "jsx-4232215405" + " " + "centered-table-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, this.state.leaderboard[9].numContributedExplanations))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "4232215405",
            __self: this
          }, ".title.jsx-4232215405{text-align:center;padding:10px;margin-bottom:20px;font-weight:bold;width:750px;font-size:28px;border-radius:4px 4px 0 0;margin:0 auto;}table.jsx-4232215405{background-color:white;width:750px;text-align:left;border-collapse:collapse;font-size:24px;border-radius:0 0 2px 2px;margin:0 auto;}tr.jsx-4232215405{border:none;}td.jsx-4232215405{border-top:solid 1px #ddd;border-bottom:solid 1px #ddd;padding:8px;}th.jsx-4232215405{padding:8px;}.centered-table-row.jsx-4232215405{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvbGVhZGVyYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0h3QixBQUdtQyxBQVVLLEFBU1gsQUFHYyxBQUtkLEFBSWYsWUFYQyxBQVFBLE1BM0JlLEFBOEJmLEtBcEJjLEdBWWlCLEtBckJWLElBVUgsZUFUQyxDQVVRLElBV2IsWUFwQkEsQUFxQmQsU0FYaUIsR0FUQSxZQVVXLEdBVEEsdUJBVVosR0FUQSxXQVVoQixHQVRBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvbGVhZGVyYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVG9wV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL1RvcFdyYXBwZXInXG5pbXBvcnQgTWVudUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL01lbnVDb250YWluZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCB7IGdldFBvaW50c0xlYWRlcmJvYXJkLCBnZXROdW1FeHBsYW5hdGlvbnNMZWFkZXJib2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWJhc2UnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnXG5cblxuY2xhc3MgTGVhZGVyYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsZWFkZXJib2FyZDogW11cbiAgICB9XG4gICAgdGhpcy5oYW5kbGVSYW5rQnlQb2ludHMgPSB0aGlzLmhhbmRsZVJhbmtCeVBvaW50cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVSYW5rQnlOdW1FeHBsYW5hdGlvbnMgPSB0aGlzLmhhbmRsZVJhbmtCeU51bUV4cGxhbmF0aW9ucy5iaW5kKHRoaXMpXG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGZ1dHVyZUxlYWRlcmJvYXJkID0gYXdhaXQgZ2V0UG9pbnRzTGVhZGVyYm9hcmQoKVxuICAgIGNvbnNvbGUubG9nKGZ1dHVyZUxlYWRlcmJvYXJkKTsgLy8gdGhpcyBpcyB0aGUgZnVsbCBhcnJheVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGVhZGVyYm9hcmQ6IGZ1dHVyZUxlYWRlcmJvYXJkXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxlYWRlcmJvYXJkKTsgLy8gdGhpcyBpcyBhbiBlbXB0eSBhcnJheVxuICB9XG4gIGFzeW5jIGhhbmRsZVJhbmtCeVBvaW50cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxlYWRlcmJvYXJkOiBhd2FpdCBnZXRQb2ludHNMZWFkZXJib2FyZCgpXG4gICAgfSlcbiAgfVxuICBhc3luYyBoYW5kbGVSYW5rQnlOdW1FeHBsYW5hdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFkZXJib2FyZDogYXdhaXQgZ2V0TnVtRXhwbGFuYXRpb25zTGVhZGVyYm9hcmQoKVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxlYWRlcmJvYXJkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRvcFdyYXBwZXI+XG4gICAgICAgICAgICA8TWVudUNvbnRhaW5lciAvPlxuICAgICAgICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIExlYWRlcmJvYXJkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UmFuazwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmFua0J5UG9pbnRzfT5Qb2ludHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCIgb25DbGljaz17dGhpcy5oYW5kbGVSYW5rQnlOdW1FeHBsYW5hdGlvbnN9PkNvbnRyaWJ1dGVkPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzBdLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFswXS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzBdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+MjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFsxXS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbMV0ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFsxXS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbMl0udXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzJdLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbMl0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD40PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzNdLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFszXS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzNdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+NTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs0XS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbNF0ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs0XS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjY8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbNV0udXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzVdLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbNV0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD43PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzZdLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs2XS5wb2ludHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzZdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+ODwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs3XS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbN10ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs3XS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjk8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbOF0udXNlcm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNlbnRlcmVkLXRhYmxlLXJvd1wiPnt0aGlzLnN0YXRlLmxlYWRlcmJvYXJkWzhdLnBvaW50c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbOF0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4xMDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs5XS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY2VudGVyZWQtdGFibGUtcm93XCI+e3RoaXMuc3RhdGUubGVhZGVyYm9hcmRbOV0ucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjZW50ZXJlZC10YWJsZS1yb3dcIj57dGhpcy5zdGF0ZS5sZWFkZXJib2FyZFs5XS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvVG9wV3JhcHBlcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZGRkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGRkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jZW50ZXJlZC10YWJsZS1yb3cge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVhZGVyYm9hcmRcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/leaderboard.js */"));
        }
      }
    }
  }]);

  return Leaderboard;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard);

/***/ })

})
//# sourceMappingURL=leaderboard.js.04d6f3e57950c71f2d73.hot-update.js.map