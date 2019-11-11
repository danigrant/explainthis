webpackHotUpdate("static/development/pages/explainthis/[id].js",{

/***/ "./pages/explainthis/[id].js":
/*!***********************************!*\
  !*** ./pages/explainthis/[id].js ***!
  \***********************************/
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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ActionBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ActionBar */ "./components/ActionBar.js");
/* harmony import */ var _components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ExplanationsSection */ "./components/ExplanationsSection.js");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Editor */ "./components/Editor.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainthis/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;










var ExplainThis =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ExplainThis, _React$Component);

  function ExplainThis(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ExplainThis);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ExplainThis).call(this, props)); // first thing you always do, calls the master react constructor

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleAnswerClick", function () {
      _this.setState({
        showEditor: !_this.state.showEditor
      });
    });

    _this.state = {
      showEditor: false,
      data: {}
    };
    var router = _this.props.router;
    _this.handleSubmitAnswer = _this.handleSubmitAnswer.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.parentHandleVote = _this.parentHandleVote.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ExplainThis, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_16__["getConceptExplanations"])(router.query.id);

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
    key: "handleSubmitAnswer",
    value: function () {
      var _handleSubmitAnswer = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                router = this.props.router;
                _context2.t0 = this;
                _context2.t1 = !this.state.showEditor;
                _context2.next = 5;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_16__["getConceptExplanations"])(router.query.id);

              case 5:
                _context2.t2 = _context2.sent;
                _context2.t3 = {
                  showEditor: _context2.t1,
                  data: _context2.t2
                };

                _context2.t0.setState.call(_context2.t0, _context2.t3);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSubmitAnswer() {
        return _handleSubmitAnswer.apply(this, arguments);
      }

      return handleSubmitAnswer;
    }()
  }, {
    key: "parentHandleVote",
    value: function () {
      var _parentHandleVote = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                router = this.props.router;
                _context3.t0 = this;
                _context3.next = 4;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_16__["getConceptExplanations"])(router.query.id);

              case 4:
                _context3.t1 = _context3.sent;
                _context3.t2 = {
                  data: _context3.t1
                };

                _context3.t0.setState.call(_context3.t0, _context3.t2);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function parentHandleVote() {
        return _parentHandleVote.apply(this, arguments);
      }

      return parentHandleVote;
    }()
  }, {
    key: "render",
    value: function render() {
      {
        var router = this.props.router;

        if (!this.state.data.concept) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_17__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            className: "jsx-2652836033",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-2652836033" + " " + "explanationHeader",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-2652836033",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "What are all the different ways to explain ", this.state.data.concept, "?"), __jsx(_components_ActionBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
            handleAnswerClick: this.handleAnswerClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }), this.state.showEditor && __jsx(_components_Editor__WEBPACK_IMPORTED_MODULE_15__["default"], {
            handleSubmitAnswer: this.handleSubmitAnswer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }), __jsx("p", {
            className: "jsx-2652836033",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, this.state.data.explanations.length, " Explanations")), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
            parentHandleVote: this.parentHandleVote,
            explanations: this.state.data.explanations,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
            id: "2652836033",
            __self: this
          }, ".explanationHeader.jsx-2652836033{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRTBCLEFBR2dELDZCQUMvQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL3BhZ2VzL2V4cGxhaW50aGlzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWN0aW9uQmFyJ1xuaW1wb3J0IEV4cGxhbmF0aW9uc1NlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uJ1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VkaXRvcidcbmltcG9ydCB7IGdldENvbmNlcHRFeHBsYW5hdGlvbnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBFeHBsYWluVGhpcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpIC8vIGZpcnN0IHRoaW5nIHlvdSBhbHdheXMgZG8sIGNhbGxzIHRoZSBtYXN0ZXIgcmVhY3QgY29uc3RydWN0b3JcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0VkaXRvcjogZmFsc2UsXG4gICAgICBkYXRhOiB7fVxuICAgIH1cbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuaGFuZGxlU3VibWl0QW5zd2VyID0gdGhpcy5oYW5kbGVTdWJtaXRBbnN3ZXIuYmluZCh0aGlzKVxuICAgIHRoaXMucGFyZW50SGFuZGxlVm90ZSA9IHRoaXMucGFyZW50SGFuZGxlVm90ZS5iaW5kKHRoaXMpXG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBhd2FpdCBnZXRDb25jZXB0RXhwbGFuYXRpb25zKHJvdXRlci5xdWVyeS5pZClcbiAgICB9KVxuICB9XG4gIGhhbmRsZUFuc3dlckNsaWNrID0gKCkgPT4geyBcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dFZGl0b3I6ICF0aGlzLnN0YXRlLnNob3dFZGl0b3JcbiAgICB9KVxuICB9XG4gIGFzeW5jIGhhbmRsZVN1Ym1pdEFuc3dlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0VkaXRvcjogIXRoaXMuc3RhdGUuc2hvd0VkaXRvcixcbiAgICAgIGRhdGE6IGF3YWl0IGdldENvbmNlcHRFeHBsYW5hdGlvbnMocm91dGVyLnF1ZXJ5LmlkKVxuICAgIH0pXG4gIH1cbiAgYXN5bmMgcGFyZW50SGFuZGxlVm90ZSgpIHtcbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogYXdhaXQgZ2V0Q29uY2VwdEV4cGxhbmF0aW9ucyhyb3V0ZXIucXVlcnkuaWQpXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgICB7XG4gICAgICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5kYXRhLmNvbmNlcHQpIHtcbiAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25IZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMT5XaGF0IGFyZSBhbGwgdGhlIGRpZmZlcmVudCB3YXlzIHRvIGV4cGxhaW4ge3RoaXMuc3RhdGUuZGF0YS5jb25jZXB0fT88L2gxPlxuICAgICAgICAgICAgICAgICAgPEFjdGlvbkJhciBoYW5kbGVBbnN3ZXJDbGljaz17dGhpcy5oYW5kbGVBbnN3ZXJDbGlja30gLz5cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5zaG93RWRpdG9yICYmXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0b3IgaGFuZGxlU3VibWl0QW5zd2VyPXt0aGlzLmhhbmRsZVN1Ym1pdEFuc3dlcn0vPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnMubGVuZ3RofSBFeHBsYW5hdGlvbnM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEV4cGxhbmF0aW9uc1NlY3Rpb24gcGFyZW50SGFuZGxlVm90ZT17dGhpcy5wYXJlbnRIYW5kbGVWb3RlfSBleHBsYW5hdGlvbnM9e3RoaXMuc3RhdGUuZGF0YS5leHBsYW5hdGlvbnN9IC8+XG4gICAgICAgICAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmV4cGxhbmF0aW9uSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEV4cGxhaW5UaGlzKVxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis/[id].js */"));
        }
      }
    }
  }]);

  return ExplainThis;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_18__["withRouter"])(ExplainThis));

/***/ })

})
//# sourceMappingURL=[id].js.465be20ea2119929351f.hot-update.js.map