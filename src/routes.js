import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './page/homePage/homePage';
import NewArticle from './page/newArticle/newArticle';
import Settings from './page/settings/settings';
import Profile from './page/profile/profile';
import ArticleFull from './page/articleFull/articleFull';
import NavDefault from './components/navBar/navDefault/navDefault';
import NavAuth from './components/navBar/navAuth/navAuth';
import Authentication from './page/authentication/authentication';
import { CurrentUserContext } from './context/currentUser/currentUserContext';





export default () => {
    const [user] = useContext(CurrentUserContext);

    return (
        <>
            {user.isLoggedIn && !user.isLoading ? <NavAuth username={user.currentUser.username} /> : <NavDefault />}
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={Authentication} />
                <Route path="/register" component={Authentication} />
                <Route path="/editor" component={NewArticle} />
                <Route path="/settings" component={Settings} />
                <Route path="/profile" component={Profile} />
                <Route path="/article" component={ArticleFull} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}