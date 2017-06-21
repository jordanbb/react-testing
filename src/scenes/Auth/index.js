import React from "react";
import AuthLayout from "scenes/Auth/components/AuthLayout";
import { CSSTransitionGroup } from 'react-transition-group';
import "./auth.scss";

class Auth extends React.Component {
    render(){

        return (
            <AuthLayout>
                <CSSTransitionGroup
                    transitionName="auth-scene"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {this.props.children}
                </CSSTransitionGroup>
            </AuthLayout>
        )
    }
}

export default Auth;