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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

 // import EditorJs from 'react-editor-js'
// import Embed from '@editorjs/embed'
// import Code from '@editorjs/code'
// import LinkTool from '@editorjs/link'
// import SimpleImage from '@editorjs/simple-image'

var EditorJs = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-editor-js */ "./node_modules/react-editor-js/dist/react-editor-js.umd.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-editor-js */ "./node_modules/react-editor-js/dist/react-editor-js.umd.js")];
    },
    modules: ['react-editor-js']
  }
});
var Embed = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! @editorjs/embed */ "./node_modules/@editorjs/embed/dist/bundle.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @editorjs/embed */ "./node_modules/@editorjs/embed/dist/bundle.js")];
    },
    modules: ['@editorjs/embed']
  }
});
var Code = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! @editorjs/code */ "./node_modules/@editorjs/code/dist/bundle.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @editorjs/code */ "./node_modules/@editorjs/code/dist/bundle.js")];
    },
    modules: ['@editorjs/code']
  }
});
var LinkTool = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! @editorjs/link */ "./node_modules/@editorjs/link/dist/bundle.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @editorjs/link */ "./node_modules/@editorjs/link/dist/bundle.js")];
    },
    modules: ['@editorjs/link']
  }
});
var SimpleImage = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! @editorjs/simple-image */ "./node_modules/@editorjs/simple-image/dist/bundle.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @editorjs/simple-image */ "./node_modules/@editorjs/simple-image/dist/bundle.js")];
    },
    modules: ['@editorjs/simple-image']
  }
});

