import React from 'react';

export default class NumberInput extends React.Component {
    render() {
        return <form className="number">
            {/*チャージ値が0ならプレースホルダーを表示する(入力の時に050とかにならないため)*/}
            <input type="number" placeholder={0} value={this.props.value || ""} onChange={this.props.onChange} className="short-text"/>%
        </form>;
    }
}