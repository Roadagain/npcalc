import { GridList, TextField } from '@material-ui/core';
import React from 'react';
import Skill, { ISkillProps } from './Skill';
import { wrapGridListTile } from './Util';

export interface IServantProps {
    name: string;
    skills: ISkillProps[];
}

export default function Servant({ name, skills }: IServantProps) {
    return (
        <div>
        <TextField value={name} />
        <GridList cols={3}>
            {skills.map(skill => wrapGridListTile(<Skill {...skill} />, 1, skill.name))}
        </GridList>
        </div>
    );
}
