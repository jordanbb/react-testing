import React from "react";
import styles from "./home.scss";

class Home extends React.Component {
    render(){
        return (
            <div className={styles.root}>
                <h1 className={styles.h1}>Home View</h1>
            </div>
        )
    }
}

export default Home;