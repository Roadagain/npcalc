enum MysticCode {
    EMPTY,
    CHALDEA_COMBAT_UNIFORM,
    MAGES_ASSOCIATION_UNIFORM,
    BRILLIANT_SUMMER,
}

export function toString(mysticCode: MysticCode) {
    switch (mysticCode) {
        case MysticCode.EMPTY: return 'なし';
        case MysticCode.CHALDEA_COMBAT_UNIFORM: return 'カルデア戦闘服';
        case MysticCode.MAGES_ASSOCIATION_UNIFORM: return '魔術協会制服';
        case MysticCode.BRILLIANT_SUMMER: return 'ブリリアント・サマー';
    }
}

export const MYSTIC_CODES = [
    MysticCode.EMPTY,
    MysticCode.CHALDEA_COMBAT_UNIFORM,
    MysticCode.MAGES_ASSOCIATION_UNIFORM,
    MysticCode.BRILLIANT_SUMMER,
];

export default MysticCode;
