import React from "react";
import TextInput from "components/TextInput";
import AuthLayout from "scenes/Auth/components/AuthLayout";
import styles from "./login.scss";

class Login extends React.Component {
    render(){
        return (
            <AuthLayout>
                <form className={styles.form} noValidate>
                    <TextInput type="text" labelText="Username" />
                    <TextInput type="password" labelText="Password" />
                </form>
            </AuthLayout>
        )
    }
}

export default Login;