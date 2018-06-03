import { Input, InputAdornment } from '@material-ui/core';
import React from 'react';

export interface ISuffixedNumberInputProps {
    value: number;
    suffix: string;
}

export default function SuffixedNumberInput({ value, suffix }: ISuffixedNumberInputProps) {
    const endAdornment = <InputAdornment position="end">{suffix}</InputAdornment>;
    return <Input {...{ value, endAdornment }} type="number" fullWidth={true} />;
}
