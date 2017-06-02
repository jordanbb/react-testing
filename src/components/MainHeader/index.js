import React from "react";
import BIQLogoIcon from "components/icons/BIQLogoText";
import PropTypes from "prop-types";
import styles from "./MainHeader.scss";

const MainHeader = props => {
    return (
        <header className={styles.header}>
            <div className={styles.inside}>
                <BIQLogoIcon width="143px" height="29px" />
            </div>
        </header>
    )
};

export default MainHeader;