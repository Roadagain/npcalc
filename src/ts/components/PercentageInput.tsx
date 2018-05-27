import { Input, InputAdornment, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';

const styles = {};

export interface IWrappedInputProps {
    value: number;
}

function PercentageInput({ value }: IWrappedInputProps & WithStyles) {
    const endAdornment = <InputAdornment position="end">%</InputAdornment>;
    return <Input {...{ value, endAdornment }} type="number" fullWidth={true} />;
}

export default withStyles(styles)(PercentageInput);
