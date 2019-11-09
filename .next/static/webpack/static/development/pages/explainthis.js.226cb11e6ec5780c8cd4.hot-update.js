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
        className: "jsx-1070303436" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1070303436" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1070303436" + " " + "attribution",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("img", {
        src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
        className: "jsx-1070303436" + " " + "attributionAvatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-1070303436" + " " + "attributionUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "@barackobama"))), this.state.isMounted && __jsx(EditorJs, {
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
        id: "1070303436",
        __self: this
      }, ".wrapper.jsx-1070303436{border:1px solid #ddd;border-radius:5px;width:550px;margin-top:10px;}.header.jsx-1070303436{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-1070303436{position:relative;top:5px;left:5px;}.attributionAvatar.jsx-1070303436{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-1070303436{display:inline-block;margin-left:10px;position:relative;bottom:15px;}EditorJs.jsx-1070303436{padding:5px 20px 5px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVvQixBQUdtQyxBQU1ILEFBT0QsQUFLUCxBQUtVLEFBTUssV0FWUCxPQUxYLENBUFEsRUFpQkMsQ0F2QkMsSUFjVCxBQWVYLElBVnVCLEtBWkwsQUFRbEIsR0FTb0IsRUF2Qk4sV0FPYyxBQVk1QixDQWxCa0IsSUF1QkosWUF0QmQsQUF1QkEsU0FqQitCLDZCQUMvQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG4vLyBpbXBvcnQgRWRpdG9ySnMgZnJvbSAncmVhY3QtZWRpdG9yLWpzJ1xuLy8gaW1wb3J0IEVtYmVkIGZyb20gJ0BlZGl0b3Jqcy9lbWJlZCdcbi8vIGltcG9ydCBDb2RlIGZyb20gJ0BlZGl0b3Jqcy9jb2RlJ1xuLy8gaW1wb3J0IExpbmtUb29sIGZyb20gJ0BlZGl0b3Jqcy9saW5rJ1xuLy8gaW1wb3J0IFNpbXBsZUltYWdlIGZyb20gJ0BlZGl0b3Jqcy9zaW1wbGUtaW1hZ2UnXG5cbmNvbnN0IEVkaXRvckpzID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdyZWFjdC1lZGl0b3ItanMnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgRW1iZWQgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ0BlZGl0b3Jqcy9lbWJlZCcpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBDb2RlID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvY29kZScpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBMaW5rVG9vbCA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnQGVkaXRvcmpzL2xpbmsnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgU2ltcGxlSW1hZ2UgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ0BlZGl0b3Jqcy9zaW1wbGUtaW1hZ2UnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vdW50ZWQ6IGZhbHNlXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzTW91bnRlZDogZmFsc2VcbiAgICB9KVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNNb3VudGVkOiB0cnVlXG4gICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+QGJhcmFja29iYW1hPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuaXNNb3VudGVkICYmXG4gICAgICAgICAgPEVkaXRvckpzIHRvb2xzPXt7IGVtYmVkOiBFbWJlZCwgY29kZTogQ29kZSwgc2ltcGxlSW1hZ2U6IFNpbXBsZUltYWdlLCBsaW5rVG9vbDogTGlua1Rvb2wgfX0gLz5cbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzOXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgRWRpdG9ySnMge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBmdW5jdGlvbiBFZGl0b3IoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uXCI+XG4vLyAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbi8vICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+QGJhcmFja29iYW1hPC9wPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sQmFyXCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbEJhckl0ZW1cIj5cbi8vICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmxpbmtfcm91bmRlZDwvaT5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbEJhckl0ZW1cIj5cbi8vICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmluc2VydF9waG90b19yb3VuZGVkPC9pPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sQmFySXRlbVwiPlxuLy8gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy90d2l0dGVyLnN2Z1wiIC8+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xCYXJJdGVtXCI+XG4vLyAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3lvdXR1YmUuc3ZnXCIgLz5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbEJhckl0ZW1cIj5cbi8vICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNhbWVyYV9mcm9udF9yb3VuZGVkPC9pPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3JcIj5cbi8vICAgICAgICAgPGZvcm0+XG4vLyAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ3cml0ZS1leHBsYW5hdGlvbi1maWVsZFwiIHBsYWNlaG9sZGVyPVwiSG93IHdvdWxkIHlvdSBleHBsYWluIGVtZXJnZW5jZT9cIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4vLyAgICAgICAgIDwvZm9ybT5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICAud3JhcHBlciB7XG4vLyAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgICAgICAgICAgd2lkdGg6IDU1MHB4O1xuLy8gICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmhlYWRlciB7XG4vLyAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbi8vICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuLy8gICAgICAgICAgIG1pbi1oZWlnaHQ6IDM5cHg7XG4vLyAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4vLyAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmF0dHJpYnV0aW9uIHtcbi8vICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgdG9wOiA1cHg7XG4vLyAgICAgICAgICAgbGVmdDogNXB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4vLyAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4vLyAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbi8vICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbi8vICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC50b29sQmFyIHtcbi8vICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4vLyAgICAgICAgICAgcGFkZGluZzogMXB4IDhweDtcbi8vICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAudG9vbEJhckl0ZW0ge1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICAgICAgICB3aWR0aDogMjRweDtcbi8vICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4vLyAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgIHRvcDogMTBweDtcbi8vICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmVkaXRvciB7XG4vLyAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmVkaXRvciB0ZXh0YXJlYSB7XG4vLyAgICAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuLy8gICAgICAgICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICAgICAgICBvdXRsaW5lOiAwO1xuLy8gICAgICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICBgfTwvc3R5bGU+XG4vLyAgICAgPC9kaXY+XG4vLyAgIClcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
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
//# sourceMappingURL=explainthis.js.226cb11e6ec5780c8cd4.hot-update.js.map