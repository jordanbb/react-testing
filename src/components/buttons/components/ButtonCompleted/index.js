import React from "react";
import PropTypes from "prop-types";
import CheckmarkIcon from "components/icons/Checkmark"
import styles from "./buttonCompleted.scss"

const ButtonCompleted = () => {
    return (
        <div className={styles.root}>
            <CheckmarkIcon />
        </div>
    )
};

export default ButtonCompleted;