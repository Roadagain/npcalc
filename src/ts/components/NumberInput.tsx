import { Input, InputAdornment, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';

const styles = {
    input: {
        width: '100%',
    },
};

export interface INumberInputProps {
    value: string | number;
    prefix?: string;
    suffix?: string;
}

function createNullableAdornment(position: 'start' | 'end', text?: string) {
    return text ? <InputAdornment position={position}>{text}</InputAdornment> : null;
}

function NumberInput({ classes, value, prefix, suffix }: INumberInputProps & WithStyles) {
    const type = typeof(value) === 'string' ? 'text' : 'number';
    const startAdornment = createNullableAdornment('start', prefix);
    const endAdornment = createNullableAdornment('end', suffix);
    return <Input {...{ value, type, startAdornment, endAdornment }} className={classes.input} />;
}

export default withStyles(styles)(NumberInput);
