import { Button, GridList } from '@material-ui/core';
import React from 'react';
import MysticCode, { skill } from '../data/MysticCode';
import MysticCodeSkill, { toString } from '../data/MysticCodeSkill';
import CardWrapper from './CardWrapper';
import MysticCodeMenu from './MysticCodeMenu';
import { wrapGridListTile } from './Util';

export interface IMysticCodeProps {
    mysticCode: MysticCode;
}

function skillButton(mysticCode: MysticCode) {
    const mysticCodeSkill = skill(mysticCode);
    if (mysticCodeSkill === MysticCodeSkill.EMPTY) {
        return <div />;
    }
    return <Button fullWidth={true}>{toString(mysticCodeSkill)}</Button>;
}

export default function MysticCodeCard({ mysticCode }: IMysticCodeProps) {
    return (
        <CardWrapper>
            <GridList cols={2} cellHeight="auto">
                <MysticCodeMenu value={mysticCode} />
                {wrapGridListTile(skillButton(mysticCode), 1)}
            </GridList>
        </CardWrapper>
    );
}
