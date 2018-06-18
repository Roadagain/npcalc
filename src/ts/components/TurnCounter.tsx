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
            <GridList cols={4} cellHeight="auto">
                {wrapGridListTile(<Typography variant="headline" color="inherit">{turns} ターン</Typography>, 2)}
                {wrapGridListTile(<Button fullWidth={true}>経過</Button>, 1)}
                {wrapGridListTile(<Button fullWidth={true}>リセット</Button>, 1)}
            </GridList>
        </CardWrapper>
    );
}
