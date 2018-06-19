enum MysticCodeSkill {
    EMPTY,
    ORDER_CHANGE,
    SPIRITRON_TRANSFER,
    SEA_HOUSE_SHOWER,
}

export function toString(skill: MysticCodeSkill) {
    switch (skill) {
        case MysticCodeSkill.EMPTY: return '';
        case MysticCodeSkill.ORDER_CHANGE: return 'オーダーチェンジ';
        case MysticCodeSkill.SPIRITRON_TRANSFER: return '霊子譲渡';
        case MysticCodeSkill.SEA_HOUSE_SHOWER: return 'シーハウス・シャワー';
    }
}

export default MysticCodeSkill;
