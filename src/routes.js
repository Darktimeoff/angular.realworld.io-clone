import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Article from './pages/Article/Article';
import GlobalFeed from './pages/GlobalFeed/GlobalFeed';


export default () => {
    return (
        <Switch>
            <Route path="/" exact component={GlobalFeed} />
            <Route path="/articles/:slug" component={Article} />
        </Switch>
    )
}