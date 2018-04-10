import '../scss/style.scss';
import React from 'react';
import Party from './Party';
import Master from './Master';
import Target from './Target';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const servants = Array.apply(null, Array(6)).map((_, index) => ({
            name: "鯖" + (index + 1),
            np: 0,
            charge: {
                self: 0,
                someone: 0,
                all: 0,
                noblePhantasm: 0
            }
        }));
        this.state = {
            servants,
            targetStarting: null,
            targetSub: null
        };
    }

    onTargetChange(name, value) {
        const index = Number(value);
        if (name === "starting") {
            this.setState({targetStarting: index});
        }
        else {
            this.setState({targetSub: index});
        }
    }

    orderChange() {
        if (this.state.targetStarting === null || this.state.targetSub === null) {
            return;
        }
        const servants = this.state.servants;
        const targetStarting = this.state.targetStarting;
        const targetSub = this.state.targetSub;
        [servants[targetStarting], servants[targetSub]] = [servants[targetSub], servants[targetStarting]]
        this.setState({servants});
    }

    onNameChange(index, name) {
        const servants = this.state.servants;
        servants[index].name = name;
        this.setState({servants});
    }

    //どこか別の場所に切り分けてもいいかも
    clamp(value, min, max) {
        return Math.max(Math.min(value, max), min);
    }

    onNPChange(index, np) {
        if (Number.isNaN(np)) {
            return;
        }
        //NPは0~300まで
        np = this.clamp(np, 0, 300);
        const servants = this.state.servants;
        servants[index].np = np;
        this.setState({servants});
    }

    onChargeChange(index, target, charge) {
        if (Number.isNaN(charge)) {
            return;
        }
        //NPは0~300に収まるからチャージ値もそこまでに収める
        charge = this.clamp(charge, 0, 300);
        const servants = this.state.servants;
        if (target === Target.SELF) {
            servants[index].charge.self = charge;
        }
        else if (target === Target.SOMEONE) {
            servants[index].charge.someone = charge;
        }
        else if (target === Target.ALL) {
            servants[index].charge.all = charge;
        }
        else if (target === Target.NOBLE_PHANTASM) {
            servants[index].charge.noblePhantasm = charge;
        }
        this.setState({servants});
    }

    onNPCharge(index, target, charge) {
        const servants = this.state.servants;

        //対象だけわかればonNPChangeに丸投げできる
        if (target === Target.SELF) {
            this.onNPChange(index, servants[index].np + charge);
        }
        else if (target === Target.SOMEONE) {
            const targetStarting = this.state.targetStarting;
            if (targetStarting === null) {
                return;
            }
            this.onNPChange(targetStarting, servants[targetStarting].np + charge);
        }
        else {
            // ALLもNOBLE_PHANTASMもここ
            for (let i = 0; i < 3; ++i) {
                this.onNPChange(i, servants[i].np + charge);
            }
        }
    }

    render() {
        const onTargetChange = this.onTargetChange.bind(this);
        const orderChange = this.orderChange.bind(this);
        const onNameChange = this.onNameChange.bind(this);
        const onNPChange = this.onNPChange.bind(this);
        const onChargeChange = this.onChargeChange.bind(this);
        const onNPCharge = this.onNPCharge.bind(this);

        return <div>
            <Party servants={this.state.servants} {...{onTargetChange, onNameChange, onNPChange, onChargeChange, onNPCharge}} />
            <Master {...{orderChange, onNPCharge}} />
        </div>;
    }
}
