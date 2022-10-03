"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loaderRegister = require("./modules/loader/loaderRegister");

var _koa = _interopRequireDefault(require("koa"));

var _koaGraphql = _interopRequireDefault(require("koa-graphql"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _cors = _interopRequireDefault(require("@koa/cors"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _schema = require("./modules/schema/schema");

var _graphqlPlaygroundMiddlewareKoa = _interopRequireDefault(require("graphql-playground-middleware-koa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const app = new _koa.default();
const router = new _koaRouter.default();

const graphqlSettingsPerReq = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, ctx, koaContext) {
    const {
      event
    } = koaContext;
    const dataloaders = (0, _loaderRegister.getDataloaders)();
    return {
      graphiql: true,
      schema: _schema.schema,
      context: {
        event,
        req,
        dataloaders
      },
      formatError: error => {
        console.log(error.message);
        console.log(error.locations);
        console.log(error.stack);
        return {
          message: error.message,
          locations: error.locations,
          stack: error.stack
        };
      }
    };
  });

  return function graphqlSettingsPerReq(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

const graphqlServer = (0, _koaGraphql.default)(graphqlSettingsPerReq);
router.get('/', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (ctx) {
    ctx.body = 'Ok';
  });

  return function (_x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.all('/graphql', graphqlServer);
router.all('/playground', (0, _graphqlPlaygroundMiddlewareKoa.default)({
  endpoint: '/graphql'
}));
app.use((0, _koaBodyparser.default)());
app.use((0, _cors.default)());
app.use(router.routes()).use(router.allowedMethods());
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map