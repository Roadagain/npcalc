import React from 'react';
import Servant from './Servant';
import Target from './Target';

export default class Party extends React.Component {
    constructor(props) {
        super(props);
        const servantsInfo = props.servants.map(name => ({
            name,
            np: 0,
            charge: [0, 0, 0]
        }));
        this.state = {
            servants: servantsInfo,
            orderedStarting: null,
            orderedSub: null
        };
    }

    onOrderChange(name, value) {
        const index = Number(value);
        if (name === "starting") {
            this.setState({orderedStarting: index});
        }
        else {
            this.setState({orderedSub: index});
        }
    }

    orderChange() {
        if (this.state.orderedStarting === null || this.state.orderedSub === null) {
            return;
        }
        const servants = this.state.servants;
        const orderedStarting = this.state.orderedStarting;
        const orderedSub = this.state.orderedSub;
        [servants[orderedStarting], servants[orderedSub]] = [servants[orderedSub], servants[orderedStarting]]
        this.setState({servants});
    }

    onNameChange(index, name) {
        const servants = this.state.servants;
        servants[index].name = name;
        this.setState({servants});
    }

    onNPChange(index, np) {
        np = Math.max(Math.min(np, 300), 0);
        if (Number.isNaN(np)) {
            return;
        }
        const servants = this.state.servants;
        servants[index].np = np;
        this.setState({servants});
    }

    onChargeChange(index, target, charge) {
        if (Number.isNaN(charge)) {
            return;
        }
        charge = Math.max(Math.min(charge, 300), 0);
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
            const ordered = this.state.orderedStarting;
            if (ordered === null) {
                return;
            }
            this.onNPChange(ordered, servants[ordered].np + charge);
        }
        else {
            for (let i = 0; i < 3; ++i) {
                this.onNPChange(i, servants[i].np + charge);
            }
        }
    }

    render() {
        const onOrderChange = e => this.onOrderChange(e.target.name, e.target.value);
        const onNameChange = this.onNameChange.bind(this);
        const onNPChange = this.onNPChange.bind(this);
        const onChargeChange = this.onChargeChange.bind(this);
        const onNPCharge = this.onNPCharge.bind(this);

        return <div>
            <ol>
                {this.state.servants.map(({name, np, charge}, index) => <li>
                    <input type="radio" name={index < 3 ? "starting" : "sub"} value={index} onClick={onOrderChange} />
                    <Servant {...{name, np, charge, index, onNameChange, onNPChange, onChargeChange, onNPCharge}} />
                </li>)}
            </ol>
            <button onClick={this.orderChange.bind(this)}>オーダーチェンジ</button>
        </div>;
    }
}
