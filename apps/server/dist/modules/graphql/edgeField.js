"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.edgeField = void 0;

var _graphqlRelay = require("graphql-relay");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const edgeField = ({
  connection,
  load,
  name,
  edgeName
}) => ({
  [edgeName]: {
    type: connection.edgeType,
    resolve: function () {
      var _ref = _asyncToGenerator(function* ({
        id
      }, args, context) {
        const node = yield load(context, id);

        if (!node) {
          return null;
        }

        return {
          cursor: (0, _graphqlRelay.toGlobalId)(name, node._id),
          node
        };
      });

      return function resolve(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  }
});

exports.edgeField = edgeField;
//# sourceMappingURL=edgeField.js.map