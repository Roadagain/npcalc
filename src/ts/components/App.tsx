import React from 'react';
import Party from './Party';

function App() {
    const servants = [1, 2, 3, 4, 5, 6].map(num => ({
        name: `サーヴァント${num}`,
        skills: [{ name: 'スキル1' }, { name: 'スキル2' }, { name: 'スキル3' }],
    }));
    return (
        <div>
            <h1>NP計算機</h1>
            <Party servants={servants} />
        </div>
    );
}

export default App;
