import { Button, TextField, Theme, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import NPCharge, { INPChargeProps } from './NPCharge';

const styles = (theme: Theme) => ({
    container: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

export interface INoblePhantasmProps extends INPChargeProps {
    name: string;
}

function NoblePhantasm({ name, value, type, classes }: INoblePhantasmProps & WithStyles) {
    return (
        <div className={classes.container}>
            <TextField value={name} fullWidth={true} />
            <NPCharge value={value} type={type} />
            <Button fullWidth={true}>宝具開放</Button>
        </div>
    );
}

export default withStyles(styles)(NoblePhantasm);
