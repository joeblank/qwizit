import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/container/Home';
import Join from './components/container/Join';

export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/join-qwiz' component={Join} />
    </Switch>
)