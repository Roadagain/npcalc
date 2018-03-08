import React from 'react';
import Servant from './Servant';

export default class Party extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starting: props.servants.slice(0, 3),
            sub: props.servants.slice(3),
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

    render() {
        return <div>
        <ol>
        {this.state.starting.map((name, index) => {
            return <li>
                <input type="radio" name="starting" value={index} onClick={e => this.setState({orderedStarting: e.target.value})}/>
                <Servant name={name} np={0} index={index}/>
            </li>;
        })}
        {this.state.sub.map((name, index) => {
            return <li>
                <input type="radio" name="sub" value={index} onClick={e => this.setState({orderedSub: e.target.value})}/>
                <Servant name={name} np={0} index={index}/>
            </li>;
        })}
        </ol>
        <button onClick={() => this.orderChange()}>オーダーチェンジ</button>
        </div>;
    }
}
