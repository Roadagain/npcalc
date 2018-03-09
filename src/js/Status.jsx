import React from 'react';

export default class Status extends React.Component {
    liberateNoblePhantasm() {
        if (this.props.np >= 100) {
            this.props.onNPChange(this.props.index, 0);
        }
    }

    render() {
        const index = this.props.index;
        const np = this.props.np;

        return <div>
            <input type="text" value={this.props.name} onChange={e => this.props.onNameChange(index, e.target.value)} className="longtext" />
            <progress value={np} max="100">{np}%</progress>
            <input type="number" value={np} onChange={e => this.props.onNPChange(index, e.target.value)} className="shorttext" />%
            <button onClick={() => this.liberateNoblePhantasm()} disabled={index > 2 || np < 100}>宝具</button>
        </div>;
    }
}