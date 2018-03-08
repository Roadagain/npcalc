import React from 'react';
import Servant from './Servant';

export default class Party extends React.Component {
    render() {
        return <ul>
        {this.props.servants.map((name) => {
            return <li><Servant name={name}/></li>;
        })}
        </ul>;
    }
}
