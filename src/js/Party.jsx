import React from 'react';
import Servant from './Servant';
import Target from './Target';

export default class Party extends React.Component {
    constructor(props) {
        super(props);
        const servants = Array.apply(null, Array(6)).map((_, index) => ({
            name: "鯖" + (index + 1),
            np: 0,
            charge: [0, 0, 0]
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

    clamp(value, min, max) {
        return Math.max(Math.min(value, max), min);
    }

    onNPChange(index, np) {
        if (Number.isNaN(np)) {
            return;
        }
        np = this.clamp(np, 0, 300);
        const servants = this.state.servants;
        servants[index].np = np;
        this.setState({servants});
    }

    onChargeChange(index, target, charge) {
        if (Number.isNaN(charge)) {
            return;
        }
        charge = this.clamp(charge, 0, 300);
        const servants = this.state.servants;
        servants[index].charge[target] = charge;
        this.setState({servants});
    }

    onNPCharge(index, target, charge) {
        const servants = this.state.servants;
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
            for (let i = 0; i < 3; ++i) {
                this.onNPChange(i, servants[i].np + charge);
            }
        }
    }

    render() {
        const onTargetChange = e => this.onTargetChange(e.target.name, e.target.value);
        const onNameChange = this.onNameChange.bind(this);
        const onNPChange = this.onNPChange.bind(this);
        const onChargeChange = this.onChargeChange.bind(this);
        const onNPCharge = this.onNPCharge.bind(this);
        const starting = this.state.servants.slice(0, 3);
        const sub = this.state.servants.slice(3);

        return <div>
            <div className="starting">
                {starting.map((servant, index) => <div className="flexbox servant" key={index}>
                    <input type="radio" name="starting" value={index} onClick={onTargetChange} className="flex-item" />
                    <Servant {...servant} {...{index, onNameChange, onNPChange, onChargeChange, onNPCharge}} />
                </div>)}
            </div>
            <div className="sub">
                {sub.map((servant, index) => <div className="flexbox servant" key={index + 3}>
                    <input type="radio" name="sub" value={index + 3} onClick={onTargetChange} className="flex-item" />
                    <Servant {...servant} {...{index: index + 3, onNameChange, onNPChange, onChargeChange, onNPCharge}} />
                </div>)}
            </div>
            <button onClick={this.orderChange.bind(this)}>オーダーチェンジ</button>
            <button onClick={this.onNPCharge.bind(this, 0, Target.SOMEONE, 20)}>霊子譲渡</button>
        </div>;
    }
}
