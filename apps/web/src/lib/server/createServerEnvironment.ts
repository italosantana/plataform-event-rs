import { Environment, Network, Store, RecordSource } from 'relay-runtime';

export function createServerNetwork(token?: string) {
    return Network.create(async (params, variables) => {
        const headers = {
            'Content-Type': 'application/json',
        };

        if (token) {
            // @ts-ignore
            headers.Authorization = token;
        }

        const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL || '', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                query: params.text,
                variables: { ...variables },
            }),
        });

        return await response.json();
    });
}

export function createServerEnvironment(token?: string) {
    return new Environment({
        network: createServerNetwork(token),
        store: new Store(new RecordSource()),
        isServer: true,
    });
}
