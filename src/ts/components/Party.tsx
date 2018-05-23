import React from 'react';

export interface IPartyProps {
    servants: string[];
}

export default function Party({ servants }: IPartyProps) {
    return (
        <div>
            {servants.map(name => <p key={name}>{name}</p>)};
        </div>
    );
}
