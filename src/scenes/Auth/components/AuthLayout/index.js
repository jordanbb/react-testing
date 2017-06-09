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
                    <div className={styles.scene}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthLayout;