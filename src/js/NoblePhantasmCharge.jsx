import React from 'react';
import Target from './Target';
import NumberInput from './NumberInput';

export default class NoblePhantasmCharge extends React.Component {
    render() {
        const onChargeChange = e => this.props.onChargeChange(Target.NOBLE_PHANTASM, e.target.value);
        return <div>
            宝具
            {/*TODO: OC依存のチャージに対応*/}
            <NumberInput value={this.props.charge} onChange={onChargeChange}/>
        </div>;
    }
}