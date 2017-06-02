import React from "react";
import MainHeader from "components/MainHeader";
import Login from "./scenes/Login"
import AuthInner from './components/AuthInner';
//import styles from './auth.scss';
import cx from 'classnames';

class Auth extends React.Component {
    render(){
        return (
            <div>
                <MainHeader />
            </div>
        )
    }
}

export default Auth;