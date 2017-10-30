import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Header from './components/common/header';


export default (
    <Route  path="/" component={App}>
        <IndexRoute component={Header} />
        
    </Route>
);
