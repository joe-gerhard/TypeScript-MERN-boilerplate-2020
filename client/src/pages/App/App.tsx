import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    selectUserIsLoggedIn,
    selectUserIsLoading,
} from '../../store/selectors';
import { useCheckForUser } from '../../hooks';
import { cleanFacebookHash } from '../../util';

import Navbar from '../../components/organisms/Navbar';
import ProfilePage from '../ProfilePage';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import error404Page from '../error404Page';
import LoadingPage from '../LoadingPage';

function App() {
    useCheckForUser();
    cleanFacebookHash();

    const isLoggedIn = useSelector(selectUserIsLoggedIn);
    const isLoading = useSelector(selectUserIsLoading);

    return (
        <>
            <Navbar />
            <Switch>
                {isLoading && (
                    <Route path="/" component={LoadingPage} />
                )}

                {isLoggedIn && (
                    <Route path="/profile" component={ProfilePage} />
                )}
                <Route path="/login" component={LoginPage} />
                <Route path="/" exact component={HomePage} />
                <Route path="/" component={error404Page} />
            </Switch>
        </>
    );
}

export default App;
