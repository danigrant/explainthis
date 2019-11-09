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
/* harmony import */ var _EditorTools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditorTools */ "./components/EditorTools.js");







var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


 // import EditorJs from 'react-editor-js'
// import Embed from '@editorjs/embed'
// import Code from '@editorjs/code'
// import LinkTool from '@editorjs/link'
// import SimpleImage from '@editorjs/simple-image'

var EditorJs = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
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
var Embed = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
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
var Code = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
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
var LinkTool = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
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
var SimpleImage = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(function () {
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Editor, _React$Component);

  function Editor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Editor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Editor).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSave", function () {
      editor.save().then(function (outputData) {
        console.log('Article data: ', outputData);
      })["catch"](function (error) {
        console.log('Saving failed: ', error);
      });
    });

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
        className: "jsx-847575237" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-847575237" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-847575237" + " " + "attribution",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("img", {
        src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
        className: "jsx-847575237" + " " + "attributionAvatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-847575237" + " " + "attributionUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "@barackobama")), __jsx("div", {
        onClick: this.handleSave,
        className: "jsx-847575237",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "submit button")), this.state.isMounted && __jsx(EditorJs, {
        className: "editor",
        placeholder: "Add your creative explanation",
        tools: _EditorTools__WEBPACK_IMPORTED_MODULE_10__["EDITOR_JS_TOOLS"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "847575237",
        __self: this
      }, ".wrapper.jsx-847575237{border:1px solid #ddd;border-radius:5px;width:550px;margin-top:10px;}.header.jsx-847575237{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-847575237{position:relative;top:5px;left:5px;}.attributionAvatar.jsx-847575237{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-847575237{display:inline-block;margin-left:10px;position:relative;bottom:15px;}.editor.jsx-847575237{padding:5px 20px 5px 20px;border-radius:0 0 5px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEVvQixBQUdtQyxBQU1ILEFBT0QsQUFLUCxBQUtVLEFBTUssV0FWUCxPQUxYLENBUFEsRUFpQkMsQ0F2QkMsSUFjVCxBQWVpQixJQVZMLEtBWkwsQUFRbEIsR0FTb0IsRUF2Qk4sV0FPYyxBQVk1QixDQWxCa0IsQUE0QmxCLElBTGMsWUF0QmQsQUF1QkEsU0FqQitCLDZCQUMvQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgRURJVE9SX0pTX1RPT0xTIH0gZnJvbSAnLi9FZGl0b3JUb29scydcblxuLy8gaW1wb3J0IEVkaXRvckpzIGZyb20gJ3JlYWN0LWVkaXRvci1qcydcbi8vIGltcG9ydCBFbWJlZCBmcm9tICdAZWRpdG9yanMvZW1iZWQnXG4vLyBpbXBvcnQgQ29kZSBmcm9tICdAZWRpdG9yanMvY29kZSdcbi8vIGltcG9ydCBMaW5rVG9vbCBmcm9tICdAZWRpdG9yanMvbGluaydcbi8vIGltcG9ydCBTaW1wbGVJbWFnZSBmcm9tICdAZWRpdG9yanMvc2ltcGxlLWltYWdlJ1xuXG5jb25zdCBFZGl0b3JKcyA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgncmVhY3QtZWRpdG9yLWpzJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNvbnN0IEVtYmVkID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvZW1iZWQnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgQ29kZSA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnQGVkaXRvcmpzL2NvZGUnKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgTGlua1Rvb2wgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ0BlZGl0b3Jqcy9saW5rJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNvbnN0IFNpbXBsZUltYWdlID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdAZWRpdG9yanMvc2ltcGxlLWltYWdlJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cblxuY2xhc3MgRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNb3VudGVkOiBmYWxzZVxuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc01vdW50ZWQ6IGZhbHNlXG4gICAgfSlcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzTW91bnRlZDogdHJ1ZVxuICAgIH0pXG4gIH1cbiAgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICBlZGl0b3Iuc2F2ZSgpLnRoZW4oKG91dHB1dERhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdBcnRpY2xlIGRhdGE6ICcsIG91dHB1dERhdGEpXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU2F2aW5nIGZhaWxlZDogJywgZXJyb3IpXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uQXZhdGFyXCIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzgyMjU0NzczMjM3NjIwNzM2MC81ZzBGQzhYWC5qcGdcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25Vc2VybmFtZVwiPkBiYXJhY2tvYmFtYTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX0+c3VibWl0IGJ1dHRvbjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuaXNNb3VudGVkICYmXG4gICAgICAgICAgPEVkaXRvckpzIGNsYXNzTmFtZT1cImVkaXRvclwiIHBsYWNlaG9sZGVyPSdBZGQgeW91ciBjcmVhdGl2ZSBleHBsYW5hdGlvbicgdG9vbHM9e0VESVRPUl9KU19UT09MU30gLz5cbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA1NTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzOXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb25BdmF0YXIge1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb25Vc2VybmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVkaXRvciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./components/EditorTools.js":
/*!***********************************!*\
  !*** ./components/EditorTools.js ***!
  \***********************************/
/*! exports provided: EDITOR_JS_TOOLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_JS_TOOLS", function() { return EDITOR_JS_TOOLS; });
var Embed = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! @editorjs/embed */ "./node_modules/@editorjs/embed/dist/bundle.js", 7));
}, {
  ssr: false
});
var Table = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.t.bind(null, /*! @editorjs/table */ "./node_modules/@editorjs/table/dist/bundle.js", 7));
}, {
  ssr: false
});
var Paragraph = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.t.bind(null, /*! @editorjs/paragraph */ "./node_modules/@editorjs/paragraph/dist/bundle.js", 7));
}, {
  ssr: false
});
var List = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.t.bind(null, /*! @editorjs/list */ "./node_modules/@editorjs/list/dist/bundle.js", 7));
}, {
  ssr: false
});
var Warning = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.t.bind(null, /*! @editorjs/warning */ "./node_modules/@editorjs/warning/dist/bundle.js", 7));
}, {
  ssr: false
});
var Code = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! @editorjs/code */ "./node_modules/@editorjs/code/dist/bundle.js", 7));
}, {
  ssr: false
});
var LinkTool = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! @editorjs/link */ "./node_modules/@editorjs/link/dist/bundle.js", 7));
}, {
  ssr: false
});
var Image = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.t.bind(null, /*! @editorjs/image */ "./node_modules/@editorjs/image/dist/bundle.js", 7));
}, {
  ssr: false
});
var Raw = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.t.bind(null, /*! @editorjs/raw */ "./node_modules/@editorjs/raw/dist/bundle.js", 7));
}, {
  ssr: false
});
var Header = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.t.bind(null, /*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js", 7));
}, {
  ssr: false
});
var Quote = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.t.bind(null, /*! @editorjs/quote */ "./node_modules/@editorjs/quote/dist/bundle.js", 7));
}, {
  ssr: false
});
var Marker = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.t.bind(null, /*! @editorjs/marker */ "./node_modules/@editorjs/marker/dist/bundle.js", 7));
}, {
  ssr: false
});
var CheckList = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.t.bind(null, /*! @editorjs/checklist */ "./node_modules/@editorjs/checklist/dist/bundle.js", 7));
}, {
  ssr: false
});
var Delimiter = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.t.bind(null, /*! @editorjs/delimiter */ "./node_modules/@editorjs/delimiter/dist/bundle.js", 7));
}, {
  ssr: false
});
var InlineCode = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.t.bind(null, /*! @editorjs/inline-code */ "./node_modules/@editorjs/inline-code/dist/bundle.js", 7));
}, {
  ssr: false
});
var SimpleImage = dynamic(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! @editorjs/simple-image */ "./node_modules/@editorjs/simple-image/dist/bundle.js", 7));
}, {
  ssr: false
});
var EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  paragraph: Paragraph,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage
};

/***/ }),

/***/ "./node_modules/@editorjs/checklist/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/code/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/delimiter/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/embed/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/header/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/image/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/inline-code/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/link/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/list/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/marker/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/paragraph/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/quote/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/raw/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/simple-image/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/table/dist/bundle.js":
false,

/***/ "./node_modules/@editorjs/warning/dist/bundle.js":
false

})
//# sourceMappingURL=explainthis.js.434d55b938282063a748.hot-update.js.map