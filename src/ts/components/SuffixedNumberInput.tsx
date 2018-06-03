import { Input, InputAdornment } from '@material-ui/core';
import React from 'react';

export interface ISuffixedNumberInput {
    value: number;
    suffix: string;
}

export default function SuffixedNumberInput({ value, suffix }: ISuffixedNumberInput) {
    const endAdornment = <InputAdornment position="end">{suffix}</InputAdornment>;
    return <Input {...{ value, endAdornment }} type="number" fullWidth={true} />;
}
