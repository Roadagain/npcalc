import React from 'react';
import Servant from './Servant';

export default class Party extends React.Component {
    constructor(props) {
        super(props);
        const servantsInfo = props.servants.map(name => ({
            name,
            np: 0,
            charge: [0, 0, 0]
        }));
        this.state = {
            starting: servantsInfo.slice(0, 3),
            sub: servantsInfo.slice(3),
            orderedStarting: null,
            orderedSub: null
        };
    }

    orderChange() {
        if (this.state.orderedStarting === null || this.state.orderedSub === null) {
            return;
        }
        const starting = this.state.starting;
        const sub = this.state.sub;
        const orderedStarting = this.state.orderedStarting;
        const orderedSub = this.state.orderedSub;
        [starting[orderedStarting], sub[orderedSub]] = [sub[orderedSub], starting[orderedStarting]];
        this.setState({starting, sub});
    }

    setName(index, name) {
        if (index < 3) {
            const starting = this.state.starting;
            starting[index].name = name;
            this.setState({starting});
        }
        else {
            const sub = this.state.sub;
            sub[index - 3].name = name;
            this.setState({sub});
        }
    }

    setNP(index, np) {
        np = Math.max(Math.min(np, 300), 0);
        if (Number.isNaN(np)) {
            return;
        }
        if (index < 3) {
            const starting = this.state.starting;
            starting[index].np = np;
            this.setState({starting});
        }
        else {
            const sub = this.state.sub;
            sub[index - 3].np = np;
            this.setState({sub});
        }
    }

    onChargeChange(index, target, charge) {
        if (Number.isNaN(charge)) {
            return;
        }
        if (index < 3) {
            const starting = this.state.starting;
            starting[index].charge[target] = charge;
            this.setState({starting});
        }
        else {
            const sub = this.state.sub;
            sub[index - 3].charge[target] = charge;
            this.setState({sub});
        }
    }

    render() {
        return <div>
        <ol>
        {this.state.starting.map(({name, np, charge}, index) => {
            return <li>
                <input type="radio" name="starting" value={index} onClick={e => this.setState({orderedStarting: e.target.value})}/>
                <Servant name={name} np={np} charge={charge} index={index} onNameChanged={name => this.setName(index, name)} onNPChanged={np => this.setNP(index, np)} onChargeChange={this.onChargeChange} />
            </li>;
        })}
        {this.state.sub.map(({name, np, charge}, index) => {
            return <li>
                <input type="radio" name="sub" value={index} onClick={e => this.setState({orderedSub: e.target.value})}/>
                <Servant name={name} np={np} charge={charge} index={index + 3} onNameChanged={name => this.setName(index + 3, name)} onNPChanged={np => this.setNP(index + 3, np)} onChargeChange={this.onChargeChange} />
            </li>;
        })}
        </ol>
        <button onClick={() => this.orderChange()}>オーダーチェンジ</button>
        </div>;
    }
}
