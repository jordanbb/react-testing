import React from "react";
import PropTypes from "prop-types";
import CheckmarkIcon from "components/icons/Checkmark"
import styles from "./buttonCompleted.scss"

const ButtonCompleted = () => {
    return (
        <div className={styles.root}>
            <CheckmarkIcon width="16px" height="20px" />
        </div>
    )
};

export default ButtonCompleted;