import React, { FC, ReactNode } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "header";
import Body from "./pages/body";
import Home from "./pages/home";
import ProductGallery from "./components/productgallery";
import { QueryFunction } from './graphql';
import Header2 from "./containers/Header2";
import ProductGallery2 from "./components/productgallery2";
import Header3 from "./containers/Header3";
import DropDownHeader from "./containers/DropDownHeader";
import ProductGalleryMiners from "./components/productgalleryMiners";
import SearchResults from "searchresults";

import CSSGrid from "./components/gridlayout";


export interface RouterProps {
    //extraRoutes?: ReactNode | Node;
    disableHeaderFooter: Boolean;
}

const Router: FC<RouterProps> = ({ disableHeaderFooter }) => {
    return (
        <React.Fragment>
            {!disableHeaderFooter && <Route component={Header} />}
            <Route component={DropDownHeader} />
            
            
            
            <Route  
                render={ props => (
                    <Body {...props}>
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/productgallery" 
                                component={ProductGallery} exact 
                            />
                            <Route path="/productgallery2" 
                                component={ProductGallery2} exact 
                            />
                            <Route path="/grid"
                                component={CSSGrid} exact
                            />
                            <Route path="/productgalleryminers"
                                component={ProductGalleryMiners} exact
                            />
                            <Route path="/searchresults"
                                component={SearchResults} exact
                            />
                        </Switch>
                    </Body>
                )}
            />
           
            {!disableHeaderFooter && <Route component={Footer} />}
            
        </React.Fragment>
    )
}

export default Router;


// this is the connected component - graphql
// <QueryFunction />