import React from "react";
import AuthForm from "scenes/Auth/components/AuthForm";

class Login extends React.Component {
    render(){
        return (
            <AuthForm formTitle="Welcome Back">
                <input type="text"></input>
            </AuthForm>
        )
    }
}

export default Login;