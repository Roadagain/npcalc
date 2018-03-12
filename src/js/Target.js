const Target = {
    SELF: 0,
    SOMEONE: 1,
    ALL: 2,
    asString(target) {
        switch (target) {
            case Target.SELF: return '自己';
            case Target.SOMEONE: return '単体';
            default: return '全体';
        }
    }
};

export default Target;
