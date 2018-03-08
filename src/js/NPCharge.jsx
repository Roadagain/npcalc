import React from 'react';
import Target from './Target';

export default class NPCharge extends React.Component {
    render() {
        return <div>
            {Target.asString(this.props.target)}
            <input type="number" value={this.props.charge} onChange={e => this.props.onChargeChange(this.props.target, e.target.value)}/>%
            <button onClick={this.props.onNPCharge.bind(this, this.props.target, this.props.charge)} disabled={this.props.index >= 3}>付与</button>
        </div>;
    }
}
