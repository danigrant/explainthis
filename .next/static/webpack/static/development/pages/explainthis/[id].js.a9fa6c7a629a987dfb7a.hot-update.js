webpackHotUpdate("static/development/pages/explainthis/[id].js",{

/***/ "./pages/explainthis/[id].js":
/*!***********************************!*\
  !*** ./pages/explainthis/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_TopWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/TopWrapper */ "./components/TopWrapper.js");
/* harmony import */ var _components_MenuContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/MenuContainer */ "./components/MenuContainer.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ActionBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/ActionBar */ "./components/ActionBar.js");
/* harmony import */ var _components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/ExplanationsSection */ "./components/ExplanationsSection.js");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Editor */ "./components/Editor.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_AddExplanation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/AddExplanation */ "./components/AddExplanation.js");










var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainthis/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;












var ExplainThis =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ExplainThis, _React$Component);

  function ExplainThis(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ExplainThis);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ExplainThis).call(this, props)); // first thing you always do, calls the master react constructor

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleAnswerClick", function () {
      _this.setState({
        showEditor: !_this.state.showEditor
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "incrementExplanation", function () {
      var newIndex = _this.state.explanationIndex == _this.state.data.explanations.length - 1 ? 0 : _this.state.explanationIndex + 1;

      _this.setState({
        explanationIndex: newIndex
      });

      console.log('in incrementExplanation, new index is', _this.state.explanationIndex, 'out of', _this.state.data.explanations.length);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "noMoreCelebration", function () {
      _this.setState({
        celebration: false
      });
    });

    _this.state = {
      showEditor: false,
      data: {},
      explanationIndex: 0,
      celebration: false
    };
    var router = _this.props.router;
    _this.handleSubmitAnswer = _this.handleSubmitAnswer.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.handleUdatingDisplayedScores = _this.handleUdatingDisplayedScores.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.parentHandleVote = _this.parentHandleVote.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ExplainThis, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                router = this.props.router;
                _context.t0 = this;
                _context.next = 4;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_18__["getConceptExplanations"])(router.query.id);

              case 4:
                _context.t1 = _context.sent;
                _context.t2 = {
                  data: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

              case 7:
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
    key: "parentHandleVote",
    value: function () {
      var _parentHandleVote = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                router = this.props.router; // this.setState({
                //   data: await getConceptExplanations(router.query.id)
                // })

              case 1:
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
    key: "handleSubmitAnswer",
    value: function () {
      var _handleSubmitAnswer = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(celebrationBoolean) {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                router = this.props.router;
                _context3.t0 = this;
                _context3.t1 = !this.state.showEditor;
                _context3.next = 5;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_18__["getConceptExplanations"])(router.query.id);

              case 5:
                _context3.t2 = _context3.sent;
                _context3.t3 = celebrationBoolean;
                _context3.t4 = {
                  showEditor: _context3.t1,
                  data: _context3.t2,
                  celebration: _context3.t3
                };

                _context3.t0.setState.call(_context3.t0, _context3.t4);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleSubmitAnswer(_x) {
        return _handleSubmitAnswer.apply(this, arguments);
      }

      return handleSubmitAnswer;
    }()
  }, {
    key: "handleUdatingDisplayedScores",
    value: function () {
      var _handleUdatingDisplayedScores = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                router = this.props.router;
                _context4.next = 3;
                return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (cb) {
                  return setTimeout(cb, 500);
                });

              case 3:
                _context4.t0 = this;
                _context4.next = 6;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_18__["getConceptExplanations"])(router.query.id);

              case 6:
                _context4.t1 = _context4.sent;
                _context4.t2 = {
                  data: _context4.t1
                };

                _context4.t0.setState.call(_context4.t0, _context4.t2);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleUdatingDisplayedScores() {
        return _handleUdatingDisplayedScores.apply(this, arguments);
      }

      return handleUdatingDisplayedScores;
    }()
  }, {
    key: "render",
    value: function render() {
      {
        var router = this.props.router;

        if (!this.state.data.concept) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_19__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          });
        } else if (this.state.showEditor) {
          return __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, __jsx(_components_AddExplanation__WEBPACK_IMPORTED_MODULE_21__["default"], {
            celebration: this.state.celebration,
            handleAnswerClick: this.handleAnswerClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          })));
        } else {
          return __jsx("div", {
            className: "jsx-2246162651" + " " + "wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-2246162651" + " " + "explanationHeader",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-2246162651",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, "The short, sweet and wonderfully wacky ways to explain ", __jsx("span", {
            className: "jsx-2246162651" + " " + "concept-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, this.state.data.concept)), __jsx("p", {
            className: "jsx-2246162651",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, this.state.data.explanations.length, " Explanations \u2022 Keep clicking through until you find one that, well, clicks."), __jsx(_components_ActionBar__WEBPACK_IMPORTED_MODULE_15__["default"], {
            handleAnswerClick: this.handleAnswerClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }), this.state.showEditor && __jsx(_components_Editor__WEBPACK_IMPORTED_MODULE_17__["default"], {
            handleSubmitAnswer: this.handleSubmitAnswer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          })), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
            handleSubmitAnswer: this.handleSubmitAnswer,
            parentHandleVote: this.parentHandleVote,
            handleUdatingDisplayedScores: this.handleUdatingDisplayedScores,
            incrementExplanation: this.incrementExplanation,
            currentExplanation: this.state.data.explanations[this.state.explanationIndex],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
            id: "2246162651",
            __self: this
          }, ".wrapper.jsx-2246162651{width:100%;}.explanationHeader.jsx-2246162651 h1.jsx-2246162651{margin-bottom:0;font-weight:900;}.explanationHeader.jsx-2246162651 p.jsx-2246162651{margin-top:10px;margin-bottom:5px;color:#a9a9a9;}.concept-name.jsx-2246162651{color:#6462EF;}ActionBar.jsx-2246162651{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRzBCLEFBRzhCLEFBR0ssQUFJQSxBQUtGLEFBR0ssV0FkckIsR0FZQSxFQVRrQixBQUlFLEdBUXBCLGFBWEEsRUFJZ0IsY0FDaEIiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9wYWdlcy9leHBsYWludGhpcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvcFdyYXBwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ub3BXcmFwcGVyJ1xuaW1wb3J0IE1lbnVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZW51Q29udGFpbmVyJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWN0aW9uQmFyJ1xuaW1wb3J0IEV4cGxhbmF0aW9uc1NlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uJ1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VkaXRvcidcbmltcG9ydCB7IGdldENvbmNlcHRFeHBsYW5hdGlvbnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEFkZEV4cGxhbmF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWRkRXhwbGFuYXRpb24nXG5cbmNsYXNzIEV4cGxhaW5UaGlzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcykgLy8gZmlyc3QgdGhpbmcgeW91IGFsd2F5cyBkbywgY2FsbHMgdGhlIG1hc3RlciByZWFjdCBjb25zdHJ1Y3RvclxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93RWRpdG9yOiBmYWxzZSxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZXhwbGFuYXRpb25JbmRleDogMCxcbiAgICAgIGNlbGVicmF0aW9uOiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuaGFuZGxlU3VibWl0QW5zd2VyID0gdGhpcy5oYW5kbGVTdWJtaXRBbnN3ZXIuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlVWRhdGluZ0Rpc3BsYXllZFNjb3JlcyA9IHRoaXMuaGFuZGxlVWRhdGluZ0Rpc3BsYXllZFNjb3Jlcy5iaW5kKHRoaXMpXG4gICAgdGhpcy5wYXJlbnRIYW5kbGVWb3RlID0gdGhpcy5wYXJlbnRIYW5kbGVWb3RlLmJpbmQodGhpcylcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IGF3YWl0IGdldENvbmNlcHRFeHBsYW5hdGlvbnMocm91dGVyLnF1ZXJ5LmlkKVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlQW5zd2VyQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RWRpdG9yOiAhdGhpcy5zdGF0ZS5zaG93RWRpdG9yXG4gICAgfSlcbiAgfVxuICBhc3luYyBwYXJlbnRIYW5kbGVWb3RlKCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICBkYXRhOiBhd2FpdCBnZXRDb25jZXB0RXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZClcbiAgICAvLyB9KVxuICB9XG4gIGluY3JlbWVudEV4cGxhbmF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBuZXdJbmRleCA9IHRoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleCA9PSB0aGlzLnN0YXRlLmRhdGEuZXhwbGFuYXRpb25zLmxlbmd0aCAtIDEgPyAwIDogdGhpcy5zdGF0ZS5leHBsYW5hdGlvbkluZGV4ICsgMVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhwbGFuYXRpb25JbmRleDogbmV3SW5kZXhcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdpbiBpbmNyZW1lbnRFeHBsYW5hdGlvbiwgbmV3IGluZGV4IGlzJywgdGhpcy5zdGF0ZS5leHBsYW5hdGlvbkluZGV4LCAnb3V0IG9mJywgdGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9ucy5sZW5ndGgpO1xuICB9XG4gIG5vTW9yZUNlbGVicmF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2VsZWJyYXRpb246IGZhbHNlXG4gICAgfSlcbiAgfVxuICBhc3luYyBoYW5kbGVTdWJtaXRBbnN3ZXIoY2VsZWJyYXRpb25Cb29sZWFuKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dFZGl0b3I6ICF0aGlzLnN0YXRlLnNob3dFZGl0b3IsXG4gICAgICBkYXRhOiBhd2FpdCBnZXRDb25jZXB0RXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZCksXG4gICAgICBjZWxlYnJhdGlvbjogY2VsZWJyYXRpb25Cb29sZWFuXG4gICAgfSlcbiAgfVxuICBhc3luYyBoYW5kbGVVZGF0aW5nRGlzcGxheWVkU2NvcmVzKCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgYXdhaXQgbmV3IFByb21pc2UoY2IgPT4gc2V0VGltZW91dChjYiwgNTAwKSkgLy8gdGhpcyBpcyBleHRyZW1lbHkgc2lsbHk6IGkgYW0gd2FpdGluZyA1MDBtcyBmb3IgZmlyZWJhc2UgdG8gdXBkYXRlIG90aGVyd2lzZSB0aGVyZSBpcyBhIGxhZyBhbmQgdGhlIHNjb3JlIGxvb2tzIGxpa2UgaXQncyAxXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBhd2FpdCBnZXRDb25jZXB0RXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZClcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICAgIHtcbiAgICAgICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRhdGEuY29uY2VwdCkge1xuICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2hvd0VkaXRvcikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VG9wV3JhcHBlcj5cbiAgICAgICAgICAgICAgPE1lbnVDb250YWluZXIgLz5cbiAgICAgICAgICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPEFkZEV4cGxhbmF0aW9uIGNlbGVicmF0aW9uPXt0aGlzLnN0YXRlLmNlbGVicmF0aW9ufSBoYW5kbGVBbnN3ZXJDbGljaz17dGhpcy5oYW5kbGVBbnN3ZXJDbGlja30gLz5cbiAgICAgICAgICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L1RvcFdyYXBwZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxUb3BXcmFwcGVyPlxuICAgICAgICAgICAgICA8TWVudUNvbnRhaW5lciAvPlxuICAgICAgICAgICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5UaGUgc2hvcnQsIHN3ZWV0IGFuZCB3b25kZXJmdWxseSB3YWNreSB3YXlzIHRvIGV4cGxhaW4gPHNwYW4gY2xhc3NOYW1lPVwiY29uY2VwdC1uYW1lXCI+e3RoaXMuc3RhdGUuZGF0YS5jb25jZXB0fTwvc3Bhbj48L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9ucy5sZW5ndGh9IEV4cGxhbmF0aW9ucyDigKIgS2VlcCBjbGlja2luZyB0aHJvdWdoIHVudGlsIHlvdSBmaW5kIG9uZSB0aGF0LCB3ZWxsLCBjbGlja3MuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8QWN0aW9uQmFyIGhhbmRsZUFuc3dlckNsaWNrPXt0aGlzLmhhbmRsZUFuc3dlckNsaWNrfSAvPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuc2hvd0VkaXRvciAmJlxuICAgICAgICAgICAgICAgICAgICAgIDxFZGl0b3IgaGFuZGxlU3VibWl0QW5zd2VyPXt0aGlzLmhhbmRsZVN1Ym1pdEFuc3dlcn0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxFeHBsYW5hdGlvbnNTZWN0aW9uIGhhbmRsZVN1Ym1pdEFuc3dlcj17dGhpcy5oYW5kbGVTdWJtaXRBbnN3ZXJ9IHBhcmVudEhhbmRsZVZvdGU9e3RoaXMucGFyZW50SGFuZGxlVm90ZX0gaGFuZGxlVWRhdGluZ0Rpc3BsYXllZFNjb3Jlcz17dGhpcy5oYW5kbGVVZGF0aW5nRGlzcGxheWVkU2NvcmVzfSBpbmNyZW1lbnRFeHBsYW5hdGlvbj17dGhpcy5pbmNyZW1lbnRFeHBsYW5hdGlvbn0gY3VycmVudEV4cGxhbmF0aW9uPXt0aGlzLnN0YXRlLmRhdGEuZXhwbGFuYXRpb25zW3RoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleF19IC8+XG4gICAgICAgICAgICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvVG9wV3JhcHBlcj5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXhwbGFuYXRpb25IZWFkZXIgaDEge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5leHBsYW5hdGlvbkhlYWRlciBwIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2E5YTlhOTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbmNlcHQtbmFtZSB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzY0NjJFRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQWN0aW9uQmFyIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRXhwbGFpblRoaXMpXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis/[id].js */"));
        }
      }
    }
  }]);

  return ExplainThis;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_20__["withRouter"])(ExplainThis));

/***/ })

})
//# sourceMappingURL=[id].js.a9fa6c7a629a987dfb7a.hot-update.js.map