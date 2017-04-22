import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.scss';

class MyName extends React.Component {
    render() {
        return (
            <div>Hello, my name is {this.props.name}</div>
        )
    }
}

ReactDOM.render(
    <MyName name="Jordan Newby"/>,
    document.getElementById('app')
);