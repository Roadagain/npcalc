import { Button, GridList, TextField } from '@material-ui/core';
import React from 'react';
import MysticCodeSkill, { toString } from '../data/MysticCodeSkill';
import CardWrapper from './CardWrapper';
import { wrapGridListTile } from './Util';

export interface IMysticCodeProps {
    name: string;
    skill: MysticCodeSkill;
}

function skillButton(skill: MysticCodeSkill) {
    if (skill === MysticCodeSkill.EMPTY) {
        return <div />;
    }
    return <Button fullWidth={true}>{toString(skill)}</Button>;
}

export default function MysticCode({ name, skill }: IMysticCodeProps) {
    return (
        <CardWrapper>
            <GridList cols={2} cellHeight="auto">
                {wrapGridListTile(<TextField value={name} fullWidth={true} />, 1)}
                {wrapGridListTile(skillButton(skill), 1)}
            </GridList>
        </CardWrapper>
    );
}
