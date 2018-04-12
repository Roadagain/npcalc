import React from 'react';
import NumberInput from './NumberInput';

export default class Status extends React.Component {
    render() {
        const index = this.props.index;
        const np = this.props.np;

        return <div>
            <input type="text" value={this.props.name} onChange={e => this.props.onNameChange(index, e.target.value)} className="long-text" />
            <progress value={np} max="100" className="np-guage">{np}%</progress>
            <NumberInput value={np} onChange={e => this.props.onNPChange(index, e.target.value)} />
            {/*後衛かNP100%未満は宝具使えないのでボタンを殺す*/}
            {/*TODO: indexの条件文表記がバラけてるので統一*/}
            <button onClick={this.props.liberateNoblePhantasm} disabled={index > 2 || np < 100}>宝具</button>
        </div>;
    }
}