import React from "react";
import { Link } from "react-router-dom"
import TextInput from "components/TextInput";
import AuthFormFooter from "scenes/Auth/components/Footer"
import MainButton from "components/buttons/Main"
import styles from "./resetPassword.scss";
import linkStyles from "shared/css/links.scss";
import SceneLayout from "scenes/Auth/components/SceneLayout";

class ResetPassword extends React.Component {
    render(){

        const linkClassName = linkStyles['primary-dtl-8-with-underline-hover-white'];

        return (
            <SceneLayout title="Reset Password">
                <TextInput type="text" labelText="Username" />
                <MainButton type="submit" text="Reset Password" />
                <AuthFormFooter>
                    Return to &nbsp;
                    <Link to="/login" className={linkClassName}>Login</Link>.
                </AuthFormFooter>
            </SceneLayout>
        )
    }
}

export default ResetPassword;