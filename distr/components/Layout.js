"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layout;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-router-dom/server");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Layout(_ref) {
  var initState = _ref.initState;
  return /*#__PURE__*/_react["default"].createElement("html", {
    lang: "en"
  }, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "viewport",
    content: "width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"
  }), /*#__PURE__*/_react["default"].createElement("script", {
    type: "text/javascript",
    dangerouslySetInnerHTML: {
      __html: "window.initState=".concat(JSON.stringify(initState))
    }
  }), /*#__PURE__*/_react["default"].createElement("script", {
    defer: true,
    src: "/js/app.js"
  }), /*#__PURE__*/_react["default"].createElement("script", {
    defer: true,
    src: "/js/vendor.js"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    href: "/css/bootstrap.min.css",
    rel: "stylesheet",
    media: "all"
  }), /*#__PURE__*/_react["default"].createElement("title", null, "React SSR")), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "root"
  }, /*#__PURE__*/_react["default"].createElement(_server.StaticRouter, {
    location: initState.path
  }, /*#__PURE__*/_react["default"].createElement(_App["default"], initState)))));
}