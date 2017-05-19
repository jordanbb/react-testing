import React from 'react';
import classNames from 'classnames';

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
        return (
            <div className="input-text-container size-regular dark">
                <input
                    type={this.props.type}
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                <label>{this.props.labelText}</label>
                <div className="input-text-underline"></div>
                <div className="input-text-error"></div>
            </div>
        )
    }
}

export default TextInput;