const Target = {
    SELF: 0,
    SOMEONE: 1,
    ALL: 2,
    NOBLE_PHANTASM: 3,
    asString(target) {
        switch (target) {
            case Target.SELF: return '自己';
            case Target.SOMEONE: return '単体';
            case Target.ALL: return '全体';
            default: return '宝具';
        }
    }
};

export default Target;
