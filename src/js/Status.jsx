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
            <input type="text" value={this.props.name} onChange={e => this.props.onNameChange(index, e.target.value)} className="long-text" />
            <progress value={np} max="100" className="np-guage">{np}%</progress>
            <input type="number" placeholder={0} value={np || ""} onChange={e => this.props.onNPChange(index, e.target.value)} className="short-text" />%
            <button onClick={() => this.liberateNoblePhantasm()} disabled={index > 2 || np < 100}>宝具</button>
        </div>;
    }
}