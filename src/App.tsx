import React, { FC, CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryFunction } from './graphql';

export interface AppProps {
  rootStyle?: CSSProperties;
}

const App: FC<AppProps> = ({children, rootStyle}) => {
  return (
    <div className="MyApp">
      <QueryFunction/>
      {children}
    </div>
  );
}

export default App;
