import React from "react";
import BIQLogoIcon from "components/icons/BIQLogoText";
import PropTypes from "prop-types";
import styles from "./Logo.scss";

const Logo = props => {
    return (
        <div className={styles.container}>
            <BIQLogoIcon width="143px" height="31px" />
        </div>
    )
};

export default Logo;