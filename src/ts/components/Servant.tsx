import { GridList, TextField, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import Skill, { ISkillProps } from './Skill';
import { wrapGridListTile } from './Util';

const styles = (theme: Theme) => ({
    container: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

export interface IServantProps {
    name: string;
    skills: ISkillProps[];
}

function Servant({ classes, name, skills }: IServantProps & WithStyles) {
    return (
        <div className={classes.container}>
        <TextField value={name} />
        <GridList cols={3}>
            {skills.map(skill => wrapGridListTile(<Skill {...skill} />, 1, skill.name))}
        </GridList>
        </div>
    );
}

export default withStyles(styles)(Servant);
