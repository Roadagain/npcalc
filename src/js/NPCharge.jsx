import React from 'react';
import Target from './Target';

export default class NPCharge extends React.Component {
    render() {
        const onChargeChange = e => this.props.onChargeChange(this.props.target, e.target.value);
        const onNPCharge = this.props.onNPCharge.bind(this, this.props.target, this.props.charge);
        return <div>
            {Target.asString(this.props.target)}
            <input type="number" placeholder={0} onChange={onChargeChange} className="short-text"/>%
            <button onClick={onNPCharge} disabled={this.props.index >= 3 || this.props.charge === 0}>付与</button>
        </div>;
    }
}
