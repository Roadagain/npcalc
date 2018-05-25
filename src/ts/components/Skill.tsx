import { TextField } from '@material-ui/core';
import React from 'react';

export interface ISkillProps {
    name: string;
}

export default function Skill({ name }: ISkillProps) {
    return <TextField value={name} />;
}
