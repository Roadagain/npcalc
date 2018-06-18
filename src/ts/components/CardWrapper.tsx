import { Card, CardContent, Theme, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';

const styles = (theme: Theme) => ({
    container: {
        margin: theme.spacing.unit,
    },
});

export interface ICardWrapperProps {
    children: JSX.Element[] | JSX.Element;
}

function CardWrapper({ classes, children }: ICardWrapperProps & WithStyles) {
    return (
        <Card className={classes.container}>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(CardWrapper);
