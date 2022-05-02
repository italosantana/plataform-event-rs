import {Environment, Network, RecordSource, Store} from 'relay-runtime';

function fetchQuery(operation: { text: any; }, variables: any) {
  return fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Auth Headers goes here
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);

const env = new Environment({
  network,
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 10,
  }),
});

export default env;