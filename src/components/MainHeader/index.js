import React from "react";
import Logo from "./components/Logo";
import PropTypes from "prop-types";
import styles from "./MainHeader.scss";

const MainHeader = props => {
    return (
        <header className={styles.header}>
            <div className={styles.inside}>
                <Logo />
            </div>
        </header>
    )
};

export default MainHeader;