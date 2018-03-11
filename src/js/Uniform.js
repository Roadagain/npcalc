export default class Uniform {
    constructor(name, skill, skillName) {
        this.name = name;
        this.skill = skill;
        this.skillName = skillName;
    }
}

Uniform.EMPTY = new Uniform('なし', null, '');
