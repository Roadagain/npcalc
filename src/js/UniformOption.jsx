import React from 'react';

export default class UniformOption extends React.Component {
    render() {
        return <option value={this.props.name}>
            {this.props.name}
        </option>;
    }
}
