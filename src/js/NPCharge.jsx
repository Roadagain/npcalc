import React from 'react';
import Target from './Target';
import NumberInput from './NumberInput';

export default class NPCharge extends React.Component {
    render() {
        const onChargeChange = e => this.props.onChargeChange(this.props.target, e.target.value);
        const onNPCharge = this.props.onNPCharge.bind(this, this.props.target, this.props.charge);
        return <div>
            {Target.asString(this.props.target)}
            <NumberInput value={this.props.charge} onChange={onChargeChange} />
            {/*後衛ならチャージできないので付与ボタンを殺す*/}
            {/*TODO: indexの条件文表記がバラけてるので統一*/}
            <button onClick={onNPCharge} disabled={this.props.index >= 3 || this.props.charge === 0}>付与</button>
        </div>;
    }
}
