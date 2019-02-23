import React from 'react';

import {Route, Switch} from 'react-router-dom';
import Landing from './landing1';
import AddCompany from './addcompany';
import EditCompany from './editcompany';
import Listpage from './listpage';
import Page404 from './page404';


export default function Main(props){

    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/listpage" component={Listpage} />
            <Route exact path="/addcompany" component={AddCompany} />
            <Route exact path="/editcompany" component={EditCompany} />
            <Route path="*" component={Page404} />
        </Switch>
    )
}
