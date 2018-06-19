import { GridList, GridListTile } from '@material-ui/core';
import React from 'react';
import MysticCode from '../data/MysticCode';
import MysticCodeCard from './MysticCodeCard';
import Party from './Party';
import Title from './Title';
import TurnCounter from './TurnCounter';
import { wrapGridListTile } from './Util';

function App() {
    const servants = [1, 2, 3, 4, 5, 6].map(num => ({
        classSkill: { name: 'クラススキル' },
        craftEssence: { name: '概念礼装' },
        name: `サーヴァント${num}`,
        skills: [{ name: 'スキル1' }, { name: 'スキル2' }, { name: 'スキル3' }],
    }));
    const mysticCode = MysticCode.EMPTY;
    return (
        <div>
            <GridList cols={14} cellHeight="auto">
                <GridListTile cols={1} />
                {wrapGridListTile(<Title />, 4)}
                {wrapGridListTile(<TurnCounter turns={0} />, 4)}
                {wrapGridListTile(<MysticCodeCard mysticCode={mysticCode} />, 4)}
                <GridListTile cols={1} />
                <GridListTile cols={1} />
                {wrapGridListTile(<Party servants={servants} />, 12)}
                <GridListTile cols={1} />
            </GridList>
        </div>
    );
}

export default App;
