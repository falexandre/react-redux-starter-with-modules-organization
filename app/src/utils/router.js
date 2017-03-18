import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Layout
import App from './../modules/core/App';

//Paginas
import Home from './../modules/core/Home';
import Users from './../modules/user/Users';

const router = (
    <Router history = { browserHistory } >
        <Route path="/" component={ App } >
        	<IndexRoute component={Home} />
        	<Route path="users" component={Users} />
        </Route>
    </Router>
);

export default router;

/*
<Router history = { browserHistory } >
        <Route path="/" component={ App } />
    </Router>
 */