import React from 'react';
import NPCharge from './NPCharge';

export default class NoblePhantasmCharge extends React.Component {
    render() {
        const onChargeChange = e => this.props.onChargeChange(this.props.target, e.target.value);
        const onNPCharge = this.props.onNPCharge.bind(this, this.props.target, this.props.charge);
        return <div>
            宝具
            {/*チャージ値が0ならプレースホルダーを表示する(入力の時に050とかにならないため)*/}
            <input type="number" placeholder={0} value={this.props.charge || ""} onChange={onChargeChange} className="short-text"/>%
        </div>;
    }
}