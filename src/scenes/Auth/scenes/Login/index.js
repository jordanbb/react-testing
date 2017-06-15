import React from "react";
import TextInput from "components/TextInput";
import AuthLayout from "scenes/Auth/components/AuthLayout";
import MainButton from "components/buttons/Main"
import styles from "./login.scss";
import linkStyles from "shared/css/links.scss"

class Login extends React.Component {
    render(){

        const linkClassName = linkStyles['primary-dtl-8-with-underline-hover-white'];

        return (
            <AuthLayout>
                <form className={styles.form} noValidate>
                    <TextInput type="text" labelText="Username" />
                    <TextInput type="password" labelText="Password" />
                    <MainButton type="submit" text="Login" isCompleted />
                    <footer className={styles.footer}>
                        Forgot <a href="#" className={linkClassName}>username</a> or <a href="#" className={linkClassName}>password</a>?
                    </footer>
                </form>
            </AuthLayout>
        )
    }
}

export default Login;