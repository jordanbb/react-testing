import React from "react";
import PropTypes from "prop-types";
import styles from "./authLayout.scss";
import MainHeader from "components/MainHeader";

const AuthLayout = props => {
    return (
        <div>
            <MainHeader />
            <div className={styles.main}>
                <div className={styles.center}>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default AuthLayout;