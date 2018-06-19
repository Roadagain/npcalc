import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import ChargeType, { CHARGE_TYPES, toString } from '../data/ChargeType';

export interface IChargeTypeMenuProps {
    value?: ChargeType;
}

export default function ChargeTypeMenu({ value }: IChargeTypeMenuProps) {
    return (
        <Select value={value}>
            {CHARGE_TYPES.map(type => <MenuItem value={type} key={type}>{toString(type)}</MenuItem>)}
        </Select>
    );
}
