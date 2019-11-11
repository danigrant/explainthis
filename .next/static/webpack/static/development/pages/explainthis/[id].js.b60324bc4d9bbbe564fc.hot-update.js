webpackHotUpdate("static/development/pages/explainthis/[id].js",{

/***/ "./components/Editor.js":
/*!******************************!*\
  !*** ./components/Editor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Firebase */ "./components/Firebase.js");
/* harmony import */ var _Firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Firebase__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/Users/danigrant/Projects/explainthis/components/Editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Editor, _React$Component);

  function Editor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Editor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Editor).call(this, props));
    _this.state = {
      text: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.handleSave = _this.handleSave.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.quillRef.getModule('toolbar').addHandler('image', imageHandler);
      // , handlers: { 'image': this.imageHandler }
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      this.setState({
        text: value
      });
    }
  }, {
    key: "handleSave",
    value: function () {
      var _handleSave = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_Firebase__WEBPACK_IMPORTED_MODULE_11__["saveExplanationToDB"])("emergence", "@barackobama", this.state.text);

              case 2:
                this.setState({
                  text: ''
                });
                this.props.handleVote();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSave() {
        return _handleSave.apply(this, arguments);
      }

      return handleSave;
    }()
  }, {
    key: "imageHandler",
    value: function () {
      var _imageHandler = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(image) {
        var res, json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('in image handler');
                _context2.next = 3;
                return fetch('https://api.imgur.com/3/upload', {
                  method: 'POST',
                  headers: {
                    'Authorization': "Client-ID ".concat(process.env.IMGUR_CLIENT_ID)
                  },
                  body: "image=".concat(image)
                });

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return res.json();

              case 6:
                json = _context2.sent;
                console.log(json);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function imageHandler(_x) {
        return _imageHandler.apply(this, arguments);
      }

      return imageHandler;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-3774856067" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3774856067" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-3774856067" + " " + "attribution",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("img", {
        src: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg",
        className: "jsx-3774856067" + " " + "attributionAvatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-3774856067" + " " + "attributionUsername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "@barackobama")), __jsx("div", {
        onClick: this.handleSave,
        className: "jsx-3774856067" + " " + "submit-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "submit!")), __jsx(ReactQuill, {
        ref: function ref(el) {
          return _this2.quillRef = el;
        },
        className: "editor",
        modules: {
          toolbar: ['link', 'image', 'video']
        },
        value: this.state.text,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "533467791",
        __self: this
      }, ".wrapper.jsx-3774856067{border:1px solid #ddd;border-radius:5px;width:550px;margin-top:10px;}.header.jsx-3774856067{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-3774856067{position:relative;top:5px;left:5px;display:inline-block;}.attributionAvatar.jsx-3774856067{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-3774856067{display:inline-block;margin-left:10px;position:relative;bottom:15px;}.editor.jsx-3774856067{padding:5px 20px 5px 20px;border-radius:0 0 5px 5px;}.submit-button.jsx-3774856067{display:inline-block;padding:0.7em 1.4em;margin:0 0.3em 0.3em 0;border-radius:0.15em;box-sizing:border-box;-webkit-text-decoration:none;text-decoration:none;font-family:'Roboto',sans-serif;text-transform:uppercase;font-weight:400;color:#FFFFFF;background-color:#3369ff;box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);text-align:center;position:relative;float:right;top:15px;}.submit-button.jsx-3774856067:active{-webkit-filter:brightness(90%);filter:brightness(90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUdtQyxBQU1ILEFBT0QsQUFNUCxBQUtVLEFBTUssQUFJTixBQWtCRyxXQWhDSixPQU5YLENBUFEsRUFrQkMsQUFVRSxDQWxDRCxJQWNULEFBZ0JpQixJQVZMLEtBYkwsQUFRSyxHQVVILEVBeEJOLENBa0NVLFVBM0JJLEFBYTVCLENBbkJrQixBQTZCbEIsRUFxQkEsRUFwQ0EsQUFVYyxRQVVRLElBakN0QixBQXdCQSxTQWxCK0IsUUE0QlAscUJBM0J4QixDQTRCc0Isa0RBQ1csZ0NBQ1AseUJBQ1QsZ0JBQ0YsY0FDVyx5QkFDNEIscURBQ25DLGtCQUNBLGtCQUNMLFlBQ0gsU0FDWCIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgc2F2ZUV4cGxhbmF0aW9uVG9EQiB9IGZyb20gJy4vRmlyZWJhc2UnXG5cbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2F2ZSA9IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnF1aWxsUmVmLmdldE1vZHVsZSgndG9vbGJhcicpLmFkZEhhbmRsZXIoJ2ltYWdlJywgaW1hZ2VIYW5kbGVyKTtcbiAgICAvLyAsIGhhbmRsZXJzOiB7ICdpbWFnZSc6IHRoaXMuaW1hZ2VIYW5kbGVyIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9KVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlU2F2ZSgpIHtcbiAgICBhd2FpdCBzYXZlRXhwbGFuYXRpb25Ub0RCKFwiZW1lcmdlbmNlXCIsIFwiQGJhcmFja29iYW1hXCIsIHRoaXMuc3RhdGUudGV4dClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLmhhbmRsZVZvdGUoKVxuICB9XG5cbiAgYXN5bmMgaW1hZ2VIYW5kbGVyKGltYWdlKSB7XG4gICAgY29uc29sZS5sb2coJ2luIGltYWdlIGhhbmRsZXInKTtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL3VwbG9hZCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBDbGllbnQtSUQgJHtwcm9jZXNzLmVudi5JTUdVUl9DTElFTlRfSUR9YFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGBpbWFnZT0ke2ltYWdlfWBcbiAgICB9KVxuICAgIGxldCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgY29uc29sZS5sb2coanNvbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+QGJhcmFja29iYW1hPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX0+c3VibWl0ITwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFJlYWN0UXVpbGwgcmVmPXsoZWwpID0+IHRoaXMucXVpbGxSZWYgPSBlbH0gY2xhc3NOYW1lPVwiZWRpdG9yXCIgbW9kdWxlcz17eyB0b29sYmFyOiBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSB9fSB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM5cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvblVzZXJuYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWRpdG9yIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzowLjdlbSAxLjRlbTtcbiAgICAgICAgICAgIG1hcmdpbjowIDAuM2VtIDAuM2VtIDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjAuMTVlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICBjb2xvcjojRkZGRkZGO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzM2OWZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzppbnNldCAwIC0wLjZlbSAwIC0wLjM1ZW0gcmdiYSgwLDAsMCwwLjE3KTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJtaXQtYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93LCAucWwtY29udGFpbmVyLnFsLXNub3cge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "233154949",
        __self: this
      }, ".ql-toolbar.ql-snow,.ql-container.ql-snow{border:none;}.ql-toolbar.ql-snow{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0gyQixBQUd5QixBQUdpQixZQUYvQixpQkFHQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgc2F2ZUV4cGxhbmF0aW9uVG9EQiB9IGZyb20gJy4vRmlyZWJhc2UnXG5cbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2F2ZSA9IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnF1aWxsUmVmLmdldE1vZHVsZSgndG9vbGJhcicpLmFkZEhhbmRsZXIoJ2ltYWdlJywgaW1hZ2VIYW5kbGVyKTtcbiAgICAvLyAsIGhhbmRsZXJzOiB7ICdpbWFnZSc6IHRoaXMuaW1hZ2VIYW5kbGVyIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9KVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlU2F2ZSgpIHtcbiAgICBhd2FpdCBzYXZlRXhwbGFuYXRpb25Ub0RCKFwiZW1lcmdlbmNlXCIsIFwiQGJhcmFja29iYW1hXCIsIHRoaXMuc3RhdGUudGV4dClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLmhhbmRsZVZvdGUoKVxuICB9XG5cbiAgYXN5bmMgaW1hZ2VIYW5kbGVyKGltYWdlKSB7XG4gICAgY29uc29sZS5sb2coJ2luIGltYWdlIGhhbmRsZXInKTtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL3VwbG9hZCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBDbGllbnQtSUQgJHtwcm9jZXNzLmVudi5JTUdVUl9DTElFTlRfSUR9YFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGBpbWFnZT0ke2ltYWdlfWBcbiAgICB9KVxuICAgIGxldCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgY29uc29sZS5sb2coanNvbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXR0cmlidXRpb25BdmF0YXJcIiBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvODIyNTQ3NzMyMzc2MjA3MzYwLzVnMEZDOFhYLmpwZ1wiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblVzZXJuYW1lXCI+QGJhcmFja29iYW1hPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZX0+c3VibWl0ITwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFJlYWN0UXVpbGwgcmVmPXsoZWwpID0+IHRoaXMucXVpbGxSZWYgPSBlbH0gY2xhc3NOYW1lPVwiZWRpdG9yXCIgbW9kdWxlcz17eyB0b29sYmFyOiBbJ2xpbmsnLCAnaW1hZ2UnLCAndmlkZW8nXSB9fSB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM5cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbkF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvblVzZXJuYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWRpdG9yIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzowLjdlbSAxLjRlbTtcbiAgICAgICAgICAgIG1hcmdpbjowIDAuM2VtIDAuM2VtIDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjAuMTVlbTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICBjb2xvcjojRkZGRkZGO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMzM2OWZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzppbnNldCAwIC0wLjZlbSAwIC0wLjM1ZW0gcmdiYSgwLDAsMCwwLjE3KTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJtaXQtYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93LCAucWwtY29udGFpbmVyLnFsLXNub3cge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucWwtdG9vbGJhci5xbC1zbm93IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Editor);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=[id].js.b60324bc4d9bbbe564fc.hot-update.js.map