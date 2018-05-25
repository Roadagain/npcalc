import { GridList, GridListTile, LinearProgress, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import NumberInput from './NumberInput';

const styles = {
    container: {
        alignItems: 'center',
        display: 'flex',
    },
};

export interface INPGuageProps {
    np: number;
}

function NPGuage({ classes, np }: INPGuageProps & WithStyles) {
    return (
        <GridList cols={4} cellHeight="auto" className={classes.container}>
            <GridListTile cols={3}>
                <LinearProgress variant="buffer" value={np} valueBuffer={100} />
            </GridListTile>
            <GridListTile cols={1}>
                <NumberInput value={np} suffix="%" />
            </GridListTile>
        </GridList>
    );
}

export default withStyles(styles)(NPGuage);
