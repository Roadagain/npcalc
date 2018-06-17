import { Card, CardContent, GridList, TextField, Theme, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import ChargeType from '../data/ChargeType';
import NoblePhantasm from './NoblePhantasm';
import NPGuage from './NPGuage';
import Skill, { ISkillProps } from './Skill';
import { wrapGridListTile } from './Util';

const styles = (theme: Theme) => ({
    container: {
        margin: theme.spacing.unit,
    },
});

export interface IServantProps {
    name: string;
    skills: ISkillProps[];
}

function Servant({ classes, name, skills }: IServantProps & WithStyles) {
    return (
        <Card className={classes.container}>
            <CardContent>
                <TextField value={name} fullWidth={true} />
                <NPGuage np={100} />
                <GridList cols={3} cellHeight="auto">
                    {wrapGridListTile(<NoblePhantasm name="宝具" value={0} type={ChargeType.IMMEDIATELY} />, 1)}
                </GridList>
                <GridList cols={3}>
                    {skills.map(skill => wrapGridListTile(<Skill {...skill} />, 1, skill.name))}
                </GridList>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(Servant);
