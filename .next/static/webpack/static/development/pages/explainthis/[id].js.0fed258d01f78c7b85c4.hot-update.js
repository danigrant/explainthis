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
                this.props.handleSubmitAnswer();

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
      }, ".wrapper.jsx-3774856067{border:1px solid #ddd;border-radius:5px;width:550px;margin-top:10px;}.header.jsx-3774856067{background:#fafafa;padding:3px 8px;min-height:39px;border-radius:5px 5px 0 0;border-bottom:1px solid #ddd;}.attribution.jsx-3774856067{position:relative;top:5px;left:5px;display:inline-block;}.attributionAvatar.jsx-3774856067{width:50px;border-radius:50px;display:inline-block;}.attributionUsername.jsx-3774856067{display:inline-block;margin-left:10px;position:relative;bottom:15px;}.editor.jsx-3774856067{padding:5px 20px 5px 20px;border-radius:0 0 5px 5px;}.submit-button.jsx-3774856067{display:inline-block;padding:0.7em 1.4em;margin:0 0.3em 0.3em 0;border-radius:0.15em;box-sizing:border-box;-webkit-text-decoration:none;text-decoration:none;font-family:'Roboto',sans-serif;text-transform:uppercase;font-weight:400;color:#FFFFFF;background-color:#3369ff;box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);text-align:center;position:relative;float:right;top:15px;}.submit-button.jsx-3774856067:active{-webkit-filter:brightness(90%);filter:brightness(90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUdtQyxBQU1ILEFBT0QsQUFNUCxBQUtVLEFBTUssQUFJTixBQWtCRyxXQWhDSixPQU5YLENBUFEsRUFrQkMsQUFVRSxDQWxDRCxJQWNULEFBZ0JpQixJQVZMLEtBYkwsQUFRSyxHQVVILEVBeEJOLENBa0NVLFVBM0JJLEFBYTVCLENBbkJrQixBQTZCbEIsRUFxQkEsRUFwQ0EsQUFVYyxRQVVRLElBakN0QixBQXdCQSxTQWxCK0IsUUE0QlAscUJBM0J4QixDQTRCc0Isa0RBQ1csZ0NBQ1AseUJBQ1QsZ0JBQ0YsY0FDVyx5QkFDNEIscURBQ25DLGtCQUNBLGtCQUNMLFlBQ0gsU0FDWCIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgc2F2ZUV4cGxhbmF0aW9uVG9EQiB9IGZyb20gJy4vRmlyZWJhc2UnXG5cbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2F2ZSA9IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnF1aWxsUmVmLmdldE1vZHVsZSgndG9vbGJhcicpLmFkZEhhbmRsZXIoJ2ltYWdlJywgaW1hZ2VIYW5kbGVyKTtcbiAgICAvLyAsIGhhbmRsZXJzOiB7ICdpbWFnZSc6IHRoaXMuaW1hZ2VIYW5kbGVyIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9KVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlU2F2ZSgpIHtcbiAgICBhd2FpdCBzYXZlRXhwbGFuYXRpb25Ub0RCKFwiZW1lcmdlbmNlXCIsIFwiQGJhcmFja29iYW1hXCIsIHRoaXMuc3RhdGUudGV4dClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdEFuc3dlcigpXG4gIH1cblxuICBhc3luYyBpbWFnZUhhbmRsZXIoaW1hZ2UpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gaW1hZ2UgaGFuZGxlcicpO1xuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvdXBsb2FkJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYENsaWVudC1JRCAke3Byb2Nlc3MuZW52LklNR1VSX0NMSUVOVF9JRH1gXG4gICAgICB9LFxuICAgICAgYm9keTogYGltYWdlPSR7aW1hZ2V9YFxuICAgIH0pXG4gICAgbGV0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfT5zdWJtaXQhPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UmVhY3RRdWlsbCByZWY9eyhlbCkgPT4gdGhpcy5xdWlsbFJlZiA9IGVsfSBjbGFzc05hbWU9XCJlZGl0b3JcIiBtb2R1bGVzPXt7IHRvb2xiYXI6IFsnbGluaycsICdpbWFnZScsICd2aWRlbyddIH19IHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0b3Ige1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOjAuN2VtIDEuNGVtO1xuICAgICAgICAgICAgbWFyZ2luOjAgMC4zZW0gMC4zZW0gMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MC4xNWVtO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzY5ZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93Omluc2V0IDAgLTAuNmVtIDAgLTAuMzVlbSByZ2JhKDAsMCwwLDAuMTcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5xbC10b29sYmFyLnFsLXNub3csIC5xbC1jb250YWluZXIucWwtc25vdyB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xbC10b29sYmFyLnFsLXNub3cge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "233154949",
        __self: this
      }, ".ql-toolbar.ql-snow,.ql-container.ql-snow{border:none;}.ql-toolbar.ql-snow{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvY29tcG9uZW50cy9FZGl0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0gyQixBQUd5QixBQUdpQixZQUYvQixpQkFHQSIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgc2F2ZUV4cGxhbmF0aW9uVG9EQiB9IGZyb20gJy4vRmlyZWJhc2UnXG5cbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ3JlYWN0LXF1aWxsJyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2F2ZSA9IHRoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLnF1aWxsUmVmLmdldE1vZHVsZSgndG9vbGJhcicpLmFkZEhhbmRsZXIoJ2ltYWdlJywgaW1hZ2VIYW5kbGVyKTtcbiAgICAvLyAsIGhhbmRsZXJzOiB7ICdpbWFnZSc6IHRoaXMuaW1hZ2VIYW5kbGVyIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiB2YWx1ZSB9KVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlU2F2ZSgpIHtcbiAgICBhd2FpdCBzYXZlRXhwbGFuYXRpb25Ub0RCKFwiZW1lcmdlbmNlXCIsIFwiQGJhcmFja29iYW1hXCIsIHRoaXMuc3RhdGUudGV4dClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRleHQ6ICcnXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdEFuc3dlcigpXG4gIH1cblxuICBhc3luYyBpbWFnZUhhbmRsZXIoaW1hZ2UpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gaW1hZ2UgaGFuZGxlcicpO1xuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvdXBsb2FkJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYENsaWVudC1JRCAke3Byb2Nlc3MuZW52LklNR1VSX0NMSUVOVF9JRH1gXG4gICAgICB9LFxuICAgICAgYm9keTogYGltYWdlPSR7aW1hZ2V9YFxuICAgIH0pXG4gICAgbGV0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvbkF2YXRhclwiIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy84MjI1NDc3MzIzNzYyMDczNjAvNWcwRkM4WFguanBnXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF0dHJpYnV0aW9uVXNlcm5hbWVcIj5AYmFyYWNrb2JhbWE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlfT5zdWJtaXQhPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UmVhY3RRdWlsbCByZWY9eyhlbCkgPT4gdGhpcy5xdWlsbFJlZiA9IGVsfSBjbGFzc05hbWU9XCJlZGl0b3JcIiBtb2R1bGVzPXt7IHRvb2xiYXI6IFsnbGluaycsICdpbWFnZScsICd2aWRlbyddIH19IHZhbHVlPXt0aGlzLnN0YXRlLnRleHR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzlweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uQXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF0dHJpYnV0aW9uVXNlcm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0b3Ige1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1pdC1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOjAuN2VtIDEuNGVtO1xuICAgICAgICAgICAgbWFyZ2luOjAgMC4zZW0gMC4zZW0gMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MC4xNWVtO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzY5ZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93Omluc2V0IDAgLTAuNmVtIDAgLTAuMzVlbSByZ2JhKDAsMCwwLDAuMTcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Ym1pdC1idXR0b246YWN0aXZlIHtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC5xbC10b29sYmFyLnFsLXNub3csIC5xbC1jb250YWluZXIucWwtc25vdyB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xbC10b29sYmFyLnFsLXNub3cge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/components/Editor.js */"));
    }
  }]);

  return Editor;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Editor);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./pages/explainthis/[id].js":
