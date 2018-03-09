import React from 'react';
import NPCharge from './NPCharge';
import Target from './Target';

export default class Servant extends React.Component {
    liberateNoblePhantasm() {
        if (this.props.np >= 100) {
            this.props.onNPChanged(0);
        }
    }

    render() {
        const onChargeChange = (target, charge) => this.props.onChargeChange(this.props.index, target, charge);
        const onNPCharge = (target, charge) => this.props.onNPCharge(this.props.index, target, charge);

        return <div>
            <p>
                <input type="text" value={this.props.name} onChange={e => this.props.onNameChanged(e.target.value)} />
                <progress value={this.props.np} max="100">{this.props.np}%</progress>
                <input type="number" value={this.props.np} onChange={e => this.props.onNPChanged(e.target.value)} />%
                <button onClick={() => this.liberateNoblePhantasm()} disabled={this.props.index > 2 || this.props.np < 100}>宝具</button>
            </p>
            <ul>
                <li key={0}>
                    <NPCharge index={this.props.index} target={Target.SELF} charge={this.props.charge[Target.SELF]} onChargeChange={onChargeChange} onNPCharge={onNPCharge} />
                </li>
                <li key={1}>
                    <NPCharge index={this.props.index} target={Target.SOMEONE} charge={this.props.charge[Target.SOMEONE]} onChargeChange={onChargeChange} onNPCharge={onNPCharge} />
                </li>
                <li key={2}>
                    <NPCharge index={this.props.index} target={Target.ALL} charge={this.props.charge[Target.ALL]} onChargeChange={onChargeChange} onNPCharge={onNPCharge} />
                </li>
            </ul>
        </div>;
    }
}
