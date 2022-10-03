"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koa = _interopRequireDefault(require("koa"));

var _router = _interopRequireDefault(require("@koa/router"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koaGraphql = require("koa-graphql");

var _cors = _interopRequireDefault(require("@koa/cors"));

var _schema = require("../src/modules/schema/schema");

var _config = require("./config");

var _auth = require("./auth");

var _getContext = require("./getContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const app = new _koa.default();
const router = new _router.default();

const graphQlSettingsPerReq = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req) {
    const user = yield (0, _auth.getUser)(req.header.authorization);
    return {
      graphiql: _config.config.NODE_ENV !== 'production' ? {
        headerEditorEnabled: true,
        shouldPersistHeaders: true
      } : false,
      schema: _schema.schema,
      pretty: true,
      context: (0, _getContext.getContext)({
        user
      }),
      customFormatErrorFn: ({
        message,
        locations,
        stack
      }) => {
        /* eslint-disable no-console */
        console.log(message);
        console.log(locations);
        console.log(stack);
        /* eslint-enable no-console */

        return {
          message,
          locations,
          stack
        };
      }
    };
  });

  return function graphQlSettingsPerReq(_x) {
    return _ref.apply(this, arguments);
  };
}();

const graphQlServer = (0, _koaGraphql.graphqlHTTP)(graphQlSettingsPerReq);
router.all('/graphql', graphQlServer);
app.use((0, _cors.default)());
app.use((0, _koaBodyparser.default)());
app.use(router.routes()).use(router.allowedMethods());
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map