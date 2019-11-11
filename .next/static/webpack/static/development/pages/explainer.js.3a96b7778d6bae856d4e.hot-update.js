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
/* harmony import */ var _components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ExplanationsSection */ "./components/ExplanationsSection.js");
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
      data: [],
      userPoints: {}
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
                _context.next = 6;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__["getUserPoints"])('@barackobama');

              case 6:
                _context.t2 = _context.sent;
                _context.t3 = {
                  data: _context.t1,
                  userPoints: _context.t2
                };

                _context.t0.setState.call(_context.t0, _context.t3);

              case 9:
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
        if (!this.state.data.explanations || !this.state.userPoints.points) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-1441866253" + " " + "header",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-1441866253" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, __jsx("img", {
            src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
            className: "jsx-1441866253" + " " + "avatar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          })), __jsx("div", {
            className: "jsx-1441866253" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-1441866253" + " " + "username",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, "@barackobama"), __jsx("div", {
            className: "jsx-1441866253" + " " + "header-stats",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-1441866253" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-1441866253" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, "emoji_events_rounded"), __jsx("p", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, "Leaderboard Place \u2022 #15")), __jsx("div", {
            className: "jsx-1441866253" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-1441866253" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, "emoji_events_rounded"), __jsx("p", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, "Contributed Explanations \u2022 ", this.state.userPoints.numContributedExplanations)), __jsx("div", {
            className: "jsx-1441866253" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-1441866253" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, "emoji_flags_rounded"), __jsx("p", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, "Points \u2022 ", this.state.userPoints.points))))), __jsx("div", {
            className: "jsx-1441866253" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-1441866253",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "All of @barackobama's explanations:"), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
            profilepage: true,
            explanations: this.state.data.explanations,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
            id: "1441866253",
            __self: this
          }, ".avatar.jsx-1441866253{border-radius:100px;width:100px;}.column.jsx-1441866253{-webkit-flex:50%;-ms-flex:50%;flex:50%;display:inline-block;}.header-stat-item.jsx-1441866253{display:inline-block;}.header-stat-item.jsx-1441866253 p.jsx-1441866253{display:inline-block;margin-left:5px;}.header-stat-item.jsx-1441866253 i.jsx-1441866253{width:24px;position:relative;top:5px;}.header-stat-item.jsx-1441866253:not(:first-of-type){margin-left:35px;}.header.jsx-1441866253{border-bottom:2px solid #ddd;}.username.jsx-1441866253{margin-bottom:5px;margin-top:0px;}.column.jsx-1441866253:not(:first-of-type){margin-left:15px;position:relative;bottom:5px;}.explanationsSection.jsx-1441866253 p.jsx-1441866253{padding-bottom:10px;border-bottom:1px solid #ddd;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEd0IsQUFHcUMsQUFJWCxBQUlZLEFBR0EsQUFJVixBQUtNLEFBR1ksQUFHWCxBQUlELEFBS0csV0FuQkYsTUFLcEIsQUFVb0IsQ0FKSCxFQTFCSCxBQW1DaUIsQ0EzQi9CLEFBR2tCLFFBS1IsQUFPVixHQXRCQSxDQTBCQSxFQUlhLEVBbkJiLEFBS0EsRUFidUIsT0E0QnZCLEdBSW1CLFdBL0JuQixNQWdDQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL3BhZ2VzL2V4cGxhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBFeHBsYW5hdGlvbnNTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvRXhwbGFuYXRpb25zU2VjdGlvbidcbmltcG9ydCB7IGdldFVzZXJzRXhwbGFuYXRpb25zLCBnZXRVc2VyUG9pbnRzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9GaXJlYmFzZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZydcblxuY2xhc3MgRXhwbGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICB1c2VyUG9pbnRzOiB7fVxuICAgIH1cbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBhd2FpdCBnZXRVc2Vyc0V4cGxhbmF0aW9ucygnQGJhcmFja29iYW1hJyksXG4gICAgICB1c2VyUG9pbnRzOiBhd2FpdCBnZXRVc2VyUG9pbnRzKCdAYmFyYWNrb2JhbWEnKVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9ucyB8fCAhdGhpcy5zdGF0ZS51c2VyUG9pbnRzLnBvaW50cykge1xuICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L2gxPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbW9qaV9ldmVudHNfcm91bmRlZDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5MZWFkZXJib2FyZCBQbGFjZSDigKIgIzE1PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbW9qaV9ldmVudHNfcm91bmRlZDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5Db250cmlidXRlZCBFeHBsYW5hdGlvbnMg4oCiIHt0aGlzLnN0YXRlLnVzZXJQb2ludHMubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbW9qaV9mbGFnc19yb3VuZGVkPC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlBvaW50cyDigKIge3RoaXMuc3RhdGUudXNlclBvaW50cy5wb2ludHN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbnNTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHA+QWxsIG9mIEBiYXJhY2tvYmFtYSdzIGV4cGxhbmF0aW9uczo8L3A+XG4gICAgICAgICAgICAgICAgPEV4cGxhbmF0aW9uc1NlY3Rpb24gcHJvZmlsZXBhZ2U9e3RydWV9IGV4cGxhbmF0aW9ucz17dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9uc30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW06bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW46bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbnNTZWN0aW9uIHAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwbGFpbmVyXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainer.js */"));
        }
      }
    }
  }]);

  return Explainer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Explainer);

/***/ })

})
//# sourceMappingURL=explainer.js.3a96b7778d6bae856d4e.hot-update.js.map