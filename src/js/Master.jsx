import React from 'react';
import Target from './Target';
import Uniform from './Uniform';
import UniformOption from './UniformOption';

export default class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uniform: Uniform.EMPTY,
            implemented: [
                Uniform.EMPTY,
                new Uniform('カルデア戦闘服', this.props.orderChange, 'オーダーチェンジ'),
                new Uniform('魔術協会制服', this.props.onNPCharge.bind(this, null, Target.SOMEONE, 20), '霊子譲渡'),
                new Uniform('ブリリアント・サマー', this.props.onNPCharge.bind(this, null, Target.SOMEONE, 10), 'シーハウス・シャワー'),
            ]
        };
    }

    onUniformChange(uniformName) {
        this.state.implemented.forEach((uniform, index) => {
            if (uniform.name === uniformName) {
                this.setState({uniform});
            }
        })
    }

    render() {
        const onUniformChange = e => this.onUniformChange(e.target.value);

        return <div>
            礼装:
            <select onChange={onUniformChange}>
                {this.state.implemented.map((uniform, index) => <UniformOption name={uniform.name} key={"uniform" + index} />)}
            </select>
            {this.state.uniform.skill !== null ? <button onClick={this.state.uniform.skill}>{this.state.uniform.skillName}</button> : null}
        </div>
    }
}
