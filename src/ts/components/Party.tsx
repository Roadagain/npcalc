import { GridList } from '@material-ui/core';
import React from 'react';
import Servant, { IServantProps } from './Servant';
import { wrapGridListTile } from './Util';

export interface IPartyProps {
    servants: IServantProps[];
}

export default function Party({ servants }: IPartyProps) {
    const [forwards, backwards] = [servants.slice(0, 3), servants.slice(3)];
    return (
        <GridList cols={3} cellHeight="auto">
            {forwards.map(servant => wrapGridListTile(<Servant {...servant} />, 1, servant.name))};
            {backwards.map(servant => wrapGridListTile(<Servant {...servant} />, 1, servant.name))};
        </GridList>
    );
}
