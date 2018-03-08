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
        np = Math.max(Math.min(np, 300), 0);
        if (Number.isNaN(np)) {
            return;
        }
        this.setState({np});
    }

    liberateNoblePhantasm() {
        if (this.state.np >= 100) {
            this.setState({np: 0});
        }
    }

    render() {
        return <div>
        <p>
        <input type="text" placeholder={this.props.name} onChange={e => this.setState({name: e.target.Value})} />
        <progress value={this.state.np} max="100">{this.state.np}%</progress>
        <input type="number" value={this.state.np} onChange={e => this.setNP(e.target.value)} />%
        <button onClick={() => this.liberateNoblePhantasm()} disabled={this.props.index > 2 || this.state.np < 100}>宝具</button>
        </p>
        </div>
    }
}
