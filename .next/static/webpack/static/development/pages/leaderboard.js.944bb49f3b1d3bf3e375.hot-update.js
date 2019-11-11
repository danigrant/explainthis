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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");








var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/leaderboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




 // [
//   {
//     username: '@BoFirstDog',
//     points: 32,
//     numContributedExplanations: 9,
//     id: 'iq4HKkEUAHX7510iGXh5'
//   },
//   {
//     username: '@barackobama',
//     points: 9,
//     numContributedExplanations: 4,
//     id: '0oKwLoIQhAIzskcLpdAP'
//   },
//   {
//     username: '@thedanigrant',
//     points: 5,
//     numContributedExplanations: 3,
//     id: 'gxr7bAHgVA8QdhskxJVA'
//   }
// ]

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
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__["getPointsLeaderboard"])();

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
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__["getPointsLeaderboard"])();

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
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__["getNumExplanationsLeaderboard"])();

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
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          });
        } else {
          {
            console.log(this.props.leaderboard);
          }
          return __jsx("div", {
            className: "jsx-1243963777",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-1243963777" + " " + "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, "Leaderboard"), __jsx("table", {
            className: "jsx-1243963777",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, __jsx("tr", {
            className: "jsx-1243963777",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, __jsx("th", {
            className: "jsx-1243963777",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, "Rank"), __jsx("th", {
            className: "jsx-1243963777",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, "Name"), __jsx("th", {
            className: "jsx-1243963777",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, "Points"), __jsx("th", {
            className: "jsx-1243963777",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, "# Explanations")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "2368827258",
            __self: this
          }, ".title.jsx-1243963777{text-align:center;background-color:#00AFDD;padding:10px;color:white;font-weight:bold;font-size:28px;border-radius:4px 4px 0 0;}table.jsx-1243963777{background-color:white;width:100%;text-align:left;border-collapse:collapse;font-size:24px;border-radius:0 0 2px 2px;}tr.jsx-1243963777{border:none;}td.jsx-1243963777{border-top:solid 1px #ddd;border-bottom:solid 1px #ddd;padding:8px;}th.jsx-1243963777{padding:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvbGVhZGVyYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEV3QixBQUdtQyxBQVNLLEFBUVgsQUFHYyxBQUtkLFlBUGQsQUFRQSxNQXpCMkIsS0FTZCxHQVdrQixRQVZiLFNBVEgsT0FVWSxLQVViLENBbkJBLFdBb0JkLENBbkJtQixPQVNGLFVBUkEsS0FTVyxVQVJBLGdCQVM1QixVQVJBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvbGVhZGVyYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgeyBnZXRQb2ludHNMZWFkZXJib2FyZCwgZ2V0TnVtRXhwbGFuYXRpb25zTGVhZGVyYm9hcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuXG4vLyBbXG4vLyAgIHtcbi8vICAgICB1c2VybmFtZTogJ0BCb0ZpcnN0RG9nJyxcbi8vICAgICBwb2ludHM6IDMyLFxuLy8gICAgIG51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zOiA5LFxuLy8gICAgIGlkOiAnaXE0SEtrRVVBSFg3NTEwaUdYaDUnXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB1c2VybmFtZTogJ0BiYXJhY2tvYmFtYScsXG4vLyAgICAgcG9pbnRzOiA5LFxuLy8gICAgIG51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zOiA0LFxuLy8gICAgIGlkOiAnMG9Ld0xvSVFoQUl6c2tjTHBkQVAnXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB1c2VybmFtZTogJ0B0aGVkYW5pZ3JhbnQnLFxuLy8gICAgIHBvaW50czogNSxcbi8vICAgICBudW1Db250cmlidXRlZEV4cGxhbmF0aW9uczogMyxcbi8vICAgICBpZDogJ2d4cjdiQUhnVkE4UWRoc2t4SlZBJ1xuLy8gICB9XG4vLyBdXG5cblxuY2xhc3MgTGVhZGVyYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsZWFkZXJib2FyZDogW11cbiAgICB9XG4gICAgdGhpcy5oYW5kbGVSYW5rQnlQb2ludHMgPSB0aGlzLmhhbmRsZVJhbmtCeVBvaW50cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVSYW5rQnlOdW1FeHBsYW5hdGlvbnMgPSB0aGlzLmhhbmRsZVJhbmtCeU51bUV4cGxhbmF0aW9ucy5iaW5kKHRoaXMpXG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGZ1dHVyZUxlYWRlcmJvYXJkID0gYXdhaXQgZ2V0UG9pbnRzTGVhZGVyYm9hcmQoKVxuICAgIGNvbnNvbGUubG9nKGZ1dHVyZUxlYWRlcmJvYXJkKTsgLy8gdGhpcyBpcyB0aGUgZnVsbCBhcnJheVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGVhZGVyYm9hcmQ6IGZ1dHVyZUxlYWRlcmJvYXJkXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxlYWRlcmJvYXJkKTsgLy8gdGhpcyBpcyBhbiBlbXB0eSBhcnJheVxuICB9XG4gIGFzeW5jIGhhbmRsZVJhbmtCeVBvaW50cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxlYWRlcmJvYXJkOiBhd2FpdCBnZXRQb2ludHNMZWFkZXJib2FyZCgpXG4gICAgfSlcbiAgfVxuICBhc3luYyBoYW5kbGVSYW5rQnlOdW1FeHBsYW5hdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFkZXJib2FyZDogYXdhaXQgZ2V0TnVtRXhwbGFuYXRpb25zTGVhZGVyYm9hcmQoKVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxlYWRlcmJvYXJkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmxlYWRlcmJvYXJkKSB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICBMZWFkZXJib2FyZFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aD5SYW5rPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPiMgRXhwbGFuYXRpb25zPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUZERDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNkZGQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZGQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9pLmtpbmphLWltZy5jb20vZ2F3a2VyLW1lZGlhL2ltYWdlL3VwbG9hZC9tNnp0d2thd3Z5cGdybm45azVvMy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVhZGVyYm9hcmRcblxuLy8gPHRyPlxuLy8gICA8dGQ+MTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFswXS51c2VybmFtZX08L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbMF0ucG9pbnRzfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFswXS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuLy8gPC90cj5cbi8vIDx0cj5cbi8vICAgPHRkPjI8L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbMV0udXNlcm5hbWV9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzFdLnBvaW50c308L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbMV0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbi8vIDwvdHI+XG4vLyA8dHI+XG4vLyAgIDx0ZD4zPC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzJdLnVzZXJuYW1lfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFsyXS5wb2ludHN9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzJdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4vLyA8L3RyPlxuLy8gPHRyPlxuLy8gICA8dGQ+NDwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFszXS51c2VybmFtZX08L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbM10ucG9pbnRzfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFszXS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuLy8gPC90cj5cbi8vIDx0cj5cbi8vICAgPHRkPjU8L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbNF0udXNlcm5hbWV9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzRdLnBvaW50c308L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbNF0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbi8vIDwvdHI+XG4vLyA8dHI+XG4vLyAgIDx0ZD42PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzVdLnVzZXJuYW1lfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFs1XS5wb2ludHN9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzVdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4vLyA8L3RyPlxuLy8gPHRyPlxuLy8gICA8dGQ+NzwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFs2XS51c2VybmFtZX08L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbNl0ucG9pbnRzfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFs2XS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuLy8gPC90cj5cbi8vIDx0cj5cbi8vICAgPHRkPjg8L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbN10udXNlcm5hbWV9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzddLnBvaW50c308L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbN10ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbi8vIDwvdHI+XG4vLyA8dHI+XG4vLyAgIDx0ZD45PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzhdLnVzZXJuYW1lfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFs4XS5wb2ludHN9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzhdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4vLyA8L3RyPlxuLy8gPHRyPlxuLy8gICA8dGQ+MTA8L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbOV0udXNlcm5hbWV9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzldLnBvaW50c308L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbOV0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbi8vIDwvdHI+XG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/leaderboard.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "1680885874",
            __self: this
          }, "body{background:url('https://i.kinja-img.com/gawker-media/image/upload/m6ztwkawvypgrnn9k5o3.jpg') no-repeat center center fixed;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvbGVhZGVyYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEcrQixBQUc0SSwySEFDckcsc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvbGVhZGVyYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgeyBnZXRQb2ludHNMZWFkZXJib2FyZCwgZ2V0TnVtRXhwbGFuYXRpb25zTGVhZGVyYm9hcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuXG4vLyBbXG4vLyAgIHtcbi8vICAgICB1c2VybmFtZTogJ0BCb0ZpcnN0RG9nJyxcbi8vICAgICBwb2ludHM6IDMyLFxuLy8gICAgIG51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zOiA5LFxuLy8gICAgIGlkOiAnaXE0SEtrRVVBSFg3NTEwaUdYaDUnXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB1c2VybmFtZTogJ0BiYXJhY2tvYmFtYScsXG4vLyAgICAgcG9pbnRzOiA5LFxuLy8gICAgIG51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zOiA0LFxuLy8gICAgIGlkOiAnMG9Ld0xvSVFoQUl6c2tjTHBkQVAnXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICB1c2VybmFtZTogJ0B0aGVkYW5pZ3JhbnQnLFxuLy8gICAgIHBvaW50czogNSxcbi8vICAgICBudW1Db250cmlidXRlZEV4cGxhbmF0aW9uczogMyxcbi8vICAgICBpZDogJ2d4cjdiQUhnVkE4UWRoc2t4SlZBJ1xuLy8gICB9XG4vLyBdXG5cblxuY2xhc3MgTGVhZGVyYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsZWFkZXJib2FyZDogW11cbiAgICB9XG4gICAgdGhpcy5oYW5kbGVSYW5rQnlQb2ludHMgPSB0aGlzLmhhbmRsZVJhbmtCeVBvaW50cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVSYW5rQnlOdW1FeHBsYW5hdGlvbnMgPSB0aGlzLmhhbmRsZVJhbmtCeU51bUV4cGxhbmF0aW9ucy5iaW5kKHRoaXMpXG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGZ1dHVyZUxlYWRlcmJvYXJkID0gYXdhaXQgZ2V0UG9pbnRzTGVhZGVyYm9hcmQoKVxuICAgIGNvbnNvbGUubG9nKGZ1dHVyZUxlYWRlcmJvYXJkKTsgLy8gdGhpcyBpcyB0aGUgZnVsbCBhcnJheVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGVhZGVyYm9hcmQ6IGZ1dHVyZUxlYWRlcmJvYXJkXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxlYWRlcmJvYXJkKTsgLy8gdGhpcyBpcyBhbiBlbXB0eSBhcnJheVxuICB9XG4gIGFzeW5jIGhhbmRsZVJhbmtCeVBvaW50cygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxlYWRlcmJvYXJkOiBhd2FpdCBnZXRQb2ludHNMZWFkZXJib2FyZCgpXG4gICAgfSlcbiAgfVxuICBhc3luYyBoYW5kbGVSYW5rQnlOdW1FeHBsYW5hdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsZWFkZXJib2FyZDogYXdhaXQgZ2V0TnVtRXhwbGFuYXRpb25zTGVhZGVyYm9hcmQoKVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmxlYWRlcmJvYXJkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmxlYWRlcmJvYXJkKSB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICBMZWFkZXJib2FyZFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aD5SYW5rPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPiMgRXhwbGFuYXRpb25zPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUZERDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNkZGQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZGQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9pLmtpbmphLWltZy5jb20vZ2F3a2VyLW1lZGlhL2ltYWdlL3VwbG9hZC9tNnp0d2thd3Z5cGdybm45azVvMy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVhZGVyYm9hcmRcblxuLy8gPHRyPlxuLy8gICA8dGQ+MTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFswXS51c2VybmFtZX08L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbMF0ucG9pbnRzfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFswXS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuLy8gPC90cj5cbi8vIDx0cj5cbi8vICAgPHRkPjI8L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbMV0udXNlcm5hbWV9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzFdLnBvaW50c308L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbMV0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbi8vIDwvdHI+XG4vLyA8dHI+XG4vLyAgIDx0ZD4zPC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzJdLnVzZXJuYW1lfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFsyXS5wb2ludHN9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzJdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4vLyA8L3RyPlxuLy8gPHRyPlxuLy8gICA8dGQ+NDwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFszXS51c2VybmFtZX08L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbM10ucG9pbnRzfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFszXS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuLy8gPC90cj5cbi8vIDx0cj5cbi8vICAgPHRkPjU8L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbNF0udXNlcm5hbWV9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzRdLnBvaW50c308L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbNF0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbi8vIDwvdHI+XG4vLyA8dHI+XG4vLyAgIDx0ZD42PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzVdLnVzZXJuYW1lfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFs1XS5wb2ludHN9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzVdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4vLyA8L3RyPlxuLy8gPHRyPlxuLy8gICA8dGQ+NzwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFs2XS51c2VybmFtZX08L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbNl0ucG9pbnRzfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFs2XS5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3RkPlxuLy8gPC90cj5cbi8vIDx0cj5cbi8vICAgPHRkPjg8L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbN10udXNlcm5hbWV9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzddLnBvaW50c308L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbN10ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbi8vIDwvdHI+XG4vLyA8dHI+XG4vLyAgIDx0ZD45PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzhdLnVzZXJuYW1lfTwvdGQ+XG4vLyAgIDx0ZD57dGhpcy5wcm9wcy5sZWFkZXJib2FyZFs4XS5wb2ludHN9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzhdLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvdGQ+XG4vLyA8L3RyPlxuLy8gPHRyPlxuLy8gICA8dGQ+MTA8L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbOV0udXNlcm5hbWV9PC90ZD5cbi8vICAgPHRkPnt0aGlzLnByb3BzLmxlYWRlcmJvYXJkWzldLnBvaW50c308L3RkPlxuLy8gICA8dGQ+e3RoaXMucHJvcHMubGVhZGVyYm9hcmRbOV0ubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC90ZD5cbi8vIDwvdHI+XG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/leaderboard.js */"));
        }
      }
    }
  }]);

  return Leaderboard;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard); // <tr>
//   <td>1</td>
//   <td>{this.props.leaderboard[0].username}</td>
//   <td>{this.props.leaderboard[0].points}</td>
//   <td>{this.props.leaderboard[0].numContributedExplanations}</td>
// </tr>
// <tr>
//   <td>2</td>
//   <td>{this.props.leaderboard[1].username}</td>
//   <td>{this.props.leaderboard[1].points}</td>
//   <td>{this.props.leaderboard[1].numContributedExplanations}</td>
// </tr>
// <tr>
//   <td>3</td>
//   <td>{this.props.leaderboard[2].username}</td>
//   <td>{this.props.leaderboard[2].points}</td>
//   <td>{this.props.leaderboard[2].numContributedExplanations}</td>
// </tr>
// <tr>
//   <td>4</td>
//   <td>{this.props.leaderboard[3].username}</td>
//   <td>{this.props.leaderboard[3].points}</td>
//   <td>{this.props.leaderboard[3].numContributedExplanations}</td>
// </tr>
// <tr>
//   <td>5</td>
//   <td>{this.props.leaderboard[4].username}</td>
//   <td>{this.props.leaderboard[4].points}</td>
//   <td>{this.props.leaderboard[4].numContributedExplanations}</td>
// </tr>
// <tr>
//   <td>6</td>
//   <td>{this.props.leaderboard[5].username}</td>
//   <td>{this.props.leaderboard[5].points}</td>
//   <td>{this.props.leaderboard[5].numContributedExplanations}</td>
// </tr>
// <tr>
//   <td>7</td>
//   <td>{this.props.leaderboard[6].username}</td>
//   <td>{this.props.leaderboard[6].points}</td>
//   <td>{this.props.leaderboard[6].numContributedExplanations}</td>
// </tr>
// <tr>
//   <td>8</td>
//   <td>{this.props.leaderboard[7].username}</td>
//   <td>{this.props.leaderboard[7].points}</td>
//   <td>{this.props.leaderboard[7].numContributedExplanations}</td>
// </tr>
// <tr>
//   <td>9</td>
//   <td>{this.props.leaderboard[8].username}</td>
//   <td>{this.props.leaderboard[8].points}</td>
//   <td>{this.props.leaderboard[8].numContributedExplanations}</td>
// </tr>
// <tr>
//   <td>10</td>
//   <td>{this.props.leaderboard[9].username}</td>
//   <td>{this.props.leaderboard[9].points}</td>
//   <td>{this.props.leaderboard[9].numContributedExplanations}</td>
// </tr>

/***/ })

})
//# sourceMappingURL=leaderboard.js.944bb49f3b1d3bf3e375.hot-update.js.map