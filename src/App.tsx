import React, { FC, CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryFunction } from './graphql';

export interface AppProps {
  rootStyle?: CSSProperties;
}

const App: FC<AppProps> = ({children, rootStyle}) => {
  return (
    <div className="App">
      
       <h1>BidSite</h1> 
       <QueryFunction />
      
      {children}
    </div>
  );
}

export default App;
