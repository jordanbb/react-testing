import React from "react";
import { Link } from "react-router-dom"
import TextInput from "components/TextInput";
import AuthFormFooter from "scenes/Auth/components/Footer"
import MainButton from "components/buttons/Main"
import styles from "./login.scss";
import linkStyles from "shared/css/links.scss"
import SceneLayout from "scenes/Auth/components/SceneLayout";

class Login extends React.Component {
    render(){

        const linkClassName = linkStyles['primary-dtl-8-with-underline-hover-white'];

        return (
            <SceneLayout title="Welcome To BlueIQ">
                <TextInput type="text" labelText="Username" />
                <TextInput type="password" labelText="Password" />
                <MainButton type="submit" text="Login" />
                <AuthFormFooter>
                    Forgot &nbsp;
                    <Link to="/forgot-username" className={linkClassName}>username</Link>
                    &nbsp; or &nbsp;
                    <Link to="/reset-password" className={linkClassName}>password</Link>
                    ?
                </AuthFormFooter>
            </SceneLayout>
        )
    }
}

export default Login;