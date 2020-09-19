import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './page/homePage/homePage';
import Login from './page/login/login';
import Register from './page/register/register';
import NewArticle from './page/newArticle/newArticle';
import Settings from './page/settings/settings';
import Profile from './page/profile/profile';
import ArticleFull from './page/articleFull/articleFull';



export default () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor" component={NewArticle} />
            <Route path="/settings" component={Settings} />
            <Route path="/profile" component={Profile} />
            <Route path="/article" component={ArticleFull} />
        </Switch>
    )
}