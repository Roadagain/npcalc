import React from 'react';
import Target from './Target';
import Uniform from './Uniform';
import UniformRadio from './UniformRadio';

export default class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uniform: Uniform.EMPTY
        };
    }

    onUniformChange(uniform) {
        this.setState({uniform});
    }

    render() {
        const implemented = [
            Uniform.EMPTY,
            new Uniform('カルデア戦闘服', this.props.orderChange, 'オーダーチェンジ'),
            new Uniform('魔術協会制服', this.props.onNPCharge.bind(this, null, Target.SOMEONE, 20), '霊子譲渡'),
            new Uniform('ブリリアント・サマー', this.props.onNPCharge.bind(this, null, Target.SOMEONE, 10), 'シーハウス・シャワー'),
        ];
        const onUniformChange = this.onUniformChange.bind(this);

        return <div>
            <form>
                {implemented.map((uniform, index) => {
                    const checked = uniform.name === this.state.uniform.name;
                    return <UniformRadio {...{uniform, onUniformChange, checked}} key={"uniform" + index} />;
                })}
            </form>
            {this.state.uniform.skill !== null ? <button onClick={this.state.uniform.skill}>{this.state.uniform.skillName}</button> : null}
        </div>
    }
}
