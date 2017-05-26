import React from "react";
import Login from "./scenes/Login"
import AuthInner from './components/AuthInner';
import styles from './auth.scss';
import cx from 'classnames';

class Auth extends React.Component {
    render(){
        let className = cx(styles.right);
        return (
            <div className={className}>
            </div>
        )
    }
}

export default Auth;