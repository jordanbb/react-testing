import React from "react";
import PropTypes from "prop-types";
import styles from "./AuthScenesContainer.scss";

const AuthScenesContainer = props => {
    return (
        <div className={styles.main}>
            <div className={styles.center}>
                <div className={styles.scene}>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default AuthScenesContainer;