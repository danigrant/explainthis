webpackHotUpdate("static/development/pages/explainer.js",{

/***/ "./pages/explainer.js":
/*!****************************!*\
  !*** ./pages/explainer.js ***!
  \****************************/
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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ProfileExplanationsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ProfileExplanationsSection */ "./components/ProfileExplanationsSection.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");







var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainer.js";

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
      data: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Explainer, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__["getUsersExplanations"])('@barackobama');

              case 3:
                _context.t1 = _context.sent;
                _context.t2 = {
                  data: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "render",
    value: function render() {
      {
        if (!this.state.data) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            className: "jsx-2905367575",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-2905367575" + " " + "header",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-2905367575" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx("img", {
            src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
            className: "jsx-2905367575" + " " + "avatar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          })), __jsx("div", {
            className: "jsx-2905367575" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-2905367575" + " " + "username",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }, "@barackobama"), __jsx("div", {
            className: "jsx-2905367575" + " " + "header-stats",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-2905367575" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-2905367575" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, "emoji_events_rounded"), __jsx("p", {
            className: "jsx-2905367575",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, "Leaderboard Place \u2022 #15")), __jsx("div", {
            className: "jsx-2905367575" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-2905367575" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, "emoji_flags_rounded"), __jsx("p", {
            className: "jsx-2905367575",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, "Points \u2022 150"))))), __jsx("div", {
            className: "jsx-2905367575" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-2905367575",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, "All of @barackobama's explanations:"), __jsx(_components_ProfileExplanationsSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
            explanations: this.state.data.explanations,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
            id: "2905367575",
            __self: this
          }, ".avatar.jsx-2905367575{border-radius:100px;width:100px;}.column.jsx-2905367575{-webkit-flex:50%;-ms-flex:50%;flex:50%;display:inline-block;}.header-stat-item.jsx-2905367575{display:inline-block;}.header-stat-item.jsx-2905367575 p.jsx-2905367575{display:inline-block;margin-left:5px;}.header-stat-item.jsx-2905367575 i.jsx-2905367575{width:24px;position:relative;top:5px;}.header-stat-item.jsx-2905367575:nth-of-type(2){margin-left:35px;}.header.jsx-2905367575{border-bottom:2px solid #ddd;}.username.jsx-2905367575{margin-bottom:5px;margin-top:0px;}.column.jsx-2905367575:nth-of-type(2){margin-left:15px;position:relative;bottom:5px;}.explanationsSection.jsx-2905367575 p.jsx-2905367575{padding-bottom:10px;border-bottom:1px solid #ddd;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ed0IsQUFHcUMsQUFJWCxBQUlZLEFBR0EsQUFJVixBQUtNLEFBR1ksQUFHWCxBQUlELEFBS0csV0FuQkYsTUFLcEIsQUFVb0IsQ0FKSCxFQTFCSCxBQW1DaUIsQ0EzQi9CLEFBR2tCLFFBS1IsQUFPVixHQXRCQSxDQTBCQSxFQUlhLEVBbkJiLEFBS0EsRUFidUIsT0E0QnZCLEdBSW1CLFdBL0JuQixNQWdDQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL3BhZ2VzL2V4cGxhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBQcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGVFeHBsYW5hdGlvbnNTZWN0aW9uJ1xuaW1wb3J0IHsgZ2V0VXNlcnNFeHBsYW5hdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuXG5jbGFzcyBFeHBsYWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXVxuICAgIH1cbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBhd2FpdCBnZXRVc2Vyc0V4cGxhbmF0aW9ucygnQGJhcmFja29iYW1hJylcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YSkge1xuICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L2gxPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbW9qaV9ldmVudHNfcm91bmRlZDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5MZWFkZXJib2FyZCBQbGFjZSDigKIgIzE1PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbW9qaV9mbGFnc19yb3VuZGVkPC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlBvaW50cyDigKIgMTUwPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbnNTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHA+QWxsIG9mIEBiYXJhY2tvYmFtYSdzIGV4cGxhbmF0aW9uczo8L3A+XG4gICAgICAgICAgICAgICAgPFByb2ZpbGVFeHBsYW5hdGlvbnNTZWN0aW9uIGV4cGxhbmF0aW9ucz17dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9uc30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW06bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC51c2VybmFtZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29sdW1uOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uc1NlY3Rpb24gcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsYWluZXJcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainer.js */"));
        }
      }
    }
  }]);

  return Explainer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Explainer);

/***/ })

})
//# sourceMappingURL=explainer.js.0283e2b7e5b4620c6b41.hot-update.js.map