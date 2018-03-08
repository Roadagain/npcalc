import React from 'react';
import Party from './Party';

export default class App extends React.Component {
    render() {
        return <Party servants={["鯖1", "鯖2", "鯖3", "鯖4", "鯖5", "鯖6"]}/>;
    }
}
