webpackHotUpdate("static/development/pages/explainer/[id].js",{

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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ExplanationsSection */ "./components/ExplanationsSection.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);







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
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__["getUsersExplanations"])(router.query.id);

              case 4:
                _context.t1 = _context.sent;
                _context.next = 7;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_12__["getUserPoints"])(router.query.id);

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
    key: "render",
    value: function render() {
      {
        var router = this.props.router;

        if (!this.state.data.explanations || !this.state.userPoints.points) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            className: "jsx-571865670",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-571865670" + " " + "header",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-571865670" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, __jsx("img", {
            src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
            className: "jsx-571865670" + " " + "avatar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          })), __jsx("div", {
            className: "jsx-571865670" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-571865670" + " " + "username",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, router.query.id), __jsx("div", {
            className: "jsx-571865670" + " " + "header-stats",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-571865670" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-571865670" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, "emoji_events_rounded"), __jsx("p", {
            className: "jsx-571865670",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, "Leaderboard Place \u2022 #15")), __jsx("div", {
            className: "jsx-571865670" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-571865670" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, "emoji_people_rounded"), __jsx("p", {
            className: "jsx-571865670",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, "Contributed Explanations \u2022 ", this.state.userPoints.numContributedExplanations)), __jsx("div", {
            className: "jsx-571865670" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-571865670" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, "emoji_flags_rounded"), __jsx("p", {
            className: "jsx-571865670",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "Points \u2022 ", this.state.userPoints.points))))), __jsx("div", {
            className: "jsx-571865670" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-571865670",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, "All of ".concat(router.query.id, "'s explanations:")), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
            profilepage: true,
            explanations: this.state.data.explanations,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
            id: "571865670",
            __self: this
          }, ".avatar.jsx-571865670{border-radius:100px;width:100px;}.column.jsx-571865670{-webkit-flex:50%;-ms-flex:50%;flex:50%;display:inline-block;}.header-stat-item.jsx-571865670{display:inline-block;}.header-stat-item.jsx-571865670 p.jsx-571865670{display:inline-block;margin-left:5px;}.header-stat-item.jsx-571865670 i.jsx-571865670{width:24px;position:relative;top:5px;}.header-stat-item.jsx-571865670:not(:first-of-type){margin-left:35px;}.header.jsx-571865670{border-bottom:2px solid #ddd;}.username.jsx-571865670{margin-bottom:5px;margin-top:0px;}.column.jsx-571865670:not(:first-of-type){margin-left:15px;position:relative;bottom:5px;}.explanationsSection.jsx-571865670 p.jsx-571865670{padding-bottom:10px;border-bottom:1px solid #ddd;font-weight:bold;}.link.jsx-571865670{cursor:pointer;}.link.jsx-571865670:hover{-webkit-filter:brightness(115%);filter:brightness(115%);}.link.jsx-571865670:active{-webkit-filter:brightness(125%);filter:brightness(125%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOER3QixBQUdxQyxBQUlYLEFBSVksQUFHQSxBQUlWLEFBS00sQUFHWSxBQUdYLEFBSUQsQUFLRyxBQUtOLEFBR1UsQUFHQSxXQTlCTixJQXlCcEIsRUFwQkEsQUFVb0IsQ0FKSCxFQTFCSCxBQW1DaUIsQ0EzQi9CLEFBR2tCLFFBS1IsQUFPVixHQXRCQSxDQTBCQSxFQUlhLEVBbkJiLEFBS0EsRUFidUIsT0E0QnZCLEdBSW1CLE9BT25CLEFBR0EsSUF6Q0EsTUFnQ0EiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9wYWdlcy9leHBsYWluZXIvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBFeHBsYW5hdGlvbnNTZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRXhwbGFuYXRpb25zU2VjdGlvbidcbmltcG9ydCB7IGdldFVzZXJzRXhwbGFuYXRpb25zLCBnZXRVc2VyUG9pbnRzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaXJlYmFzZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgRXhwbGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICB1c2VyUG9pbnRzOiB7fVxuICAgIH1cbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBhd2FpdCBnZXRVc2Vyc0V4cGxhbmF0aW9ucyhyb3V0ZXIucXVlcnkuaWQpLFxuICAgICAgdXNlclBvaW50czogYXdhaXQgZ2V0VXNlclBvaW50cyhyb3V0ZXIucXVlcnkuaWQpXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAge1xuICAgICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9ucyB8fCAhdGhpcy5zdGF0ZS51c2VyUG9pbnRzLnBvaW50cykge1xuICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57cm91dGVyLnF1ZXJ5LmlkfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdGF0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdGF0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmVtb2ppX2V2ZW50c19yb3VuZGVkPC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPkxlYWRlcmJvYXJkIFBsYWNlIOKAoiAjMTU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdGF0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmVtb2ppX3Blb3BsZV9yb3VuZGVkPC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbnRyaWJ1dGVkIEV4cGxhbmF0aW9ucyDigKIge3RoaXMuc3RhdGUudXNlclBvaW50cy5udW1Db250cmlidXRlZEV4cGxhbmF0aW9uc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zdGF0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmVtb2ppX2ZsYWdzX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+UG9pbnRzIOKAoiB7dGhpcy5zdGF0ZS51c2VyUG9pbnRzLnBvaW50c308L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uc1NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8cD57YEFsbCBvZiAke3JvdXRlci5xdWVyeS5pZH0ncyBleHBsYW5hdGlvbnM6YH08L3A+XG4gICAgICAgICAgICAgICAgPEV4cGxhbmF0aW9uc1NlY3Rpb24gcHJvZmlsZXBhZ2U9e3RydWV9IGV4cGxhbmF0aW9ucz17dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9uc30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW06bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW46bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbnNTZWN0aW9uIHAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5saW5rOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihFeHBsYWluZXIpXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainer/[id].js */"));
        }
      }
    }
  }]);

  return Explainer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(Explainer));

/***/ })

})
//# sourceMappingURL=[id].js.59316a058eb8c01bf2f8.hot-update.js.map