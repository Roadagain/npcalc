import { Button, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import NPCharge, { INPChargeProps } from './NPCharge';

const styles = (theme: Theme) => ({
    container: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

export type INoblePhantasmProps = INPChargeProps;

function NoblePhantasm({ value, type, classes }: INoblePhantasmProps & WithStyles) {
    return (
        <div className={classes.container}>
            <NPCharge value={value} type={type} />
            <Button fullWidth={true}>宝具開放</Button>
        </div>
    );
}

export default withStyles(styles)(NoblePhantasm);
