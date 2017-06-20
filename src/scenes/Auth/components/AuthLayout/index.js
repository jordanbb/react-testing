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
                        <h1 className={styles.h1}>{props.title}</h1>
                        <form className={styles.form} noValidate>
                            {props.children}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

AuthLayout.propTypes = {
    title: PropTypes.string.isRequired
};

export default AuthLayout;