var Editor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Editor, _React$Component);

  function Editor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Editor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Editor).call(this, props));
    _this.state = {
      isMounted: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Editor, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        isMounted: false
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMounted: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-2142971204" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2142971204" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2142971204" + " " + "attribution",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("img", {
        src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
        className: "jsx-2142971204" + " " + "attributionAvatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2142971204" + " " + "attributionUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "@barackobama"))), this.state.isMounted && __jsx(EditorJs, {
        className: "editor",
        tools: {
          embed: Embed,
          code: Code,
          simpleImage: SimpleImage,
          linkTool: LinkTool
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2142971204",
        __self: this
      }, ".wrapper.jsx-2142971204{border:1px solid #ddd;border-radius:5px;width:550px;margin-top:10px;}.header.jsx-2142971204{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-2142971204{position:relative;top:5px;left:5px;}.attributionAvatar.jsx-2142971204{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-2142971204{display:inline-block;margin-left:10px;position:relative;bottom:15px;}.editor.jsx-2142971204{padding:5px 20px 5px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVvQixBQUdtQyxBQU1ILEFBT0QsQUFLUCxBQUtVLEFBTUssV0FWUCxPQUxYLENBUFEsRUFpQkMsQ0F2QkMsSUFjVCxBQWVYLElBVnVCLEtBWkwsQUFRbEIsR0FTb0IsRUF2Qk4sV0FPYyxBQVk1QixDQWxCa0IsSUF1QkosWUF0QmQsQUF1QkEsU0FqQitCLDZCQUMvQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG4vLyBpbXBvcnQgRWRpdG9ySnMgZnJvbSAncmVhY3QtZWRpdG9yLWpzJ1xuLy8gaW1wb3J0IEVtYmVkIGZyb20gJ0BlZGl0b3Jqcy9lbWJlZCdcbi8vIGltcG9ydCBDb2RlIGZyb20gJ0BlZGl0b3Jqcy9jb2RlJ1xuLy8gaW1wb3J0IExpbmtUb29sIGZyb20gJ0BlZGl0b3Jqcy9saW5rJ1xuLy8gaW1wb3J0IFNpbXBsZUltYWdlIGZyb20gJ0BlZGl0b3Jqcy9zaW1wbGUtaW1hZ2UnXG5cbmNvbnN0IEVkaXRvckpzID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdyZWFjdC1lZGl0b3ItanMnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgRW1iZWQgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ0BlZGl0b3Jqcy9lbWJlZCcpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBDb2RlID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvY29kZScpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBMaW5rVG9vbCA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnQGVkaXRvcmpzL2xpbmsnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgU2ltcGxlSW1hZ2UgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ0BlZGl0b3Jqcy9zaW1wbGUtaW1hZ2UnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vdW50ZWQ6IGZhbHNlXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzTW91bnRlZDogZmFsc2VcbiAgICB9KVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNNb3VudGVkOiB0cnVlXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+QGJhcmFja29iYW1hPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuaXNNb3VudGVkICYmXG4gICAgICAgICAgPEVkaXRvckpzIGNsYXNzTmFtZT1cImVkaXRvclwiIHRvb2xzPXt7IGVtYmVkOiBFbWJlZCwgY29kZTogQ29kZSwgc2ltcGxlSW1hZ2U6IFNpbXBsZUltYWdlLCBsaW5rVG9vbDogTGlua1Rvb2wgfX0gLz5cbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzOXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVkaXRvciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIEVkaXRvcigpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbi8vICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uQXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuLy8gICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xCYXJcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sQmFySXRlbVwiPlxuLy8gICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bGlua19yb3VuZGVkPC9pPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sQmFySXRlbVwiPlxuLy8gICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aW5zZXJ0X3Bob3RvX3JvdW5kZWQ8L2k+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xCYXJJdGVtXCI+XG4vLyAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3R3aXR0ZXIuc3ZnXCIgLz5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbEJhckl0ZW1cIj5cbi8vICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMveW91dHViZS5zdmdcIiAvPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sQmFySXRlbVwiPlxuLy8gICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2FtZXJhX2Zyb250X3JvdW5kZWQ8L2k+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvclwiPlxuLy8gICAgICAgICA8Zm9ybT5cbi8vICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIndyaXRlLWV4cGxhbmF0aW9uLWZpZWxkXCIgcGxhY2Vob2xkZXI9XCJIb3cgd291bGQgeW91IGV4cGxhaW4gZW1lcmdlbmNlP1wiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbi8vICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8c3R5bGUganN4PntgXG4vLyAgICAgICAgIC53cmFwcGVyIHtcbi8vICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuLy8gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4vLyAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuaGVhZGVyIHtcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuLy8gICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4vLyAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbi8vICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuYXR0cmlidXRpb24ge1xuLy8gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICB0b3A6IDVweDtcbi8vICAgICAgICAgICBsZWZ0OiA1cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbi8vICAgICAgICAgICB3aWR0aDogNTBweDtcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4vLyAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuLy8gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICBib3R0b206IDE1cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLnRvb2xCYXIge1xuLy8gICAgICAgICAgIGhlaWdodDogNDRweDtcbi8vICAgICAgICAgICBwYWRkaW5nOiAxcHggOHB4O1xuLy8gICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC50b29sQmFySXRlbSB7XG4vLyAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgICAgIHdpZHRoOiAyNHB4O1xuLy8gICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbi8vICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgdG9wOiAxMHB4O1xuLy8gICAgICAgICAgIGZsb2F0OiByaWdodDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuZWRpdG9yIHtcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuZWRpdG9yIHRleHRhcmVhIHtcbi8vICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDhweDtcbi8vICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4vLyAgICAgICAgICAgYm9yZGVyOiBub25lO1xuLy8gICAgICAgICAgIG91dGxpbmU6IDA7XG4vLyAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIGB9PC9zdHlsZT5cbi8vICAgICA8L2Rpdj5cbi8vICAgKVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); // function Editor() {
//   return (
//     <div className="wrapper">
//       <div className="header">
//         <div className="attribution">
//           <img className="attributionAvatar" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg" />
//           <p className="attributionUsername">@barackobama</p>
//         </div>
//       </div>
//       <div className="toolBar">
//         <div className="toolBarItem">
//           <i className="material-icons">link_rounded</i>
//         </div>
//         <div className="toolBarItem">
//           <i className="material-icons">insert_photo_rounded</i>
//         </div>
//         <div className="toolBarItem">
//           <img src="/images/twitter.svg" />
//         </div>
//         <div className="toolBarItem">
//           <img src="/images/youtube.svg" />
//         </div>
//         <div className="toolBarItem">
//           <i className="material-icons">camera_front_rounded</i>
//         </div>
//       </div>
//       <div className="editor">
//         <form>
//           <textarea name="write-explanation-field" placeholder="How would you explain emergence?" rows="5"></textarea>
//         </form>
//       </div>
//       <style jsx>{`
//         .wrapper {
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           width: 550px;
//           margin-top: 10px;
//         }
//         .header {
//           background: #fafafa;
//           padding: 3px 8px;
//           min-height: 39px;
//           border-radius: 5px 5px 0 0;
//           border-bottom: 1px solid #ddd;
//         }
//         .attribution {
//           position: relative;
//           top: 5px;
//           left: 5px;
//         }
//         .attributionAvatar {
//           width: 50px;
//           border-radius: 50px;
//           display: inline-block;
//         }
//         .attributionUsername {
//           display: inline-block;
//           margin-left: 10px;
//           position: relative;
//           bottom: 15px;
//         }
//         .toolBar {
//           height: 44px;
//           padding: 1px 8px;
//           border-bottom: 1px solid #ddd;
//         }
//         .toolBarItem {
//           display: inline-block;
//           width: 24px;
//           margin-right: 20px;
//           position: relative;
//           top: 10px;
//           float: right;
//         }
//         .editor {
//           border-radius: 0 0 5px 5px;
//         }
//         .editor textarea {
//           padding: 10px 8px;
//           font-size: 15px;
//           border: none;
//           outline: 0;
//           width: -webkit-fill-available;
//         }
//       `}</style>
//     </div>
//   )
// }


/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ })

})
//# sourceMappingURL=explainthis.js.226c45257dce1efab418.hot-update.js.map