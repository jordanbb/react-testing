import React from "react";
import PropTypes from "prop-types";
import styles from './checkmark.scss'

const Checkmark = (props) => {
    return (
        <svg className={styles.root} xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 11.54 12.12">
            <title>Checkmark Icon</title>
            <polyline className="biq-checkmark-icon" points="0.71 7.22 4.04 10.55 10.71 0.56"/>
        </svg>
    )
};

Checkmark.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};

Checkmark.defaultProps = {
    width: '11.54px',
    height: '12.12px'
};

export default Checkmark;