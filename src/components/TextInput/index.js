import React from 'react';
import classNames from 'classnames/bind';
import styles from "./textInput.scss"

let cx = classNames.bind(styles);

class TextInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(evt){
        this.setState({
            value: evt.target.value
        })
    }
    render(){

        let containerClassNames = cx({
            container: true,
            sizeLarge: true,
            light: true
        });

        return (
            <div className={containerClassNames}>
                <input
                    type={this.props.type}
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                <label>{this.props.labelText}</label>
                <div className={styles.underline}></div>
                <div className={styles.error}></div>
            </div>
        )
    }
}

export default TextInput;