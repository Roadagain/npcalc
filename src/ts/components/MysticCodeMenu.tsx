import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import MysticCode, { MYSTIC_CODES, toString } from '../data/MysticCode';

export interface IMysticCodeMenuProps {
    value?: MysticCode;
}

export default function MysticCodeMenu({ value }: IMysticCodeMenuProps) {
    return (
        <Select value={value}>
            {MYSTIC_CODES.map(mysticCode => <MenuItem value={mysticCode} key={mysticCode}>{toString(mysticCode)}</MenuItem>)}
        </Select>
    );
}
