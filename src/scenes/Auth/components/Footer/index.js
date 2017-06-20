import React from "react";
import styles from "./footer.scss";

const AuthFormFooter = props => {
    return (
        <footer className={styles.footer}>
            {props.children}
        </footer>
    )
};

export default AuthFormFooter;