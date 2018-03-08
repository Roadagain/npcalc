import React from 'react';
import Servant from './Servant';

export default class Party extends React.Component {
    render() {
        return <ol>
        {this.props.servants.map((name, idx) => {
            return <li><Servant name={name} np={0} index={idx}/></li>;
        })}
        </ol>;
    }
}
