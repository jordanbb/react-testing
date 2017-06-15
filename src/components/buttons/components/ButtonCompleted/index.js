import React from "react";
import PropTypes from "prop-types";
import CheckmarkIcon from "components/icons/Checkmark"
import styles from "./buttonCompleted.scss"

const ButtonCompleted = () => {
    return (
        <div className={styles.root}>
            <CheckmarkIcon width="22px" height="22px" />
        </div>
    )
};

export default ButtonCompleted;