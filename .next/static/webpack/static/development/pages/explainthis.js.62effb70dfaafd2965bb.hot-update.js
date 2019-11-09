webpackHotUpdate("static/development/pages/explainthis.js",{

/***/ "./pages/explainthis.js":
/*!******************************!*\
  !*** ./pages/explainthis.js ***!
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ActionBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ActionBar */ "./components/ActionBar.js");
/* harmony import */ var _components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ExplanationsSection */ "./components/ExplanationsSection.js");
/* harmony import */ var _mockconceptdata__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../mockconceptdata */ "./mockconceptdata.js");
/* harmony import */ var _TempAddAnswer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TempAddAnswer */ "./pages/TempAddAnswer.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Firebase */ "./components/Firebase.js");









var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainthis.js";

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
      // es6 so that you don't have to bind this for scope
      _this.setState({
        showEditor: !_this.state.showEditor
      });
    });

    _this.state = {
      showEditor: false,
      data: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ExplainThis, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_17__["default"])('emergence')[0];

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

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-3074074089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3074074089" + " " + "explanationHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("h1", {
        className: "jsx-3074074089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "What are all the different ways to explain ", _mockconceptdata__WEBPACK_IMPORTED_MODULE_15__["default"].concept, "?"), __jsx(_components_ActionBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        handleAnswerClick: this.handleAnswerClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), this.state.showEditor && __jsx(_TempAddAnswer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-3074074089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.state.data.explanations.length, " Explanations")), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
        explanations: this.state.data.explanations,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3074074089",
        __self: this
      }, ".explanationHeader.jsx-3074074089{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNvQixBQUcwQyw2QkFDL0IiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9wYWdlcy9leHBsYWludGhpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9BY3Rpb25CYXInXG5pbXBvcnQgRXhwbGFuYXRpb25zU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0V4cGxhbmF0aW9uc1NlY3Rpb24nXG5pbXBvcnQgbW9ja0RhdGEgZnJvbSAnLi4vbW9ja2NvbmNlcHRkYXRhJ1xuaW1wb3J0IFRlbXBBZGRBbnN3ZXIgZnJvbSAnLi9UZW1wQWRkQW5zd2VyJ1xuaW1wb3J0IGdldENvbmNlcHQgZnJvbSAnLi4vY29tcG9uZW50cy9GaXJlYmFzZSdcblxuXG5jbGFzcyBFeHBsYWluVGhpcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpIC8vIGZpcnN0IHRoaW5nIHlvdSBhbHdheXMgZG8sIGNhbGxzIHRoZSBtYXN0ZXIgcmVhY3QgY29uc3RydWN0b3JcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0VkaXRvcjogZmFsc2UsXG4gICAgICBkYXRhOiB7fVxuICAgIH1cbiAgfVxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IGF3YWl0IGdldENvbmNlcHQoJ2VtZXJnZW5jZScpWzBdIC8vIHtcImNvbmNlcHRcIjpcImVtZXJnZW5jZVwiLFwiZXhwbGFuYXRpb25zXCI6e1wiYXV0aG9yXCI6XCJAYmFyYWNrb2JhbWFcIixcImRhdGV0aW1lXCI6e1wic2Vjb25kc1wiOjE1NzMxOTQ1NzEsXCJuYW5vc2Vjb25kc1wiOjB9LFwiZXhwbGFuYXRpb25cIjpcIndoYXRldmVyIHRoZSBleHBsYW5hdGlvbiBpcyBwbHVzIHZpZGVvIG9yIHNvbWV0aGluZyBtYXliZSB0aGlzIGlzIGh0bWw/XCIsXCJ2b3RlTG9nXCI6e1wiZGF0ZXRpbWVcIjp7XCJzZWNvbmRzXCI6MTU3MzE5NDYwMCxcIm5hbm9zZWNvbmRzXCI6MH0sXCJ1c2VyXCI6XCJAYmFyYWNrb2JhbWFcIixcInZvdGVcIjotMX19fVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlQW5zd2VyQ2xpY2sgPSAoKSA9PiB7IC8vIGVzNiBzbyB0aGF0IHlvdSBkb24ndCBoYXZlIHRvIGJpbmQgdGhpcyBmb3Igc2NvcGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dFZGl0b3I6ICF0aGlzLnN0YXRlLnNob3dFZGl0b3JcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25IZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMT5XaGF0IGFyZSBhbGwgdGhlIGRpZmZlcmVudCB3YXlzIHRvIGV4cGxhaW4ge21vY2tEYXRhLmNvbmNlcHR9PzwvaDE+XG4gICAgICAgICAgICA8QWN0aW9uQmFyIGhhbmRsZUFuc3dlckNsaWNrPXt0aGlzLmhhbmRsZUFuc3dlckNsaWNrfSAvPlxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dFZGl0b3IgJiZcbiAgICAgICAgICAgICAgPFRlbXBBZGRBbnN3ZXIgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmRhdGEuZXhwbGFuYXRpb25zLmxlbmd0aH0gRXhwbGFuYXRpb25zPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxFeHBsYW5hdGlvbnNTZWN0aW9uIGV4cGxhbmF0aW9ucz17dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9uc30gLz5cbiAgICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZXhwbGFuYXRpb25IZWFkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBsYWluVGhpc1xuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis.js */"));
    }
  }]);

  return ExplainThis;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplainThis);

/***/ })

})
//# sourceMappingURL=explainthis.js.62effb70dfaafd2965bb.hot-update.js.map