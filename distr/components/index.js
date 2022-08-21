"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// определение контейнера где будет монтироваться React приложение
var container = document.getElementById('root');

_client["default"].hydrateRoot(container, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_App["default"], window.initState)));