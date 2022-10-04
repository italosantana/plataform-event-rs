"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenvSafe = _interopRequireDefault(require("dotenv-safe"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cwd = process.cwd();

const root = _path.default.join.bind(cwd);

_dotenvSafe.default.config({
  path: root(".env"),
  sample: root(".env.example")
});

const config = {
  PORT: process.env.PORT || 7500,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/plataform-back",
  JWT_SECRET: process.env.JWT_SECRET
};
exports.config = config;
//# sourceMappingURL=config.js.map