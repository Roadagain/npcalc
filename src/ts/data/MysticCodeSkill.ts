enum MysticCodeSkill {
    EMPTY,
    ORDER_CHANGE,
    SPIRITRON_TRANSFER,
    BRILLIANT_SUMMER,
}

export function toString(skill: MysticCodeSkill) {
    switch (skill) {
        case MysticCodeSkill.EMPTY: return '';
        case MysticCodeSkill.ORDER_CHANGE: return 'オーダーチェンジ';
        case MysticCodeSkill.SPIRITRON_TRANSFER: return '霊子譲渡';
        case MysticCodeSkill.BRILLIANT_SUMMER: return 'ブリリアント・サマー';
    }
}

export default MysticCodeSkill;
