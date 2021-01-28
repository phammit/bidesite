import React, { FC, ReactNode } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Body from "./pages/body";
import Home from "./pages/home";
import ProductGallery from "./components/productgallery";
import { QueryFunction } from './graphql';


export interface RouterProps {
    //extraRoutes?: ReactNode | Node;
    disableHeaderFooter: Boolean;
}

const Router: FC<RouterProps> = ({ disableHeaderFooter }) => {
    return (
        <React.Fragment>
            {!disableHeaderFooter && <Route component={Header} />}
            
            <Route  
                render={ props => (
                    <Body {...props}>
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/productgallery" 
                                component={ProductGallery} exact 
                            />
                        </Switch>
                    </Body>
                )}
            />
            <QueryFunction />
            {!disableHeaderFooter && <Route component={Footer} />}
            
        </React.Fragment>
    )
}

export default Router;