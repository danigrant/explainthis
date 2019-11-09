webpackHotUpdate("static/development/pages/explainthis.js",{

/***/ "./pages/explainthis.js":
/*!******************************!*\
  !*** ./pages/explainthis.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ActionBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ActionBar */ "./components/ActionBar.js");
/* harmony import */ var _components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ExplanationsSection */ "./components/ExplanationsSection.js");
/* harmony import */ var _mockconceptdata__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../mockconceptdata */ "./mockconceptdata.js");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Editor */ "./components/Editor.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Firebase */ "./components/Firebase.js");










var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainthis.js";

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ExplainThis, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_18__["default"])('emergence');

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
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      }, "What are all the different ways to explain ", this.state.data[0].concept, "?"), __jsx(_components_ActionBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        handleAnswerClick: this.handleAnswerClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), this.state.showEditor && __jsx(_components_Editor__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state.data[0])), __jsx("p", {
        className: "jsx-3074074089",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.state.data[0].explanations.length, " Explanations")), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_15__["default"], {
        explanations: _mockconceptdata__WEBPACK_IMPORTED_MODULE_16__["default"].explanations,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "3074074089",
        __self: this
      }, ".explanationHeader.jsx-3074074089{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENvQixBQUcwQyw2QkFDL0IiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9leHBsYWludGhpcy9wYWdlcy9leHBsYWludGhpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJztcbmltcG9ydCBBY3Rpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9BY3Rpb25CYXInXG5pbXBvcnQgRXhwbGFuYXRpb25zU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0V4cGxhbmF0aW9uc1NlY3Rpb24nXG5pbXBvcnQgbW9ja0RhdGEgZnJvbSAnLi4vbW9ja2NvbmNlcHRkYXRhJ1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRvcidcbmltcG9ydCBnZXRDb25jZXB0IGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWJhc2UnXG5cblxuY2xhc3MgRXhwbGFpblRoaXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKSAvLyBmaXJzdCB0aGluZyB5b3UgYWx3YXlzIGRvLCBjYWxscyB0aGUgbWFzdGVyIHJlYWN0IGNvbnN0cnVjdG9yXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dFZGl0b3I6IGZhbHNlLFxuICAgICAgZGF0YToge31cbiAgICB9XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBhd2FpdCBnZXRDb25jZXB0KCdlbWVyZ2VuY2UnKVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlQW5zd2VyQ2xpY2sgPSAoKSA9PiB7IC8vIGVzNiBzbyB0aGF0IHlvdSBkb24ndCBoYXZlIHRvIGJpbmQgdGhpcyBmb3Igc2NvcGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dFZGl0b3I6ICF0aGlzLnN0YXRlLnNob3dFZGl0b3JcbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFuYXRpb25IZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMT5XaGF0IGFyZSBhbGwgdGhlIGRpZmZlcmVudCB3YXlzIHRvIGV4cGxhaW4ge3RoaXMuc3RhdGUuZGF0YVswXS5jb25jZXB0fT88L2gxPlxuICAgICAgICAgICAgPEFjdGlvbkJhciBoYW5kbGVBbnN3ZXJDbGljaz17dGhpcy5oYW5kbGVBbnN3ZXJDbGlja30gLz5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5zaG93RWRpdG9yICYmXG4gICAgICAgICAgICAgIDxFZGl0b3IgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmRhdGFbMF0pfTwvcD5cbiAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmRhdGFbMF0uZXhwbGFuYXRpb25zLmxlbmd0aH0gRXhwbGFuYXRpb25zPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxFeHBsYW5hdGlvbnNTZWN0aW9uIGV4cGxhbmF0aW9ucz17bW9ja0RhdGEuZXhwbGFuYXRpb25zfSAvPlxuICAgICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5leHBsYW5hdGlvbkhlYWRlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICB9XG4gICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxhaW5UaGlzXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis.js */"));
    }
  }]);

  return ExplainThis;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ExplainThis);

/***/ })

})
//# sourceMappingURL=explainthis.js.2ebe2c53f4a25892e775.hot-update.js.map