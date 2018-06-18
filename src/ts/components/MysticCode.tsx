import { Button, Card, CardContent, GridList, TextField, Theme, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import MysticCodeSkill, { toString } from '../data/MysticCodeSkill';
import { wrapGridListTile } from './Util';

const styles = (theme: Theme) => ({
    container: {
        margin: theme.spacing.unit,
    },
});

export interface IMysticCodeProps {
    name: string;
    skill: MysticCodeSkill;
}

function skillButton(skill: MysticCodeSkill) {
    if (skill === MysticCodeSkill.EMPTY) {
        return <div />;
    }
    return <Button fullWidth={true}>{toString(skill)}</Button>;
}

function MysticCode({ classes, name, skill }: IMysticCodeProps & WithStyles) {
    return (
        <Card className={classes.container}>
            <CardContent>
                <GridList cols={2} cellHeight="auto">
                    {wrapGridListTile(<TextField value={name} fullWidth={true} />, 1)}
                    {wrapGridListTile(skillButton(skill), 1)}
                </GridList>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(MysticCode);
