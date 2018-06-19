import { GridListTile } from '@material-ui/core';
import React from 'react';

export function wrapGridListTile(component: JSX.Element, cols: number, key?: string) {
    return (
        <GridListTile cols={cols} key={key}>
            {component}
        </GridListTile>
    );
}
