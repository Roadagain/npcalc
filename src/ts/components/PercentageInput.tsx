import { Input, InputAdornment, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';

const styles = {
    input: {
        width: '100%',
    },
};

export interface IWrappedInputProps {
    value: number;
}

function PercentageInput({ classes, value }: IWrappedInputProps & WithStyles) {
    const endAdornment = <InputAdornment position="end">%</InputAdornment>;
    return <Input {...{ value, endAdornment }} type="number" className={classes.input} />;
}

export default withStyles(styles)(PercentageInput);
