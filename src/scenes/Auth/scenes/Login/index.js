import React from "react";
import TextInput from "components/TextInput";
import AuthLayout from "scenes/Auth/components/AuthLayout";
import MainButton from "components/buttons/Main"
import styles from "./login.scss";

class Login extends React.Component {
    render(){
        return (
            <AuthLayout>
                <form className={styles.form} noValidate>
                    <div className={styles.inputContainer}>
                        <TextInput type="text" labelText="Username" />
                    </div>
                    <div className={styles.inputContainer}>
                        <TextInput type="password" labelText="Password" />
                    </div>
                    <MainButton type="submit" text="Login" />
                </form>
            </AuthLayout>
        )
    }
}

export default Login;