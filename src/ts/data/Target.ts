enum Target {
    SELF,
    SOMEONE,
    ALL,
}

export function toString(target: Target) {
    switch (target) {
        case Target.SELF: return '自己';
        case Target.SOMEONE: return '単体';
        case Target.ALL: return '全体';
    }
}

export const TARGETS = [
    Target.SELF,
    Target.SOMEONE,
    Target.ALL,
];

export default Target;
