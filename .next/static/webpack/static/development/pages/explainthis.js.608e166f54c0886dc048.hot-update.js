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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @editorjs/embed */ "./node_modules/@editorjs/embed/dist/bundle.js");
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editorjs_embed__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _editorjs_code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @editorjs/code */ "./node_modules/@editorjs/code/dist/bundle.js");
/* harmony import */ var _editorjs_code__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editorjs_code__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _editorjs_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @editorjs/link */ "./node_modules/@editorjs/link/dist/bundle.js");
/* harmony import */ var _editorjs_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_editorjs_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _editorjs_simple_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @editorjs/simple-image */ "./node_modules/@editorjs/simple-image/dist/bundle.js");
/* harmony import */ var _editorjs_simple_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_editorjs_simple_image__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Editor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

 // import EditorJs from 'react-editor-js'





var DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
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

var ReactEditor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ReactEditor, _React$Component);

  function ReactEditor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReactEditor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ReactEditor).call(this, props));
    _this.state = {
      isMounted: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ReactEditor, [{
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.state.isMounted && __jsx(EditorJs, {
        data: data,
        tools: {
          embed: _editorjs_embed__WEBPACK_IMPORTED_MODULE_7___default.a,
          code: _editorjs_code__WEBPACK_IMPORTED_MODULE_8___default.a,
          simpleImage: _editorjs_simple_image__WEBPACK_IMPORTED_MODULE_10___default.a,
          linkTool: _editorjs_link__WEBPACK_IMPORTED_MODULE_9___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }));
    }
  }]);

  return ReactEditor;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // function Editor() {
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

/***/ }),

/***/ "./node_modules/@editorjs/editorjs/dist/editor.js":
false,

/***/ "./node_modules/@editorjs/paragraph/dist/bundle.js":
false,

/***/ "./node_modules/react-editor-js/dist/react-editor-js.umd.js":
false

})
//# sourceMappingURL=explainthis.js.608e166f54c0886dc048.hot-update.js.map