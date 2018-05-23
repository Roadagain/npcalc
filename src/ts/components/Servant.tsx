import React from 'react';

interface IServantProps {
    name: string;
}

export default function Servant({ name }: IServantProps) {
    return <p>{name}</p>;
}
