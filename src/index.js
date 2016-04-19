import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App';
import Index from './containers/Index';
import Item from './containers/Item';
import {Route, Router, browserHistory, IndexRoute} from 'react-router';

import './styles/main.scss';

ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute components={{main: Index}} />
            <Route path='create' components={{main: Item}}/>
            <Route path='thing/:id' components={{main: Item}}/>
        </Route>
    </Router>),
    document.getElementById('root')
);
