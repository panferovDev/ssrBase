"use strict";

var _express = _interopRequireDefault(require("express"));

var _apiRouter = _interopRequireDefault(require("./routes/apiRouter"));

var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));

var _process$env$PORT;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = (_process$env$PORT = process.env.PORT) !== null && _process$env$PORT !== void 0 ? _process$env$PORT : 3005;
var app = (0, _express["default"])();
app.use(_express["default"]["static"]('public'));
app.use(_express["default"].json());
app.use('/', _indexRouter["default"]);
app.use('/api', _apiRouter["default"]);
app.listen(PORT, function () {
  console.log('server start on port ', PORT);
});