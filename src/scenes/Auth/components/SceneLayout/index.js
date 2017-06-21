import React from "react";
import PropTypes from "prop-types";
import styles from "./sceneLayout.scss";

const SceneLayout = props => {
    return (
        <div className={styles.scene}>
            <h1 className={styles.h1}>{props.title}</h1>
            <form className={styles.form} noValidate>
                {props.children}
            </form>
        </div>
    )
};

SceneLayout.propTypes = {
    title: PropTypes.string.isRequired
};

export default SceneLayout;