/*!***********************************!*\
  !*** ./pages/explainthis/[id].js ***!
  \***********************************/
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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/AppContainer */ "./components/AppContainer.js");
/* harmony import */ var _components_ActionBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ActionBar */ "./components/ActionBar.js");
/* harmony import */ var _components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/ExplanationsSection */ "./components/ExplanationsSection.js");
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Editor */ "./components/Editor.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Firebase */ "./components/Firebase.js");
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_Firebase__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Loading */ "./components/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "/Users/danigrant/Projects/explainthis/pages/explainthis/[id].js";

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
    var router = _this.props.router;
    _this.handleSubmitAnswer = _this.handleSubmitAnswer.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ExplainThis, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var router;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                router = this.props.router;
                _context.t0 = this;
                _context.next = 4;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_16__["getConceptExplanations"])(router.query.id);

              case 4:
                _context.t1 = _context.sent;
                _context.t2 = {
                  data: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "handleSubmitAnswer",
    value: function () {
      var _handleSubmitAnswer = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = this;
                _context2.t1 = !this.state.showEditor;
                _context2.next = 4;
                return Object(_components_Firebase__WEBPACK_IMPORTED_MODULE_16__["getConceptExplanations"])(router.query.id);

              case 4:
                _context2.t2 = _context2.sent;
                _context2.t3 = {
                  showEditor: _context2.t1,
                  data: _context2.t2
                };

                _context2.t0.setState.call(_context2.t0, _context2.t3);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSubmitAnswer() {
        return _handleSubmitAnswer.apply(this, arguments);
      }

      return handleSubmitAnswer;
    }()
  }, {
    key: "render",
    value: function render() {
      {
        var _router = this.props.router;

        if (!this.state.data.concept) {
          return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_17__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          });
        } else {
          return __jsx("div", {
            className: "jsx-2652836033",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }), __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, __jsx("div", {
            className: "jsx-2652836033" + " " + "explanationHeader",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, __jsx("h1", {
            className: "jsx-2652836033",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, "What are all the different ways to explain ", this.state.data.concept, "?"), __jsx(_components_ActionBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
            handleAnswerClick: this.handleAnswerClick,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }), this.state.showEditor && __jsx(_components_Editor__WEBPACK_IMPORTED_MODULE_15__["default"], {
            handleSubmitAnswer: this.handleSubmitAnswer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }), __jsx("p", {
            className: "jsx-2652836033",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, this.state.data.explanations.length, " Explanations")), __jsx(_components_ExplanationsSection__WEBPACK_IMPORTED_MODULE_14__["default"], {
            explanations: this.state.data.explanations,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
            id: "2652836033",
            __self: this
          }, ".explanationHeader.jsx-2652836033{border-bottom:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvZXhwbGFpbnRoaXMvcGFnZXMvZXhwbGFpbnRoaXMvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRDBCLEFBR2dELDZCQUMvQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL2V4cGxhaW50aGlzL3BhZ2VzL2V4cGxhaW50aGlzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcic7XG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWN0aW9uQmFyJ1xuaW1wb3J0IEV4cGxhbmF0aW9uc1NlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FeHBsYW5hdGlvbnNTZWN0aW9uJ1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0VkaXRvcidcbmltcG9ydCB7IGdldENvbmNlcHRFeHBsYW5hdGlvbnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpcmViYXNlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBFeHBsYWluVGhpcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpIC8vIGZpcnN0IHRoaW5nIHlvdSBhbHdheXMgZG8sIGNhbGxzIHRoZSBtYXN0ZXIgcmVhY3QgY29uc3RydWN0b3JcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0VkaXRvcjogZmFsc2UsXG4gICAgICBkYXRhOiB7fVxuICAgIH1cbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuaGFuZGxlU3VibWl0QW5zd2VyID0gdGhpcy5oYW5kbGVTdWJtaXRBbnN3ZXIuYmluZCh0aGlzKVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogYXdhaXQgZ2V0Q29uY2VwdEV4cGxhbmF0aW9ucyhyb3V0ZXIucXVlcnkuaWQpXG4gICAgfSlcbiAgfVxuICBoYW5kbGVBbnN3ZXJDbGljayA9ICgpID0+IHsgLy8gZXM2IHNvIHRoYXQgeW91IGRvbid0IGhhdmUgdG8gYmluZCB0aGlzIGZvciBzY29wZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0VkaXRvcjogIXRoaXMuc3RhdGUuc2hvd0VkaXRvclxuICAgIH0pXG4gIH1cbiAgYXN5bmMgaGFuZGxlU3VibWl0QW5zd2VyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0VkaXRvcjogIXRoaXMuc3RhdGUuc2hvd0VkaXRvcixcbiAgICAgIGRhdGE6IGF3YWl0IGdldENvbmNlcHRFeHBsYW5hdGlvbnMocm91dGVyLnF1ZXJ5LmlkKVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgICAge1xuICAgICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZGF0YS5jb25jZXB0KSB7XG4gICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgPEFwcENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uSGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aDE+V2hhdCBhcmUgYWxsIHRoZSBkaWZmZXJlbnQgd2F5cyB0byBleHBsYWluIHt0aGlzLnN0YXRlLmRhdGEuY29uY2VwdH0/PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxBY3Rpb25CYXIgaGFuZGxlQW5zd2VyQ2xpY2s9e3RoaXMuaGFuZGxlQW5zd2VyQ2xpY2t9IC8+XG4gICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuc2hvd0VkaXRvciAmJlxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yIGhhbmRsZVN1Ym1pdEFuc3dlcj17dGhpcy5oYW5kbGVTdWJtaXRBbnN3ZXJ9Lz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmRhdGEuZXhwbGFuYXRpb25zLmxlbmd0aH0gRXhwbGFuYXRpb25zPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxFeHBsYW5hdGlvbnNTZWN0aW9uIGV4cGxhbmF0aW9ucz17dGhpcy5zdGF0ZS5kYXRhLmV4cGxhbmF0aW9uc30gLz5cbiAgICAgICAgICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZXhwbGFuYXRpb25IZWFkZXIge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRXhwbGFpblRoaXMpXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/explainthis/pages/explainthis/[id].js */"));
        }
      }
    }
  }]);

  return ExplainThis;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_18__["withRouter"])(ExplainThis));

/***/ })

})
//# sourceMappingURL=[id].js.0fed258d01f78c7b85c4.hot-update.js.map