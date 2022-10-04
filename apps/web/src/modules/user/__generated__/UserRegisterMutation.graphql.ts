/**
 * @generated SignedSource<<d9857daa9230073552c93533584938b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserRegisterMutation$variables = {
  email: string;
  password: string;
};
export type UserRegisterMutation$data = {
  readonly userRegisterMutation: {
    readonly me: {
      readonly email: string;
      readonly id: string;
    } | null;
  } | null;
};
export type UserRegisterMutation = {
  response: UserRegisterMutation$data;
  variables: UserRegisterMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UserRegisterPayload",
    "kind": "LinkedField",
    "name": "userRegisterMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserRegisterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserRegisterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "276745f3cd4b452813f08594e6b1357b",
    "id": null,
    "metadata": {},
    "name": "UserRegisterMutation",
    "operationKind": "mutation",
    "text": "mutation UserRegisterMutation(\n  $email: String!\n  $password: String!\n) {\n  userRegisterMutation(input: {email: $email, password: $password}) {\n    me {\n      id\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "099982a24db9755ea4ab6bc5e0e3a403";

export default node;
