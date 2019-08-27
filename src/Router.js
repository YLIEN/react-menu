import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Tom from './module/user/Tom.js';
import Bill from './module/user/Bill.js';

const BasicRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={ Tom }/>
            <Route exact path="/bill" component={ Bill }/>
        </Switch>
    </Router>
);


export default BasicRoute;