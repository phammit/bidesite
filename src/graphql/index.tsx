import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

const HELLO_QUERY = gql`{ hello }`;

export const QueryFunction = () =>  {
    const { loading, error, data } = useQuery(HELLO_QUERY);

    if (loading) return <p>Still Loading....</p>;
    if (error) {
        console.log({error});
        return <p>Error in graphql request...</p>
    }

    return (
        <div className="App">
           
                <h1>{data.hello}</h1>
            
        </div>
    );
}

//export QueryFunction;


/*
client.query({
    query: gql`
        query GetRates {
            rates(currency: "USD") {
                currency
            }
        }
    `
}).then(result => console.log(result));
*/



export default client;