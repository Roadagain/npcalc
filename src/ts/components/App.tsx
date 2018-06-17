import { GridList, GridListTile } from '@material-ui/core';
import React from 'react';
import Party from './Party';
import { wrapGridListTile } from './Util';

function App() {
    const servants = [1, 2, 3, 4, 5, 6].map(num => ({
        classSkill: { name: 'クラススキル' },
        craftEssence: { name: '概念礼装' },
        name: `サーヴァント${num}`,
        skills: [{ name: 'スキル1' }, { name: 'スキル2' }, { name: 'スキル3' }],
    }));
    return (
        <div>
            <h1>NP計算機</h1>
            <GridList cols={14} cellHeight="auto">
                <GridListTile cols={1} />
                {wrapGridListTile(<Party servants={servants} />, 12)}
                <GridListTile cols={1} />
            </GridList>
        </div>
    );
}

export default App;
