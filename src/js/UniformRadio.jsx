import React from 'react';

export default class UniformRadio extends React.Component {
    render() {
        const onUniformChange = this.props.onUniformChange.bind(this, this.props.uniform);

        return <div>
            <input type="radio" name="uniform" checked={this.props.checked} onChange={onUniformChange} />
            {this.props.uniform.name}
        </div>
    }
}
