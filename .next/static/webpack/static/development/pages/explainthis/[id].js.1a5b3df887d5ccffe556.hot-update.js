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

    _this.state = {
      showEditor: false,
      data: {},
      explanationIndex: 0
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
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
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
                _context3.t3 = {
                  showEditor: _context3.t1,
                  data: _context3.t2
                };

                _context3.t0.setState.call(_context3.t0, _context3.t3);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleSubmitAnswer() {
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
              lineNumber: 68
            },
            __self: this
          });
        } else if (this.state.showEditor) {
          return __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, __jsx(_components_AddExplanation__WEBPACK_IMPORTED_MODULE_21__["default"], {
            handleAnswerClick: this.handleAnswerClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          })));
        } else {
          return __jsx("div", {
            className: "jsx-915344233" + " " + "wrapper",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, __jsx(_components_TopWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, __jsx(_components_MenuContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-915344233" + " " + "explanationHeader",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-915344233",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, "The short, sweet and wonderfully wacky ways to explain ", __jsx("span", {
            className: "jsx-915344233" + " " + "concept-name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, this.state.data.concept)), __jsx("p", {
            className: "jsx-915344233",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, this.state.data.explanations.length, " Explanations \u2022 Keep clicking through until you find one that, well, clicks."), __jsx(_components_ActionBar__WEBPACK_IMPORTED_MODULE_15__["default"], {
            handleAnswerClick: this.handleAnswerClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }), this.state.showEditor && __jsx(_components_Editor__WEBPACK_IMPORTED_MODULE_17__["default"], {
            handleSubmitAnswer: this.handleSubmitAnswer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          })), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
            parentHandleVote: this.parentHandleVote,
            handleUdatingDisplayedScores: this.handleUdatingDisplayedScores,
            incrementExplanation: this.incrementExplanation,
            currentExplanation: this.state.data.explanations[this.state.explanationIndex],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
            id: "915344233",
            __self: this
          }, ".wrapper.jsx-915344233{width:100%;}.explanationHeader.jsx-915344233 h1.jsx-915344233{margin-bottom:0;}.explanationHeader.jsx-915344233 p.jsx-915344233{margin-top:10px;margin-bottom:5px;color:#a9a9a9;}.concept-name.jsx-915344233{color:#6462EF;}ActionBar.jsx-915344233{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRjBCLEFBRzhCLEFBR0ssQUFHQSxBQUtGLEFBR0ssV0FickIsR0FXQSxFQVJBLEFBR29CLEdBUXBCLGVBUGdCLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUb3BXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVG9wV3JhcHBlcidcbmltcG9ydCBNZW51Q29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVudUNvbnRhaW5lcidcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBDb250YWluZXInO1xuaW1wb3J0IEFjdGlvbkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FjdGlvbkJhcidcbmltcG9ydCBFeHBsYW5hdGlvbnNTZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRXhwbGFuYXRpb25zU2VjdGlvbidcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FZGl0b3InXG5pbXBvcnQgeyBnZXRDb25jZXB0RXhwbGFuYXRpb25zIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaXJlYmFzZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBBZGRFeHBsYW5hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkZEV4cGxhbmF0aW9uJ1xuXG5jbGFzcyBFeHBsYWluVGhpcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpIC8vIGZpcnN0IHRoaW5nIHlvdSBhbHdheXMgZG8sIGNhbGxzIHRoZSBtYXN0ZXIgcmVhY3QgY29uc3RydWN0b3JcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0VkaXRvcjogZmFsc2UsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGV4cGxhbmF0aW9uSW5kZXg6IDBcbiAgICB9XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdEFuc3dlciA9IHRoaXMuaGFuZGxlU3VibWl0QW5zd2VyLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXMgPSB0aGlzLmhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXMuYmluZCh0aGlzKVxuICAgIHRoaXMucGFyZW50SGFuZGxlVm90ZSA9IHRoaXMucGFyZW50SGFuZGxlVm90ZS5iaW5kKHRoaXMpXG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBhd2FpdCBnZXRDb25jZXB0RXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZClcbiAgICB9KVxuICB9XG4gIGhhbmRsZUFuc3dlckNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0VkaXRvcjogIXRoaXMuc3RhdGUuc2hvd0VkaXRvclxuICAgIH0pXG4gIH1cbiAgYXN5bmMgcGFyZW50SGFuZGxlVm90ZSgpIHtcbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgZGF0YTogYXdhaXQgZ2V0Q29uY2VwdEV4cGxhbmF0aW9ucyhyb3V0ZXIucXVlcnkuaWQpXG4gICAgLy8gfSlcbiAgfVxuICBpbmNyZW1lbnRFeHBsYW5hdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgbmV3SW5kZXggPSB0aGlzLnN0YXRlLmV4cGxhbmF0aW9uSW5kZXggPT0gdGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9ucy5sZW5ndGggLSAxID8gMCA6IHRoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleCArIDFcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4cGxhbmF0aW9uSW5kZXg6IG5ld0luZGV4XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnaW4gaW5jcmVtZW50RXhwbGFuYXRpb24sIG5ldyBpbmRleCBpcycsIHRoaXMuc3RhdGUuZXhwbGFuYXRpb25JbmRleCwgJ291dCBvZicsIHRoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnMubGVuZ3RoKTtcbiAgfVxuICBhc3luYyBoYW5kbGVTdWJtaXRBbnN3ZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dFZGl0b3I6ICF0aGlzLnN0YXRlLnNob3dFZGl0b3IsXG4gICAgICBkYXRhOiBhd2FpdCBnZXRDb25jZXB0RXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZClcbiAgICB9KVxuICB9XG4gIGFzeW5jIGhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXMoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShjYiA9PiBzZXRUaW1lb3V0KGNiLCA1MDApKSAvLyB0aGlzIGlzIGV4dHJlbWVseSBzaWxseTogaSBhbSB3YWl0aW5nIDUwMG1zIGZvciBmaXJlYmFzZSB0byB1cGRhdGUgb3RoZXJ3aXNlIHRoZXJlIGlzIGEgbGFnIGFuZCB0aGUgc2NvcmUgbG9va3MgbGlrZSBpdCdzIDFcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IGF3YWl0IGdldENvbmNlcHRFeHBsYW5hdGlvbnMocm91dGVyLnF1ZXJ5LmlkKVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgICAge1xuICAgICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YS5jb25jZXB0KSB7XG4gICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zaG93RWRpdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUb3BXcmFwcGVyPlxuICAgICAgICAgICAgICA8TWVudUNvbnRhaW5lciAvPlxuICAgICAgICAgICAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8QWRkRXhwbGFuYXRpb24gaGFuZGxlQW5zd2VyQ2xpY2s9e3RoaXMuaGFuZGxlQW5zd2VyQ2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9Ub3BXcmFwcGVyPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8VG9wV3JhcHBlcj5cbiAgICAgICAgICAgICAgPE1lbnVDb250YWluZXIgLz5cbiAgICAgICAgICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsYW5hdGlvbkhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+VGhlIHNob3J0LCBzd2VldCBhbmQgd29uZGVyZnVsbHkgd2Fja3kgd2F5cyB0byBleHBsYWluIDxzcGFuIGNsYXNzTmFtZT1cImNvbmNlcHQtbmFtZVwiPnt0aGlzLnN0YXRlLmRhdGEuY29uY2VwdH08L3NwYW4+PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnMubGVuZ3RofSBFeHBsYW5hdGlvbnMg4oCiIEtlZXAgY2xpY2tpbmcgdGhyb3VnaCB1bnRpbCB5b3UgZmluZCBvbmUgdGhhdCwgd2VsbCwgY2xpY2tzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkJhciBoYW5kbGVBbnN3ZXJDbGljaz17dGhpcy5oYW5kbGVBbnN3ZXJDbGlja30gLz5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dFZGl0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIGhhbmRsZVN1Ym1pdEFuc3dlcj17dGhpcy5oYW5kbGVTdWJtaXRBbnN3ZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8RXhwbGFuYXRpb25zU2VjdGlvbiBwYXJlbnRIYW5kbGVWb3RlPXt0aGlzLnBhcmVudEhhbmRsZVZvdGV9IGhhbmRsZVVkYXRpbmdEaXNwbGF5ZWRTY29yZXM9e3RoaXMuaGFuZGxlVWRhdGluZ0Rpc3BsYXllZFNjb3Jlc30gaW5jcmVtZW50RXhwbGFuYXRpb249e3RoaXMuaW5jcmVtZW50RXhwbGFuYXRpb259IGN1cnJlbnRFeHBsYW5hdGlvbj17dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9uc1t0aGlzLnN0YXRlLmV4cGxhbmF0aW9uSW5kZXhdfSAvPlxuICAgICAgICAgICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L1RvcFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uSGVhZGVyIGgxIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5leHBsYW5hdGlvbkhlYWRlciBwIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2E5YTlhOTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbmNlcHQtbmFtZSB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzY0NjJFRjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQWN0aW9uQmFyIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRXhwbGFpblRoaXMpXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis/[id].js */"));
        }
      }
    }
  }]);

  return ExplainThis;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_20__["withRouter"])(ExplainThis));

/***/ })

})
//# sourceMappingURL=[id].js.1a5b3df887d5ccffe556.hot-update.js.map