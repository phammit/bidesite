import React, { Component } from 'react';
import { ApolloProvider, InMemoryCache } from  '@apollo/react-hooks';
import client from './graphql';
import { render } from 'react-dom';

export interface ProviderProps {
    children: any;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    return(
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}

export default Provider;
