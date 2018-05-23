import React from 'react';
import Party from './Party';

function App() {
    const servants = ['a', 'b', 'c', 'd', 'e', 'f'];
    return (
        <div>
            <h1>NP計算機</h1>
            <Party servants={servants} />
        </div>
    );
}

export default App;
