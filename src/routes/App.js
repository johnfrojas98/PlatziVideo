import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layaout from '../components/Layaout';
import Player from '../containers/Player';

const App = () => (
    <BrowserRouter>
        <Layaout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Register' component={Register} />
                <Route exact path='/player/:id' component={Player} />
                <Route component={NotFound} />
            </Switch>
        </Layaout>
    </BrowserRouter>
);

export default App;