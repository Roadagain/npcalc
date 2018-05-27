import { Button, TextField, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import NPCharge from './NPCharge';

const styles = (theme: Theme) => ({
    container: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

export interface ISkillProps {
    name: string;
}

function Skill({ classes, name }: ISkillProps & WithStyles) {
    return (
        <div className={classes.container} >
            <TextField value={name} fullWidth={true} />
            <NPCharge value={10} />
            <Button>付与</Button>
        </div>
    );
}

export default withStyles(styles)(Skill);
