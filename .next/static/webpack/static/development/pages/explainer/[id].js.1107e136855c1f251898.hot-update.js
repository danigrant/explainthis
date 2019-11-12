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
            className: "jsx-610720395" + " " + "wrapper",
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
            className: "jsx-610720395" + " " + "header",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-610720395" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, __jsx("img", {
            src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
            className: "jsx-610720395" + " " + "avatar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          })), __jsx("div", {
            className: "jsx-610720395" + " " + "column",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-610720395" + " " + "username",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, router.query.id), __jsx("div", {
            className: "jsx-610720395" + " " + "header-stats",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-610720395" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-610720395" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "emoji_events_rounded"), __jsx("p", {
            className: "jsx-610720395",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "Leaderboard Place \u2022 #15")), __jsx("div", {
            className: "jsx-610720395" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-610720395" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "emoji_people_rounded"), __jsx("p", {
            className: "jsx-610720395",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "Contributed Explanations \u2022 ", this.state.userPoints.numContributedExplanations)), __jsx("div", {
            className: "jsx-610720395" + " " + "header-stat-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, __jsx("i", {
            className: "jsx-610720395" + " " + "material-icons",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, "emoji_flags_rounded"), __jsx("p", {
            className: "jsx-610720395",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, "Points \u2022 ", this.state.userPoints.points))))), __jsx("div", {
            className: "jsx-610720395" + " " + "explanationsSection",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }, __jsx("p", {
            className: "jsx-610720395",
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
            id: "610720395",
            __self: this
          }, ".explanationsSection.jsx-610720395{height:100%;}ProfileExplanationsSection.jsx-610720395{height:100%;}.wrapper.jsx-610720395{width:100%;}.username.jsx-610720395{font-weight:900;}.avatar.jsx-610720395{border-radius:100px;width:100px;}.column.jsx-610720395{-webkit-flex:50%;-ms-flex:50%;flex:50%;display:inline-block;}.header-stat-item.jsx-610720395{display:inline-block;}.header-stat-item.jsx-610720395 p.jsx-610720395{display:inline-block;margin-left:5px;}.header-stat-item.jsx-610720395 i.jsx-610720395{width:24px;position:relative;top:5px;}.header-stat-item.jsx-610720395:not(:first-of-type){margin-left:35px;}.header.jsx-610720395{border-bottom:2px solid #ddd;}.username.jsx-610720395{margin-bottom:5px;margin-top:0px;}.column.jsx-610720395:not(:first-of-type){margin-left:15px;position:relative;bottom:5px;}.explanationsSection.jsx-610720395 p.jsx-610720395{padding-bottom:10px;border-bottom:1px solid #ddd;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0V3QixBQUc2QixBQUdBLEFBR0QsQUFHSyxBQUdJLEFBSVgsQUFJWSxBQUdBLEFBSVYsQUFLTSxBQUdZLEFBR1gsQUFJRCxBQUtHLFdBeEN0QixBQXFCb0IsQ0EzQnBCLEFBR0EsSUFNQSxDQXVCQSxBQVVvQixDQUpILEVBMUJILEFBbUNpQixDQTNCL0IsQUFHa0IsUUFLUixBQU9WLEdBdEJBLENBMEJBLEVBSWEsRUFuQmIsQUFLQSxFQWJ1QixPQTRCdkIsR0FJbUIsV0EvQm5CLE1BZ0NBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVG9wV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RvcFdyYXBwZXInXG5pbXBvcnQgTWVudUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lbnVDb250YWluZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBQcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVFeHBsYW5hdGlvbnNTZWN0aW9uJ1xuaW1wb3J0IHsgZ2V0VXNlcnNFeHBsYW5hdGlvbnMsIGdldFVzZXJQb2ludHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBFeHBsYWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIHVzZXJQb2ludHM6IHt9LFxuICAgICAgZXhwbGFuYXRpb25JbmRleDogMFxuICAgIH1cbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBhd2FpdCBnZXRVc2Vyc0V4cGxhbmF0aW9ucyhyb3V0ZXIucXVlcnkuaWQpLFxuICAgICAgdXNlclBvaW50czogYXdhaXQgZ2V0VXNlclBvaW50cyhyb3V0ZXIucXVlcnkuaWQpXG4gICAgfSlcbiAgfVxuICBpbmNyZW1lbnRFeHBsYW5hdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgbmV3SW5kZXggPSB0aGlzLnN0YXRlLmV4cGxhbmF0aW9uSW5kZXggPT0gdGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9ucy5sZW5ndGggLSAxID8gMCA6IHRoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleCArIDFcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4cGxhbmF0aW9uSW5kZXg6IG5ld0luZGV4XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnaW4gaW5jcmVtZW50RXhwbGFuYXRpb24sIG5ldyBpbmRleCBpcycsIHRoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleCwgJ291dCBvZicsIHRoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnMubGVuZ3RoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAge1xuICAgICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9ucyB8fCAhdGhpcy5zdGF0ZS51c2VyUG9pbnRzLnBvaW50cykge1xuICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8VG9wV3JhcHBlcj5cbiAgICAgICAgICAgIDxNZW51Q29udGFpbmVyIC8+XG4gICAgICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVzZXJuYW1lXCI+e3JvdXRlci5xdWVyeS5pZH08L2gxPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbW9qaV9ldmVudHNfcm91bmRlZDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5MZWFkZXJib2FyZCBQbGFjZSDigKIgIzE1PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbW9qaV9wZW9wbGVfcm91bmRlZDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5Db250cmlidXRlZCBFeHBsYW5hdGlvbnMg4oCiIHt0aGlzLnN0YXRlLnVzZXJQb2ludHMubnVtQ29udHJpYnV0ZWRFeHBsYW5hdGlvbnN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3RhdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbW9qaV9mbGFnc19yb3VuZGVkPC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlBvaW50cyDigKIge3RoaXMuc3RhdGUudXNlclBvaW50cy5wb2ludHN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbnNTZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHA+e2BBbGwgb2YgJHtyb3V0ZXIucXVlcnkuaWR9J3MgZXhwbGFuYXRpb25zOmB9PC9wPlxuICAgICAgICAgICAgICAgIDxQcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbiBpbmNyZW1lbnRFeHBsYW5hdGlvbj17dGhpcy5pbmNyZW1lbnRFeHBsYW5hdGlvbn0gY3VycmVudEV4cGxhbmF0aW9uPXt0aGlzLnN0YXRlLmRhdGEuZXhwbGFuYXRpb25zW3RoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleF19IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgICAgICAgICA8L1RvcFdyYXBwZXI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5leHBsYW5hdGlvbnNTZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgUHJvZmlsZUV4cGxhbmF0aW9uc1NlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICBmbGV4OiA1MCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWFkZXItc3RhdC1pdGVtIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW0gcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlYWRlci1zdGF0LWl0ZW0gaSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWFkZXItc3RhdC1pdGVtOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC51c2VybmFtZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29sdW1uOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbGFuYXRpb25zU2VjdGlvbiBwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRXhwbGFpbmVyKVxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainer/[id].js */"));
        }
      }
    }
  }]);

  return Explainer;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_17__["withRouter"])(Explainer));

/***/ })

})
//# sourceMappingURL=[id].js.1107e136855c1f251898.hot-update.js.map