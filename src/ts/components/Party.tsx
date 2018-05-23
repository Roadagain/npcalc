import { GridList, GridListTile } from '@material-ui/core';
import React from 'react';
import Servant, { IServantProps } from './Servant';
import { wrapGridListTile } from './Util';

export interface IPartyProps {
    servants: IServantProps[];
}

export default function Party({ servants }: IPartyProps) {
    const [forwards, backwards] = [servants.slice(0, 3), servants.slice(3)];
    return (
        <GridList cols={12} cellHeight="auto">
            <GridListTile cols={3} />
            {forwards.map(servant => wrapGridListTile(<Servant {...servant} />, 2, servant.name))};
            <GridListTile cols={3} />
            <GridListTile cols={3} />
            {backwards.map(servant => wrapGridListTile(<Servant {...servant} />, 2, servant.name))};
            <GridListTile cols={3} />
        </GridList>
    );
}
