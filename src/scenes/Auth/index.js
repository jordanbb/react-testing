import React from "react";
import Login from "./scenes/Login"
import AuthBackground from './components/AuthBackground';

class Auth extends React.Component {
    render(){
        return (
            <div className="auth-container" >
                <AuthBackground/>
                <Login/>
            </div>
        )
    }
}

export default Auth;