import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.scss';

class MyName extends React.Component {
    render() {
        return (
            <h1>Hello, my name is {this.props.name}</h1>
        )
    }
}

ReactDOM.render(
    <MyName name="Jordan Newby"/>,
    document.getElementById('app')
);