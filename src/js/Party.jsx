import React from 'react';
import Servant from './Servant';

export default class Party extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            servants: props.servants,
            orderedStarting: null,
            orderedSub: null
        };
    }

    setOrder(name, index) {
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
        [servants[orderedStarting], servants[orderedSub]] = [servants[orderedSub], servants[orderedStarting]];
        this.setState({servants});
    }

    render() {
        return <div>
        <ol>
        {this.state.servants.map((name, index) => {
            return <li>
                <input type="radio" name={index < 3 ? "starting" : "sub"} value={index} onClick={e => this.setOrder(e.target.name, e.target.value)}/>
                <Servant name={name} np={0} index={index}/>
            </li>;
        })}
        </ol>
        <button onClick={() => this.orderChange()}>オーダーチェンジ</button>
        </div>;
    }
}
