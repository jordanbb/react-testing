import React from "react";
import PropTypes from "prop-types";
import HorizontalFadingDots from "components/animated/HorizontalFadingDots"
import styles from "./buttonLoading.scss"

const ButtonLoading = () => {
    return (
        <div className={styles.root}>
            <HorizontalFadingDots style="primary-white" />
        </div>
    )
};

export default ButtonLoading;