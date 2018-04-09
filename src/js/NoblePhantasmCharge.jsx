import React from 'react';
import Target from './Target';

export default class NoblePhantasmCharge extends React.Component {
    render() {
        const onChargeChange = e => this.props.onChargeChange(Target.NOBLE_PHANTASM, e.target.value);
        return <div>
            宝具
            {/*チャージ値が0ならプレースホルダーを表示する(入力の時に050とかにならないため)*/}
            <input type="number" placeholder={0} value={this.props.charge || ""} onChange={onChargeChange} className="short-text"/>%
        </div>;
    }
}