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
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var EditorJs = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
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
          lineNumber: 23
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-847575237" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-847575237" + " " + "attribution",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("img", {
        src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
        className: "jsx-847575237" + " " + "attributionAvatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-847575237" + " " + "attributionUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "@barackobama")), __jsx("div", {
        onClick: this.handleSave,
        className: "jsx-847575237",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "submit button")), __jsx(react_quill__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: "editor",
        value: this.state.text,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "847575237",
        __self: this
      }, ".wrapper.jsx-847575237{border:1px solid #ddd;border-radius:5px;width:550px;margin-top:10px;}.header.jsx-847575237{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-847575237{position:relative;top:5px;left:5px;}.attributionAvatar.jsx-847575237{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-847575237{display:inline-block;margin-left:10px;position:relative;bottom:15px;}.editor.jsx-847575237{padding:5px 20px 5px 20px;border-radius:0 0 5px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JvQixBQUdtQyxBQU1ILEFBT0QsQUFLUCxBQUtVLEFBTUssV0FWUCxPQUxYLENBUFEsRUFpQkMsQ0F2QkMsSUFjVCxBQWVpQixJQVZMLEtBWkwsQUFRbEIsR0FTb0IsRUF2Qk4sV0FPYyxBQVk1QixDQWxCa0IsQUE0QmxCLElBTGMsWUF0QmQsQUF1QkEsU0FqQitCLDZCQUMvQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFJlYWN0UXVpbGwgZnJvbSAncmVhY3QtcXVpbGwnO1xuXG5jb25zdCBFZGl0b3JKcyA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyB0ZXh0OiAnJyB9IC8vIFlvdSBjYW4gYWxzbyBwYXNzIGEgUXVpbGwgRGVsdGEgaGVyZVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IHZhbHVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+QGJhcmFja29iYW1hPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfT5zdWJtaXQgYnV0dG9uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UmVhY3RRdWlsbCBjbGFzc05hbWU9XCJlZGl0b3JcIiB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM5cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvblVzZXJuYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWRpdG9yIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gaW1wb3J0IHsgRURJVE9SX0pTX1RPT0xTIH0gZnJvbSAnLi9FZGl0b3JUb29scydcblxuLy8gaW1wb3J0IEVkaXRvckpzIGZyb20gJ3JlYWN0LWVkaXRvci1qcydcbi8vIGltcG9ydCBFbWJlZCBmcm9tICdAZWRpdG9yanMvZW1iZWQnXG4vLyBpbXBvcnQgQ29kZSBmcm9tICdAZWRpdG9yanMvY29kZSdcbi8vIGltcG9ydCBMaW5rVG9vbCBmcm9tICdAZWRpdG9yanMvbGluaydcbi8vIGltcG9ydCBTaW1wbGVJbWFnZSBmcm9tICdAZWRpdG9yanMvc2ltcGxlLWltYWdlJ1xuXG4vLyBjb25zdCBFZGl0b3JKcyA9IGR5bmFtaWMoXG4vLyAgICgpID0+IGltcG9ydCgncmVhY3QtZWRpdG9yLWpzJyksXG4vLyAgIHsgc3NyOiBmYWxzZSB9XG4vLyApXG4vL1xuLy8gY29uc3QgRW1iZWQgPSBkeW5hbWljKFxuLy8gICAoKSA9PiBpbXBvcnQoJ0BlZGl0b3Jqcy9lbWJlZCcpLFxuLy8gICB7IHNzcjogZmFsc2UgfVxuLy8gKVxuLy9cbi8vIGNvbnN0IENvZGUgPSBkeW5hbWljKFxuLy8gICAoKSA9PiBpbXBvcnQoJ0BlZGl0b3Jqcy9jb2RlJyksXG4vLyAgIHsgc3NyOiBmYWxzZSB9XG4vLyApXG4vL1xuLy8gY29uc3QgTGlua1Rvb2wgPSBkeW5hbWljKFxuLy8gICAoKSA9PiBpbXBvcnQoJ0BlZGl0b3Jqcy9saW5rJyksXG4vLyAgIHsgc3NyOiBmYWxzZSB9XG4vLyApXG4vL1xuLy8gY29uc3QgU2ltcGxlSW1hZ2UgPSBkeW5hbWljKFxuLy8gICAoKSA9PiBpbXBvcnQoJ0BlZGl0b3Jqcy9zaW1wbGUtaW1hZ2UnKSxcbi8vICAgeyBzc3I6IGZhbHNlIH1cbi8vIClcbi8vXG4vL1xuLy8gY2xhc3MgRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcylcbi8vICAgICB0aGlzLnN0YXRlID0ge1xuLy8gICAgICAgaXNNb3VudGVkOiBmYWxzZVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICBpc01vdW50ZWQ6IGZhbHNlXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgIGlzTW91bnRlZDogdHJ1ZVxuLy8gICAgIH0pXG4vLyAgIH1cbi8vICAgYXN5bmMgaGFuZGxlU2F2ZSgpIHtcbi8vICAgICBjb25zdCBzYXZlZERhdGEgPSBhd2FpdCB0aGlzLmVkaXRvckluc3RhbmNlLnNhdmUoKTtcbi8vICAgfVxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbi8vICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4vLyAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+QGJhcmFja29iYW1hPC9wPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfT5zdWJtaXQgYnV0dG9uPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdGhpcy5zdGF0ZS5pc01vdW50ZWQgJiZcbi8vICAgICAgICAgICA8RWRpdG9ySnMgY2xhc3NOYW1lPVwiZWRpdG9yXCIgaW5zdGFuY2VSZWY9e2luc3RhbmNlID0+IHRoaXMuZWRpdG9ySW5zdGFuY2UgPSBpbnN0YW5jZX0gcGxhY2Vob2xkZXI9J0FkZCB5b3VyIGNyZWF0aXZlIGV4cGxhbmF0aW9uJyB0b29scz17RURJVE9SX0pTX1RPT0xTfSAvPlxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIDxzdHlsZSBqc3g+e2Bcbi8vICAgICAgICAgICAud3JhcHBlciB7XG4vLyAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgICAgICAgICAgd2lkdGg6IDU1MHB4O1xuLy8gICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLmhlYWRlciB7XG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuLy8gICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbi8vICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM5cHg7XG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbi8vICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICAuYXR0cmlidXRpb24ge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgdG9wOiA1cHg7XG4vLyAgICAgICAgICAgICBsZWZ0OiA1cHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4vLyAgICAgICAgICAgICB3aWR0aDogNTBweDtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC5hdHRyaWJ1dGlvblVzZXJuYW1lIHtcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICAuZWRpdG9yIHtcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICBgfTwvc3R5bGU+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
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

/***/ })

})
//# sourceMappingURL=explainthis.js.32b45ed79b8d9643d59c.hot-update.js.map