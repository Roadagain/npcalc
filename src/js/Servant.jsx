import React from 'react';
import Status from './Status';
import NPCharge from './NPCharge';
import NoblePhantasmCharge from './NoblePhantasmCharge';
import Target from './Target';

export default class Servant extends React.Component {
    liberateNoblePhantasm() {
        if (this.props.np >= 100) {
            this.props.onNPChange(this.props.index, 0);
        }
        this.props.onNPCharge(this.props.index, Target.NOBLE_PHANTASM, this.props.charge.noblePhantasm);
    }

    render() {
        const index = this.props.index;
        const charge = this.props.charge;
        const onChargeChange = (target, charge) => this.props.onChargeChange(index, target, charge);
        const onNPCharge = (target, charge) => this.props.onNPCharge(index, target, charge);

        return <div className="flex-item">
            <Status {...this.props} liberateNoblePhantasm={this.liberateNoblePhantasm.bind(this)}  />
            <ul className="flexbox">
                {/*TODO: chargeに関してはcharge.selfとかで指定できるようにする*/}
                <li className="flex-item no-marker">
                    <NPCharge {...{index, onChargeChange, onNPCharge}} target={Target.SELF} charge={charge.self} />
                </li>
                <li className="flex-item no-marker">
                    <NPCharge {...{index, onChargeChange, onNPCharge}} target={Target.SOMEONE} charge={charge.someone} />
                </li>
                <li className="flex-item no-marker">
                    <NPCharge {...{index, onChargeChange, onNPCharge}} target={Target.ALL} charge={charge.all} />
                </li>
                <li className="flex-item no-marker">
                    <NoblePhantasmCharge {...{index, onChargeChange}} charge={charge.noblePhantasm} />
                </li>
            </ul>
        </div>;
    }
}
