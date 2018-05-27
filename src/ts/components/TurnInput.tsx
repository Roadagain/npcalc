import { Input, InputAdornment } from '@material-ui/core';
import React from 'react';

export interface ITurnInputProps {
    value: number;
}

export default function TurnInput({ value }: ITurnInputProps) {
    const endAdornment = <InputAdornment position="end">turns</InputAdornment>;
    return <Input {...{ value, endAdornment }} type="number" fullWidth={true} />;
}
