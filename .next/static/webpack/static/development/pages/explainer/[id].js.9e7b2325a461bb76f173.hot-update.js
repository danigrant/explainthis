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
          }, __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
          }, "All of ".concat(router.query.id, "'s explanations:")), __jsx(_components_ProfileExplanationsSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
            incrementExplanation: this.incrementExplanation,
            currentExplanation: this.state.data.explanations[this.state.explanationIndex],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
            id: "1441866253",
            __self: this
          }, ".avatar.jsx-1441866253{border-radius:100px;width:100px;}.column.jsx-1441866253{-webkit-flex:50%;-ms-flex:50%;flex:50%;display:inline-block;}.header-stat-item.jsx-1441866253{display:inline-block;}.header-stat-item.jsx-1441866253 p.jsx-1441866253{display:inline-block;margin-left:5px;}.header-stat-item.jsx-1441866253 i.jsx-1441866253{width:24px;position:relative;top:5px;}.header-stat-item.jsx-1441866253:not(:first-of-type){margin-left:35px;}.header.jsx-1441866253{border-bottom:2px solid #ddd;}.username.jsx-1441866253{margin-bottom:5px;margin-top:0px;}.column.jsx-1441866253:not(:first-of-type){margin-left:15px;position:relative;bottom:5px;}.explanationsSection.jsx-1441866253 p.jsx-1441866253{padding-bottom:10px;border-bottom:1px solid #ddd;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUV3QixBQUdxQyxBQUlYLEFBSVksQUFHQSxBQUlWLEFBS00sQUFHWSxBQUdYLEFBSUQsQUFLRyxXQW5CRixNQUtwQixBQVVvQixDQUpILEVBMUJILEFBbUNpQixDQTNCL0IsQUFHa0IsUUFLUixBQU9WLEdBdEJBLENBMEJBLEVBSWEsRUFuQmIsQUFLQSxFQWJ1QixPQTRCdkIsR0FJbUIsV0EvQm5CLE1BZ0NBIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbmVyL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVG9wV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RvcFdyYXBwZXInXG5pbXBvcnQgTWVudUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lbnVDb250YWluZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBQcm9maWxlRXhwbGFuYXRpb25zU2VjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVFeHBsYW5hdGlvbnNTZWN0aW9uJ1xuaW1wb3J0IHsgZ2V0VXNlcnNFeHBsYW5hdGlvbnMsIGdldFVzZXJQb2ludHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBFeHBsYWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIHVzZXJQb2ludHM6IHt9XG4gICAgfVxuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IGF3YWl0IGdldFVzZXJzRXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZCksXG4gICAgICB1c2VyUG9pbnRzOiBhd2FpdCBnZXRVc2VyUG9pbnRzKHJvdXRlci5xdWVyeS5pZClcbiAgICB9KVxuICB9XG4gIGluY3JlbWVudEV4cGxhbmF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBuZXdJbmRleCA9IHRoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleCA9PSB0aGlzLnN0YXRlLmRhdGEuZXhwbGFuYXRpb25zLmxlbmd0aCAtIDEgPyAwIDogdGhpcy5zdGF0ZS5leHBsYW5hdGlvbkluZGV4ICsgMVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhwbGFuYXRpb25JbmRleDogbmV3SW5kZXhcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdpbiBpbmNyZW1lbnRFeHBsYW5hdGlvbiwgbmV3IGluZGV4IGlzJywgdGhpcy5zdGF0ZS5leHBsYW5hdGlvbkluZGV4LCAnb3V0IG9mJywgdGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9ucy5sZW5ndGgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB7XG4gICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmRhdGEuZXhwbGFuYXRpb25zIHx8ICF0aGlzLnN0YXRlLnVzZXJQb2ludHMucG9pbnRzKSB7XG4gICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRvcFdyYXBwZXI+XG4gICAgICAgICAgICA8TWVudUNvbnRhaW5lciAvPlxuICAgICAgICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPntyb3V0ZXIucXVlcnkuaWR9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfZXZlbnRzX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+TGVhZGVyYm9hcmQgUGxhY2Ug4oCiICMxNTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfcGVvcGxlX3JvdW5kZWQ8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+Q29udHJpYnV0ZWQgRXhwbGFuYXRpb25zIOKAoiB7dGhpcy5zdGF0ZS51c2VyUG9pbnRzLm51bUNvbnRyaWJ1dGVkRXhwbGFuYXRpb25zfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZW1vamlfZmxhZ3Nfcm91bmRlZDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5Qb2ludHMg4oCiIHt0aGlzLnN0YXRlLnVzZXJQb2ludHMucG9pbnRzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25zU2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwPntgQWxsIG9mICR7cm91dGVyLnF1ZXJ5LmlkfSdzIGV4cGxhbmF0aW9uczpgfTwvcD5cbiAgICAgICAgICAgICAgICA8UHJvZmlsZUV4cGxhbmF0aW9uc1NlY3Rpb24gaW5jcmVtZW50RXhwbGFuYXRpb249e3RoaXMuaW5jcmVtZW50RXhwbGFuYXRpb259IGN1cnJlbnRFeHBsYW5hdGlvbj17dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9uc1t0aGlzLnN0YXRlLmV4cGxhbmF0aW9uSW5kZXhdfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Ub3BXcmFwcGVyPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuYXZhdGFyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgZmxleDogNTAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWFkZXItc3RhdC1pdGVtIHAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWFkZXItc3RhdC1pdGVtIGkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyLXN0YXQtaXRlbTpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudXNlcm5hbWUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbHVtbjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uc1NlY3Rpb24gcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEV4cGxhaW5lcilcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainer/[id].js */"));
        }
      }
    }
  }]);

  return Explainer;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_17__["withRouter"])(Explainer));

/***/ })

})
//# sourceMappingURL=[id].js.9e7b2325a461bb76f173.hot-update.js.map