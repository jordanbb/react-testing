import React from "react";
import PropTypes from "prop-types";
import CheckmarkIcon from "components/icons/Checkmark"
import styles from "./buttonCompleted.scss"
import testStyles from "components/icons/Checkmark/checkmark.scss"

const ButtonCompleted = () => {
    return (
        <div className={styles.root}>
            <CheckmarkIcon styleName={styles.checkmark} />
        </div>
    )
};

export default ButtonCompleted;