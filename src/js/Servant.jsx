import React from 'react';

export default class Servant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            np: 0
        };
    }

    setNP(np) {
        np = Math.max(Math.min(np, 100), 0);
        if (Number.isNaN(np)) {
            return;
        }
        this.setState({np});
    }

    render() {
        return <div>
        <p>
        <input type="text"></input>
        <progress value={this.state.np} max="100">{this.state.np}%</progress>
        <input type="number" defaultValue={this.state.np} onChange={e => this.setNP(e.target.value)}></input>%
        </p>
        </div>
    }
}
