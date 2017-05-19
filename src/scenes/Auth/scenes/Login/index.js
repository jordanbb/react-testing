import React from "react";
import AuthForm from "scenes/Auth/components/AuthForm";
import TextInput from "components/TextInput";

class Login extends React.Component {
    render(){
        return (
            <AuthForm formTitle="Welcome Back">
                <TextInput type="text" labelText="Username" />
                <TextInput type="password" labelText="Password" />
            </AuthForm>
        )
    }
}

export default Login;