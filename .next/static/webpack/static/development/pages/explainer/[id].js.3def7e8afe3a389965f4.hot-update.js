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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_TopWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/TopWrapper */ "./components/TopWrapper.js");
/* harmony import */ var _components_MenuContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/MenuContainer */ "./components/MenuContainer.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ProfileExplanationsSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ProfileExplanationsSection */ "./components/ProfileExplanationsSection.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);









var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainer/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;









var Explainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Explainer, _React$Component);

  function Explainer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Explainer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Explainer).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "incrementExplanation", function () {
      var newIndex = _this.state.explanationIndex == _this.state.data.explanations.length - 1 ? 0 : _this.state.explanationIndex + 1;

      _this.setState({
        explanationIndex: newIndex
      });

      console.log('in incrementExplanation, new index is', _this.state.explanationIndex, 'out of', _this.state.data.explanations.length);
    });

    _this.state = {
      data: [],
      userPoints: {},
      explanationIndex: 0
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
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_15__["getUsersExplanations"])(router.query.id);

              case 4:
                _context.t1 = _context.sent;
                _context.next = 7;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_15__["getUserPoints"])(router.query.id);

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
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_16__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            className: "jsx-3513149603" + " " + "wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-3513149603" + " " + "header",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-3513149603" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, __jsx("img", {
            src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
            className: "jsx-3513149603" + " " + "avatar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          })), __jsx("div", {
            className: "jsx-3513149603" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-3513149603" + " " + "username",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, router.query.id), __jsx("div", {
            className: "jsx-3513149603" + " " + "header-stats",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-3513149603" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-3513149603" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "emoji_events_rounded"), __jsx("p", {
            className: "jsx-3513149603",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "Leaderboard Place \u2022 #15")), __jsx("div", {
            className: "jsx-3513149603" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-3513149603" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "emoji_people_rounded"), __jsx("p", {
            className: "jsx-3513149603",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "Contributed Explanations \u2022 ", this.state.userPoints.numContributedExplanations)), __jsx("div", {
            className: "jsx-3513149603" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-3513149603" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, "emoji_flags_rounded"), __jsx("p", {
            className: "jsx-3513149603",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, "Points \u2022 ", this.state.userPoints.points))))), __jsx("div", {
            className: "jsx-3513149603" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-3513149603",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }, "All of ".concat(router.query.id, "'s explanations:")), __jsx(_components_ProfileExplanationsSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
            incrementExplanation: this.incrementExplanation,
            currentExplanation: this.state.data.explanations[this.state.explanationIndex],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
            id: "3513149603",
            __self: this
          }, ".wrapper.jsx-3513149603{width:100%;}.avatar.jsx-3513149603{border-radius:100px;width:100px;}.column.jsx-3513149603{-webkit-flex:50%;-ms-flex:50%;flex:50%;display:inline-block;}.header-stat-item.jsx-3513149603{display:inline-block;}.header-stat-item.jsx-3513149603 p.jsx-3513149603{display:inline-block;margin-left:5px;}.header-stat-item.jsx-3513149603 i.jsx-3513149603{width:24px;position:relative;top:5px;}.header-stat-item.jsx-3513149603:not(:first-of-type){margin-left:35px;}.header.jsx-3513149603{border-bottom:2px solid #ddd;}.username.jsx-3513149603{margin-bottom:5px;margin-top:0px;}.column.jsx-3513149603:not(:first-of-type){margin-left:15px;position:relative;bottom:5px;}.explanationsSection.jsx-3513149603 p.jsx-3513149603{padding-bottom:10px;border-bottom:1px solid #ddd;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0V3QixBQUc0QixBQUdTLEFBSVgsQUFJWSxBQUdBLEFBSVYsQUFLTSxBQUdZLEFBR1gsQUFJRCxBQUtHLFdBckN0QixBQWtCb0IsTUFLcEIsQUFVb0IsQ0FKSCxFQTFCSCxBQW1DaUIsQ0EzQi9CLEFBR2tCLFFBS1IsQUFPVixHQXRCQSxDQTBCQSxFQUlhLEVBbkJiLEFBS0EsRUFidUIsT0E0QnZCLEdBSW1CLFdBL0JuQixNQWdDQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL3BhZ2VzL2V4cGxhaW5lci9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvcFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ub3BXcmFwcGVyJ1xuaW1wb3J0IE1lbnVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZW51Q29udGFpbmVyJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgUHJvZmlsZUV4cGxhbmF0aW9uc1NlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbidcbmltcG9ydCB7IGdldFVzZXJzRXhwbGFuYXRpb25zLCBnZXRVc2VyUG9pbnRzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaXJlYmFzZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY2xhc3MgRXhwbGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICB1c2VyUG9pbnRzOiB7fSxcbiAgICAgIGV4cGxhbmF0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgfVxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogYXdhaXQgZ2V0VXNlcnNFeHBsYW5hdGlvbnMocm91dGVyLnF1ZXJ5LmlkKSxcbiAgICAgIHVzZXJQb2ludHM6IGF3YWl0IGdldFVzZXJQb2ludHMocm91dGVyLnF1ZXJ5LmlkKVxuICAgIH0pXG4gIH1cbiAgaW5jcmVtZW50RXhwbGFuYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IG5ld0luZGV4ID0gdGhpcy5zdGF0ZS5leHBsYW5hdGlvbkluZGV4ID09IHRoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnMubGVuZ3RoIC0gMSA/IDAgOiB0aGlzLnN0YXRlLmV4cGxhbmF0aW9uSW5kZXggKyAxXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleHBsYW5hdGlvbkluZGV4OiBuZXdJbmRleFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coJ2luIGluY3JlbWVudEV4cGxhbmF0aW9uLCBuZXcgaW5kZXggaXMnLCB0aGlzLnN0YXRlLmV4cGxhbmF0aW9uSW5kZXgsICdvdXQgb2YnLCB0aGlzLnN0YXRlLmRhdGEuZXhwbGFuYXRpb25zLmxlbmd0aCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHtcbiAgICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnMgfHwgIXRoaXMuc3RhdGUudXNlclBvaW50cy5wb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPFRvcFdyYXBwZXI+XG4gICAgICAgICAgICA8TWVudUNvbnRhaW5lciAvPlxuICAgICAgICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPntyb3V0ZXIucXVlcnkuaWR9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfZXZlbnRzX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+TGVhZGVyYm9hcmQgUGxhY2Ug4oCiICMxNTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfcGVvcGxlX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+Q29udHJpYnV0ZWQgRXhwbGFuYXRpb25zIOKAoiB7dGhpcy5zdGF0ZS51c2VyUG9pbnRzLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfZmxhZ3Nfcm91bmRlZDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5Qb2ludHMg4oCiIHt0aGlzLnN0YXRlLnVzZXJQb2ludHMucG9pbnRzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25zU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwPntgQWxsIG9mICR7cm91dGVyLnF1ZXJ5LmlkfSdzIGV4cGxhbmF0aW9uczpgfTwvcD5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUV4cGxhbmF0aW9uc1NlY3Rpb24gaW5jcmVtZW50RXhwbGFuYXRpb249e3RoaXMuaW5jcmVtZW50RXhwbGFuYXRpb259IGN1cnJlbnRFeHBsYW5hdGlvbj17dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9uc1t0aGlzLnN0YXRlLmV4cGxhbmF0aW9uSW5kZXhdfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Ub3BXcmFwcGVyPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICAgIGZsZXg6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSBpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW06bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb2x1bW46bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbnNTZWN0aW9uIHAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihFeHBsYWluZXIpXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainer/[id].js */"));
        }
      }
    }
  }]);

  return Explainer;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_17__["withRouter"])(Explainer));

/***/ })

})
//# sourceMappingURL=[id].js.3def7e8afe3a389965f4.hot-update.js.map