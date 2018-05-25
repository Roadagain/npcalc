import { TextField, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';

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
    return <TextField value={name} className={classes.container} />;
}

export default withStyles(styles)(Skill);
