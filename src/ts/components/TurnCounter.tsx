import { Button, GridList, Typography } from '@material-ui/core';
import React from 'react';
import CardWrapper from './CardWrapper';
import { wrapGridListTile } from './Util';

export interface ITurnCounterProps {
    turns: number;
}

export default function TurnCounter({ turns }: ITurnCounterProps) {
    return (
        <CardWrapper>
            <GridList cols={10} cellHeight="auto">
                {wrapGridListTile(<Typography variant="headline" color="inherit">{turns} ターン</Typography>, 4)}
                {wrapGridListTile(<Button fullWidth={true}>経過</Button>, 3)}
                {wrapGridListTile(<Button fullWidth={true}>リセット</Button>, 3)}
            </GridList>
        </CardWrapper>
    );
}
