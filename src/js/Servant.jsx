import React from 'react';

export default class Servant extends React.Component {
    render() {
        return <div>
        <p>
        <input type="text"></input>
        <progress value={this.props.np} max="100">{this.props.np}%</progress>
        {this.props.np}%
        </p>
        </div>
    }
}
