import React from 'react';

export default class Servant extends React.Component {
    liberateNoblePhantasm() {
        if (this.props.np >= 100) {
            this.props.onNPChanged(0);
        }
    }

    render() {
        return <div>
        <p>
        <input type="text" value={this.props.name} onChange={e => this.props.onNameChanged(e.target.value)} />
        <progress value={this.props.np} max="100">{this.props.np}%</progress>
        <input type="number" value={this.props.np} onChange={e => this.props.onNPChanged(e.target.value)} />%
        <button onClick={() => this.liberateNoblePhantasm()} disabled={this.props.index > 2 || this.props.np < 100}>宝具</button>
        </p>
        </div>
    }
}
