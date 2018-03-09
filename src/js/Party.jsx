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

    splitServants() {
        const servants = this.state.servants;
        return [servants.slice(0, 3), servants.slice(3)];
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

    setName(index, name) {
        const servants = this.state.servants;
        servants[index].name = name;
        this.setState({servants});
    }

    setNP(index, np) {
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
            this.setNP(index, servants[index].np + charge);
        }
        else if (target === Target.SOMEONE) {
            const ordered = this.state.orderedStarting;
            if (ordered === null) {
                return;
            }
            this.setNP(ordered, servants[ordered].np + charge);
        }
        else {
            for (let i = 0; i < 3; ++i) {
                this.setNP(i, servants[i].np + charge);
            }
        }
    }

    render() {
        const onOrderChange = e => this.onOrderChange(e.target.name, e.target.value);
        const onNameChanged = this.setName.bind(this);
        const onNPChanged = this.setNP.bind(this);
        const onChargeChange = this.onChargeChange.bind(this);
        const onNPCharge = this.onNPCharge.bind(this);
        const [starting, sub] = this.splitServants();

        return <div>
            <ol>
                {this.state.servants.map(({name, np, charge}, index) => <li>
                    <input type="radio" name={index < 3 ? "starting" : "sub"} value={index} onClick={onOrderChange} />
                    <Servant name={name} np={np} charge={charge} index={index} onNameChanged={onNameChanged} onNPChanged={onNPChanged} onChargeChange={onChargeChange} onNPCharge={onNPCharge} />
                </li>)}
            </ol>
            <button onClick={() => this.orderChange()}>オーダーチェンジ</button>
        </div>;
    }
}
