import { withStyles } from '@material-ui/core';
import React from 'react';
import PercentageInput from './PercentageInput';

const styles = {};

export interface INPChargeProps {
    value: number;
}

function NPCharge({ value }: INPChargeProps) {
    return <PercentageInput value={value} />;
}

export default withStyles(styles)(NPCharge);
