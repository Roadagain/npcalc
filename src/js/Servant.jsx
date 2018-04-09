import React from 'react';
import Status from './Status';
import NPCharge from './NPCharge';
import Target from './Target';

export default class Servant extends React.Component {
    render() {
        const index = this.props.index;
        const charge = this.props.charge;
        const onChargeChange = (target, charge) => this.props.onChargeChange(index, target, charge);
        const onNPCharge = (target, charge) => this.props.onNPCharge(index, target, charge);

        return <div className="flex-item">
            <Status {...this.props} />
            <ul className="flexbox">
                {/*TODO: chargeに関してはcharge.selfとかで指定できるようにする*/}
                <li className="flex-item no-marker">
                    <NPCharge {...{index, onChargeChange, onNPCharge}} target={Target.SELF} charge={charge[Target.SELF]} />
                </li>
                <li className="flex-item no-marker">
                    <NPCharge {...{index, onChargeChange, onNPCharge}} target={Target.SOMEONE} charge={charge[Target.SOMEONE]} />
                </li>
                <li className="flex-item no-marker">
                    <NPCharge {...{index, onChargeChange, onNPCharge}} target={Target.ALL} charge={charge[Target.ALL]} />
                </li>
            </ul>
        </div>;
    }
}
