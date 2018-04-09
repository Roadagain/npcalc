import React from 'react';
import Servant from './Servant';
import Target from './Target';
import Master from './Master';

export default class Party extends React.Component {
    render() {
        const onTargetChange = e => this.props.onTargetChange(e.target.name, e.target.value);
        const starting = this.props.servants.slice(0, 3);
        const sub = this.props.servants.slice(3);

        return <div>
            {/*前衛と後衛でコンポーネントがほしい*/}
            <div className="starting">
                {starting.map((servant, index) => <div className="flexbox servant" key={index}>
                    <input type="radio" name="starting" value={index} onClick={onTargetChange} className="flex-item" />
                    <Servant {...servant} {...this.props} index={index} />
                </div>)}
            </div>
            <div className="sub">
                {sub.map((servant, index) => <div className="flexbox servant" key={index + 3}>
                    <input type="radio" name="sub" value={index + 3} onClick={onTargetChange} className="flex-item" />
                    <Servant {...servant} {...this.props} index={index + 3} />
                </div>)}
            </div>
        </div>;
    }
}
