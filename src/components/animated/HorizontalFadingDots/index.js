import React from "react";
import PropTypes from "prop-types";
import styles from './horizontalFadingDots.scss'

const HorizontalFadingDots = (props) => {

    return (
        <div className={styles[props.style]}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
            <div></div>
        </div>
    )
};

HorizontalFadingDots.propTypes = {
    style: PropTypes.string
};

export default HorizontalFadingDots;