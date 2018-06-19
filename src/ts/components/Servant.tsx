import {  GridList, TextField } from '@material-ui/core';
import React from 'react';
import ChargeType from '../data/ChargeType';
import CardWrapper from './CardWrapper';
import NoblePhantasm from './NoblePhantasm';
import NPGuage from './NPGuage';
import Skill, { ISkillProps } from './Skill';
import { wrapGridListTile } from './Util';

export interface IServantProps {
    name: string;
    classSkill: ISkillProps;
    craftEssence: ISkillProps;
    skills: ISkillProps[];
}

export default function Servant({ name, classSkill, craftEssence, skills }: IServantProps) {
    return (
        <CardWrapper>
            <TextField value={name} fullWidth={true} />
            <NPGuage np={100} />
            <GridList cols={3} cellHeight="auto">
                {wrapGridListTile(<Skill {...classSkill} passive={true} />, 1)}
                {wrapGridListTile(<Skill {...craftEssence} passive={true} />, 1)}
                {wrapGridListTile(<NoblePhantasm name="宝具" value={0} type={ChargeType.IMMEDIATELY} />, 1)}
            </GridList>
            <GridList cols={3} cellHeight="auto">
                {skills.map(skill => wrapGridListTile(<Skill {...skill} />, 1, skill.name))}
            </GridList>
        </CardWrapper>
    );
}
