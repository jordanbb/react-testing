import React from "react";
import Auth from "scenes/Auth";
import Login from "scenes/Auth/scenes/Login";
import ForgotUsername from "scenes/Auth/scenes/ForgotUsername";
import ResetPassword from "scenes/Auth/scenes/ResetPassword";
import Home from "scenes/Home";
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import AuthLayout from "scenes/Auth/components/AuthLayout";
import { CSSTransitionGroup } from 'react-transition-group';

class App extends React.Component {
    render() {

        const loggedIn = false;

        return (
            <BrowserRouter>
                <div>
                    <Route render={({ location }) => (
                        <AuthLayout>
                            <CSSTransitionGroup
                                transitionName="slide"
                                transitionEnterTimeout={300}
                                transitionLeaveTimeout={300}
                            >
                                <Switch key={location.key} location={location}>
                                    <Route exact path="/" render={() => (
                                        loggedIn ? (
                                            <Redirect to="/home"/>
                                        ) : (
                                            <Redirect to="/login"/>
                                        )
                                    )}/>
                                    <Route path="/login" component={Login} />
                                    <Route path="/forgot-username" component={ForgotUsername} />
                                    <Route path="/reset-password" component={ResetPassword} />
                                </Switch>
                            </CSSTransitionGroup>
                        </AuthLayout>
                    )}/>
                    <Route path="/home" component={Home} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
