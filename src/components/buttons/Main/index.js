import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from "./mainButton.scss";

let cx = classNames.bind(styles);

const MainButton = props => {

    let containerClassNames = cx({
        default: !props.isCompleted && !props.isInvalid && !props.isDisabled,
        completed: props.isCompleted,
        invalid: props.isInvalid,
        disabled: props.isDisabled
    });

    return (
        <div className={containerClassNames}>
            <button className={styles.button} type={props.type}>{props.text}</button>
        </div>
    )
};

MainButton.defaultProps = {
    type: "button",
    text: "GIVE ME TEXT",
    isCompleted: false,
    isInvalid: false,
    isDisabled: false,
};

export default MainButton;