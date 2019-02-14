import React from 'react';

import {Route, Switch} from 'react-router-dom';
import Landing from './landing';
import Largecompany from './largecompany';
import AddCompany from './addcompany';
import Listpage from './listpage';
import Page404 from './page404';


export default function Main(props){

    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/listpage" component={Listpage} />
            <Route exact path="/addcompany" component={AddCompany} />
            <Route exact path="/largecompany" component={Largecompany} />
            <Route path="*" component={Page404} />
        </Switch>
    )
}
