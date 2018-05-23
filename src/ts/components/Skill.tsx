import React from 'react';

export interface ISkillProps {
    name: string;
}

export default function Skill({ name }: ISkillProps) {
    return <p>{name}</p>;
}
