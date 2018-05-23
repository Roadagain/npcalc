import React from 'react';

export interface IServantProps {
    name: string;
}

export default function Servant({ name }: IServantProps) {
    return <p>{name}</p>;
}
