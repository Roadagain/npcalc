import { GridList, GridListTile } from '@material-ui/core';
import React from 'react';
import Servant from './Servant';

export interface IPartyProps {
    servants: string[];
}

function wrapGridListTile(component: JSX.Element, cols: number, key: string|undefined) {
    return (
        <GridListTile cols={cols} key={key}>
            {component}
        </GridListTile>
    );
}

export default function Party({ servants }: IPartyProps) {
    const [forwards, backwards] = [servants.slice(0, 3), servants.slice(3)];
    return (
        <GridList cols={12} cellHeight="auto">
            <GridListTile cols={3} />
            {forwards.map(name => wrapGridListTile(<Servant name={name} />, 2, name))};
            <GridListTile cols={3} />
            <GridListTile cols={3} />
            {backwards.map(name => wrapGridListTile(<Servant name={name} />, 2, name))};
            <GridListTile cols={3} />
        </GridList>
    );
}
