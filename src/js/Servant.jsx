import React from 'react';
import NPCharge from './NPCharge';
import Target from './Target';

export default class Servant extends React.Component {
    liberateNoblePhantasm() {
        if (this.props.np >= 100) {
            this.props.onNPChange(this.props.index, 0);
        }
    }

    render() {
        const index = this.props.index;
        const charge = this.props.charge;
        const onChargeChange = (target, charge) => this.props.onChargeChange(index, target, charge);
        const onNPCharge = (target, charge) => this.props.onNPCharge(index, target, charge);

        return <div>
            <p>
                <input type="text" value={this.props.name} onChange={e => this.props.onNameChange(index, e.target.value)} />
                <progress value={this.props.np} max="100">{this.props.np}%</progress>
                <input type="number" value={this.props.np} onChange={e => this.props.onNPChange(index, e.target.value)} />%
                <button onClick={() => this.liberateNoblePhantasm()} disabled={index > 2 || this.props.np < 100}>宝具</button>
            </p>
            <ul>
                <li key={0}>
                    <NPCharge {...{index, onChargeChange, onNPCharge}} target={Target.SELF} charge={charge[Target.SELF]} />
                </li>
                <li key={1}>
                    <NPCharge {...{index, onChargeChange, onNPCharge}} target={Target.SOMEONE} charge={charge[Target.SOMEONE]} />
                </li>
                <li key={2}>
                    <NPCharge {...{index, onChargeChange, onNPCharge}} target={Target.ALL} charge={charge[Target.ALL]} />
                </li>
            </ul>
        </div>;
    }
}
