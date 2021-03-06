import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from "./mainButton.scss";
import ButtonCompleted from "../components/ButtonCompleted"
import ButtonLoading from "../components/ButtonLoading";

let cx = classNames.bind(styles);

const MainButton = props => {

    let containerClassNames = cx({
        default: !props.isCompleted && !props.isInvalid && !props.isDisabled && !props.isLoading,
        completed: props.isCompleted,
        invalid: props.isInvalid,
        disabled: props.isDisabled,
        loading: props.isLoading
    });

    let buttonChildren = <button className={styles.button} type={props.type}>{props.text}</button>;
    if(props.isCompleted){
        buttonChildren = <ButtonCompleted />
    } else if(props.isLoading) {
        buttonChildren = <ButtonLoading/>
    }

    return (
        <div className={containerClassNames}>
            {buttonChildren}
        </div>
    )
};

MainButton.defaultProps = {
    type: "button",
    text: "GIVE ME TEXT",
    isCompleted: false,
    isLoading: false,
    isInvalid: false,
    isDisabled: false,
};

export default MainButton;