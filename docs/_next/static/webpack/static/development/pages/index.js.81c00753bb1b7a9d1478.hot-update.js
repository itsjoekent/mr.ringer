webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Section.js":
/*!**************************!*\
  !*** ./pages/Section.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var marksy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marksy */ "./node_modules/marksy/lib/index.js");
/* harmony import */ var marksy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marksy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharedStyles */ "./pages/sharedStyles.js");
var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/pages/Section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__SectionContainer",
  componentId: "sc-1dy62o7-0"
})(["display:flex;flex-direction:column;margin-bottom:64px;"]);
var SectionParagraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Section__SectionParagraph",
  componentId: "sc-1dy62o7-1"
})(["display:inline-block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";text-decoration:none;margin-bottom:12px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.font;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.body;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.letterSpacing;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeight;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.light;
});
var SectionAnchor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "Section__SectionAnchor",
  componentId: "sc-1dy62o7-2"
})(["display:inline-block;", " font-size:", ";font-weight:400;letter-spacing:", ";line-height:", ";color:", ";cursor:pointer;text-decoration:none;&:hover{", "}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.font;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.fontSizes.body;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.letterSpacing;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.lineHeight;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.lightComplimentary;
}, _sharedStyles__WEBPACK_IMPORTED_MODULE_3__["chalkUnderlineStyle"]);
var compileMarkdown = marksy__WEBPACK_IMPORTED_MODULE_2___default()({
  createElement: react__WEBPACK_IMPORTED_MODULE_0__["createElement"],
  elements: {
    p: SectionParagraph,
    a: SectionAnchor
  }
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Section__Title",
  componentId: "sc-1dy62o7-3"
})(["display:block;", " font-size:", ";font-weight:700;letter-spacing:", ";line-height:", ";color:", ";margin-bottom:36px;"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.font;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.fontSizes.title;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.letterSpacing;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.lineHeight;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.light;
});
var TerminalContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Section__TerminalContainer",
  componentId: "sc-1dy62o7-4"
})(["display:block;padding:16px;background-color:", ";"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.dark;
});
function Section(props) {
  var _this = this;

  var id = props.id,
      title = props.title,
      composition = props.composition;
  return __jsx(SectionContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(Title, {
    id: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, title), composition && composition.map(function (_ref17) {
    var type = _ref17.type,
        content = _ref17.content;
    var key = JSON.stringify(content);

    if (type === 'markdown') {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: key,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      }, compileMarkdown(content).tree);
    }

    return null;
  }));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ "./pages/Navigation.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Section */ "./pages/Section.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content */ "./pages/content.js");


var _jsxFileName = "/Users/joekentew 1/dev/joe/mr.ringer/chalkboard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    width: 100%;\n    min-height: 100vh;\n\n    background-color: ", ";\n\n    background-image: url(", "/chalk-noise.png);\n    background-size: 1280px 720px;\n    background-repeat: repeat;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var PageBackground = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.dark;
}, "");
var layoutBreakpoint = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["min-width:1024px"]);
var PageLayout = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__PageLayout",
  componentId: "sc-1cvwks4-0"
})(["display:flex;flex-direction:column;width:100%;margin-top:24px;padding-left:24px;padding-right:24px;@media (", "){flex-direction:row;justify-content:space-between;max-width:1280px;margin-top:48px;margin-left:auto;margin-right:auto;}"], layoutBreakpoint);
var NavColumn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__NavColumn",
  componentId: "sc-1cvwks4-1"
})(["width:100%;margin-bottom:48px;@media (", "){width:calc(25% - 24px);margin-bottom:0;}"], layoutBreakpoint);
var MainColumn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(NavColumn).withConfig({
  displayName: "pages__MainColumn",
  componentId: "sc-1cvwks4-2"
})(["@media (", "){width:calc(75% - 48px);}"], layoutBreakpoint);
function Home(props) {
  var _this = this;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(PageBackground, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx(PageLayout, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(NavColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), __jsx(MainColumn, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, _content__WEBPACK_IMPORTED_MODULE_6__["default"].sections.map(function (section) {
    return __jsx(_Section__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, section, {
      key: section.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }));
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.81c00753bb1b7a9d1478.hot-update.js.map