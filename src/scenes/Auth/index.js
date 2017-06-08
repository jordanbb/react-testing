import React from "react";
import MainHeader from "components/MainHeader";
import AuthScenesContainer from "./components/AuthScenesContainer"
//import styles from './auth.scss';
import cx from 'classnames';

class Auth extends React.Component {
    render(){
        return (
            <div>
                <MainHeader />
                <AuthScenesContainer />
            </div>
        )
    }
}

export default Auth;