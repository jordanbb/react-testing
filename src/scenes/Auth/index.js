import React from "react";
import Login from "./scenes/Login"
import AuthBackground from './components/AuthBackground';
import AuthInner from './components/AuthInner';

class Auth extends React.Component {
    render(){
        return (
            <div className="auth-container">
                <AuthBackground/>
                <AuthInner>
                    <Login/>
                </AuthInner>
            </div>
        )
    }
}

export default Auth;