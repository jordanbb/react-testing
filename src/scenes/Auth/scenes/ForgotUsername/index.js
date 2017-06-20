import React from "react";
import { Link } from "react-router-dom"
import TextInput from "components/TextInput";
import AuthLayout from "scenes/Auth/components/AuthLayout";
import AuthFormFooter from "scenes/Auth/components/Footer"
import MainButton from "components/buttons/Main"
import styles from "./forgotUsername.scss";
import linkStyles from "shared/css/links.scss"

class ForgotUsername extends React.Component {
    render(){

        const linkClassName = linkStyles['primary-dtl-8-with-underline-hover-white'];

        return (
            <AuthLayout title="Forgot Username">
                <TextInput type="email" labelText="Email" />
                <MainButton type="submit" text="Request Username" />
                <AuthFormFooter>
                    Return to &nbsp;
                    <Link to="/login" className={linkClassName}>Login</Link>.
                </AuthFormFooter>
            </AuthLayout>
        )
    }
}

export default ForgotUsername;