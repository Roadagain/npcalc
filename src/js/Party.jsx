import React from 'react';
import Servant from './Servant';

export default class Party extends React.Component {
    render() {
        return <ol>
        {this.props.servants.map((name, index) => {
            return <li><Servant name={name} np={0} index={index}/></li>;
        })}
        </ol>;
    }
}
