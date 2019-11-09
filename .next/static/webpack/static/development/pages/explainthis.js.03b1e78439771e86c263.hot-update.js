webpackHotUpdate("static/development/pages/explainthis.js",{

/***/ "./components/Editor.js":
/*!******************************!*\
  !*** ./components/Editor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});

var Editor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Editor, _React$Component);

  function Editor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Editor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Editor).call(this, props));
    _this.state = {
      text: ''
    }; // You can also pass a Quill Delta here

    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Editor, [{
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        text: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-847575237" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-847575237" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-847575237" + " " + "attribution",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("img", {
        src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
        className: "jsx-847575237" + " " + "attributionAvatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-847575237" + " " + "attributionUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "@barackobama")), __jsx("div", {
        onClick: this.handleSave,
        className: "jsx-847575237",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "submit button")), __jsx(ReactQuill, {
        className: "editor",
        value: this.state.text,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "847575237",
        __self: this
      }, ".wrapper.jsx-847575237{border:1px solid #ddd;border-radius:5px;width:550px;margin-top:10px;}.header.jsx-847575237{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-847575237{position:relative;top:5px;left:5px;}.attributionAvatar.jsx-847575237{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-847575237{display:inline-block;margin-left:10px;position:relative;bottom:15px;}.editor.jsx-847575237{padding:5px 20px 5px 20px;border-radius:0 0 5px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJvQixBQUdtQyxBQU1ILEFBT0QsQUFLUCxBQUtVLEFBTUssV0FWUCxPQUxYLENBUFEsRUFpQkMsQ0F2QkMsSUFjVCxBQWVpQixJQVZMLEtBWkwsQUFRbEIsR0FTb0IsRUF2Qk4sV0FPYyxBQVk1QixDQWxCa0IsQUE0QmxCLElBTGMsWUF0QmQsQUF1QkEsU0FqQitCLDZCQUMvQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IHRleHQ6ICcnIH0gLy8gWW91IGNhbiBhbHNvIHBhc3MgYSBRdWlsbCBEZWx0YSBoZXJlXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogdmFsdWUgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9PnN1Ym1pdCBidXR0b248L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxSZWFjdFF1aWxsIGNsYXNzTmFtZT1cImVkaXRvclwiIHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0b3Ige1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBpbXBvcnQgeyBFRElUT1JfSlNfVE9PTFMgfSBmcm9tICcuL0VkaXRvclRvb2xzJ1xuXG4vLyBpbXBvcnQgRWRpdG9ySnMgZnJvbSAncmVhY3QtZWRpdG9yLWpzJ1xuLy8gaW1wb3J0IEVtYmVkIGZyb20gJ0BlZGl0b3Jqcy9lbWJlZCdcbi8vIGltcG9ydCBDb2RlIGZyb20gJ0BlZGl0b3Jqcy9jb2RlJ1xuLy8gaW1wb3J0IExpbmtUb29sIGZyb20gJ0BlZGl0b3Jqcy9saW5rJ1xuLy8gaW1wb3J0IFNpbXBsZUltYWdlIGZyb20gJ0BlZGl0b3Jqcy9zaW1wbGUtaW1hZ2UnXG5cbi8vIGNvbnN0IEVkaXRvckpzID0gZHluYW1pYyhcbi8vICAgKCkgPT4gaW1wb3J0KCdyZWFjdC1lZGl0b3ItanMnKSxcbi8vICAgeyBzc3I6IGZhbHNlIH1cbi8vIClcbi8vXG4vLyBjb25zdCBFbWJlZCA9IGR5bmFtaWMoXG4vLyAgICgpID0+IGltcG9ydCgnQGVkaXRvcmpzL2VtYmVkJyksXG4vLyAgIHsgc3NyOiBmYWxzZSB9XG4vLyApXG4vL1xuLy8gY29uc3QgQ29kZSA9IGR5bmFtaWMoXG4vLyAgICgpID0+IGltcG9ydCgnQGVkaXRvcmpzL2NvZGUnKSxcbi8vICAgeyBzc3I6IGZhbHNlIH1cbi8vIClcbi8vXG4vLyBjb25zdCBMaW5rVG9vbCA9IGR5bmFtaWMoXG4vLyAgICgpID0+IGltcG9ydCgnQGVkaXRvcmpzL2xpbmsnKSxcbi8vICAgeyBzc3I6IGZhbHNlIH1cbi8vIClcbi8vXG4vLyBjb25zdCBTaW1wbGVJbWFnZSA9IGR5bmFtaWMoXG4vLyAgICgpID0+IGltcG9ydCgnQGVkaXRvcmpzL3NpbXBsZS1pbWFnZScpLFxuLy8gICB7IHNzcjogZmFsc2UgfVxuLy8gKVxuLy9cbi8vXG4vLyBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKVxuLy8gICAgIHRoaXMuc3RhdGUgPSB7XG4vLyAgICAgICBpc01vdW50ZWQ6IGZhbHNlXG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbi8vICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgIGlzTW91bnRlZDogZmFsc2Vcbi8vICAgICB9KVxuLy8gICB9XG4vLyAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgaXNNb3VudGVkOiB0cnVlXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gICBhc3luYyBoYW5kbGVTYXZlKCkge1xuLy8gICAgIGNvbnN0IHNhdmVkRGF0YSA9IGF3YWl0IHRoaXMuZWRpdG9ySW5zdGFuY2Uuc2F2ZSgpO1xuLy8gICB9XG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuLy8gICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbi8vICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9PnN1Ym1pdCBidXR0b248L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICB0aGlzLnN0YXRlLmlzTW91bnRlZCAmJlxuLy8gICAgICAgICAgIDxFZGl0b3JKcyBjbGFzc05hbWU9XCJlZGl0b3JcIiBpbnN0YW5jZVJlZj17aW5zdGFuY2UgPT4gdGhpcy5lZGl0b3JJbnN0YW5jZSA9IGluc3RhbmNlfSBwbGFjZWhvbGRlcj0nQWRkIHlvdXIgY3JlYXRpdmUgZXhwbGFuYXRpb24nIHRvb2xzPXtFRElUT1JfSlNfVE9PTFN9IC8+XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICAgIC53cmFwcGVyIHtcbi8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4vLyAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICAuaGVhZGVyIHtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuLy8gICAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuLy8gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICB0b3A6IDVweDtcbi8vICAgICAgICAgICAgIGxlZnQ6IDVweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbi8vICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuLy8gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC5lZGl0b3Ige1xuLy8gICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // import { EDITOR_JS_TOOLS } from './EditorTools'
// import EditorJs from 'react-editor-js'
// import Embed from '@editorjs/embed'
// import Code from '@editorjs/code'
// import LinkTool from '@editorjs/link'
// import SimpleImage from '@editorjs/simple-image'
// const EditorJs = dynamic(
//   () => import('react-editor-js'),
//   { ssr: false }
// )
//
// const Embed = dynamic(
//   () => import('@editorjs/embed'),
//   { ssr: false }
// )
//
// const Code = dynamic(
//   () => import('@editorjs/code'),
//   { ssr: false }
// )
//
// const LinkTool = dynamic(
//   () => import('@editorjs/link'),
//   { ssr: false }
// )
//
// const SimpleImage = dynamic(
//   () => import('@editorjs/simple-image'),
//   { ssr: false }
// )
//
//
// class Editor extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isMounted: false
//     }
//   }
//   componentWillMount() {
//     this.setState({
//       isMounted: false
//     })
//   }
//   componentDidMount() {
//     this.setState({
//       isMounted: true
//     })
//   }
//   async handleSave() {
//     const savedData = await this.editorInstance.save();
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <div className="header">
//           <div className="attribution">
//             <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
//             <p className="attributionUsername">@barackobama</p>
//           </div>
//           <div onClick={this.handleSave}>submit button</div>
//         </div>
//         {
//           this.state.isMounted &&
//           <EditorJs className="editor" instanceRef={instance => this.editorInstance = instance} placeholder='Add your creative explanation' tools={EDITOR_JS_TOOLS} />
//         }
//         <style jsx>{`
//           .wrapper {
//             border: 1px solid #ddd;
//             border-radius: 5px;
//             width: 550px;
//             margin-top: 10px;
//           }
//           .header {
//             background: #fafafa;
//             padding: 3px 8px;
//             min-height: 39px;
//             border-radius: 5px 5px 0 0;
//             border-bottom: 1px solid #ddd;
//           }
//           .attribution {
//             position: relative;
//             top: 5px;
//             left: 5px;
//           }
//           .attributionAvatar {
//             width: 50px;
//             border-radius: 50px;
//             display: inline-block;
//           }
//           .attributionUsername {
//             display: inline-block;
//             margin-left: 10px;
//             position: relative;
//             bottom: 15px;
//           }
//           .editor {
//             padding: 5px 20px 5px 20px;
//             border-radius: 0 0 5px 5px;
//           }
//         `}</style>
//       </div>
//     )
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/buffer/index.js":
false,

/***/ "./node_modules/create-react-class/factory.js":
false,

/***/ "./node_modules/create-react-class/index.js":
false,

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
false,

/***/ "./node_modules/fbjs/lib/emptyObject.js":
false,

/***/ "./node_modules/fbjs/lib/invariant.js":
false,

/***/ "./node_modules/fbjs/lib/warning.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/lodash/_DataView.js":
false,

/***/ "./node_modules/lodash/_Hash.js":
false,

/***/ "./node_modules/lodash/_ListCache.js":
false,

/***/ "./node_modules/lodash/_Map.js":
false,

/***/ "./node_modules/lodash/_MapCache.js":
false,

/***/ "./node_modules/lodash/_Promise.js":
false,

/***/ "./node_modules/lodash/_Set.js":
false,

/***/ "./node_modules/lodash/_SetCache.js":
false,

/***/ "./node_modules/lodash/_Stack.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_Uint8Array.js":
false,

/***/ "./node_modules/lodash/_WeakMap.js":
false,

/***/ "./node_modules/lodash/_arrayFilter.js":
false,

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
false,

/***/ "./node_modules/lodash/_arrayMap.js":
false,

/***/ "./node_modules/lodash/_arrayPush.js":
false,

/***/ "./node_modules/lodash/_arraySome.js":
false,

/***/ "./node_modules/lodash/_assocIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseEach.js":
false,

/***/ "./node_modules/lodash/_baseFindIndex.js":
false,

/***/ "./node_modules/lodash/_baseFor.js":
false,

/***/ "./node_modules/lodash/_baseForOwn.js":
false,

/***/ "./node_modules/lodash/_baseGet.js":
false,

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_baseHasIn.js":
false,

/***/ "./node_modules/lodash/_baseIsArguments.js":
false,

/***/ "./node_modules/lodash/_baseIsEqual.js":
false,

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
false,

/***/ "./node_modules/lodash/_baseIsMatch.js":
false,

/***/ "./node_modules/lodash/_baseIsNative.js":
false,

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
false,

/***/ "./node_modules/lodash/_baseIteratee.js":
false,

/***/ "./node_modules/lodash/_baseKeys.js":
false,

/***/ "./node_modules/lodash/_baseMatches.js":
false,

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
false,

/***/ "./node_modules/lodash/_baseProperty.js":
false,

/***/ "./node_modules/lodash/_basePropertyDeep.js":
false,

/***/ "./node_modules/lodash/_baseSome.js":
false,

/***/ "./node_modules/lodash/_baseTimes.js":
false,

/***/ "./node_modules/lodash/_baseToString.js":
false,

/***/ "./node_modules/lodash/_baseUnary.js":
false,

/***/ "./node_modules/lodash/_cacheHas.js":
false,

/***/ "./node_modules/lodash/_castPath.js":
false,

/***/ "./node_modules/lodash/_coreJsData.js":
false,

/***/ "./node_modules/lodash/_createBaseEach.js":
false,

/***/ "./node_modules/lodash/_createBaseFor.js":
false,

/***/ "./node_modules/lodash/_createFind.js":
false,

/***/ "./node_modules/lodash/_equalArrays.js":
false,

/***/ "./node_modules/lodash/_equalByTag.js":
false,

/***/ "./node_modules/lodash/_equalObjects.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getAllKeys.js":
false,

/***/ "./node_modules/lodash/_getMapData.js":
false,

/***/ "./node_modules/lodash/_getMatchData.js":
false,

/***/ "./node_modules/lodash/_getNative.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_getSymbols.js":
false,

/***/ "./node_modules/lodash/_getTag.js":
false,

/***/ "./node_modules/lodash/_getValue.js":
false,

/***/ "./node_modules/lodash/_hasPath.js":
false,

/***/ "./node_modules/lodash/_hashClear.js":
false,

/***/ "./node_modules/lodash/_hashDelete.js":
false,

/***/ "./node_modules/lodash/_hashGet.js":
false,

/***/ "./node_modules/lodash/_hashHas.js":
false,

/***/ "./node_modules/lodash/_hashSet.js":
false,

/***/ "./node_modules/lodash/_isIndex.js":
false,

/***/ "./node_modules/lodash/_isIterateeCall.js":
false,

/***/ "./node_modules/lodash/_isKey.js":
false,

/***/ "./node_modules/lodash/_isKeyable.js":
false,

/***/ "./node_modules/lodash/_isMasked.js":
false,

/***/ "./node_modules/lodash/_isPrototype.js":
false,

/***/ "./node_modules/lodash/_isStrictComparable.js":
false,

/***/ "./node_modules/lodash/_listCacheClear.js":
false,

/***/ "./node_modules/lodash/_listCacheDelete.js":
false,

/***/ "./node_modules/lodash/_listCacheGet.js":
false,

/***/ "./node_modules/lodash/_listCacheHas.js":
false,

/***/ "./node_modules/lodash/_listCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapCacheClear.js":
false,

/***/ "./node_modules/lodash/_mapCacheDelete.js":
false,

/***/ "./node_modules/lodash/_mapCacheGet.js":
false,

/***/ "./node_modules/lodash/_mapCacheHas.js":
false,

/***/ "./node_modules/lodash/_mapCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapToArray.js":
false,

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
false,

/***/ "./node_modules/lodash/_memoizeCapped.js":
false,

/***/ "./node_modules/lodash/_nativeCreate.js":
false,

/***/ "./node_modules/lodash/_nativeKeys.js":
false,

/***/ "./node_modules/lodash/_nodeUtil.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_overArg.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/_setCacheAdd.js":
false,

/***/ "./node_modules/lodash/_setCacheHas.js":
false,

/***/ "./node_modules/lodash/_setToArray.js":
false,

/***/ "./node_modules/lodash/_stackClear.js":
false,

/***/ "./node_modules/lodash/_stackDelete.js":
false,

/***/ "./node_modules/lodash/_stackGet.js":
false,

/***/ "./node_modules/lodash/_stackHas.js":
false,

/***/ "./node_modules/lodash/_stackSet.js":
false,

/***/ "./node_modules/lodash/_stringToPath.js":
false,

/***/ "./node_modules/lodash/_toKey.js":
false,

/***/ "./node_modules/lodash/_toSource.js":
false,

/***/ "./node_modules/lodash/eq.js":
false,

/***/ "./node_modules/lodash/find.js":
false,

/***/ "./node_modules/lodash/findIndex.js":
false,

/***/ "./node_modules/lodash/get.js":
false,

/***/ "./node_modules/lodash/hasIn.js":
false,

/***/ "./node_modules/lodash/identity.js":
false,

/***/ "./node_modules/lodash/isArguments.js":
false,

/***/ "./node_modules/lodash/isArray.js":
false,

/***/ "./node_modules/lodash/isArrayLike.js":
false,

/***/ "./node_modules/lodash/isBuffer.js":
false,

/***/ "./node_modules/lodash/isEqual.js":
false,

/***/ "./node_modules/lodash/isFunction.js":
false,

/***/ "./node_modules/lodash/isLength.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/isTypedArray.js":
false,

/***/ "./node_modules/lodash/keys.js":
false,

/***/ "./node_modules/lodash/memoize.js":
false,

/***/ "./node_modules/lodash/property.js":
false,

/***/ "./node_modules/lodash/some.js":
false,

/***/ "./node_modules/lodash/stubArray.js":
false,

/***/ "./node_modules/lodash/stubFalse.js":
false,

/***/ "./node_modules/lodash/toFinite.js":
false,

/***/ "./node_modules/lodash/toInteger.js":
false,

/***/ "./node_modules/lodash/toNumber.js":
false,

/***/ "./node_modules/lodash/toString.js":
false,

/***/ "./node_modules/quill/dist/quill.js":
false,

/***/ "./node_modules/react-dom-factories/index.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-dom/server.browser.js":
false,

/***/ "./node_modules/react-quill/lib/component.js":
false,

/***/ "./node_modules/react-quill/lib/index.js":
false,

/***/ "./node_modules/react-quill/lib/mixin.js":
false,

/***/ "./node_modules/react-quill/lib/toolbar.js":
false

})
//# sourceMappingURL=explainthis.js.03b1e78439771e86c263.hot-update.js.map