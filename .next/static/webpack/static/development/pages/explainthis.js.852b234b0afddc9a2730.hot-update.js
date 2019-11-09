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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSave", function () {});

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
        className: "jsx-1182414025" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1182414025" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1182414025" + " " + "attribution",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("img", {
        src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
        className: "jsx-1182414025" + " " + "attributionAvatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-1182414025" + " " + "attributionUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "@barackobama")), __jsx("div", {
        onClick: this.handleSave,
        className: "jsx-1182414025",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "submit button")), __jsx(ReactQuill, {
        className: "editor",
        value: this.state.text,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "847575237",
        __self: this
      }, ".wrapper.jsx-1182414025{border:1px solid #ddd;border-radius:5px;width:550px;margin-top:10px;}.header.jsx-1182414025{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-1182414025{position:relative;top:5px;left:5px;}.attributionAvatar.jsx-1182414025{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-1182414025{display:inline-block;margin-left:10px;position:relative;bottom:15px;}.editor.jsx-1182414025{padding:5px 20px 5px 20px;border-radius:0 0 5px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NvQixBQUdtQyxBQU1ILEFBT0QsQUFLUCxBQUtVLEFBTUssV0FWUCxPQUxYLENBUFEsRUFpQkMsQ0F2QkMsSUFjVCxBQWVpQixJQVZMLEtBWkwsQUFRbEIsR0FTb0IsRUF2Qk4sV0FPYyxBQVk1QixDQWxCa0IsQUE0QmxCLElBTGMsWUF0QmQsQUF1QkEsU0FqQitCLDZCQUMvQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IHRleHQ6ICcnIH0gLy8gWW91IGNhbiBhbHNvIHBhc3MgYSBRdWlsbCBEZWx0YSBoZXJlXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogdmFsdWUgfSlcbiAgfVxuXG4gIGhhbmRsZVNhdmUgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9PnN1Ym1pdCBidXR0b248L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxSZWFjdFF1aWxsIGNsYXNzTmFtZT1cImVkaXRvclwiIHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0b3Ige1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93LCAucWwtY29udGFpbmVyLnFsLXNub3cge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIGltcG9ydCB7IEVESVRPUl9KU19UT09MUyB9IGZyb20gJy4vRWRpdG9yVG9vbHMnXG5cbi8vIGltcG9ydCBFZGl0b3JKcyBmcm9tICdyZWFjdC1lZGl0b3ItanMnXG4vLyBpbXBvcnQgRW1iZWQgZnJvbSAnQGVkaXRvcmpzL2VtYmVkJ1xuLy8gaW1wb3J0IENvZGUgZnJvbSAnQGVkaXRvcmpzL2NvZGUnXG4vLyBpbXBvcnQgTGlua1Rvb2wgZnJvbSAnQGVkaXRvcmpzL2xpbmsnXG4vLyBpbXBvcnQgU2ltcGxlSW1hZ2UgZnJvbSAnQGVkaXRvcmpzL3NpbXBsZS1pbWFnZSdcblxuLy8gY29uc3QgRWRpdG9ySnMgPSBkeW5hbWljKFxuLy8gICAoKSA9PiBpbXBvcnQoJ3JlYWN0LWVkaXRvci1qcycpLFxuLy8gICB7IHNzcjogZmFsc2UgfVxuLy8gKVxuLy9cbi8vIGNvbnN0IEVtYmVkID0gZHluYW1pYyhcbi8vICAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvZW1iZWQnKSxcbi8vICAgeyBzc3I6IGZhbHNlIH1cbi8vIClcbi8vXG4vLyBjb25zdCBDb2RlID0gZHluYW1pYyhcbi8vICAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvY29kZScpLFxuLy8gICB7IHNzcjogZmFsc2UgfVxuLy8gKVxuLy9cbi8vIGNvbnN0IExpbmtUb29sID0gZHluYW1pYyhcbi8vICAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvbGluaycpLFxuLy8gICB7IHNzcjogZmFsc2UgfVxuLy8gKVxuLy9cbi8vIGNvbnN0IFNpbXBsZUltYWdlID0gZHluYW1pYyhcbi8vICAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvc2ltcGxlLWltYWdlJyksXG4vLyAgIHsgc3NyOiBmYWxzZSB9XG4vLyApXG4vL1xuLy9cbi8vIGNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpXG4vLyAgICAgdGhpcy5zdGF0ZSA9IHtcbi8vICAgICAgIGlzTW91bnRlZDogZmFsc2Vcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgaXNNb3VudGVkOiBmYWxzZVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICBpc01vdW50ZWQ6IHRydWVcbi8vICAgICB9KVxuLy8gICB9XG4vLyAgIGFzeW5jIGhhbmRsZVNhdmUoKSB7XG4vLyAgICAgY29uc3Qgc2F2ZWREYXRhID0gYXdhaXQgdGhpcy5lZGl0b3JJbnN0YW5jZS5zYXZlKCk7XG4vLyAgIH1cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uXCI+XG4vLyAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uQXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25Vc2VybmFtZVwiPkBiYXJhY2tvYmFtYTwvcD5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX0+c3VibWl0IGJ1dHRvbjwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRoaXMuc3RhdGUuaXNNb3VudGVkICYmXG4vLyAgICAgICAgICAgPEVkaXRvckpzIGNsYXNzTmFtZT1cImVkaXRvclwiIGluc3RhbmNlUmVmPXtpbnN0YW5jZSA9PiB0aGlzLmVkaXRvckluc3RhbmNlID0gaW5zdGFuY2V9IHBsYWNlaG9sZGVyPSdBZGQgeW91ciBjcmVhdGl2ZSBleHBsYW5hdGlvbicgdG9vbHM9e0VESVRPUl9KU19UT09MU30gLz5cbi8vICAgICAgICAgfVxuLy8gICAgICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgICAgICAgLndyYXBwZXIge1xuLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICAgICAgICAgIHdpZHRoOiA1NTBweDtcbi8vICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC5oZWFkZXIge1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4vLyAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzOXB4O1xuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4vLyAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLmF0dHJpYnV0aW9uIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIHRvcDogNXB4O1xuLy8gICAgICAgICAgICAgbGVmdDogNXB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuLy8gICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLmVkaXRvciB7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgYH08L3N0eWxlPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "233154949",
        __self: this
      }, ".ql-toolbar.ql-snow,.ql-container.ql-snow{border:none;}.ql-toolbar.ql-snow{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUUyQixBQUd5QixBQUdpQixZQUYvQixpQkFHQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IHRleHQ6ICcnIH0gLy8gWW91IGNhbiBhbHNvIHBhc3MgYSBRdWlsbCBEZWx0YSBoZXJlXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dDogdmFsdWUgfSlcbiAgfVxuXG4gIGhhbmRsZVNhdmUgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmV9PnN1Ym1pdCBidXR0b248L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxSZWFjdFF1aWxsIGNsYXNzTmFtZT1cImVkaXRvclwiIHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0b3Ige1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93LCAucWwtY29udGFpbmVyLnFsLXNub3cge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIGltcG9ydCB7IEVESVRPUl9KU19UT09MUyB9IGZyb20gJy4vRWRpdG9yVG9vbHMnXG5cbi8vIGltcG9ydCBFZGl0b3JKcyBmcm9tICdyZWFjdC1lZGl0b3ItanMnXG4vLyBpbXBvcnQgRW1iZWQgZnJvbSAnQGVkaXRvcmpzL2VtYmVkJ1xuLy8gaW1wb3J0IENvZGUgZnJvbSAnQGVkaXRvcmpzL2NvZGUnXG4vLyBpbXBvcnQgTGlua1Rvb2wgZnJvbSAnQGVkaXRvcmpzL2xpbmsnXG4vLyBpbXBvcnQgU2ltcGxlSW1hZ2UgZnJvbSAnQGVkaXRvcmpzL3NpbXBsZS1pbWFnZSdcblxuLy8gY29uc3QgRWRpdG9ySnMgPSBkeW5hbWljKFxuLy8gICAoKSA9PiBpbXBvcnQoJ3JlYWN0LWVkaXRvci1qcycpLFxuLy8gICB7IHNzcjogZmFsc2UgfVxuLy8gKVxuLy9cbi8vIGNvbnN0IEVtYmVkID0gZHluYW1pYyhcbi8vICAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvZW1iZWQnKSxcbi8vICAgeyBzc3I6IGZhbHNlIH1cbi8vIClcbi8vXG4vLyBjb25zdCBDb2RlID0gZHluYW1pYyhcbi8vICAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvY29kZScpLFxuLy8gICB7IHNzcjogZmFsc2UgfVxuLy8gKVxuLy9cbi8vIGNvbnN0IExpbmtUb29sID0gZHluYW1pYyhcbi8vICAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvbGluaycpLFxuLy8gICB7IHNzcjogZmFsc2UgfVxuLy8gKVxuLy9cbi8vIGNvbnN0IFNpbXBsZUltYWdlID0gZHluYW1pYyhcbi8vICAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvc2ltcGxlLWltYWdlJyksXG4vLyAgIHsgc3NyOiBmYWxzZSB9XG4vLyApXG4vL1xuLy9cbi8vIGNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpXG4vLyAgICAgdGhpcy5zdGF0ZSA9IHtcbi8vICAgICAgIGlzTW91bnRlZDogZmFsc2Vcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgaXNNb3VudGVkOiBmYWxzZVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICBpc01vdW50ZWQ6IHRydWVcbi8vICAgICB9KVxuLy8gICB9XG4vLyAgIGFzeW5jIGhhbmRsZVNhdmUoKSB7XG4vLyAgICAgY29uc3Qgc2F2ZWREYXRhID0gYXdhaXQgdGhpcy5lZGl0b3JJbnN0YW5jZS5zYXZlKCk7XG4vLyAgIH1cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uXCI+XG4vLyAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uQXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuLy8gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25Vc2VybmFtZVwiPkBiYXJhY2tvYmFtYTwvcD5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX0+c3VibWl0IGJ1dHRvbjwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHRoaXMuc3RhdGUuaXNNb3VudGVkICYmXG4vLyAgICAgICAgICAgPEVkaXRvckpzIGNsYXNzTmFtZT1cImVkaXRvclwiIGluc3RhbmNlUmVmPXtpbnN0YW5jZSA9PiB0aGlzLmVkaXRvckluc3RhbmNlID0gaW5zdGFuY2V9IHBsYWNlaG9sZGVyPSdBZGQgeW91ciBjcmVhdGl2ZSBleHBsYW5hdGlvbicgdG9vbHM9e0VESVRPUl9KU19UT09MU30gLz5cbi8vICAgICAgICAgfVxuLy8gICAgICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgICAgICAgLndyYXBwZXIge1xuLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICAgICAgICAgIHdpZHRoOiA1NTBweDtcbi8vICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC5oZWFkZXIge1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4vLyAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzOXB4O1xuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4vLyAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLmF0dHJpYnV0aW9uIHtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIHRvcDogNXB4O1xuLy8gICAgICAgICAgICAgbGVmdDogNXB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuLy8gICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLmVkaXRvciB7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgYH08L3N0eWxlPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // import { EDITOR_JS_TOOLS } from './EditorTools'
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

/***/ })

})
//# sourceMappingURL=explainthis.js.852b234b0afddc9a2730.hot-update.js.map