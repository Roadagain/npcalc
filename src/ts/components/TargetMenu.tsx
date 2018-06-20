import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import Target, { TARGETS, toString } from '../data/Target';

export interface ITargetMenuProps {
    value?: Target;
}

export default function TargetMenu({ value }: ITargetMenuProps) {
    return (
        <Select value={value}>
            {TARGETS.map(target => <MenuItem value={target} key={target}>{toString(target)}</MenuItem>)}
        </Select>
    );
}
