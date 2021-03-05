import React, { Component } from 'react';
import { ApolloProvider, InMemoryCache } from  '@apollo/react-hooks';
import { ThemeProvider } from "@material-ui/core";
import client from './graphql';
import { render } from 'react-dom';
import theme from "theme";

export interface ProviderProps {
    children: any;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
    return(
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default Provider;


/**
 <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ApolloProvider>
 */