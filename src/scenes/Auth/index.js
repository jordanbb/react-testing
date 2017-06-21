import React from "react";
import AuthLayout from "scenes/Auth/components/AuthLayout";
import { Route, Switch } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group';
import Login from "scenes/Auth/scenes/Login";
import ForgotUsername from "scenes/Auth/scenes/ForgotUsername";
import ResetPassword from "scenes/Auth/scenes/ResetPassword";

class Auth extends React.Component {
    render(){

        return (
            <Route render={({ location }) => (
                <AuthLayout>
                    <CSSTransitionGroup
                        transitionName="slide"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}
                    >
                        <Switch key={location.key} location={location}>
                            <Route path="/login" component={Login} />
                            <Route path="/forgot-username" component={ForgotUsername} />
                            <Route path="/reset-password" component={ResetPassword} />
                        </Switch>
                    </CSSTransitionGroup>
                </AuthLayout>
            )}/>
        )
    }
}

export default Auth;